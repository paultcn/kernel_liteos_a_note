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

#include "pthread.h"
#include "pprivate.h"

#ifdef __cplusplus
#if __cplusplus
extern "C" {
#endif /* __cplusplus */
#endif /* __cplusplus */
//文件的返回值见于 ..\third_party\musl\kernel\arch\generic\bits\errno.h
//posix之thread 属性初始化
int pthread_attr_init(pthread_attr_t *attr)
{
    if (attr == NULL) {
        return EINVAL;
    }

    attr->detachstate                 = PTHREAD_CREATE_JOINABLE;//默认线程采用联结方式
    attr->schedpolicy                 = SCHED_RR;	//默认调度方式为抢占式 
    attr->schedparam.sched_priority   = LOSCFG_BASE_CORE_TSK_DEFAULT_PRIO;//默认线程优先级
    attr->inheritsched                = PTHREAD_INHERIT_SCHED;//表示新线程将继承创建线程的调度策略和参数 对应的就是 PTHREAD_EXPLICIT_SCHED
    attr->scope                       = PTHREAD_SCOPE_PROCESS;//线程作用域,默认只在进程
    attr->stackaddr_set               = 0;	//0表示没有设置栈地址
    attr->stackaddr                   = NULL;	//栈地址为NULL,未设置
    attr->stacksize_set               = 1;	//1表示设置了栈大小
    attr->stacksize                   = LOSCFG_BASE_CORE_TSK_DEFAULT_STACK_SIZE;//栈的大小 默认16K

#if (LOSCFG_KERNEL_SMP == YES)
    attr->cpuset.__bits[0] = 0;
#endif

    return ENOERR;
}
//posix之thread 销毁属性
int pthread_attr_destroy(pthread_attr_t *attr)
{
    if (attr == NULL) { //直接NULL,就是这么的粗暴!
        return EINVAL;
    }

    /* Nothing to do here... */
    return ENOERR;
}
//posix之thread 设置线程间的关系模式
int pthread_attr_setdetachstate(pthread_attr_t *attr, int detachState)
{
    if ((attr != NULL) && ((detachState == PTHREAD_CREATE_JOINABLE) || (detachState == PTHREAD_CREATE_DETACHED))) {
        attr->detachstate = (UINT32)detachState;
        return ENOERR;
    }

    return EINVAL;
}
//posix之thread 获取线程间的关系模式
int pthread_attr_getdetachstate(const pthread_attr_t *attr, int *detachState)
{
    if ((attr == NULL) || (detachState == NULL)) {
        return EINVAL;
    }

    *detachState = (int)attr->detachstate;

    return ENOERR;
}
//posix之thread 设置线程的作用域
int pthread_attr_setscope(pthread_attr_t *attr, int scope)
{
    if (attr == NULL) {
        return EINVAL;
    }

    if (scope == PTHREAD_SCOPE_PROCESS) {//仅与同进程中的线程竞争CPU
        attr->scope = (unsigned int)scope;
        return ENOERR;
    }

    if (scope == PTHREAD_SCOPE_SYSTEM) {//表示与系统中所有线程一起竞争CPU时间，
        return ENOTSUP;
    }

    return EINVAL;
}
//posix之thread 获取线程的作用域
int pthread_attr_getscope(const pthread_attr_t *attr, int *scope)
{
    if ((attr == NULL) || (scope == NULL)) {
        return EINVAL;
    }

    *scope = (int)attr->scope;

    return ENOERR;
}
//PTHREAD_EXPLICIT_SCHED 	表示 新线程使用显式指定调度策略和调度参数
//PTHREAD_INHERIT_SCHED 	表示继承调用者线程的值
//posix之thread 设置线程的调度关系
int pthread_attr_setinheritsched(pthread_attr_t *attr, int inherit)
{
    if ((attr != NULL) && ((inherit == PTHREAD_INHERIT_SCHED) || (inherit == PTHREAD_EXPLICIT_SCHED))) {
        attr->inheritsched = (UINT32)inherit;
        return ENOERR;
    }

    return EINVAL;
}
//posix之thread 获取线程的调度关系
int pthread_attr_getinheritsched(const pthread_attr_t *attr, int *inherit)
{
    if ((attr == NULL) || (inherit == NULL)) {
        return EINVAL;
    }

    *inherit = (int)attr->inheritsched;

    return ENOERR;
}
// posix 之线程 设置调度方式
int pthread_attr_setschedpolicy(pthread_attr_t *attr, int policy)
{
    if ((attr != NULL) && (policy == SCHED_RR)) {
        attr->schedpolicy = SCHED_RR;
        return ENOERR;
    }

    return EINVAL;
}
// posix 之线程 获取调度方式
int pthread_attr_getschedpolicy(const pthread_attr_t *attr, int *policy)
{
    if ((attr == NULL) || (policy == NULL)) {
        return EINVAL;
    }

    *policy = (int)attr->schedpolicy;

    return ENOERR;
}
// posix 之线程 设置调度参数
int pthread_attr_setschedparam(pthread_attr_t *attr, const struct sched_param *param)
{
    if ((attr == NULL) || (param == NULL)) {
        return EINVAL;
    } else if ((param->sched_priority < 0) || (param->sched_priority > OS_TASK_PRIORITY_LOWEST)) {
        return ENOTSUP;
    }

    attr->schedparam = *param;

    return ENOERR;
}
// posix 之线程 获取调度参数
int pthread_attr_getschedparam(const pthread_attr_t *attr, struct sched_param *param)
{
    if ((attr == NULL) || (param == NULL)) {
        return EINVAL;
    }

    *param = attr->schedparam;

    return ENOERR;
}
// posix 之线程 设置任务栈的开始地址
/*
 * Set starting address of stack. Whether this is at the start or end of
 * the memory block allocated for the stack depends on whether the stack
 * grows up or down.
 */
int pthread_attr_setstackaddr(pthread_attr_t *attr, void *stackAddr)
{
    if (attr == NULL) {
        return EINVAL;
    }

    attr->stackaddr_set = 1;	//1表示已设置栈地址
    attr->stackaddr     = stackAddr;	//栈地址由内核提供

    return ENOERR;
}
// posix 之线程 获取任务栈的开始地址
int pthread_attr_getstackaddr(const pthread_attr_t *attr, void **stackAddr)
{
    if (((attr != NULL) && (stackAddr != NULL)) && attr->stackaddr_set) {
        *stackAddr = attr->stackaddr;
        return ENOERR;
    }

    return EINVAL; /* Stack address not set, return EINVAL. */
}
// posix 之线程 设置任务栈的大小
int pthread_attr_setstacksize(pthread_attr_t *attr, size_t stackSize)
{
    /* Reject inadequate stack sizes */
    if ((attr == NULL) || (stackSize < PTHREAD_STACK_MIN)) {
        return EINVAL;
    }

    attr->stacksize_set = 1;	//1表示已设置栈大小
    attr->stacksize     = stackSize;	//栈大小由内核提供

    return ENOERR;
}
// posix 之线程 获取任务栈的大小
int pthread_attr_getstacksize(const pthread_attr_t *attr, size_t *stackSize)
{
    /* Reject attempts to get a stack size when one has not been set. */
    if ((attr == NULL) || (stackSize == NULL) || (!attr->stacksize_set)) {
        return EINVAL;
    }

    *stackSize = attr->stacksize;

    return ENOERR;
}
// posix 之线程 设置CPU亲和力
/*
 * Set the cpu affinity mask
 */ //亲和力主要用于多CPU情况,意思就是调度任务被同一个CPU命中的概率,概率越高,亲和力就越好
int pthread_attr_setaffinity_np(pthread_attr_t* attr, size_t cpusetsize, const cpu_set_t* cpuset)
{
#if (LOSCFG_KERNEL_SMP == YES)
    if (attr == NULL) {
        return EINVAL;
    }

    if ((cpuset == NULL) || (cpusetsize == 0)) {
        attr->cpuset.__bits[0] = 0;
        return ENOERR;
    }

    if ((cpusetsize != sizeof(cpu_set_t)) || (cpuset->__bits[0] > LOSCFG_KERNEL_CPU_MASK)) {
        return EINVAL;
    }

    attr->cpuset = *cpuset;
#endif

    return ENOERR;
}
// posix 之线程 获取CPU亲和力
/*
 * Get the cpu affinity mask
 */
int pthread_attr_getaffinity_np(const pthread_attr_t* attr, size_t cpusetsize, cpu_set_t* cpuset)
{
#if (LOSCFG_KERNEL_SMP == YES)
    if ((attr == NULL) || (cpuset == NULL) || (cpusetsize != sizeof(cpu_set_t))) {
        return EINVAL;
    }

    *cpuset = attr->cpuset;
#endif

    return ENOERR;
}

#ifdef __cplusplus
#if __cplusplus
}
#endif /* __cplusplus */
#endif /* __cplusplus */
