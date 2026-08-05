#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 8 个分类落地页（content/categories/<slug>/_index.md）"""
import os

OUT = os.path.expanduser("~/Documents/New project/zhaoshuba-hugo/content/categories")
os.makedirs(OUT, exist_ok=True)

CATS = [
dict(slug="ebook-downloads", title="电子书下载", icon="📥",
     desc="免费合法的电子书下载源：公版书库、开放教材与数字图书馆，全部无版权风险。",
     body="""本站"电子书下载"分类只收录**正版、公版与开放授权**的下载来源，不收录任何盗版电子书站点。

如果你在找英文经典原著，[Project Gutenberg](/sites/gutenberg/) 与 [Standard Ebooks](/sites/standard-ebooks/) 是最可靠的两个起点：前者量大，后者排版精。学习类需求看 [OpenStax](/sites/openstax/) 的开放教材；查找绝版书、历史文献则推荐 [Internet Archive 文献区](/sites/internet-archive-texts/)。

> 提示：涉及版权的书请通过正规书城购买或借阅，本站不提供也不导流任何盗版资源。"""),

dict(slug="online-reading", title="在线阅读", icon="📖",
     desc="无需下载、打开即读的在线书城与开放图书馆，电脑手机都能用。",
     body=""""在线阅读"分类收录打开浏览器就能读的平台：既有 [微信读书](/sites/wechat-read/)、[豆瓣阅读](/sites/douban-read/) 这样的中文书城，也有 [Open Library](/sites/open-library/)、[Google Books](/sites/google-books/) 这样的开放图书馆，还有 [维基文库](/sites/wikisource/) 这样的公版文本库。

中文用户建议从微信读书入手（书库全、笔记体验好）；研究旧书和稀缺文献，[Internet Archive BookReader](/sites/ia-bookreader/) 的扫描本馆藏是别处找不到的。"""),

dict(slug="book-recommendations", title="书单推荐", icon="🧭",
     desc="书评、评分与书单发现平台：中文看豆瓣，英文看 Goodreads 与 StoryGraph。",
     body=""""书单推荐"分类收录帮你想"读什么"的平台。[豆瓣读书](/sites/douban-books/) 是中文选书第一站，评分与豆列体系成熟；英文书则看 [Goodreads](/sites/goodreads/) 与 [The StoryGraph](/sites/storygraph/)，后者用情绪、节奏等维度推荐，比单纯评分更细。

追系列小说用 [Fantastic Fiction](/sites/fantastic-fiction/) 查阅读顺序；书荒时可以用 [What Should I Read Next](/sites/what-should-i-read-next/) 输入一本喜欢的书快速找同类。"""),

dict(slug="magazines-comics", title="杂志漫画", icon="📰",
     desc="正版漫画平台与优质中文杂志：国漫日漫官方渠道 + 《十月》《中国国家地理》。",
     body=""""杂志漫画"分类收录官方授权的漫画平台与优质中文期刊：[哔哩哔哩漫画](/sites/bilibili-manga/) 与 [腾讯动漫](/sites/tencent-comics/) 覆盖主流国漫日漫，[ComicWalker](/sites/comic-walker/) 是角川官方日漫平台。

杂志方面收录了《[十月](/sites/shiyue-magazine/)》（当代文学）、《[中国国家地理](/sites/cngeography/)》与《[博物](/sites/natural-history-mag/)》（自然科普）三份刊物的官方网站。本站不收录任何盗版漫画聚合站。"""),

dict(slug="academic-journals", title="学术文献", icon="🧪",
     desc="论文检索与开放获取资源：Google Scholar、PubMed、arXiv、DOAJ 等。",
     body=""""学术文献"分类面向研究者与学生，收录权威的论文检索与开放获取平台：

- 综合检索：[Google Scholar](/sites/google-scholar/) 覆盖全学科；[Semantic Scholar](/sites/semantic-scholar/) 的 AI 引用分析适合做文献综述
- 学科专项：[PubMed](/sites/pubmed/)（医学）、[arXiv](/sites/arxiv/)（物理/数学/CS 预印本）
- 开放获取：[DOAJ](/sites/doaj/) 是核实 OA 期刊的权威目录，[JSTOR 开放内容](/sites/jstor-open/) 提供人文社科免费文献

全部为免费可访问的学术基础设施。"""),

dict(slug="classical-texts", title="数字古籍", icon="🏛️",
     desc="中文古籍数字化资源：全文检索、善本影像与开放文本库。",
     body=""""数字古籍"分类收录中文古籍数字化的主要平台。[中国哲学书电子化计划](/sites/chinese-text-project/)（CText）是全文检索与研究工具最全的入口；[中华古籍资源库](/sites/nlc-classics/) 提供国家图书馆善本影像；[维基文库古籍](/sites/wikisource-classics/) 提供可自由使用的开放文本。

阅读古文遇到生字，配合[汉典古籍](/sites/handian-classics/)的字典工具使用效果最佳。"""),

dict(slug="audiobooks", title="有声书", icon="🎧",
     desc="中文听书平台与英文有声书库：喜马拉雅、LibriVox、Audible 等。",
     body=""""有声书"分类兼顾中文与英文两类需求：

- **中文**：[喜马拉雅](/sites/ximalaya/) 内容最全，[懒人听书](/sites/lrts/) 网文有声化强，[微信听书](/sites/wechat-listen/) 与 [番茄畅听](/sites/tomato-audiobooks/) 各有免费内容
- **英文免费**：[LibriVox](/sites/librivox/) 是志愿者朗读的公版书库，[Loyal Books](/sites/loyal-books/) 分类友好
- **英文订阅**：[Audible](/sites/audible/) 资源最丰富，[Spotify 有声书](/sites/spotify-audiobooks/) 适合已是会员的用户"""),

dict(slug="reading-tools", title="阅读工具", icon="🛠️",
     desc="电子书管理与转换工具：Calibre、Sigil、Pandoc、Koodo Reader 等。",
     body=""""阅读工具"分类收录管理、转换、阅读电子书的软件工具：

- **管理转换**：[Calibre](/sites/calibre/) 是本地书库管理全能选手，[Pandoc](/sites/pandoc/) 适合命令行党
- **制作编辑**：[Sigil](/sites/sigil/) 是开源 EPUB 编辑器
- **在线转换**：[CloudConvert](/sites/cloudconvert/) 与 [Zamzar](/sites/zamzar/) 免安装即用
- **跨平台阅读**：[Koodo Reader](/sites/koodo-reader/) 界面现代，支持多格式

全部为免费或免费额度可用的工具。"""),
]

for c in CATS:
    d = os.path.join(OUT, c["slug"])
    os.makedirs(d, exist_ok=True)
    md = f"""---
title: "{c['title']}"
icon: "{c['icon']}"
description: "{c['desc']}"
---

{c['body'].strip()}
"""
    with open(os.path.join(d, "_index.md"), "w", encoding="utf-8") as f:
        f.write(md)
    print(f"✓ {c['slug']}")

print(f"共生成 {len(CATS)} 个分类页")
