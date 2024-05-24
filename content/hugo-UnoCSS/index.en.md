---
title: "Using UnoCSS in Hugo"
date: 2024-01-06T17:28:47+08:00
lastmod: 2024-01-06T17:28:47+08:00
draft: false
tags: [hugo, UnoCSS]
---

This website uses the Hugo static site generator and UnoCSS for CSS. Below is a record of how to use UnoCSS in Hugo.

## Modifying the Theme File's CSS Styles

````HTML
{{- $cssbundle := resources.Match "css/*.css" | resources.Concat "css/main.css" -}}
{{- if hugo.IsProduction }}
{{ $cssbundle = $cssbundle | minify | fingerprint }} {{ end -}}
<link rel="stylesheet" href="{{ $cssbundle.RelPermalink }}"
{{ if hugo.IsProduction }} integrity="{{ $cssbundle.Data.Integrity }}" {{ end }} />
Note:
This code will retrieve all CSS files from your assets/css folder. If you prefer to place CSS files in other folders, you need to modify the first line of code. Additionally, the generated main.css file is stored in Hugo’s memory, so it cannot be viewed directly.

## Installing UnoCSS Dependencies

First, if you don’t have a package.json file, you need to generate one.

```bash
pnpm init
````

Then install the necessary UnoCSS dependencies. Install only what you need. You can refer to the UnoCSS documentation for details.

```bash
pnpm install --save-dev @unocss/cli @unocss/preset-typography @unocss/preset-uno @unocss/preset-wind
```

## Creating uno.config.ts and Importing Presets

```ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
});
```

## Adding Run Scripts to package.json

```json
"scripts": {
    "uno-dev": "unocss \"layouts/**/**/*.html\" --watch -o ./assets/css/uno.css",
    "uno-build": "unocss \"layouts/**/**/*.html\" -o ./assets/css/uno.css"
  },
```

Afterwards, run pnpm run uno-dev, and UnoCSS should work properly.

Additionally:
If you want to run hugo server and unocss with a single command, you can use the concurrently plugin. Add the following to the scripts section in package.json:

```json
"dev": "concurrently \"pnpm:dev\" \"pnpm:uno-dev\""
```

Then, you can run both commands in one window with npm run dev.

## Final Thoughts

There were quite a few pitfalls during the integration process, such as:
1.When retrieving CSS files, the reference link placed CSS files in the css/uno/main.css path, but using resources.Match "css/_.css" couldn’t retrieve this file. So, if you also prefer to place it in a subdirectory, you need to modify this line to resources.Match "css/\*\*/_.css". However, if you only change it to resources.Match "css/**/\*.css", Hugo will only retrieve CSS files from all subfolders, and CSS files in the root CSS folder won’t be retrieved (even though the ** wildcard is used, it doesn’t work here).
2.The reference link used an older version, and now you need to use @unocss/preset-typography instead of unocss/preset-typography for installation.
3.The reference link also didn’t include scripts; this was found in the author’s provided hugo + UnoCSS template. However, this step went smoothly since I had encountered a similar issue when using TailwindCSS before.

Then run pnpm run dev to start both Hugo and UnoCSS.
