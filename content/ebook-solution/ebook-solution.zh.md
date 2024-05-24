---
title: 我的电子书阅读不完全解决方案
date: 2023-05-21T08:00:00+08:00
tags: [Kindle]
draft: false
---

## 个人用法

2024-05-23

由于本文成文较早，所以有一些内容已经过时，以下是最近个人的一些用法，仅供参考。现在是我自己用的比较舒服的几个方式。

1. **获取电子书**

   - 互联网直接下载：Zlib + Anna
   - 自制电子书：[Web2Book](https://github.com/huyixi/Web2Book)
   - RSS 订阅：[QiReader](https://www.qireader.com/)
   - 看到的好文章：保存到 Instapaper 后推送到 Kindle

2. **传输电子书**

   - Send to Kindle 软件
   - 一些文件内容较大的通过 Caliber 传输
   - 非 Epub 格式的文件，例如 AZW3 或者 MOBI 甚至是 PDF，通过 [Convertio](https://convertio.co) 进行格式转换后传输。

3. **开始阅读吧！**

上面所介绍的这些方法以下都会有相关介绍，所以可以继续阅读，当然要辨别一些目前可能无法使用的方法。

## 获取电子书

以下不包含从电子书商城购买下载的内容.下面的内容可能涉及到侵权等,如果资金允许,建议从正规渠道购买下载.

### 从互联网获取电子书

#### Z-Library

该组织将自己描述为“世界上最大的电子书图书馆”，以及“世界上最大的科学文章商店”.并作为一个由捐赠维持的非营利组织运营。但是 2022 年 11 月，该网站的域名被美国司法部查封..在 Z-Library 的用户群中,中国用户遥遥领先于其他国家(来自 Z-Library 博客 Worldwide Statistics: How Students and Educators Use Z-Library 中的数据).

![image-20230525165638917](./index.assets/image-20230525165638917.png)

![image-20230525165722912](./index.assets/image-20230525165722912.png)

##### 如何访问 Z-Library

- 通过域名访问

  Web:[https://singlelogin.re](https://singlelogin.re/)

  TOR:[http://loginzlib2vrak5zzpcocc3ouizykn6k5qecgj2tzlnab5wcbqhembyd.onion](http://loginzlib2vrak5zzpcocc3ouizykn6k5qecgj2tzlnab5wcbqhembyd.onion/)

  I2P:[http://zlib24th6ptyb4ibzn3tj2cndqafs6rhm4ed4gruxztaaco35lka.b32.i2p](http://zlib24th6ptyb4ibzn3tj2cndqafs6rhm4ed4gruxztaaco35lka.b32.i2p/)

  通过域名访问里面的部分内容可能无法查看,如博客,书单等页面.这些内容可以通过使用个人域名访问

  以上域名随时可能被回收,如果无法访问可以使用电子邮件获取,或者从从官方发布的最新域名中获取.[官方频道](https://t.me/zlibrary_official)

- 通过电子邮件获取个人 zlib 域名后，通过个人域名访问

  你可以使用任意邮箱,发送任意内容到 blackbox@zlib.se,你将在 3-5 分钟内收到你 Z-Library 个人的域名。如果没有收到邮件,前往被拦截的邮件中查看.在个人域名中可以查看 Z-Library 的博客书单等.

#### Anna's Archive

[Anna's Archive](https://annas-archive.org/) 是图书馆创世纪和 Z-Library 影子图书馆的备份。Z-Library 当时被关闭后一个比较流行的替代站点，可以直接访问。

### 自制电子书

如果你平时经常查看一些文档或者个人博客等网页，但是这些网页又没有电子书，你可以通过自制电子书来在你的 Kindle 上查看这些文档内容。以下是一些自制电子书的方法。

#### 使用浏览器插件生成电子书

##### WebToEpub

[Github 仓库](https://github.com/dteviot/WebToEpub)

[WebToEpub Chrome 下载地址](https://chrome.google.com/webstore/detail/webtoepub/akiljllkbielkidmammnifcnibaigelm)

[文档教程](https://dteviot.github.io/Projects/webToEpub_DefaultParser.html)

示例：

![image-20230531003150820](./index.assets/image-20230531003150820.png)

##### KTool

将链接输入 KTool 中生成并推送到 Kindle 中。但是导入链接一次最多导入 30 个，且生成的电子书只能以 30 个链接为一本，链接增加则会分成几本书。

用到的软件：[Sigil](https://sigil-ebook.com/sigil/)。Github 上 star 最多的电子书制作软件。当然也可以自己下载使用其他软件。

#### 自己编写软件生成电子书

在没有发现这一个浏览器插件之前，我写了一个脚本来获取文章的内容。相对于浏览器插件的操作，程序部署，可能相对较为繁琐。但是我所编写的程序采用多线程进行爬取文章，爬取速度相比浏览器插件获取要快很多。如果你需要获取的文章内容较多的话，可以尝试使用。

##### 获取文章链接（目前该功能已经全部集成到下面的软件中）

我写了个 sh 脚本通过解析 dom 来获取文档链接。[脚本仓库](https://github.com/huyixi/Tools.git)

![image-20230526154024000](./index.assets/image-20230526154024000.png)

##### Web2Book

通过文章爬虫来所有文章链接中的所有文章内容，并将其写入指定的文件中，以便后续制作成电子书。[Github 仓库](https://github.com/huyixi/web2book)

该爬虫可以进行多线程的文章爬取，并输出为一个 epub 文件。并且爬取过程中也会同步保存网页中的图片，。另外如果你遇到不需要的元素，也可以通过 css 选择器进行移除。

该程序可以集成使用代理服务器，但无法自动获取代理服务器，这是未来需要升级的地方。如果你需要获取代理服务器，你可以查看这个仓库 [ProxyPool](https://github.com/Python3WebSpider/ProxyPool)

##### Sigil

如果你有一些保存下来的 HTML 文件，也可以直接使用 Sigil 制作电子书。

1.导入 html 文件

导入过程可能遇到错误。

![image-20230527153743849](./index.assets/image-20230527153743849.png)

如果错误较少，可以采用手动更改的方式修改错误。如果错误太多了，可以使用下面的方法 percollate 来自做电子书。

2.生成目录

生成目录方便快速导航到指定页面

![image-20230526162847714](./index.assets/image-20230526162847714.png)

![image-20230526162916570](./index.assets/image-20230526162916570.png)

3.编辑元数据

在这里编辑图书标题，作者名等等

![image-20230526163454332](./index.assets/image-20230526163454332.png)

4.添加封面

添加封面，以便 Kindle Library 显示略缩图。

![image-20230526170841377](./index.assets/image-20230526170841377.png)

###### percollate

[percollate](https://github.com/danburzo/percollate). A command-line tool to turn web pages into readable PDF, EPUB, HTML, or Markdown docs.

根据官方文档进行安装

```shell
percollate epub --output output-file-name.epub url-of-the-web-page
```

- `epub` is the command to create an `.epub` file.
- `--output output-file-name.epub` is the name you want to give to the output `.epub` file.
- `url-of-the-web-page` is the URL of the web page you want to convert to `.epub`.

## 传输电子书

### Calibre 传输

使用 [Calibre](https://github.com/huyixi/Calibre-Library) 电子书管理软件，这也是我传输电子书的最常用的方案。

首先将你要导入 kindle 的书籍脱落这个软件中。将 kindle 与电脑进行连接。点击你要传输的书籍，上方菜单栏会出现 **发送到设备 **按钮。点击这个按钮，就可以直接将电子书导入到 kindle 中，另外如果你的电子书的格式，不是 kindle 所需要的 mobi 格式。软件还会自动转换格式。使用这个软件，不仅可以方便你对电子书进行管理，并且也避免了电子书格式转换的问题。（当然部分格式是无法转化成 mobi 格式的）

![image-20230531010807637](./index.assets/image-20230531010807637.png)

### KTool 传输

[Kool 官网](ktool.io)

也是很好用的一款软件，但是需要付费。作者从五岁起就开始戴眼镜，并且右眼是瞎的，所以他很注意保护自己的眼睛。他构建了这一个工具，将要阅读的材料都推送到 kindle 上面，以保护自己用眼。这是他在 Hacker News 上面的一篇[文章](https://news.ycombinator.com/item?id=32637996)，可以去看看。

### Send to Kindle

使用官方的 [Send to Kindle](https://www.amazon.com/sendtokindle) 软件进行推送，这里不在赘述，官网已经讲的很详细了

### 邮件传输

[Amazon - Manage Your Content and Devices - Preferences](https://www.amazon.com/hz/mycd/myx#/home/settings/payment) -> Personal Document Settings -> Approved Personal Document E-mail List

根据以上步骤添加你的邮箱。就可以进行使用该邮箱向 Kindle 邮箱发送邮件。但是需要注意邮件传输有一些特定的格式要求，并且亚马逊在将来也将逐渐取消对 msn 格式的支持

### 网页传输

将文件拖拽到网页即可传输

https://www.amazon.com/sendtokindle

### 插件传输

使用 Send to Kindle 官方插件或者 Ktool 插件进行传输。

![image-20230531012005961](./index.assets/image-20230531012005961.png)

插件界面

![image-20230531011959627](./index.assets/image-20230531011959627.png)

### 推送网页/微信公众号文章（目前中国区已经下架）

使用 Send to Kindle 推送。

只用浏览器打开网页或者微信公众号文章，点击分享到你的 Kindle 软件上便可推送成功。

### Instapaper

[Instapaper](https://www.instapaper.com)

使用 Instapaper 稍后读结合软件自带 Send to Kindle

使用浏览器扩展，或者直接分享文章链接到软件中。

浏览器扩展：在指定的你要推送的网页，点击图标

![image-20230531010409114](./index.assets/image-20230531010409114.png)

既可保存到你的稍后读软件中。

![image-20230531010352266](./index.assets/image-20230531010352266.png)

之后之后打开软件里的 Setting -> Kindle -> Send Articles Now 便可推送到 Kindle 上

![image-20230531010627567](./index.assets/image-20230531010627567.png)

### 推送 RSS

#### 免费方案

##### [KindleEar](https://github.com/cdhigh/KindleEar)

这个方案不需要付费，但是目前需要你使用一张信用卡进行部署。

##### 自动化平台

例如：[IFTTT](https://ifttt.com/)，zapier 等

缺点：如果使用免费的方案能推送的 Feed 只有一条

![image-20230531005141288](./index.assets/image-20230531005141288.png)

#### 付费方案

付费方案的好处就是没有难度，比较适合不那么喜欢折腾的人。互联网上有许多，很好的推送平台，可以进行自行进行搜索使用。例如：[Qi Reader](https://www.qireader.com/)

，[Newsletter to Kindle](https://newslettertokindle.com/)

Newsletter to Kindle 的付费价格：

![image-20230531005833118](./index.assets/image-20230531005833118.png)

## 管理电子书

### Calibre

基本上是最好用的一个管理电子书的软件，即使你没有使用 Kindle，也可以通过这个软件来管理你的电子书。软件的基本操作也很都简单直观。

[Github 仓库](https://github.com/huyixi/Calibre-Library)

## Resource

[书伴](https://bookfere.com/)：有很多关于 Kindle 使用的技巧。
