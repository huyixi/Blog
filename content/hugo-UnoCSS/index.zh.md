---
title: "在 hugo 中使用 UnoCSS"
date: 2024-01-06T17:28:47+08:00
lastmod: 2024-01-06T17:28:47+08:00
draft: false
tags: [hugo, UnoCSS]
---

这个网站使用了 hugo 静态网站生成器，CSS 方面使用 UnoCSS。以下记录了如何在 hugo 中使用 UnoCSS。

## 修改主题文件的 CSS 样式

```HTML
{{- $cssbundle := resources.Match "css/*.css" | resources.Concat "css/main.css" -}}
{{- if hugo.IsProduction }}
{{ $cssbundle = $cssbundle | minify | fingerprint }} {{ end -}}
<link rel="stylesheet" href="{{ $cssbundle.RelPermalink }}"
{{ if hugo.IsProduction }} integrity="{{ $cssbundle.Data.Integrity }}" {{ end }} />
```

注意：
代码将会获取你的 `assets/css` 文件夹中的所有 CSS 文件。如果你喜欢将 CSS 文件放置在其他文件夹中，则需要修改第一行代码。另外，生成的 main.css 文件是存储在 hugo 内存中的，所以无法查看到。

## 安装 UnoCSS 依赖

首先如果你没有 package.json 这个文件的话需要先生成。

```bash
pnpm init
```

之后安装 UnoCSS 相关依赖，注意这里安装你需要的即可。具体可以查看 UnoCSS 文档。

```bash
pnpm install --save-dev @unocss/cli @unocss/preset-typography @unocss/preset-uno @unocss/preset-wind
```

## 创建 `uno.config.ts` 并导入预设

```ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
});
```

## 添加运行脚本到 package.json

```json
"scripts": {
    "uno-dev": "unocss \"layouts/**/**/*.html\" --watch -o ./assets/css/uno.css",
    "uno-build": "unocss \"layouts/**/**/*.html\" -o ./assets/css/uno.css"
  },
```

之后运行 `pnpm run uno-dev`， UnoCSS 应该就可以正常使用了。

另外：
如果想一行命令同时运行 `hugo server` 和 `unocss` 的话可以使用 `concurrently` 插件。在 `package.json` 脚本中添加

```bash
"dev": "concurrently \"pnpm:dev\" \"pnpm:uno-dev\""
```

之后，运行 `npm run dev` 便可使用一条命令在一个窗口中运行这两个命令了。

## 最后

整个导入的过程其实还是踩了不少坑。例如：

1. 获取 CSS 文件的时候，参考链接中是将 CSS 文件放置在 `css/uno/main.css` 路径下，但是使用 `resources.Match "css/*.css"` 是无法获取到这个文件的。所以如果你也喜欢将它放置在子目录下，需要将这行代码修改成：`resources.Match "css/**/*.css"`。但是如果只修改成 `resources.Match "css/**/*.css"`，Hugo 又只会获取 CSS 所有子文件夹中的 CSS 文件，CSS 文件夹下的 CSS 文件是无法获取到的（这里虽然使用了 `**` 通配符，但是是没有作用的）。
2. 参考链接中使用的版本较低，`unocss/preset-typography` 现在需要使用 `@unocss/preset-typography` 来安装。
3. 参考链接中也没有 `scripts`，这还是在作者提供的 `hugo + UnoCSS` 模板中找到的。不过这一步由于之前使用 TailwindCSS 的时候在这里踩过坑，所以还算顺利。

[参考链接](https://github.com/unocss/unocss/discussions/555)
