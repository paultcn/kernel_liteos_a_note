#ifndef _NOTE_IPC_H
#define _NOTE_IPC_H


/****************************************************************
信号量是为了解决task的资源同步问题,有多少资源就设多大的资源最大值


信号量机制：

	以一个停车场的运作为例。假设停车场只有三个车位，一开始三个车位都是空的。这时如果同时来了五辆车，
	看门人允许其中三辆直接进入，然后放下车拦，剩下的车则必须在入口等待，此后来的车也都不得不在入口处等待。
	这时，有一辆车离开停车场，看门人得知后，打开车拦，放入外面的一辆进去，如果又离开两辆，则又可以放入两辆，如此往复。 

信号量的规则：

	如果当前资源计数器大于0，那么信号量处于触发状态
	如果当前资源计数器等于0，那么信号量处于未触发状态
	系统绝对不会让当前资源计数器变为负数
	当前资源计数器决定不会大于最大资源计数
	最大资源计数，表示可以控件的最大资源数量
	当前资源计数，表示当前可用资源的数量

 
****************************************************************/


























#endif
