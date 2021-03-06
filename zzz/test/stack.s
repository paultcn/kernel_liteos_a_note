//编译器: armv7-a clang (trunk)
square(int, int):
        sub     sp, sp, #8     @sp减去8,意思为给square分配栈空间,只用2个栈空间完成计算
        str     r0, [sp, #4]   @第一个参数入栈
        str     r1, [sp]       @第二个参数入栈
        ldr     r1, [sp, #4]   @取出第一个参数给r1
        ldr     r2, [sp]       @取出第二个参数给r2
        mul     r0, r1, r2     @执行a*b给R0,返回值的工作一直是交给R0的
        add     sp, sp, #8     @函数执行完了,要释放申请的栈空间
        bx      lr             @子程序返回,等同于mov pc,lr,即跳到调用处
fp(int):
        push    {r11, lr}      @r11(fp)/lr入栈,保存调用者main的位置
        mov     r11, sp        @r11用于保存sp值,函数栈开始位置 
        sub     sp, sp, #8     @sp减去8,意思为给fp分配栈空间,只用2个栈空间完成计算
        str     r0, [sp, #4]   @先保存参数值,放在SP+4,此时r0中存放的是参数
        mov     r0, #1         @r0=1
        str     r0, [sp]       @再把1也保存在SP的位置
        ldr     r0, [sp]       @把SP的值给R0
        ldr     r1, [sp, #4]   @把SP+4的值给R1
        add     r1, r0, r1     @执行r1=a+b
        mov     r0, r1         @r0=r1,用r0,r1传参
        bl      square(int, int)@先mov lr, pc 再mov pc square(int, int)   
        mov     sp, r11        @函数执行完了,要释放申请的栈空间 
        pop     {r11, lr}      @弹出r11和lr,lr是专用标签,弹出就自动复制给lr寄存器
        bx      lr             @子程序返回,等同于mov pc,lr,即跳到调用处
main:
        push    {r11, lr}      @r11(fp)/lr入栈,保存调用者的位置
        mov     r11, sp        @r11用于保存sp值,函数栈开始位置
        sub     sp, sp, #16    @sp减去8,意思为给main分配栈空间,只用2个栈空间完成计算
        mov     r0, #0         @初始化r0
        str     r0, [r11, #-4] @作用是保存SUM的初始值 
        str     r0, [sp, #8]   @sum将始终占用SP+8的位置
        str     r0, [sp, #4]   @a将始终占用SP+4的位置
        b       .LBB1_1        @跳到循环开始位置
.LBB1_1:                       @循环开始位置入口
        ldr     r0, [sp, #4]   @取出a的值给r0
        cmp     r0, #99        @跟99比较
        bgt     .LBB1_4        @大于99,跳出循环 mov pc .LBB1_4
        b       .LBB1_2        @继续循环,直接 mov pc .LBB1_2
.LBB1_2:                       @符合循环条件入口
        ldr     r0, [sp, #8]   @取出sum的值给r0,sp+8用于写SUM的值
        str     r0, [sp]       @先保存SUM的值,SP的位置用于读SUM值
        ldr     r0, [sp, #4]   @r0用于传参,取出A的值给r0作为fp的参数
        bl      fp(int)        @先mov lr, pc再mov pc fp(int)
        mov     r1, r0         @fp的返回值为r0,保存到r1
        ldr     r0, [sp]       @取出SUM的值
        add     r0, r0, r1     @计算新sum的值,由R0保存
        str     r0, [sp, #8]   @将新sum保存到SP+8的位置
        b       .LBB1_3        @无条件跳转,直接 mov pc .LBB1_3
.LBB1_3:                       @完成a++操作入口
        ldr     r0, [sp, #4]   @SP+4中记录是a的值,赋给r0
        add     r0, r0, #1     @r0增加1
        str     r0, [sp, #4]   @把新的a值放回SP+4里去
        b       .LBB1_1        @跳转到比较 a < 100 处
.LBB1_4:                       @循环结束入口
        ldr     r0, [sp, #8]   @最后SUM的结果给R0,返回值的工作一直是交给R0的
        mov     sp, r11        @函数执行完了,要释放申请的栈空间
        pop     {r11, lr}      @弹出r11和lr,lr是专用标签,弹出就自动复制给lr寄存器
        bx      lr             @子程序返回,跳转到lr处等同于 MOV PC, LR