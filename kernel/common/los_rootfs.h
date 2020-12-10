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

#ifndef _LOS_ROOTFS_H
#define _LOS_ROOTFS_H

#define BYTES_PER_MBYTE         0x100000	//1M = 1024 * 1024
#define BYTES_PER_KBYTE         0x400		//1K = 1024

#define COMMAND_LINE_ADDR       512 * BYTES_PER_KBYTE
#define COMMAND_LINE_SIZE       1024

#ifdef LOSCFG_PLATFORM_HI3518EV300 
#define ROOTFS_ROOT_TYPE        "flash"	//根文件系统存放在哪种设备上，这里是flash
#define ROOTFS_FS_TYPE          "jffs2" //3518 平台使用根文件系统的类型 
#endif

#ifdef LOSCFG_PLATFORM_HI3516DV300
#define ROOTFS_ROOT_TYPE        "emmc"	//eMMC=NAND闪存+闪存控制芯片+标准接口封装 https://blog.csdn.net/xjw1874/article/details/81505967
#define ROOTFS_FS_TYPE          "vfat" 	//3516 平台使用根文件系统的类型 
#endif

#ifdef LOSCFG_TEE_ENABLE
#define ROOTFS_FLASH_ADDR       0x600000
#define ROOTFS_FLASH_SIZE       0x800000
#else
#define ROOTFS_FLASH_ADDR       0x400000
#define ROOTFS_FLASH_SIZE       0xa00000
#endif

#define FLASH_TYPE              "spinor" //flash类型
#define FLASH_DEV_NAME          "/dev/spinorblk0" //根文件系统路径
//扇区是对硬盘而言，而块是对文件系统而言
#define EMMC_SEC_SIZE           512	//扇区大小,按512个字节,按扇区对齐

#define DEC_NUMBER_STRING       "0123456789"
#define HEX_NUMBER_STRING       "0123456789abcdefABCDEF"

INT32 OsMountRootfs(VOID);

#endif /* _LOS_ROOTFS_H */
