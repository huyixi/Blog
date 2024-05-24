---
title: Windows 装机指南
date: 2023-04-24T02:49:00+08:00
lastmod: 2023-10-26
category: [Article]
tags: [Windows]
draft: false
---

> 由于本文内容较长，且个人博客不附带目录导航。更推荐在我的 wiki 网站进行阅读，这是本文的[链接](https://huyixi.wiki/Windows)。可以通过点击目录进行快速导航跳转。
> 前情提要：根据本人的多次装机历史记录而成，基本满足本人 Windows 装机需求。

## 系统安装

### 系统镜像下载网站

- itellyou：<https://msdn.itellyou.cn>
- itellyou 新网站（主要下载系统镜像）：<https://next.itellyou.cn/>

### 制作系统启动盘

需要提前准备一个 16G 以上的 U 盘作为启动盘

- rufus（Windows）官网地址：<https://rufus.ie/en/>

- UNetbootin（多平台）：<https://unetbootin.github.io/>

### 进入 BIOS 界面将 U 盘设置为启动盘

一些笔记本侧边有 Reset 插口，使用卡针插入即可进入 BIOS 界面

### 激活系统

Windows 系统激活参考教程：www.kms.pub

```markdown
slmgr -ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D（该激活码为 Windows10 企业版激活码，不同系统版本使用不同的激活码，除本行外下面的命令都一样）

slmgr -skms kms.03k.org

slmgr -ato

slmgr -dlv
```

#### Windows 激活密钥

##### 通用批量许可证密钥 (GVLK)

在下表中，可找到 Windows 每个版本的 GVLK。 LTSC 是长期服务渠道，而 LTSB 是 Long-Term Servicing Branch 。

##### Windows Server（LTSC 版本）

###### Windows Server 2022

| 操作系统版本                   | KMS 客户端产品密钥            |
| :----------------------------- | :---------------------------- |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |

###### Windows Server 2019

| 操作系统版本                   | KMS 客户端产品密钥            |
| :----------------------------- | :---------------------------- |
| Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726 |

###### Windows Server 2016

| 操作系统版本                   | KMS 客户端产品密钥            |
| :----------------------------- | :---------------------------- |
| Windows Server 2016 Datacenter | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard   | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials | JCKRF-N37P4-C2D82-9YXRT-4M63B |

##### Windows Server（半年频道版本）

###### Windows Server，版本 20H2、2004、1909、1903 和 1809

| 操作系统版本              | KMS 客户端产品密钥            |
| :------------------------ | :---------------------------- |
| Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

##### Windows 11 和 Windows 10（半年频道版本）

有关受支持的版本和服务终止日期的信息，请参阅 [Windows 生命周期情况说明书](https://support.microsoft.com/help/13853/windows-lifecycle-fact-sheet)。

| 操作系统版本                                        | KMS 客户端产品密钥            |
| :-------------------------------------------------- | :---------------------------- |
| Windows 11 专业版 Windows 10 专业版                 | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Windows 11 专业版 N Windows 10 专业版 N             | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Windows 11 专业工作站版 Windows 10 专业工作站版     | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Windows 11 专业工作站版 N Windows 10 专业工作站版 N | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| Windows 11 专业教育版 Windows 10 专业教育版         | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Windows 11 专业教育版 N Windows 10 专业教育版 N     | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Windows 11 教育版 Windows 10 教育版                 | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Windows 11 教育版 N Windows 10 教育版 N             | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Windows 11 企业版 Windows 10 企业版                 | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Windows 11 企业版 N Windows 10 企业版 N             | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Windows 11 企业版 G Windows 10 企业版 G             | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Windows 11 企业版 G N Windows 10 企业版 G N         | 44RPN-FTY23-9VTTB-MP9BX-T84FV |

##### Windows 10（LTSC/LTSB 版本）

###### Windows 10 LTSC 2021 和 2019

| 操作系统版本                                                | KMS 客户端产品密钥            |
| :---------------------------------------------------------- | :---------------------------- |
| Windows 10 企业版 LTSC 2021 Windows 10 企业版 LTSC 2019     | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Windows 10 企业版 N LTSC 2021 Windows 10 企业版 N LTSC 2019 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |

###### Windows 10 LTSB 2016

| 操作系统版本                  | KMS 客户端产品密钥            |
| :---------------------------- | :---------------------------- |
| Windows 10 企业版 LTSB 2016   | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Windows 10 企业版 N LTSB 2016 | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |

###### Windows 10 LTSB 2015

| 操作系统版本                  | KMS 客户端产品密钥            |
| :---------------------------- | :---------------------------- |
| Windows 10 企业版 2015 LTSB   | WNMTR-4C88C-JK8YV-HQ7T2-76DF9 |
| Windows 10 企业版 2015 LTSB N | 2F77B-TNFGY-69QQF-B8YKP-D69TJ |

##### 早期版本的 Windows Server

###### Windows Server 版本 1803

| 操作系统版本              | KMS 客户端产品密钥            |
| :------------------------ | :---------------------------- |
| Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

###### Windows Server 版本 1709

| 操作系统版本              | KMS 客户端产品密钥            |
| :------------------------ | :---------------------------- |
| Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |

###### Windows Server 2012 R2

| 操作系统版本                      | KMS 客户端产品密钥            |
| :-------------------------------- | :---------------------------- |
| Windows Server 2012 R2 Standard   | D2N9P-3P6X9-2R39C-7RTCD-MDVJX |
| Windows Server 2012 R2 Datacenter | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9 |
| Windows Server 2012 R2 Essentials | KNC87-3J2TX-XB4WP-VCPJV-M4FWM |

###### Windows Server 2012

| 操作系统版本                          | KMS 客户端产品密钥            |
| :------------------------------------ | :---------------------------- |
| Windows Server 2012                   | BN3D2-R7TKB-3YPBD-8DRP2-27GG4 |
| Windows Server 2012 N                 | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY |
| Windows Server 2012 单语言版          | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ |
| Windows Server 2012 特定国家/地区版   | 4K36P-JN4VD-GDC6V-KDT89-DYFKP |
| Windows Server 2012 Standard          | XC9B7-NBPP2-83J2H-RHMBY-92BT4 |
| Windows Server 2012 MultiPoint 标准版 | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ |
| Windows Server 2012 MultiPoint 高级版 | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G |
| Windows Server 2012 Datacenter        | 48HP8-DN98B-MYWDG-T2DCC-8W83P |

###### Windows Server 2008 R2

| 操作系统版本                                   | KMS 客户端产品密钥            |
| :--------------------------------------------- | :---------------------------- |
| Windows Server 2008 R2 Web 版                  | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| Windows Server 2008 R2 HPC 版                  | TT8MH-CG224-D3D7Q-498W2-9QCTX |
| Windows Server 2008 R2 标准版                  | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| Windows Server 2008 R2 企业版                  | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| Windows Server 2008 R2 Datacenter              | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| 面向基于 Itanium 系统的 Windows Server 2008 R2 | GT63C-RJFQ3-4GMB6-BRFB9-CB83V |

###### Windows 2008 Server

| 操作系统版本                                   | KMS 客户端产品密钥            |
| :--------------------------------------------- | :---------------------------- |
| Windows Web Server 2008                        | WYR28-R7TFJ-3X2YQ-YCY4H-M249D |
| Windows Server 2008 标准版                     | TM24T-X9RMF-VWXK6-X8JC9-BFGM2 |
| 不带 Hyper-V 的 Windows Server 2008 标准版     | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ |
| Windows Server 2008 企业版                     | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V |
| 不带 Hyper-V 的 Windows Server 2008 企业版     | 39BXF-X8Q23-P2WWT-38T2F-G3FPG |
| Windows Server 2008 HPC                        | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP |
| Windows Server 2008 Datacenter                 | 7M67G-PC374-GR742-YH8V4-TCBY3 |
| 不带 Hyper-V 的 Windows Server 2008 数据中心版 | 22XQ2-VRXRG-P8D42-K34TD-G3QQC |
| 面向基于 Itanium 系统的 Windows Server 2008    | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK |

#### 早期版本的 Windows

##### Windows 8.1

| 操作系统版本         | KMS 客户端产品密钥            |
| :------------------- | :---------------------------- |
| Windows 8.1 专业版   | GCRJD-8NW9H-F2CDX-CCM8D-9D6T9 |
| Windows 8.1 专业版 N | HMCNV-VVBFX-7HMBH-CTY9B-B4FXY |
| Windows 8.1 企业版   | MHF9N-XY6XB-WVXMC-BTDCT-MKKG7 |
| Windows 8.1 企业版 N | TT4HM-HN7YT-62K67-RGRQJ-JFFXW |

###### Windows 8

| 操作系统版本       | KMS 客户端产品密钥            |
| :----------------- | :---------------------------- |
| Windows 8 专业版   | NG4HW-VH26C-733KW-K6F98-J8CK4 |
| Windows 8 专业版 N | XCVCF-2NXM9-723PB-MHCB7-2RYQQ |
| Windows 8 企业版   | 32JNW-9KQ84-P47T8-D8GGY-CWCK7 |
| Windows 8 企业版 N | JMNMF-RHW7P-DMY6X-RF3DR-X2BQT |

###### Windows 7

| 操作系统版本       | KMS 客户端产品密钥            |
| :----------------- | :---------------------------- |
| Windows 7 专业版   | FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 |
| Windows 7 专业版 N | MRPKT-YTG23-K7D7T-X2JMM-QY7MG |
| Windows 7 专业版 E | W82YF-2Q76Y-63HXB-FGJG9-GF7QX |
| Windows 7 企业版   | 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH |
| Windows 7 企业版 N | YDRBP-3D83W-TY26F-D46B2-XCKRJ |
| Windows 7 企业版 E | C29WB-22CC8-VJ326-GHFJW-H9DH4 |

#### 推荐使用 Windows10 企业版 LTSC

参考链接：<https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys>

### 检测系统

如果是全新的电脑系统安装完毕后安装 **AIDA** 或者 **图吧工具箱** 测试系统是否能正常运行

```markdown
AIDA64 Extreme：至尊版

FUUJ1-E3YDB-HTDTK-2D894-4BVAQ
4U12U-SDWD6-8WDNH-HDAM4-W3MZW
F5R3D-XUPD6-4TD9B-2D2L4-354AX
3H39D-ZFQD6-1ED96-UD274-RD44G
4U12U-SDWD6-8WDNH-HDAM4-W3MZW

AIDA64 Engineer：工程版

YHDZ3-91UD6-ZUDN3-QDSS4-RXPDC
FNU14-63KD6-XSD9N-VDV14-4VRN1
4X1DF-KDTD6-9EDNY-DDGD4-W7N4Q
F9U44-B3ID6-THD98-6DV44-4Z6U2
4T1HF-WDPD6-3FD99-3DGH4-WGFPJ

AIDA64 Business：商业版

DCYPF-G4UD6-7DDNF-KDGS4-HXPVI
1U4S4-2Y3D6-55D9E-PD5Z4-CF5C9
RRFGY-PUQD6-KFD9Z-1DP74-3DKWB
USUB4-4FAD6-UTD9Q-2D8H4-42DZA
3QRDD-KF6D6-J6D9V-IDPU4-3MJ45
```

#### dll 缺失

下载缺失的 dll 文件后<https://www.dll-files.com> ，放置到 C:/System/Windows32/

#### Win11 下“应用程序无法正确启动(0xc000007b)”解决方法

[链接](https://www.howtogeek.com/874113/how-to-fix-the-0xc000007b-error-on-windows/)

## Windows 系统设置

### 磁盘分区

1. `win + R` 调出运行窗口
2. 在窗口中输入 `diskmgmt.msc` 调出磁盘管理界面
3. 根据自己的需要建立分区

### 关闭用户账户控制提醒

防止每次安装软件或者修改系统设置时候弹出提醒窗口

1. Win + R 打开运行
2. 在输入窗口输入 `msconfig` 调出 系统配置 System Configuration Utility
3. 点击上方的工具菜单 -> 找到 更改 UAC 用户账户控制 设置 -> 启动设置
4. 将通知杆往下拉,修改为从不通知,点击确定

### 关闭系统版本的自动检查与更新

1. `win + R` 调出运行窗口,输入 `gpedit.msc` Group Policy Editor 调出组策略编辑器
2. 本地计算机策略 - 计算机配置 - 管理模板 - Windows 组件 - Windows 更新 - 指定 Intranet Microsoft 更新位置服务 - 双击打开
3. 可以看到默认的配置是已启用,修改 `设置检测更新的 Intranet 更新服务` 以及下方的 `设置 Intranet 统计服务器` 将两者的输入框都修改为 `127.0.0.1`
4. 点击应用即可
5. 验证:打开系统更新界面查看是否已经禁用

### 修改桌面（存储桌面文件的文件夹）、下载、文档等文件夹的存储位置

1. 该文件夹一般存储在 C://Users/{{ username }} 下
2. 修改存储位置：右键 -> 属性 -> 位置 -> 修改文件存储位置 -> 移动

### 添加开机启动项

1. 打开 `:\Users\:\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` 文件夹（上述的 `:user` 为你当前使用的系统的用户名），或者使用 Win + R 打开 Windows 系统的运行窗口，键入 `shell:startup` 点击确定，打开启动文件夹
2. 将需要启动的应用的快捷方式添加到该文件夹

### 修改应用程序的默认安装位置

⚠️ 修改该设置后无法自动修改快捷方式的指向位置，目前我暂未找到解决方案

修改该设置后应用程序的默认安装位置将从默认位置即 C:/Program Files 或 C:/Program Files (x86) 移动到你所设定的位置

在我的硬盘驱动器上创建一个文件夹名称 Program Files (x86)：D
然后而不是去 ''HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion''
我必须去这里>>'HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion''
然后修改 ''ProgramFilesDir (x86)'' 和 ''ProgramFilesDir'' 的数值

#### 修改 C:/User 文件夹的存储位置

⚠️ 该操作有风险,操作前注意备份自己的数据!

1. 创建一个 relocate.xml 文件,文件内容如下,并根据下列提示修改文件内容

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <unattend xmlns="urn:schemas-microsoft-com:unattend">
   <settings pass="oobeSystem">
   <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <FolderLocations>
   <ProfilesDirectory>D:\Users</ProfilesDirectory>
   </FolderLocations>
   </component>
   </settings>
   </unattend>
   ```

   ⚠️ 如果你的操作系统是 32 位则将 `processorArchitecture="amd64"` 更改为 `processorArchitecture="x86`.如果是 64 位则无需更改

   ⚠️ 修改 `<ProfilesDirectory>D:\Users</ProfilesDirectory>` 中 `D:\Users` 的值为你想要保存文件夹的位置

2. 登陆到你的电脑管理员账户

   从 Windows 设置 - 账户 - 账户信息/家庭和其他用户 查看当前的账户权限

   如果为管理员账户会显示管理员字样

3. 使用管理员权限打开 cmd 并进行以下操作

   输入 net user Administrator /active:yes 并回车 激活系统管理员账户

4. 注销当前账户:

   开始菜单 - {{你的用户名}} -注销

5. 登陆 Administrator 管理员账户

6. 停用系统除了 Administrator 管理员账户以外的所有账户:

   使用管理员模式打开 CMD - 输入 `net user 你的账户名 /active:no`,将 `你的账户名` 修改为你系统所使用的账户名,有几个账户名执行几次改命令

   执行完命令后从 `Windows 设置` - `账户` - `家庭和其他用户` 中查看是否完全停用

7. CMD 切换到 sysprep 文件夹

   该文件夹的绝对路径为 `C:\Windows\System32\Sysprep`

8. 执行 cmd 命令

   ```bash
   sysprep /oobe /reboot /unattend:D:\relocate.xml
   ```

   其中 unattend 命令后的内容为第一步所保存的 xml 文件的绝对路径,根据自己的存储位置修改即可

9. 系统将自动重启并创建新的用户,根据系统提示进行操作即可

   需要提醒的是,新创建的账户名称不能与之前的账户名称相同,你可以随意设置一个,之后再进行更改

10. 进入系统后查看 Users 文件夹是否已经移动到你所设置的位置

    此时已经成功迁移 Users 文件夹

11. 激活在第 6 步停用的账户

    `net user {{你的账户名}} /active:yes` 与之前相同,有多少个账户就执行多少次命令

12. 注销临时账户,登陆你自己的管理员账户(不是 Administrator )

13. 在 Windows 设置 中删除你在第 9 步所设置的临时账户

    参考教程 <https://www.tenforums.com/tutorials/1964-move-users-folder-location-windows-10-a.html>

### 删除文件资源管理器中左侧菜单栏的此电脑下的 3D 对象等文件夹

1.打开注册表编辑器（键盘 Win+R 中输入 regedit 并回车）

2.定位到：\*\*HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\*\*

3.右键删除**DelegateFolders**以上的注册表项，刷新资源管理器后就生效了。

下载：{088e3905-0323-4b02-9826-5d99428e115f}

图片：{24ad3ad4-a569-4530-98e1-ab02f9417aa8}

音乐：{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}

桌面：{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}

文档：{d3162b92-9365-467a-956b-92703aca08af}

视频：{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}

3D 对象：{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}

### 隐藏桌面上的回收站、我的电脑等图标

1. 桌面空白处右键 - 个性化
2. 打开设置主页 - 选择主题 - 右侧边栏 - 相关的设置 - 桌面图标设置
3. 根据需要隐藏桌面图标的勾选状态并点击应用

### 默认展开资源管理器中文件夹

1. 打开资源管理器
2. 左上方菜单栏 查看
3. 打开查看菜单栏 - 点击选项打开文件夹选项
4. 查看 - 导航窗格下的展开到打开的文件夹

### 修改文件的显示路径为绝对路径

1. 打开资源管理器
2. 左上方菜单栏 查看
3. 打开查看菜单栏 - 点击选项打开文件夹选项
4. 在标题栏中显示完整路径

### 关闭 Windows 安全中心

1. `win + R` 打开 运行窗口 输入 gpedit.msc 打开组策略编辑器
2. 本地计算机策略 - 计算机配置 - 管理模板 - Windows 组件 - Microsoft Defender 防病毒 - 双击 - 右侧找到 - 关闭 Microsoft Defender 防病毒

### 关闭诊断和反馈

打开 `Windows设置` 面板 - 隐私 - 诊断和反馈 -勾选必需诊断数据 & 反馈频率修改为 从不

### 关闭活动历史记录

打开 `Windows设置` 面板 - 隐私 - 活动历史记录 - 取消勾选 在此设备上存储我的活动历史记录 向 Microsoft 发送我的活动历史记录

### 如何优化 Windows 的性能

<https://www.tenforums.com/tutorials/26120-optimize-performance-windows-10-a.html>

## 软件推荐

### 输入法

#### 输入法方案推荐

进行中文输入推荐使用双拼输入法，熟练使用后可以极大提高输入效率

双拼输入法有多种方案，根据需要进行选择，我自己使用过 **自然码双拼** 与 **小鹤双拼** 。熟练使用后两者的输入速度没有很大差距。目前使用小鹤双拼的原因是 iOS 上自带的输入法不支持自然码双拼。

注意选择输入方案的时候尽量不要选择使用标点符号当作输入按键的方案（如搜狗双拼等），否则在手机上显示键盘与平时有差异。

学习双拼第一周可以背一下键位表，忘记的键位尽量先回想，回想不起来再去看键位图。

一周过后基本可以熟练使用双拼，一个月后基本已经变成肌肉记忆，不用再去想键位分布就可马上打出来。

#### Rime 输入法

首选的开源输入法。但是配置较为繁琐，且软件是繁体中文，设置起来相对不是很舒服。软件的配置可以使用 github 上一些配置好的直接导入即可。可以根据需要自己去研究官方的配置文件

官网地址：<https://rime.im/>

Rime 是跨平台的輸入法軟件，Rime 輸入方案可通用於以下發行版：

- 【中州韻】 ibus-rime → Linux
- 【小狼毫】 Weasel → Windows
- 【鼠鬚管】 Squirrel → Mac OS X

Rime 的各种配置，均是由 .yaml 文件所定义。 yaml 是一种标记语言。 .yaml 文件实际上是文本文档。可使用记事本、或 Emeditor 等进行编辑

##### 文件夹

[**用户资料文件夹**](https://github.com/rime/home/wiki/UserData)

只修改用户文件夹，修改系统文件夹后更新软件会自动重新下载，所以修改也没用

可以在程序图标上右键，点击用户文件夹打开

- 【中州韻】 `~/.config/ibus/rime/` （0.9.1 以下版本爲 `~/.ibus/rime/`；fcitx5 为 `~/.local/share/fcitx5/rime/`）
- 【小狼毫】 `%APPDATA%\Rime`
- 【鼠鬚管】 `~/Library/Rime/`

##### 内容

用家下載或定製的文件：

- `<输入方案代号>.schema.yaml` - 用户下载或自定义的*输入方案*。
- `<韵书代号>.dict.yaml` - 用户下载或自定义的 _词典_。
- `<词典名称代号>.txt` - 文本格式的词典，如预设词典表、用戶 _自定义词组_。
- `<配置代号>.custom.yaml` - 应用于配置文件 `<配置代号>.schema.yaml` 或 `<配置代号>.yaml` 的 _补丁_。
- `opencc/*` - [OpenCC](https://github.com/BYVoid/OpenCC) 字形转换配置及字典文件。

输入法程序记录的使用习惯等信息

- `<输入法语言代号>.userdb/` - 输入法程序为保存用户的输入习惯而创建的 _用户词典_。
- `installation.yaml` - 安装信息。输入法程序在首次运行及升级后写入安装、升级时间、程序版本等。
- `user.yaml` - 用户状态信息。包括在 _方案选单_ 选取的输入方案、输入法选项状态如「中／西」「简／繁」等。

部署时生成的文件：

- `build/*` - 快取文件。为使输入法高效运行，在部署过程中将配置、词典等编译为机读格式。
- `trash/*` - 失效的文件。因 Rime 升級而不再使用的文件会自动移入这个文件夾。用户确认不再需要后可以删除。

一套输入方案，通常包含「方案定义」和「词典」文件。

方案定义，命名为 `<方案定义>.schema.yaml`，是一份包含输入方案配置信息的 YAML 文档。

##### 共享文件夹

存放由本机多个用户共享的文件，通常由输入法安装程序写入。

Rime 输入法在查找一项资源的時候，会优先访问 [用户文件夹](https://github.com/rime/home/wiki/UserData) 中的文件。 用户文件不存在时，再到共享文件夾中寻找。

之前使用其他输入法的同学可以使用深蓝词库转换输出原输入法导出的词库

深蓝词库下载地址：<https://github.com/studyzy/imewlconverter/releases>

#### 系统自带的输入法

如果觉得 Rime 的配置太繁琐可以使用系统自带的输入法

Mac 与 Windows （微软拼音）都有自带的输入法，安卓手机上可以使用 GBoard。

##### 添加小鹤双拼到微软拼音输入法

1. win + R，输入 regedit，打开注册表

2. 找到 `计算机\HKEY_CURRENT_USER\Software\Microsoft\InputMethod\Settings\CHS` 项

3. 新建一个名为 UserDefinedDoublePinyinScheme0 的字符串值，值为 `小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt`

4. 打开控制面板--微软拼音输入法设置，把 小鹤双拼 设置为双拼的默认选择即可。

避免使用一些会搜集个人信息的输入法软件。

### 浏览器

- Google Chrome（市场占有率最高的浏览器）

- Firefox（开源软件）

- Safari（MacOS 优化较好）
- Microsoft Edge

### 科学上网

- Clash（ PC 端全平台，Mac 上是 ClashX）

  网址：<https://github.com/Dreamacro/clash.git>

- Shadowrocket（ iOS 外区应用商店可购买下载）

### 办公软件

#### Office 全家桶

Windows 平台安装

1. 下载安装镜像

   - <https://msdn.itelleyou.com>
   - 需要下载 VL 版本的 Office

2. 根据提示安装软件

3. 打开管理员模式下的命令行

   ```markdown
   跳转到软件的安装文件夹
   32 位执行如下命令:
   cd "C:\Program Files (x86)\Microsoft Office\Office16"

   64 位执行如下命令:
   cd "C:\Program Files\Microsoft Office\Office16
   ```

4. 进入文件夹后执行以下两个命令，期间电脑需要联网

   ```markdown
   cscript ospp.vbs /sethst:win.kms.pub
   cscript ospp.vbs /act
   ```

   如果提示看到 successful 的字样，那么就是激活成功了，重新打开 office 就好。

参考教程：www.kms.pub

### 虚拟机

#### VMware Workstation Pro

序列码

```markdown
VM 16.1.1 build-17801498:
ZF3R0-FHED2-M80TY-8QYGC-NPKYF
YF390-0HF8P-M81RQ-2DXQE-M2UT6
ZF71R-DMX85-08DQY-8YMNC-PPHV8

VM 16.2.0 build-18760230:
ZF3R0-FHED2-M80TY-8QYGC-NPKYF

VM 17
JU090-6039P-08409-8J0QH-2YR7F
```

##### 在 VMware 虚拟机上安装 MacOS

MacOS 系统在虚拟机上使用并不稳定，不推荐在虚拟机上安装使用，如果有需要可以按照下面的步骤进行安装

1. 解锁 VMware

   VMware 不支持直接安装 MacOS ，所以需要先对 VMware 进行解锁。

   使用 unlocker 对 VMware 打补丁解锁，如果不打补丁，安装系统是无法选择 MacOS 的选项的。

   - 下载补丁文件：

   ```bash
   git clone git@github.com:BDisp/unlocker.git
   ```

   - 在安装补丁前，打开任务管理器关掉所有 VMware 程序

   - 打开 unlocker 文件架，找到 win-install.cmd 文件，右键以管理员身份运行。

   - 打开 安装虚拟机的文件夹，找到后缀为 `.vmx` 的 文件。例如： `macOS 10.14.vmx`

   - 在该文件的最后一行添加以下代码，并保存文件

     ```bash
     smc.version = 0
     ```

2. 重新打开 VMware 虚拟机软件

   安装虚拟机，导入镜像，系统等。

3. 系统设置

   - 进入系统后先进入磁盘管理器，抹掉 VMware 开头的磁盘，并重命名为自己想要的名字。
   - 根据引导正常进入系统。

4. 进入系统后安装 VMware tools

   如果提示无法安装或者未找到 VMware tools

   进入这个网址，找到最新的 darwin.iso 并下载

   <http://softwareupdate.vmware.com/cds/vmw-desktop/fusion/>

   - 关闭 Mac 虚拟机
   - 设置 - CD/DVD（sata） - 连接 - 使用 iso 镜像，导入下载的 darwin.iso
   - 重启虚拟机

### 文本编辑器

- Notepad++
- Vim
- Typora（md 文件编辑器）

### IDEA

- VSCode
- JetBrains 全家桶

### 流媒体编辑

- Adobe 全家桶

  [@Vposy](https://weibo.com/vposy) 在新浪微博上更新他的破解版，可以根据需要下载

  网址：<https://weibo.com/vposy>

  百度网盘下载链接：<https://pan.baidu.com/s/1Z4_iJNcq7koRt3vN7KxB3w?pwd=6g8x#list/path=%2F>

  百度网盘密码为：6g8x。默认解压缩密码为：@vposy

  链接可能会失效，如果失效可去其主页获取

### 密码管理器

只需要记住一个主密码甚至不需要记住密码，不用再记住每个应用或者网站的密码了！

- Bitwarden（开源全平台，基础功能免费够用）
- 1Password

### 笔记软件

- flomo （全平台，需分类无压力的笔记软件，作者也是 Notion 软件的作者）

### 待办事项

- Microsoft Todo （免费，全平台，使用帐号进行平台同步，但有时候同步会失败）

### 通讯软件

- Telegram（功能强大，不只是通讯软件，但是此软件只能进行私聊的加密）

  使用技巧可参考这篇文章：<https://tingtalk.me/telegram/>

- Singal（全开源，更强大的加密通讯软件）

- Tim （ QQ 的替代品，更为简洁，但是 Tim 与 QQ 曾经被报道过收集用户资料）

### RSS 信息获取

#### 软件

- Reeder 5（Apple 全平台，交互更优雅，可以在软件内直接浏览内容）
- NetNewsWire（开源全平台）

#### RSS 源

- RSS Hub（可以给各种网站生成 RSS）：<https://docs.rsshub.app/>
- 中文博客列表推荐：<https://github.com/timqian/chinese-independent-blogs.git>

### 邮箱客户端

- Spark（Apple 全平台，交互更优雅）
- Thunderbird（全平台，Mozilla 社区的作品）：<https://www.thunderbird.net/>

### 翻译软件

- DeepL
- 欧陆词典
- 谷歌网页翻译：translate.google.com （可以翻译文件）

### 图书管理器

- Calibre

### 分布式网盘同步软件

- BT Sync / Resilio Sync 适用于广播式同步，一人发，多人收
- rsync 跨硬盘备份工具，适用于一个人多台机器

网址： <www.getsync.com>

### 视频播放器

- VLC media player（开源全平台）

### 图片查看器

- ImageGlass

### 在线音乐播放器

- Spotify

### PDF 阅读器

- SumatraPDF(Windows)

### 电脑文件搜索

- Alfred（MacOS，不只是文件搜索）
- PowerToys（Windows）
- Listra（Windows）
- everything（Windows）

### 解压缩软件

- 7-zip

### 磁盘空间分析

- WizTree：<https://diskanalyzer.com/>
- SpaceSniffer

### 屏幕截图

- Snipaste（全平台）

### 百度云加速

pandownload（下载大文件可能会碰到下载一半无法下载的问题）：www.pandownload.net

### 软件设置

如何设置谷歌的国别重定向

Google 搜索通常会根据“发起搜索的 IP 地址”来进行“国别重定向”。
比如：内地的网友不翻墙直接进行 Google 搜索，会被重定向到 Google 的香港站点；
比如：通过翻墙到美国访问 Google 搜索，可能会被重定美国的 Google
　要想禁止国别重定向，可以点击如下网址，然后 Google 会在你本地保存一个 cookie 设置，下次再访问，就不会被重定向了。
[http://www.google.com/ncr](https://www.google.com/ncr)（No Country Redirect）

### 网盘

重要的资料必须在自己手上有备份。

任何网盘都有信息泄漏的风险，想要资料不被泄漏就不要使用网盘，只使用本地硬盘存储！

- Google Driver（推荐）

- 百度网盘（网上分享的大部分文件资料都在百度网盘上，不得不用的软件）

如果在网盘上上传图片等信息，网盘会压缩图片，如果只有网盘上一个备份，之后下载的图片不会是原来的清晰度。

另外大部分人都有过网盘资料被删除的经历，服务提供商可以查看你的网盘文件并且决定是否删除。可以上传一些 H 图片或者视频到网盘上过几天看看还能否访问。但是网盘在我们的生活中又不可或缺。

#### 解决方法

网盘 + 加密盘

使用加密软件加密你的数据之后再上传到网盘上。此方法可以避免文件被删或者压缩

#### 加密软件：VeraCrypt

下载地址：<https://veracrypt.fr/en/Home.html>

## 快捷键

Windows 系统快捷键

MacOS 系统快捷键

## 使用技巧

### 寻找最近的电脑文件

1. Win + R 打开运行窗口
2. 输入 recent 并确定
3. 点击修改日期,寻找变动过的文件

### 隐藏文件或文件夹

- 不易寻找的方法
  1. 在文件或文件夹目录上打开运行窗口
  2. 输入 `attrib +s +h {filename}` ，其中将 {filename} 改为需要隐藏的文件或者文件名
  3. 取消隐藏：重新在该目录上打开运行窗口输入同样的命令
- 常规方法
  1. 文件或文件夹右键，属性
  2. 打开属性窗口，选择 －＞ 常规 －＞ 属性 －＞ 隐藏 －> 确定
  3. 取消隐藏：文件夹菜单栏－＞查看－＞隐藏的项目

### 隐私与安全

棱镜粉碎网站: <https://prism-break.org/>

如果你很在意安全性，就【不要】基于移动设备（手机、平板）进行各种【敏感操作】

### 操作系统的选择

Linux > MacOS > Windows

### 浏览器的设置

使用 **Startpage** 或者 **DuckDuckGo** 代替谷歌或其他搜索引擎

#### 设置为 HTTPS?

> 互联网技术人员一直都知道 HTTP 是不安全的，给用户带来很多风险。由于 HTTP 流量是未加密的，任何通过 HTTP 发送的数据都可以被任何有权访问网络的人读取和修改。正如斯诺登 NSA 监控文件所揭示的那样，政府机构也可以在不通知用户或网站管理员的情况下收集和搜索 HTTP 流量。鉴于这些风险，EFF 认为每个网站都应该尽快在所有页面上[支持 HTTPS 。](https://www.eff.org/encrypt-the-web)

- **Chrome**
  设置>隐私和安全>安全>_滚动到底部_>_切换_“始终使用安全连接”

- **火狐**
  设置>隐私和安全>*滚动到底*部>*启用*仅 HTTPS 模式

### TOR 洋葱浏览器

“TOR”传说中的暗网，是老牌的翻墙工具，并且是“开源项目”。它的主要用途是“隐匿身份”，翻墙只是顺带的附加用途。

官方网站是 <https://www.torproject.org/>
（必须翻墙才能访问,注意进入的网址。直接搜索得到的是蜜罐网站,无法翻墙）

#### 如何判断自己的浏览器是否在走 Tor 的线路？

Tor 官网提供了一个测试界面，网址是 <https://check.torproject.org/> 猛击该超链接，会打开一个界面。
　　如果你的浏览器已经在使用 Tor 的线路，会出现一个【绿色】洋葱头，以及一行绿色的洋文提示。
　　如果你的浏览器没有走 Tor 的线路，会出现一个【带红色打叉】的洋葱头，同时还有一行红色的洋文警告。

## 隐私安全观念普及

### EFF(ELECTRONIC FRONTIER FOUNDATION)

捍卫数字隐私、言论自由和创新的领先非营利组织。

网址: <www.eff.org>

## 实用的网站

<www.52pj.com：分享一些安全技术，破解软件等>

### 参考链接

Win10 使用技巧论坛：www.tenforums.com

StackOverFlow 旗下的电脑使用论坛：www.superuser.com

庭说的装机指南：<https://tingtalk.me/windows/>
