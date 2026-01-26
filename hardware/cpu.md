---
title: 中央处理器
order: 1
---

# 中央处理器

中央处理器（CPU，Central Processing Unit）是计算机中的核心元件。CPU 的电路执行计算机程序的指令，比如算数、逻辑、控制和输入/输出指令。CPU 主要由算数逻辑单元（ALU，Arithmetic-Logic Unit）、寄存器（register）和控制单元（control unit）组成。

## 指令集架构与微架构

指令集架构（ISA，Instruction Set Architecture）是定义 CPU 的可编程接口的抽象模型。一个执行一种指令集架构描述的指令的 CPU 就是这个指令集架构的一个实现（implementation）。通常，一种指令集架构被一类 CPU 所使用。

微架构（Microarchitecture）是一套用于执行指令集的微处理器的设计方法。使用不同微架构的计算机可以使用同一种指令集。

根据指令集架构的复杂性（complexity），计算机可分为复杂指令集计算机（CISC，Complex Instruction Set Computer）和精简指令集计算机（RISC，Reduced Instruction Set Computer）。除此之外，还有较少使用的最小指令集计算机（MISC，Minimal Instruction Set Computer）和单指令集计算机（OISC，One Instruction Set Computer）。

复杂指令集的特点是指令数目多而复杂，每条指令的字长并不相等，为了判读不同字长的指令，会产生一定的性能损耗。x86 是一种常见的复杂指令集架构，由英特尔的处理器 Intel 8086 而得名。2003 年 AMD 发展出了 x86 架构的 64 位扩展，因此 64 位字长的 x86 架构又被称为 amd64，有时也称为 x64 或 x86_64。

精简指令集的特点是容易实现、指令并行程度好、编译器效率高。ARM（Advanced RISC Machine）是一种常见的精简指令集。因为 ARM 架构可以实现在发热较少、能耗较低的情况下达到较高的性能，许多采用 ARM 架构的芯片被用在移动设备上。苹果公司在几年前就开始在桌面设备 Mac 上使用自主研发的采用 ARM 架构的 M 系列芯片，和采用 Intel 芯片的 x86 架构 Mac 相比，采用 M 系列芯片的 Mac 发热和能耗显著降低，笔记本电脑的续航显著增强，并且展现出了极高的性能表现。

## 缓存

> ...

## 时钟频率

大多数 CPU 采用同步电路（synchronous circuit），采用时钟信号（clock signal）调节 ...

## 核心、线程与并行性

> ...

## CPU 的结构

> ...

## CPU 的运行

> ...
