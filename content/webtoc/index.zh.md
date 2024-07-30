+++
title = 'WebTOC 浏览器扩展的开发历程'
date = 2024-07-30T15:46:06+08:00
draft = false
+++

这是一个可以获取当前页面的目录的浏览器扩展。

最初有实现这个扩展的想法来自《如何阅读一本书》。书中提到使用书籍的目录与大纲来快速了解一本书。

在网上冲浪的时候，很可能有一些网站并没有提供进行快速浏览导航的大纲。例如我自己的博客站点：我认为一篇好的博文应该是引人入胜、娓娓道来的，而不是像 Wikimedia 那样结构层次分明。所有我将文章的目录导航从自己的博客站点中移除。

但是有的时候我们又想通过目录来快速判断一篇文章是否值得继续阅读或者快速定位到解决方案，而不想了解事件前因后果。

如果能有一个浏览器扩展可以获取所有网页的的文章目录就能很好的解决这个问题。

最开始我的设计是在当前网页添加上一个悬浮窗口，用户可以自由移动放缩悬浮窗，让目录的悬浮窗不遮挡到网页内容。确保良好的阅读体验。

![image-20240730153439315](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240730153439315.png)

这是第一个 MVP 的截图。

![image-20240730153720721](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240730153720721.png)

![image-20240730153641546](/Users/huyixi/Library/Application%20Support/typora-user-images/image-20240730153658676.png)

上方的 Control Bar 模仿原本是模仿 MacOS 系统，有一个关闭的按钮。后续将关闭按钮转移到 Badge 上。

这是开发过程中的 Control Bar 的一个 demo，放在 codepen 上。地址：https://codepen.io/huyixi/pen/OJeVyYE

另外针对扩展的背景进行优化。在不同背景的网页上，扩展的背景颜色也会随之改变，确保一个更好的视觉体验。

这里的处理方案是提取当前页面颜色的 rgb，转换成 hsl 颜色值后。对 L 进行降低，整体的背景降低 4%，control bar 再降低 4%，整个的颜色看起来就比较舒服。

到这里，基本上这个扩展就算完成了，已经可以满足我的需要了。

但是周末在家刷到另维的一条[推特](https://x.com/galala_eth/status/1816277009707983071)：

![835shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/835shots_so.png)

文中提到一个工具：Uniswap，好奇打开看了一下。

![656shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/656shots_so.png)

发现 pin 住的第一条推特就在介绍自己的浏览器扩展现在采用侧边栏的方式进行展示。

![183shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/183shots_so.png)

并且是第一个这么做的钱包扩展。

突然想到，这或许是一个很不错的展示方式。于是推倒之前的代码，全部重来。

![SCR-20240730-keqi](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240730-keqi.png)

这是目前的展示效果。

截图采用了 [Peter Norvig](https://www.norvig.com/) 的一篇著名文章[《Teach Yourself Programming in Ten Years》](https://www.norvig.com/21-days.html)。

但是对这个网页中的一些干扰元素进行删除。

目前项目已经在谷歌商店审核。

![image-20240730152626771](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240730152626771.png)

审核成功后，会添加上扩展的下载链接。

## 踩坑点

- 没有完整浏览 Chrome Extension 的开发者文档，badge 与 sidepanel API 的使用都是后续添加上的。
- 过渡追求代码与项目的整洁，导致一些点上卡了很长时间。

## 路线图

- 目录文字的放缩
- 高亮当前标题
- 使用当前网页的链接颜色
