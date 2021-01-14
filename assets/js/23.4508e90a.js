(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{377:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸿蒙内核源码注释中文版 【 Gitee仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://codechina.csdn.net/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v(" CSDN仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://github.com/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Github仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://weharmony.coding.net/public/harmony/kernel_liteos_a_note/git/files",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Coding仓 】"),a("OutboundLink")],1),t._v("精读内核源码,中文详细注解.深挖地基工程,构建底层网图.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108727970",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸿蒙源码分析系列篇 【 CSDN "),a("OutboundLink")],1),a("a",{attrs:{href:"https://my.oschina.net/u/3751245/blog/4626852",target:"_blank",rel:"noopener noreferrer"}},[t._v("| OSCHINA "),a("OutboundLink")],1),a("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/wikis/pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("| WIKI 】"),a("OutboundLink")],1),t._v("问答式导读, 生活式比喻, 图形化展示, 层层剥开内核神秘外衣.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("精读内核源码就绕不过汇编语言,鸿蒙内核有6个汇编文件,读不懂它们就真的很难理解以下问题.")]),t._v(" "),a("h3",{attrs:{id:"_1-系统调用是如何实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统调用是如何实现的"}},[t._v("#")]),t._v(" 1.系统调用是如何实现的?")]),t._v(" "),a("h3",{attrs:{id:"_2-cpu是如何切换任务和进程上下文的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cpu是如何切换任务和进程上下文的"}},[t._v("#")]),t._v(" 2.CPU是如何切换任务和进程上下文的?")]),t._v(" "),a("h3",{attrs:{id:"_3-硬件中断是如何处理的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-硬件中断是如何处理的"}},[t._v("#")]),t._v(" 3.硬件中断是如何处理的?")]),t._v(" "),a("h3",{attrs:{id:"_4-main函数到底是怎么来的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-main函数到底是怎么来的"}},[t._v("#")]),t._v(" 4.main函数到底是怎么来的?")]),t._v(" "),a("h3",{attrs:{id:"_5-开机最开始到底发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开机最开始到底发生了什么"}},[t._v("#")]),t._v(" 5.开机最开始到底发生了什么?")]),t._v(" "),a("h3",{attrs:{id:"_6-关机最后的最后到底发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-关机最后的最后到底发生了什么"}},[t._v("#")]),t._v(" 6.关机最后的最后到底发生了什么?")]),t._v(" "),a("p",[t._v("以下是一个很简单的C文件编译成汇编代码后的注解. 读懂这些注解会发现汇编很可爱,甚至还会上瘾,并没有想象中的那么恐怖,读懂它会颠覆你对汇编和栈的认知. 先读懂这个简单的汇编文件,后续将详细分析鸿蒙内核各个汇编文件的作用.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<math.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译器: armv7-a clang (trunk)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        sub     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("     @sp减去"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("意思为给square分配栈空间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("个栈空间完成计算\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @第一个参数入栈\n        str     r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @第二个参数入栈\n        ldr     r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @取出第一个参数给r1\n        ldr     r2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @取出第二个参数给r2\n        mul     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r2     @执行a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b给R0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("返回值的工作一直是交给R0的\n        add     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("     @函数执行完了"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("要释放申请的栈空间\n        bx      lr             @子程序返回"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("等同于mov pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("即跳到调用处\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        push    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("r11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lr入栈"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("保存调用者main的位置\n        mov     r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp        @r11用于保存sp值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("函数栈开始位置 \n        sub     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("     @sp减去"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("意思为给fp分配栈空间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("个栈空间完成计算\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @先保存参数值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("放在SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("此时r0中存放的是参数\n        mov     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         @r0"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @再把"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("也保存在SP的位置\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @把SP的值给R0\n        ldr     r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @把SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("的值给R1\n        add     r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1     @执行r1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b\n        mov     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1         @r0"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("用r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r1传参\n        bl      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("@先mov lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pc 再mov pc "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n        mov     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r11        @函数执行完了"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("要释放申请的栈空间 \n        pop     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      @弹出r11和lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lr是专用标签"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("弹出就自动复制给lr寄存器\n        bx      lr             @子程序返回"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("等同于mov pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("即跳到调用处\nmain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        push    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("r11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lr入栈"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("保存调用者的位置\n        mov     r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp        @r11用于保存sp值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("函数栈开始位置\n        sub     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("    @sp减去"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("意思为给main分配栈空间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("个栈空间完成计算\n        mov     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         @初始化r0\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" @作用是保存SUM的初始值 \n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @sum将始终占用SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("的位置\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @a将始终占用SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("的位置\n        b       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_1        @跳到循环开始位置\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                       @循环开始位置入口\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @取出a的值给r0\n        cmp     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("        @跟"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("比较\n        bgt     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_4        @大于"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("跳出循环 mov pc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_4\n        b       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_2        @继续循环"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("直接 mov pc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                       @符合循环条件入口\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @取出sum的值给r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("用于写SUM的值\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @先保存SUM的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SP的位置用于读SUM值\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @r0用于传参"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("取出A的值给r0作为fp的参数\n        bl      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        @先mov lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pc再mov pc "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        mov     r1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r0         @fp的返回值为r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("保存到r1\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       @取出SUM的值\n        add     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1     @计算新sum的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("由R0保存\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @将新sum保存到SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("的位置\n        b       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_3        @无条件跳转"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("直接 mov pc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_3\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                       @完成a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("操作入口\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("中记录是a的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("赋给r0\n        add     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("     @r0增加"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        str     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @把新的a值放回SP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("里去\n        b       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_1        @跳转到比较 a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" 处\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LBB1_4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("                       @循环结束入口\n        ldr     r0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   @最后SUM的结果给R0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("返回值的工作一直是交给R0的\n        mov     sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r11        @函数执行完了"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("要释放申请的栈空间\n        pop     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      @弹出r11和lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lr是专用标签"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("弹出就自动复制给lr寄存器\n        bx      lr             @子程序返回"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("跳转到lr处等同于 MOV PC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LR\n\n")])])]),a("p",[a("strong",[t._v("喜欢就关注下吧,您的关注真的很重要")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/weharmony/kernel_liteos_a_note/raw/master/zzz/pic/other/wxcode.png",alt:"鸿蒙内核源码分析公众号"}})]),t._v(" "),a("p",[t._v("作者邮箱:weharmony@126.com")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸿蒙内核源码注释中文版 【 Gitee仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://codechina.csdn.net/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v(" CSDN仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://github.com/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Github仓 "),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"https://weharmony.coding.net/public/harmony/kernel_liteos_a_note/git/files",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Coding仓 】"),a("OutboundLink")],1),t._v("精读内核源码,中文详细注解.深挖地基工程,构建底层网图.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108727970",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸿蒙源码分析系列篇 【 CSDN "),a("OutboundLink")],1),a("a",{attrs:{href:"https://my.oschina.net/u/3751245/blog/4626852",target:"_blank",rel:"noopener noreferrer"}},[t._v("| OSCHINA "),a("OutboundLink")],1),a("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/wikis/pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("| WIKI 】"),a("OutboundLink")],1),t._v("问答式导读, 生活式比喻, 图形化展示, 层层剥开内核神秘外衣.")])])}),[],!1,null,null,null);s.default=r.exports}}]);