#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成找书吧站点内容：第三部分 阅读工具 6 站"""
import os

OUT = os.path.expanduser("~/Documents/New project/zhaoshuba-hugo/content/sites")
os.makedirs(OUT, exist_ok=True)

SITES = [
dict(slug="calibre", title="Calibre", url="https://calibre-ebook.com/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["格式转换", "管理", "桌面端"],
     desc="免费开源的本地电子书管理器，管理、转换、传输一站式解决。",
     lang="多语言（含中文）", price="完全免费",
     body="""## 站点简介

Calibre 是免费开源的电子书管理软件（支持 Windows/macOS/Linux），被誉为"电子书界的瑞士军刀"：书库管理、格式转换（EPUB/MOBI/AZW3/PDF 互转）、元数据编辑、推送 Kindle、在线书城下载等功能一应俱全。

## 适合谁

- 本地电子书数量多、需要系统管理的人
- 需要在 Kindle、手机、平板之间转格式传书的人
- 喜欢开源软件、愿意折腾配置的人

## 使用提示

- 界面功能多，新手建议先从"添加书籍 + 转换 + 发送到设备"学起
- 支持中文界面，设置里切换
- 插件生态丰富（去重、刮削封面等），按需安装"""),

dict(slug="sigil", title="Sigil", url="https://sigil-ebook.com/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["EPUB", "编辑", "制作"],
     desc="免费开源的 EPUB 编辑器，适合制作和修改电子书。",
     lang="多语言（含中文）", price="完全免费",
     body="""## 站点简介

Sigil 是免费开源的 EPUB 编辑器，支持可视化编辑与代码编辑双模式，可以制作全新 EPUB、修改排版、批量替换文本、管理章节与元数据，是动手党制作电子书的标配工具。

## 适合谁

- 想自己制作/修改 EPUB 电子书的人
- 对排版有要求、愿意调 CSS 的读者
- 电子书爱好者中的"折腾派"

## 使用提示

- 学习曲线比 Calibre 高，建议先了解 EPUB 结构（XHTML+CSS）
- 支持正则表达式查找替换，批量处理文本利器
- 修改前先备份原文件，避免格式错乱"""),

dict(slug="pandoc", title="Pandoc", url="https://pandoc.org/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["格式转换", "命令行", "格式"],
     desc="万能文档转换器，Markdown、EPUB、PDF、HTML 等几十种格式互转。",
     lang="命令行工具", price="完全免费",
     body="""## 站点简介

Pandoc 是命令行下的"文档转换瑞士军刀"，支持 Markdown、HTML、LaTeX、EPUB、PDF、docx 等数十种格式互相转换。写作、排版、生成电子书一条命令搞定。

## 适合谁

- 用 Markdown 写作、需要导出 EPUB/PDF 的人
- 程序员与喜欢命令行工作流的人
- 需要批量处理文档格式的编辑/译者

## 使用提示

- 配合模板可以定制 EPUB 排版样式
- `pandoc in.md -o out.epub` 是最常用的入门命令
- 生成 PDF 需要额外安装 LaTeX 引擎（如 XeLaTeX，支持中文）"""),

dict(slug="cloudconvert", title="CloudConvert", url="https://cloudconvert.com/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["在线转换", "格式", "工具"],
     desc="在线文件格式转换服务，支持 EPUB、MOBI、PDF 等 200+ 格式。",
     lang="多语言", price="免费额度+付费",
     body="""## 站点简介

CloudConvert 是在线文件转换服务，支持 200 多种格式互转，包括电子书常用格式（EPUB、MOBI、AZW3、PDF、TXT）。无需安装软件，浏览器上传即转，适合偶尔转换的轻度用户。

## 适合谁

- 不想安装本地软件、偶尔转一次格式的人
- 需要在手机/平板上转换文件的用户
- 临时把文档转成电子书格式的人

## 使用提示

- 免费版有每日转换额度与文件大小限制，够轻度使用
- 注意上传的文档隐私：敏感文件建议本地工具处理
- 批量转换与高级选项（如转换参数）为付费功能"""),

dict(slug="zamzar", title="Zamzar", url="https://www.zamzar.com/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["在线转换", "格式", "便捷"],
     desc="老牌在线格式转换站，操作简单，支持电子书格式转换。",
     lang="英文", price="免费额度+付费",
     body="""## 站点简介

Zamzar 是运营多年的在线转换服务，界面极简：选文件、选目标格式、转换、下载。支持视频、音频、文档、电子书等格式，是"临时转个格式"场景下最省心的选择之一。

## 适合谁

- 需要简单快速完成单次转换的人
- 不熟悉命令行、不想装软件的用户
- 转换电子书格式到阅读器兼容格式的人

## 使用提示

- 免费版有文件大小与每日转换数量限制
- 转换结果通过邮件/下载链接提供
- 与 CloudConvert 二选一即可，哪个顺手用哪个"""),

dict(slug="koodo-reader", title="Koodo Reader", url="https://www.koodoreader.com/",
     cat="reading-tools", cat_name="阅读工具",
     tags=["阅读器", "跨平台", "笔记"],
     desc="免费开源的跨平台电子书阅读器，支持 EPUB/PDF/MOBI 等格式。",
     lang="多语言（含中文）", price="完全免费",
     body="""## 站点简介

Koodo Reader 是免费开源的跨平台电子书阅读器，支持 Windows、macOS、Linux 和 Web 版，可读 EPUB、PDF、MOBI、AZW3、TXT 等格式，自带书架管理、划线笔记、翻译与朗读功能，界面现代美观。

## 适合谁

- 不想被单一平台绑定的阅读器用户
- 需要在电脑上读多种格式电子书的人
- 喜欢开源软件、重视界面设计的人

## 使用提示

- Web 版无需安装，打开即用；桌面版体验更完整
- 支持 OneDrive/网盘同步书库
- 笔记可导出，配合知识管理工具使用"""),
]

def front_matter(s):
    tags = ", ".join(f'"{t}"' for t in s["tags"])
    return f"""---
title: "{s['title']}"
external_url: "{s['url']}"
external_domain: "{s['url'].split('//')[1].split('/')[0]}"
categories: ["{s['cat']}"]
category_name: "{s['cat_name']}"
tags: [{tags}]
description: "{s['desc']}"
language: "{s['lang']}"
pricing: "{s['price']}"
weight: {s['weight']}
date: 2026-08-05
---
"""

for i, s in enumerate(SITES, start=1):
    s["weight"] = i * 10
    md = front_matter(s) + s["body"].strip() + "\n"
    with open(os.path.join(OUT, s["slug"] + ".md"), "w", encoding="utf-8") as f:
        f.write(md)
    print(f"✓ {s['slug']}")

print(f"共生成 {len(SITES)} 个站点页")
