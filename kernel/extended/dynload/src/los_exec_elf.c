/*
 * Copyright (c) 2013-2019, Huawei Technologies Co., Ltd. All rights reserved.
 * Copyright (c) 2020, Huawei Device Co., Ltd. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of
 *    conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list
 *    of conditions and the following disclaimer in the documentation and/or other materials
 *    provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used
 *    to endorse or promote products derived from this software without specific prior written
 *    permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#include "los_exec_elf.h"
#ifdef LOSCFG_SHELL
#include "show.h"
#endif
#include "los_vm_phys.h"
#include "los_vm_map.h"
#include "los_vm_dump.h"
//进程开始执行,参数为加载完ELF后的信息
STATIC INT32 OsExecve(const ELFLoadInfo *loadInfo)
{
    if ((loadInfo == NULL) || (loadInfo->elfEntry == 0)) {//参数检查
        return LOS_NOK;
    }

    return OsExecStart((TSK_ENTRY_FUNC)(loadInfo->elfEntry), (UINTPTR)loadInfo->stackTop,
                       loadInfo->stackBase, loadInfo->stackSize);//进程开始执行,设置上栈顶,栈底,栈大小
}
//获取真正的路径
#ifdef LOSCFG_SHELL
STATIC INT32 OsGetRealPath(const CHAR *fileName, CHAR *buf, UINT32 maxLen)
{
    CHAR *workingDirectory = NULL;
    UINT32 len, workPathLen, newLen;

    if (access(fileName, F_OK) < 0) {
        workingDirectory = OsShellGetWorkingDirtectory();//获取工作目录
        if (workingDirectory == NULL) {
            goto ERR_FILE;
        }
        len = strlen(fileName);
        workPathLen = strlen(workingDirectory);
        newLen = len + 1 + workPathLen + 1;
        if (newLen >= maxLen) {
            return -ENOENT;
        }
        if (strncpy_s(buf, maxLen, workingDirectory, workPathLen) != EOK) {
            PRINT_ERR("strncpy_s failed, errline: %d!\n", __LINE__);
            return -ENOENT;
        }
        buf[workPathLen] = '/';
        if (strncpy_s(buf + workPathLen + 1, maxLen - workPathLen - 1, fileName, len) != EOK) {
            PRINT_ERR("strncpy_s failed, errline: %d!\n", __LINE__);
            return -ENOENT;
        }
        buf[newLen] = '\0';
        if (access(buf, F_OK) < 0) {
            goto ERR_FILE;
        }
    }

    return LOS_OK;

ERR_FILE:
    PRINT_ERR("No such file or directory: %s\n", fileName);
    return -ENOENT;
}
#endif
//拷贝用户参数
STATIC INT32 OsCopyUserParam(ELFLoadInfo *loadInfo, const CHAR *fileName, CHAR *kfileName, UINT32 maxSize)
{
    UINT32 strLen;
    errno_t err;

    if (LOS_IsUserAddress((VADDR_T)(UINTPTR)fileName)) {//参数文件名存放在用户空间
        err = LOS_StrncpyFromUser(kfileName, fileName, PATH_MAX + 1);
        if (err == -EFAULT) {
            return err;
        } else if (err > PATH_MAX) {
            PRINT_ERR("%s[%d], filename len exceeds maxlen: %d\n", __FUNCTION__, __LINE__, PATH_MAX);
            return -ENAMETOOLONG;
        }
    } else if (LOS_IsKernelAddress((VADDR_T)(UINTPTR)fileName)) {//参数文件存在内核空间
        strLen = strlen(fileName);
        err = memcpy_s(kfileName, PATH_MAX, fileName, strLen);//从filename -> kfilename 
        if (err != EOK) {
            PRINT_ERR("%s[%d], Copy failed! err: %d\n", __FUNCTION__, __LINE__, err);
            return -EFAULT;
        }
    } else {
        return -EINVAL;
    }

    loadInfo->fileName = kfileName;
    return LOS_OK;
}
//运行一个执行文件 .elf
INT32 LOS_DoExecveFile(const CHAR *fileName, CHAR * const *argv, CHAR * const *envp)
{
    ELFLoadInfo loadInfo = { 0 };//ELF加载信息结构体
    CHAR kfileName[PATH_MAX + 1] = { 0 };
    INT32 ret;
#ifdef LOSCFG_SHELL
    CHAR buf[PATH_MAX + 1] = { 0 };
#endif
    VADDR_T *virtTtb = NULL;
    LosVmPage *vmPage = NULL;

    if ((fileName == NULL) || ((argv != NULL) && !LOS_IsUserAddress((VADDR_T)(UINTPTR)argv)) ||
        ((envp != NULL) && !LOS_IsUserAddress((VADDR_T)(UINTPTR)envp))) {//参数必须在用户空间
        return -EINVAL;
    }
    ret = OsCopyUserParam(&loadInfo, fileName, kfileName, PATH_MAX);//将文件名拷贝到内核空间,PATH_MAX = 256
    if (ret != LOS_OK) {
        return ret;
    }

#ifdef LOSCFG_SHELL
    if (OsGetRealPath(kfileName, buf, (PATH_MAX + 1)) != LOS_OK) {
        return -ENOENT;
    }
    if (buf[0] != '\0') {
        loadInfo.fileName = buf;
    }
#endif

    loadInfo.newSpace = LOS_MemAlloc(m_aucSysMem0, sizeof(LosVmSpace));//分配一个新的虚拟空间
    if (loadInfo.newSpace == NULL) {
        PRINT_ERR("%s %d, failed to allocate new vm space\n", __FUNCTION__, __LINE__);
        return -ENOMEM;
    }
    virtTtb = LOS_PhysPagesAllocContiguous(1);//分配一个物理页用于存放L1页表,虚拟地址<--->物理地址映射使用
    if (virtTtb == NULL) {
        PRINT_ERR("%s %d, failed to allocate ttb page\n", __FUNCTION__, __LINE__);
        LOS_MemFree(m_aucSysMem0, loadInfo.newSpace);//
        return -ENOMEM;
    }

    (VOID)memset_s(virtTtb, PAGE_SIZE, 0, PAGE_SIZE);
    ret = OsUserVmSpaceInit(loadInfo.newSpace, virtTtb);//用户虚拟空间初始化
    vmPage = OsVmVaddrToPage(virtTtb);
    if ((ret == FALSE) || (vmPage == NULL)) {
        PRINT_ERR("%s %d, create space failed, ret: %d, vmPage: %#x\n", __FUNCTION__, __LINE__, ret, vmPage);
        LOS_MemFree(m_aucSysMem0, loadInfo.newSpace);
        LOS_PhysPagesFreeContiguous(virtTtb, 1);
        return -ENOMEM;
    }
    LOS_ListAdd(&loadInfo.newSpace->archMmu.ptList, &(vmPage->node));//用vmPage->node挂到  ptlist, vmPage 就是 L1表

    loadInfo.argv = argv;//
    loadInfo.envp = envp;

    ret = OsLoadELFFile(&loadInfo);//虚拟空间已经准备好了，该开始加载ELF文件到虚拟空间了。
    if (ret != LOS_OK) {
        return ret;
    }
	//对当前进程回收再利用,用当前进程去跑elf
    ret = OsExecRecycleAndInit(OsCurrProcessGet(), loadInfo.fileName, loadInfo.oldSpace, loadInfo.oldFiles);
    if (ret != LOS_OK) {
        (VOID)LOS_VmSpaceFree(loadInfo.oldSpace);
        goto OUT;
    }

    ret = OsExecve(&loadInfo);//elf开始运行
    if (ret != LOS_OK) {
        goto OUT;
    }

    return loadInfo.stackTop;

OUT:
    (VOID)LOS_Exit(OS_PRO_EXIT_OK);
    return ret;
}