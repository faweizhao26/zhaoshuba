#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成找书吧站点内容：第一部分 22 站"""
import os

OUT = os.path.expanduser("~/Documents/New project/zhaoshuba-hugo/content/sites")
os.makedirs(OUT, exist_ok=True)

SITES = [
# ============ ebook-downloads 电子书下载 (5) ============
dict(slug="gutenberg", title="Project Gutenberg", url="https://www.gutenberg.org/",
     cat="ebook-downloads", cat_name="电子书下载",
     tags=["公版书", "英文", "EPUB"],
     desc="全球最古老、最大的公版电子书库，收录 7 万+ 免费电子书，支持 EPUB/Kindle/HTML 等格式。",
     lang="英文为主", price="完全免费",
     body="""## 站点简介

Project Gutenberg（古登堡计划）是全球历史最悠久的电子书库，1971 年创立，至今收录超过 7 万本版权已进入公有领域的经典书籍。所有书籍均由志愿者校对，提供 EPUB、Kindle（MOBI/AZW3）、HTML、纯文本等格式免费下载，无需注册。

## 适合谁

- 想读英文经典文学、哲学、历史原著的人（莎士比亚、狄更斯、托尔斯泰、柏拉图都在这里）
- 需要公版书做研究、翻译或再创作的人
- 喜欢无 DRM、可自由拷贝格式的读者

## 使用提示

- 首页可以按作者、标题、语言、分类浏览；高级搜索支持按语言过滤
- 中文公版书数量有限，中文内容建议配合 Wikisource 中文文库使用
- 站内书都没有封面和精排版，追求阅读体验可以下载后配合 Calibre 处理"""),

dict(slug="standard-ebooks", title="Standard Ebooks", url="https://standardebooks.org/",
     cat="ebook-downloads", cat_name="电子书下载",
     tags=["公版书", "排版", "EPUB"],
     desc="对公版书做专业级排版与校对的免费电子书项目，阅读体验接近商业出版。",
     lang="英文", price="完全免费",
     body="""## 站点简介

Standard Ebooks 是一个志愿者项目，把古登堡等来源的公版书重新排版、校对、加封面和规范元数据，产出的 EPUB 质量远超原始文本，被很多读者认为是公版书里"排版最讲究"的来源。目前收录约 1000+ 本，全部免费。

## 适合谁

- 对排版、字体、阅读体验有要求的英文原著读者
- Kindle/电子墨水屏用户（其 EPUB 转制后效果很好）
- 想收藏高质量无 DRM 经典书的读者

## 使用提示

- 每本书提供 EPUB、AZW3（Kindle）、KEPUB（Kobo）三种格式
- 网站本身就是电子书设计审美的范例，值得逛逛
- 项目全部开源，也可以关注其 GitHub 上的排版规范"""),

dict(slug="manybooks", title="ManyBooks", url="https://manybooks.net/",
     cat="ebook-downloads", cat_name="电子书下载",
     tags=["免费", "小说", "下载"],
     desc="提供免费与折扣电子书的下载与发现平台，公版书免费，现代书常有折扣。",
     lang="英文为主", price="免费+付费",
     body="""## 站点简介

ManyBooks 是一个老牌英文电子书网站，核心是 5 万+ 本免费公版书，同时销售部分现代出版物的折扣电子书。站点提供分类浏览、作者检索和"免费书每日更新"。

## 适合谁

- 想系统淘免费英文小说的读者
- 喜欢按题材（科幻、悬疑、言情、历史）找书的人
- 想先试读再决定是否购买现代书的人

## 使用提示

- 免费书集中在公版与作者授权免费的书，付费区价格通常低于主流书城
- 支持直接下载 EPUB 并同步到 Kindle 设备
- 注册后可以保存书单和阅读历史"""),

dict(slug="openstax", title="OpenStax", url="https://openstax.org/subjects",
     cat="ebook-downloads", cat_name="电子书下载",
     tags=["教材", "学习", "PDF"],
     desc="莱斯大学运营的开放教材库，大学教材免费在线阅读与下载，覆盖数理化生经管等学科。",
     lang="英文", price="完全免费",
     body="""## 站点简介

OpenStax 由美国莱斯大学创办，出版经过同行评审的大学开放教材（Open Textbooks），覆盖数学、物理、生物、化学、经济、心理学等主流学科。教材全部免费在线阅读，也可免费下载 PDF 或购买印刷版（成本价）。

## 适合谁

- 大学生、自学者、备考者
- 需要高质量英文教材做参考的教师
- 想省钱又不想牺牲内容质量的学习者

## 使用提示

- 按学科浏览或直接搜索书名；大部分教材有配套练习
- 中文读者可以把英文教材当作专业英语阅读材料
- 教材有版本更新，下载时留意最新 edition"""),

dict(slug="internet-archive-texts", title="Internet Archive 文献区", url="https://archive.org/details/texts",
     cat="ebook-downloads", cat_name="电子书下载",
     tags=["档案", "历史", "PDF"],
     desc="互联网档案馆的文献库，收录数千万册图书、期刊与历史文献，支持借阅与下载。",
     lang="多语言", price="免费借阅",
     body="""## 站点简介

Internet Archive（互联网档案馆）是全球最大的数字图书馆之一，其 Texts 文献区收录超过 4000 万件文献，包括扫描图书、期刊、乐谱、手稿等。公版书可以直接下载，受版权保护的书通过"受控数字借阅"（Controlled Digital Lending）模式在线借阅。

## 适合谁

- 查找稀缺旧书、绝版书、历史文献的研究者
- 需要多语种扫描版图书的读者
- 对"人类共同记忆数字化"有兴趣的人

## 使用提示

- 借阅需要免费注册账号，借期通常 1 小时到 14 天不等
- 扫描版质量参差，检索时可用 Full-text search 精确到页
- 与 Open Library 账号体系互通，一个账号两处可用"""),

# ============ online-reading 在线阅读 (6) ============
dict(slug="open-library", title="Open Library", url="https://openlibrary.org/",
     cat="online-reading", cat_name="在线阅读",
     tags=["在线阅读", "借阅", "英文"],
     desc="互联网档案馆旗下开放图书馆，数百万册图书可搜索、在线借阅与阅读。",
     lang="英文为主", price="免费借阅",
     body="""## 站点简介

Open Library 是 Internet Archive 旗下的开放图书馆项目，目标是"为每一本出版过的书建立一个网页"。目前收录数千万条书目记录，其中数百万册有数字化副本，可以在线借阅和阅读。

## 适合谁

- 想在线读英文图书、不一定要下载的人
- 查书目信息（版本、出版年、封面）的读者
- 公版书阅读爱好者

## 使用提示

- 免费注册后即可借阅受版权保护的数字化图书（1 小时/2 周两种时长）
- 阅读界面支持书签、翻页和目录跳转
- 与 Internet Archive 账号互通"""),

dict(slug="google-books", title="Google Books", url="https://books.google.com/",
     cat="online-reading", cat_name="在线阅读",
     tags=["检索", "预览", "多语言"],
     desc="Google 图书搜索，可检索海量书目并在线预览，部分公版书可全文阅读。",
     lang="多语言", price="免费+购买",
     body="""## 站点简介

Google Books 是 Google 的图书搜索服务，扫描了全球各大图书馆的数千万册图书。可以按全文检索内容（很多书能搜到具体段落），公版书提供全文在线阅读，版权书提供部分预览或购买跳转。

## 适合谁

- 想确认一句话、一个典故出自哪本书的研究者
- 找书前先预览内容、判断值不值得买的读者
- 想读多语种公版书的读者

## 使用提示

- 全文搜索是杀手锏：直接搜句子就能定位到书和页码
- "我的书库"可以整理个人书单
- 中文书收录量很大，预览功能对选书很有帮助"""),

dict(slug="wikisource", title="Wikisource 维基文库", url="https://wikisource.org/",
     cat="online-reading", cat_name="在线阅读",
     tags=["文库", "公版", "在线"],
     desc="维基媒体基金会旗下的开放文本库，收录公版文献，支持在线阅读与校对。",
     lang="多语言", price="完全免费",
     body="""## 站点简介

Wikisource（维基文库）是维基媒体基金会旗下的免费图书馆，收录进入公有领域的原始文本，包括文学作品、历史文献、法律条文、演讲稿等，全球有 70+ 语言版本，中文文库（zh.wikisource.org）内容也在持续增长。

## 适合谁

- 读公版中文古籍与近代文献的读者
- 需要可引用、可核对的原文文本的人
- 维基生态用户（与维基百科、维基词典联动）

## 使用提示

- 中文内容质量看条目：有校对标记的条目可信度高
- 支持"原文对照"模式，扫描页与文本并行显示
- 与 Wikisource 古籍（古典文本）分类配合使用"""),

dict(slug="douban-read", title="豆瓣阅读", url="https://read.douban.com/",
     cat="online-reading", cat_name="在线阅读",
     tags=["中文", "原创", "书城"],
     desc="豆瓣旗下原创文学与电子书平台，中文书城，支持在线购买与阅读。",
     lang="中文", price="付费为主",
     body="""## 站点简介

豆瓣阅读是豆瓣旗下的电子书与原创文学平台，既销售出版社授权电子书，也连载大量站内原创作品（小说、非虚构、专栏）。与豆瓣读书的书评、评分体系打通，选书参考信息丰富。

## 适合谁

- 喜欢中文原创文学、网络连载的读者
- 豆瓣用户，想在豆瓣生态内完成"发现-购买-阅读-评论"闭环的人
- 关注本土青年写作者的人

## 使用提示

- 经常有免费书与限时折扣，可以先关注"限免"栏目
- 原创连载区是特色，很多作品边写边更
- 阅读器支持划线、笔记，可与豆瓣广播联动"""),

dict(slug="wechat-read", title="微信读书", url="https://weread.qq.com/",
     cat="online-reading", cat_name="在线阅读",
     tags=["中文", "笔记", "阅读"],
     desc="腾讯微信读书 Web 端，海量中文书库，划线笔记体验优秀，会员制阅读。",
     lang="中文", price="免费+会员",
     body="""## 站点简介

微信读书是腾讯出品的阅读应用，Web 端（weread.qq.com）无需安装即可使用。书库覆盖中文出版物非常全，划线、笔记、书评等社交阅读功能成熟，是中文电子阅读的主流选择之一。

## 适合谁

- 中文出版物读者（新书热书上架速度快）
- 喜欢"边读边划线、看他人书评"社交化阅读的人
- 通勤阅读、多设备同步的读者

## 使用提示

- 无限卡/会员制度下热门书有阅读时长限制，冷门书基本畅读
- 划线笔记可导出，适合做读书笔记的人
- 与微信好友互动（读书排行、书单分享）是其特色"""),

dict(slug="ia-bookreader", title="Internet Archive BookReader", url="https://archive.org/details/books",
     cat="online-reading", cat_name="在线阅读",
     tags=["在线阅读", "档案", "多语言"],
     desc="互联网档案馆在线阅读入口，数百万册图书与文献可直接在浏览器中翻阅。",
     lang="多语言", price="免费",
     body="""## 站点简介

Internet Archive 的 BookReader 是在线阅读入口，所有数字化图书都可以直接在浏览器中翻页阅读，无需下载。配合全文检索，可以快速定位扫描页中的任意词句。

## 适合谁

- 想快速翻看某本书、不确定是否要借阅的人
- 历史文献与旧刊研究者（扫描质量总体不错）
- 不方便下载大文件的移动端读者

## 使用提示

- 浏览器内即可翻页、缩放、全屏，支持键盘操作
- "Search inside"可对全书做全文检索
- 与 Texts 区共用馆藏，只是浏览方式不同"""),

# ============ book-recommendations 书单推荐 (5) ============
dict(slug="douban-books", title="豆瓣读书", url="https://book.douban.com/",
     cat="book-recommendations", cat_name="书单推荐",
     tags=["书评", "评分", "推荐"],
     desc="中文世界最大的图书社区，书评、评分与书单最全，选书必看。",
     lang="中文", price="免费",
     body="""## 站点简介

豆瓣读书是中文互联网最重要的图书社区，几乎每本中文出版的书都有条目，用户评分、书评、豆列（书单）构成了独特的选书参考体系。高分书单、年度榜单是很多人找书的起点。

## 适合谁

- 选书前查口碑、看评价的读者
- 喜欢按豆列/书单系统阅读的人
- 想记录"想读-在读-读过"阅读轨迹的人

## 使用提示

- 看评分时注意评价人数：8.5 分但只有几十人评，参考意义有限
- 豆列是宝藏，很多资深读者维护着高质量主题书单
- 年度读书榜单适合快速了解当年中文出版的好书"""),

dict(slug="goodreads", title="Goodreads", url="https://www.goodreads.com/",
     cat="book-recommendations", cat_name="书单推荐",
     tags=["英文", "社区", "评分"],
     desc="全球最大英文读书社区，书评、评分、年度书单与阅读挑战一应俱全。",
     lang="英文", price="免费",
     body="""## 站点简介

Goodreads 是全球最大的英文图书社区（亚马逊旗下），拥有海量书目与用户评分。年度 Goodreads Choice Awards 评选、主题书单、Reading Challenge 是其标志性功能，英文书选书绕不开它。

## 适合谁

- 英文原版书读者
- 想参加年度阅读挑战、跟踪阅读目标的人
- 需要大量英文书单灵感的人

## 使用提示

- "Listopia"主题书单区质量参差但量极大，可按需筛选
- 评分体系参考同豆瓣：注意评分人数
- 与 Amazon 账号联动，可同步 Kindle 阅读记录"""),

dict(slug="storygraph", title="The StoryGraph", url="https://app.thestorygraph.com/",
     cat="book-recommendations", cat_name="书单推荐",
     tags=["推荐", "可视化", "社区"],
     desc="用数据可视化分析阅读偏好的荐书平台，情绪、节奏、篇幅维度比评分更细。",
     lang="英文", price="免费+会员",
     body="""## 站点简介

The StoryGraph 是 Goodreads 的替代型荐书平台，特色是用结构化标签描述书（情绪、节奏、篇幅、题材），并基于你的阅读历史做推荐。数据可视化面板让你清楚看到自己的阅读偏好。

## 适合谁

- 对"评分之外维度"（快节奏/慢热、治愈/致郁）敏感的读者
- 想摆脱算法黑盒、用数据理解自己阅读偏好的人
- 对 Goodreads 体验不满意的英文书读者

## 使用提示

- 免费版功能已够用，Plus 会员解锁详细统计
- "Read-alikes"（类似书）推荐质量不错
- 支持从 Goodreads 一键导入阅读历史"""),

dict(slug="fantastic-fiction", title="Fantastic Fiction", url="https://www.fantasticfiction.com/",
     cat="book-recommendations", cat_name="书单推荐",
     tags=["小说", "作者", "系列"],
     desc="专注小说作者与系列的数据库，按作者追更、查系列顺序非常好用。",
     lang="英文", price="免费",
     body="""## 站点简介

Fantastic Fiction 是一个专注小说（尤其科幻、奇幻、推理、惊悚）的数据库，以"作者为中心"组织：每位作家的全部作品、系列顺序、出版年一目了然，还提供同风格作家推荐。

## 适合谁

- 系列小说读者（再也不怕搞错阅读顺序）
- 追特定作家、想找其全部作品的读者
- 科幻/奇幻/推理类型爱好者

## 使用提示

- 每个系列都有明确的阅读顺序列表
- 作者页会推荐"喜欢该作者的人也会喜欢"
- 书目信息更新及时，适合用来做阅读清单"""),

dict(slug="what-should-i-read-next", title="What Should I Read Next", url="https://www.whatshouldireadnext.com/",
     cat="book-recommendations", cat_name="书单推荐",
     tags=["推荐", "发现", "英文"],
     desc="输入一本喜欢的书，快速获得相似书籍推荐的小工具。",
     lang="英文", price="免费",
     body="""## 站点简介

What Should I Read Next 是一个极简荐书工具：输入你喜欢的书名，站点会返回一系列"相似书"推荐。适合书荒时快速获得灵感，推荐结果来自其用户社区的数据。

## 适合谁

- 书荒救急、想要"读完了这本接下来读什么"答案的人
- 不太用社交书评网站、只想要快速推荐的人

## 使用提示

- 书名尽量输入准确，推荐质量更高
- 推荐结果按相似度排列，可点进书目详情
- 适合与 Goodreads/豆瓣配合：先找相似书，再去查评分"""),
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
