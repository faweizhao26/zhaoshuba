const CATEGORY_ORDER_ZH = [
  "电子书下载",
  "电子书在线阅读",
  "书单/书籍推荐",
  "杂志漫画",
  "学术期刊",
  "数字古籍",
  "有声书",
  "阅读软件/工具",
];

const CATEGORY_ICON_ZH = {
  电子书下载: "📥",
  电子书在线阅读: "📖",
  "书单/书籍推荐": "🧭",
  杂志漫画: "📰",
  学术期刊: "🧪",
  数字古籍: "🏛️",
  有声书: "🎧",
  "阅读软件/工具": "🛠️",
};

const BUILTIN_SITES_ZH = [
  {
    title: "Z-Library",
    url: "https://z-library.la/",
    category: "电子书下载",
    desc: "海量电子书，支持多种格式下载。",
    tags: ["中英文", "EPUB/MOBI/AZW3/PDF"],
  },
  {
    title: "安娜的档案",
    url: "https://zh.annas-archive.li/",
    category: "电子书下载",
    desc: "人类历史上最大的完全开放的图书馆。",
    tags: ["中英文", "EPUB"],
  },
  {
    title: "Liber3",
    url: "https://liber3.eth.limo/#/",
    category: "电子书下载",
    desc: "海量电子书。",
    tags: ["中英文", "EPUB"],
  },
  {
    title: "小力盘搜索",
    url: "https://www.xiaolipan.com/index.html",
    category: "电子书下载",
    desc: "海量电子书，支持多种格式下载。",
    tags: ["中英文", "EPUB/PDF"],
  },
  {
    title: "24h 搜书",
    url: "https://24hbook.store/",
    category: "电子书下载",
    desc: "海量电子书。",
    tags: ["中英文", "EPUB"],
  },
  {
    title: "无名图书",
    url: "https://www.book345.com/",
    category: "电子书下载",
    desc: "海量电子书。",
    tags: ["中英文", "EPUB"],
  },
  {
    title: "书籍知识库",
    url: "https://www.zhishikoo.com/",
    category: "电子书下载",
    desc: "海量电子书，支持多种格式下载。",
    tags: ["中英文", "EPUB/MOBI/AZW3/PDF"],
  },
  {
    title: "Project Gutenberg",
    url: "https://www.gutenberg.org/",
    category: "电子书下载",
    desc: "海量公版电子书，支持多种格式下载。",
    tags: ["公版书", "英文", "EPUB"],
  },
  {
    title: "Standard Ebooks",
    url: "https://standardebooks.org/",
    category: "电子书下载",
    desc: "高质量排版的免费经典电子书。",
    tags: ["公版书", "排版", "EPUB"],
  },
  {
    title: "ManyBooks",
    url: "https://manybooks.net/",
    category: "电子书下载",
    desc: "提供免费和折扣电子书下载与推荐。",
    tags: ["免费", "小说", "下载"],
  },
  {
    title: "OpenStax",
    url: "https://openstax.org/subjects",
    category: "电子书下载",
    desc: "开放教材资源，适合学习与教学。",
    tags: ["教材", "学习", "PDF"],
  },
  {
    title: "Internet Archive Texts",
    url: "https://archive.org/details/texts",
    category: "电子书下载",
    desc: "互联网档案馆文献区，覆盖多语种图书。",
    tags: ["档案", "历史", "PDF"],
  },
  {
    title: "Open Library",
    url: "https://openlibrary.org/",
    category: "电子书在线阅读",
    desc: "支持在线借阅与阅读海量图书。",
    tags: ["在线阅读", "借阅", "英文"],
  },
  {
    title: "Google Books",
    url: "https://books.google.com/",
    category: "电子书在线阅读",
    desc: "图书检索与部分在线预览。",
    tags: ["检索", "预览", "多语言"],
  },
  {
    title: "Wikisource",
    url: "https://wikisource.org/",
    category: "电子书在线阅读",
    desc: "维基文库，开放文本在线阅读。",
    tags: ["文库", "公版", "在线"],
  },
  {
    title: "豆瓣阅读",
    url: "https://read.douban.com/",
    category: "电子书在线阅读",
    desc: "中文书城与原创作品在线阅读平台。",
    tags: ["中文", "原创", "书城"],
  },
  {
    title: "微信读书网页版",
    url: "https://weread.qq.com/",
    category: "电子书在线阅读",
    desc: "腾讯微信读书 Web 端，支持笔记与划线。",
    tags: ["中文", "笔记", "阅读"],
  },
  {
    title: "Internet Archive BookReader",
    url: "https://archive.org/details/books",
    category: "电子书在线阅读",
    desc: "互联网档案馆在线阅读入口，覆盖历史文献与图书。",
    tags: ["在线阅读", "档案馆", "多语种"],
  },
  {
    title: "豆瓣读书",
    url: "https://book.douban.com/",
    category: "书单/书籍推荐",
    desc: "中文书评、书单与高频热门推荐。",
    tags: ["书评", "评分", "推荐"],
  },
  {
    title: "书单来了",
    url: "https://mp.weixin.qq.com/s/wy9VRewPCOxzJwto3zHehw",
    category: "书单/书籍推荐",
    desc: "中文书评、书单与高频热门推荐。",
    tags: ["书评", "评分", "推荐"],
  },
  {
    title: "Goodreads",
    url: "https://www.goodreads.com/",
    category: "书单/书籍推荐",
    desc: "全球读书社区，擅长英文书单发现。",
    tags: ["英文", "社区", "评分"],
  },
  {
    title: "The StoryGraph",
    url: "https://app.thestorygraph.com/",
    category: "书单/书籍推荐",
    desc: "可视化阅读偏好分析和书籍推荐。",
    tags: ["推荐", "可视化", "社区"],
  },
  {
    title: "Fantastic Fiction",
    url: "https://www.fantasticfiction.com/",
    category: "书单/书籍推荐",
    desc: "按作者和系列发现相关作品。",
    tags: ["小说", "作者", "系列"],
  },
  {
    title: "What Should I Read Next",
    url: "https://www.whatshouldireadnext.com/",
    category: "书单/书籍推荐",
    desc: "输入一本书，发现相似书籍。",
    tags: ["推荐", "发现", "英文"],
  },
  {
    title: "MangaDex",
    url: "https://mangadex.org/",
    category: "杂志漫画",
    desc: "多语言漫画阅读与更新追踪。",
    tags: ["漫画", "多语言", "在线"],
  },
  {
    title: "ComicWalker",
    url: "https://comic-walker.com/",
    category: "杂志漫画",
    desc: "日本官方漫画在线平台（部分免费）。",
    tags: ["日漫", "官方", "在线"],
  },
  {
    title: "腾讯动漫",
    url: "https://ac.qq.com/",
    category: "杂志漫画",
    desc: "国漫与日漫内容平台。",
    tags: ["漫画", "中文", "连载"],
  },
  {
    title: "哔哩哔哩漫画",
    url: "https://manga.bilibili.com/",
    category: "杂志漫画",
    desc: "国漫与日漫内容平台。",
    tags: ["漫画", "中文", "连载"],
  },
  {
    title: "Manhuagui",
    url: "https://www.manhuagui.com/",
    category: "杂志漫画",
    desc: "漫画资源聚合平台。",
    tags: ["漫画", "中文", "更新"],
  },
  {
    title: "十月",
    url: "https://shiyuezazhi.com/sy/index.html",
    category: "杂志漫画",
    desc: "大型文学期刊。",
    tags: ["杂志", "中文", "文学"],
  },
  {
    title: "中国国家地理",
    url: "https://www.dili360.com/Cng/index/index.htm",
    category: "杂志漫画",
    desc: "大型科普杂志。",
    tags: ["杂志", "中文", "地理"],
  },
  {
    title: "博物",
    url: "https://www.dili360.com/nh/mag/detail/1001.htm",
    category: "杂志漫画",
    desc: "大型科普杂志。",
    tags: ["杂志", "中文", "生物"],
  },
  {
    title: "Google Scholar",
    url: "https://scholar.google.com/",
    category: "学术期刊",
    desc: "学术论文检索入口，覆盖广泛。",
    tags: ["论文", "检索", "学术"],
  },
  {
    title: "DOAJ",
    url: "https://doaj.org/",
    category: "学术期刊",
    desc: "开放获取期刊目录。",
    tags: ["开源期刊", "OA", "学术"],
  },
  {
    title: "JSTOR Open Content",
    url: "https://about.jstor.org/oa-and-free/",
    category: "学术期刊",
    desc: "JSTOR 开放内容资源页面。",
    tags: ["期刊", "人文", "开放"],
  },
  {
    title: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    category: "学术期刊",
    desc: "医学与生命科学论文检索数据库。",
    tags: ["医学", "检索", "论文"],
  },
  {
    title: "arXiv",
    url: "https://arxiv.org/",
    category: "学术期刊",
    desc: "预印本论文平台，理工科常用。",
    tags: ["预印本", "理工", "科研"],
  },
  {
    title: "Semantic Scholar",
    url: "https://www.semanticscholar.org/",
    category: "学术期刊",
    desc: "AI 驱动的论文检索与引用分析。",
    tags: ["AI", "引用", "学术"],
  },
  {
    title: "中国哲学书电子化计划",
    url: "https://ctext.org/zhs",
    category: "数字古籍",
    desc: "中文古籍在线检索与阅读。",
    tags: ["古籍", "中文", "检索"],
  },
  {
    title: "汉典古籍",
    url: "https://gj.zdic.net/",
    category: "数字古籍",
    desc: "汉典古籍页面与古文辅助。",
    tags: ["古文", "工具", "汉典"],
  },
  {
    title: "中华经典古籍库（公开信息）",
    url: "https://www.ancientbooks.cn/",
    category: "数字古籍",
    desc: "古籍数字化资源入口与资讯。",
    tags: ["古籍", "数字化", "资源"],
  },
  {
    title: "Wikisource 古籍",
    url: "https://zh.wikisource.org/",
    category: "数字古籍",
    desc: "维基文库中文古籍公开文本。",
    tags: ["古籍", "公开", "在线"],
  },
  {
    title: "中华古籍资源库",
    url: "https://www.nlc.cn/pcab/zy/zhgj_zyk/",
    category: "数字古籍",
    desc: "中华古籍保护计划。",
    tags: ["古籍", "公开", "在线"],
  },
  {
    title: "汉典重光",
    url: "https://wenyuan.aliyun.com/home",
    category: "数字古籍",
    desc: "古籍数字化平台。",
    tags: ["古籍", "公开", "在线"],
  },
  {
    title: "喜马拉雅",
    url: "https://www.ximalaya.com/",
    category: "有声书",
    desc: "中文有声内容平台，含有声书频道。",
    tags: ["中文", "有声", "听书"],
  },
  {
    title: "懒人听书",
    url: "https://www.lrts.me/",
    category: "有声书",
    desc: "中文听书平台，涵盖小说和知识内容。",
    tags: ["听书", "中文", "移动端"],
  },
  {
    title: "微信听书",
    url: "https://at.qq.com/",
    category: "有声书",
    desc: "微信官方有声内容平台。",
    tags: ["听书", "中文", "移动端"],
  },
  {
    title: "番茄畅听",
    url: "https://novelfm.changdunovel.com/",
    category: "有声书",
    desc: "今日头条有声内容平台。",
    tags: ["听书", "中文", "移动端"],
  },
  {
    title: "LibriVox",
    url: "https://librivox.org/",
    category: "有声书",
    desc: "志愿者录制的免费公版有声书。",
    tags: ["有声书", "公版", "免费"],
  },
  {
    title: "Loyal Books",
    url: "https://www.loyalbooks.com/",
    category: "有声书",
    desc: "经典有声书与电子书结合平台。",
    tags: ["经典", "有声", "免费"],
  },
  {
    title: "Spotify Audiobooks",
    url: "https://open.spotify.com/genre/audiobooks-page",
    category: "有声书",
    desc: "Spotify 的有声书分类入口。",
    tags: ["有声书", "订阅", "英语"],
  },
  {
    title: "Audible",
    url: "https://www.audible.com/",
    category: "有声书",
    desc: "亚马逊有声书平台，资源丰富。",
    tags: ["有声书", "英文", "订阅"],
  },
  {
    title: "Calibre",
    url: "https://calibre-ebook.com/",
    category: "阅读软件/工具",
    desc: "本地电子书管理、转换、传输全能工具。",
    tags: ["格式转换", "管理", "桌面端"],
  },
  {
    title: "Sigil",
    url: "https://sigil-ebook.com/",
    category: "阅读软件/工具",
    desc: "EPUB 编辑器，适合制作电子书。",
    tags: ["EPUB", "编辑", "制作"],
  },
  {
    title: "Pandoc",
    url: "https://pandoc.org/",
    category: "阅读软件/工具",
    desc: "文档格式转换利器，可处理 Markdown、EPUB、PDF。",
    tags: ["转换", "命令行", "格式"],
  },
  {
    title: "CloudConvert",
    url: "https://cloudconvert.com/",
    category: "阅读软件/工具",
    desc: "在线文件格式转换，支持电子书格式。",
    tags: ["在线转换", "格式", "工具"],
  },
  {
    title: "Zamzar",
    url: "https://www.zamzar.com/",
    category: "阅读软件/工具",
    desc: "多格式文件转换，适合临时处理电子书。",
    tags: ["在线转换", "格式", "便捷"],
  },
  {
    title: "Koodo Reader",
    url: "https://www.koodoreader.com/",
    category: "阅读软件/工具",
    desc: "跨平台电子书阅读器，支持笔记和高亮。",
    tags: ["阅读器", "跨平台", "笔记"],
  },
];

const CATEGORY_ORDER_EN = [
  "Ebook Downloads",
  "Online Reading",
  "Book Lists & Recommendations",
  "Magazines & Comics",
  "Academic Journals",
  "Classical Texts",
  "Audiobooks",
  "Reading Tools",
];

const CATEGORY_ICON_EN = {
  "Ebook Downloads": "📥",
  "Online Reading": "📖",
  "Book Lists & Recommendations": "🧭",
  "Magazines & Comics": "📰",
  "Academic Journals": "🧪",
  "Classical Texts": "🏛️",
  Audiobooks: "🎧",
  "Reading Tools": "🛠️",
};

const BUILTIN_SITES_EN = [
  {
    title: "Z-Library",
    url: "https://z-library.la/",
    category: "Ebook Downloads",
    desc: "Large ebook collection with multiple formats.",
    tags: ["Chinese/English", "EPUB/MOBI/AZW3/PDF"],
  },
  {
    title: "Anna's Archive",
    url: "https://zh.annas-archive.li/",
    category: "Ebook Downloads",
    desc: "The largest fully open library in human history.",
    tags: ["Chinese/English", "EPUB"],
  },
  {
    title: "Liber3",
    url: "https://liber3.eth.limo/#/",
    category: "Ebook Downloads",
    desc: "Massive ebook library.",
    tags: ["Chinese/English", "EPUB"],
  },
  {
    title: "Xiaolipan Search",
    url: "https://www.xiaolipan.com/index.html",
    category: "Ebook Downloads",
    desc: "Large ebook collection with multiple formats.",
    tags: ["Chinese/English", "EPUB/PDF"],
  },
  {
    title: "24h Book Search",
    url: "https://24hbook.store/",
    category: "Ebook Downloads",
    desc: "Massive ebook collection.",
    tags: ["Chinese/English", "EPUB"],
  },
  {
    title: "Nameless Books",
    url: "https://www.book345.com/",
    category: "Ebook Downloads",
    desc: "Massive ebook collection.",
    tags: ["Chinese/English", "EPUB"],
  },
  {
    title: "Book Knowledge Base",
    url: "https://www.zhishikoo.com/",
    category: "Ebook Downloads",
    desc: "Large ebook collection with multiple formats.",
    tags: ["Chinese/English", "EPUB/MOBI/AZW3/PDF"],
  },
  {
    title: "Project Gutenberg",
    url: "https://www.gutenberg.org/",
    category: "Ebook Downloads",
    desc: "Public domain ebooks with multiple formats.",
    tags: ["Public domain", "English", "EPUB"],
  },
  {
    title: "Standard Ebooks",
    url: "https://standardebooks.org/",
    category: "Ebook Downloads",
    desc: "High-quality typeset classics for free.",
    tags: ["Public domain", "Typesetting", "EPUB"],
  },
  {
    title: "ManyBooks",
    url: "https://manybooks.net/",
    category: "Ebook Downloads",
    desc: "Free and discounted ebooks for download and discovery.",
    tags: ["Free", "Fiction", "Downloads"],
  },
  {
    title: "OpenStax",
    url: "https://openstax.org/subjects",
    category: "Ebook Downloads",
    desc: "Open textbook resources for learning and teaching.",
    tags: ["Textbooks", "Learning", "PDF"],
  },
  {
    title: "Internet Archive Texts",
    url: "https://archive.org/details/texts",
    category: "Ebook Downloads",
    desc: "Internet Archive texts collection across languages.",
    tags: ["Archive", "History", "PDF"],
  },
  {
    title: "Open Library",
    url: "https://openlibrary.org/",
    category: "Online Reading",
    desc: "Borrow and read millions of books online.",
    tags: ["Online reading", "Lending", "English"],
  },
  {
    title: "Google Books",
    url: "https://books.google.com/",
    category: "Online Reading",
    desc: "Search books with limited online previews.",
    tags: ["Search", "Preview", "Multilingual"],
  },
  {
    title: "Wikisource",
    url: "https://wikisource.org/",
    category: "Online Reading",
    desc: "Open text library for online reading.",
    tags: ["Library", "Public domain", "Online"],
  },
  {
    title: "Douban Read",
    url: "https://read.douban.com/",
    category: "Online Reading",
    desc: "Chinese bookstore and original works platform.",
    tags: ["Chinese", "Original", "Bookstore"],
  },
  {
    title: "WeChat Read (Web)",
    url: "https://weread.qq.com/",
    category: "Online Reading",
    desc: "WeChat Read web app with notes and highlights.",
    tags: ["Chinese", "Notes", "Reading"],
  },
  {
    title: "Internet Archive BookReader",
    url: "https://archive.org/details/books",
    category: "Online Reading",
    desc: "Online reader for Internet Archive books and documents.",
    tags: ["Online reading", "Archive", "Multilingual"],
  },
  {
    title: "Douban Books",
    url: "https://book.douban.com/",
    category: "Book Lists & Recommendations",
    desc: "Chinese reviews, lists, and popular picks.",
    tags: ["Reviews", "Ratings", "Recommendations"],
  },
  {
    title: "Book List Weekly",
    url: "https://mp.weixin.qq.com/s/wy9VRewPCOxzJwto3zHehw",
    category: "Book Lists & Recommendations",
    desc: "Chinese reviews, lists, and popular picks.",
    tags: ["Reviews", "Ratings", "Recommendations"],
  },
  {
    title: "Goodreads",
    url: "https://www.goodreads.com/",
    category: "Book Lists & Recommendations",
    desc: "Global reading community for English book lists.",
    tags: ["English", "Community", "Ratings"],
  },
  {
    title: "The StoryGraph",
    url: "https://app.thestorygraph.com/",
    category: "Book Lists & Recommendations",
    desc: "Visualized reading preferences and recommendations.",
    tags: ["Recommendations", "Visualization", "Community"],
  },
  {
    title: "Fantastic Fiction",
    url: "https://www.fantasticfiction.com/",
    category: "Book Lists & Recommendations",
    desc: "Discover books by author and series.",
    tags: ["Fiction", "Authors", "Series"],
  },
  {
    title: "What Should I Read Next",
    url: "https://www.whatshouldireadnext.com/",
    category: "Book Lists & Recommendations",
    desc: "Enter a book to find similar reads.",
    tags: ["Recommendations", "Discovery", "English"],
  },
  {
    title: "MangaDex",
    url: "https://mangadex.org/",
    category: "Magazines & Comics",
    desc: "Multilingual manga reading and update tracking.",
    tags: ["Manga", "Multilingual", "Online"],
  },
  {
    title: "ComicWalker",
    url: "https://comic-walker.com/",
    category: "Magazines & Comics",
    desc: "Official Japanese manga platform (some free).",
    tags: ["Manga", "Official", "Online"],
  },
  {
    title: "Tencent Comics",
    url: "https://ac.qq.com/",
    category: "Magazines & Comics",
    desc: "Chinese and Japanese comics platform.",
    tags: ["Comics", "Chinese", "Serials"],
  },
  {
    title: "Bilibili Manga",
    url: "https://manga.bilibili.com/",
    category: "Magazines & Comics",
    desc: "Chinese and Japanese comics platform.",
    tags: ["Comics", "Chinese", "Serials"],
  },
  {
    title: "Manhuagui",
    url: "https://www.manhuagui.com/",
    category: "Magazines & Comics",
    desc: "Comics aggregation platform.",
    tags: ["Comics", "Chinese", "Updates"],
  },
  {
    title: "October Magazine",
    url: "https://shiyuezazhi.com/sy/index.html",
    category: "Magazines & Comics",
    desc: "Large literary magazine.",
    tags: ["Magazine", "Chinese", "Literature"],
  },
  {
    title: "Chinese National Geography",
    url: "https://www.dili360.com/Cng/index/index.htm",
    category: "Magazines & Comics",
    desc: "Popular science magazine.",
    tags: ["Magazine", "Chinese", "Geography"],
  },
  {
    title: "Natural History",
    url: "https://www.dili360.com/nh/mag/detail/1001.htm",
    category: "Magazines & Comics",
    desc: "Popular science magazine.",
    tags: ["Magazine", "Chinese", "Biology"],
  },
  {
    title: "Google Scholar",
    url: "https://scholar.google.com/",
    category: "Academic Journals",
    desc: "Academic search engine across disciplines.",
    tags: ["Papers", "Search", "Academic"],
  },
  {
    title: "DOAJ",
    url: "https://doaj.org/",
    category: "Academic Journals",
    desc: "Directory of Open Access Journals.",
    tags: ["Open access", "OA", "Academic"],
  },
  {
    title: "JSTOR Open Content",
    url: "https://about.jstor.org/oa-and-free/",
    category: "Academic Journals",
    desc: "JSTOR open content resources.",
    tags: ["Journals", "Humanities", "Open"],
  },
  {
    title: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    category: "Academic Journals",
    desc: "Biomedical literature database.",
    tags: ["Medicine", "Search", "Papers"],
  },
  {
    title: "arXiv",
    url: "https://arxiv.org/",
    category: "Academic Journals",
    desc: "Preprint platform widely used in STEM.",
    tags: ["Preprints", "STEM", "Research"],
  },
  {
    title: "Semantic Scholar",
    url: "https://www.semanticscholar.org/",
    category: "Academic Journals",
    desc: "AI-powered paper search and citation analysis.",
    tags: ["AI", "Citations", "Academic"],
  },
  {
    title: "Chinese Text Project",
    url: "https://ctext.org/zhs",
    category: "Classical Texts",
    desc: "Search and read Chinese classics online.",
    tags: ["Classics", "Chinese", "Search"],
  },
  {
    title: "Han Dian Classics",
    url: "https://gj.zdic.net/",
    category: "Classical Texts",
    desc: "Handian classics and classical Chinese tools.",
    tags: ["Classical Chinese", "Tools", "Handian"],
  },
  {
    title: "Chinese Classics Database (Info)",
    url: "https://www.ancientbooks.cn/",
    category: "Classical Texts",
    desc: "Portal and news for digitized classics.",
    tags: ["Classics", "Digitization", "Resources"],
  },
  {
    title: "Wikisource Classics",
    url: "https://zh.wikisource.org/",
    category: "Classical Texts",
    desc: "Chinese classics on Wikisource.",
    tags: ["Classics", "Open", "Online"],
  },
  {
    title: "Chinese Ancient Books Resources",
    url: "https://www.nlc.cn/pcab/zy/zhgj_zyk/",
    category: "Classical Texts",
    desc: "Chinese classics preservation program.",
    tags: ["Classics", "Open", "Online"],
  },
  {
    title: "Handian Chongguang",
    url: "https://wenyuan.aliyun.com/home",
    category: "Classical Texts",
    desc: "Digitized classics platform.",
    tags: ["Classics", "Open", "Online"],
  },
  {
    title: "Ximalaya",
    url: "https://www.ximalaya.com/",
    category: "Audiobooks",
    desc: "Chinese audio platform with audiobooks.",
    tags: ["Chinese", "Audiobooks", "Listening"],
  },
  {
    title: "LRTS Audiobooks",
    url: "https://www.lrts.me/",
    category: "Audiobooks",
    desc: "Chinese audiobook platform covering novels and knowledge.",
    tags: ["Audiobooks", "Chinese", "Mobile"],
  },
  {
    title: "WeChat Listen",
    url: "https://at.qq.com/",
    category: "Audiobooks",
    desc: "Official WeChat audio platform.",
    tags: ["Audiobooks", "Chinese", "Mobile"],
  },
  {
    title: "Tomato Audiobooks",
    url: "https://novelfm.changdunovel.com/",
    category: "Audiobooks",
    desc: "Toutiao audio platform.",
    tags: ["Audiobooks", "Chinese", "Mobile"],
  },
  {
    title: "LibriVox",
    url: "https://librivox.org/",
    category: "Audiobooks",
    desc: "Volunteer-recorded public domain audiobooks.",
    tags: ["Audiobooks", "Public domain", "Free"],
  },
  {
    title: "Loyal Books",
    url: "https://www.loyalbooks.com/",
    category: "Audiobooks",
    desc: "Classics with audiobooks and ebooks.",
    tags: ["Classics", "Audiobooks", "Free"],
  },
  {
    title: "Spotify Audiobooks",
    url: "https://open.spotify.com/genre/audiobooks-page",
    category: "Audiobooks",
    desc: "Spotify audiobooks category.",
    tags: ["Audiobooks", "Subscription", "English"],
  },
  {
    title: "Audible",
    url: "https://www.audible.com/",
    category: "Audiobooks",
    desc: "Amazon audiobook platform.",
    tags: ["Audiobooks", "English", "Subscription"],
  },
  {
    title: "Calibre",
    url: "https://calibre-ebook.com/",
    category: "Reading Tools",
    desc: "All-in-one ebook manager, converter, and transfer tool.",
    tags: ["Conversion", "Management", "Desktop"],
  },
  {
    title: "Sigil",
    url: "https://sigil-ebook.com/",
    category: "Reading Tools",
    desc: "EPUB editor for making ebooks.",
    tags: ["EPUB", "Editing", "Creation"],
  },
  {
    title: "Pandoc",
    url: "https://pandoc.org/",
    category: "Reading Tools",
    desc: "Document conversion for Markdown, EPUB, and PDF.",
    tags: ["Conversion", "CLI", "Formats"],
  },
  {
    title: "CloudConvert",
    url: "https://cloudconvert.com/",
    category: "Reading Tools",
    desc: "Online file conversion with ebook formats.",
    tags: ["Online conversion", "Formats", "Tools"],
  },
  {
    title: "Zamzar",
    url: "https://www.zamzar.com/",
    category: "Reading Tools",
    desc: "Multi-format converter for quick tasks.",
    tags: ["Online conversion", "Formats", "Easy"],
  },
  {
    title: "Koodo Reader",
    url: "https://www.koodoreader.com/",
    category: "Reading Tools",
    desc: "Cross-platform reader with notes and highlights.",
    tags: ["Reader", "Cross-platform", "Notes"],
  },
];

const LANGUAGES = {
  zh: {
    htmlLang: "zh-CN",
    toggleLabel: "EN",
    allLabel: "全部",
    siteCountSuffix: " 个站点",
    searchPlaceholder: "搜索网站、简介、分类、标签（按 / 快捷聚焦）",
    searchAria: "搜索资源",
    categoryBarAria: "资源分类",
    sidebarAria: "左侧目录",
    heroTitle: "找书吧",
    heroSubtitle: "电子书资源与阅读工具导航",
    sidebarTitle: "资源分类",
    feedbackEntry: "提交站点",
    emptyState: "没有找到匹配内容，换个关键词试试。",
    overview: {
      total: "收录站点",
      visible: "当前结果",
      categories: "分类数量",
      reset: "清空筛选",
    },
    feedback: {
      title: "提交站点",
      desc: "欢迎推荐优质电子书/阅读资源，我们会尽快审核并收录。",
      button: "邮件反馈",
      hint: "请包含以下信息：",
      items: ["站点名称 + 链接", "所属分类", "一句简介", "标签（可选）"],
    },
    donation: {
      badge: "支付宝赞助二维码",
      note: "整理不易，免费开放，欢迎赞助一杯咖啡。",
      alt: "支付宝赞助二维码",
      closeLabel: "关闭赞助卡片",
      ariaLabel: "赞助支持",
    },
    footer: {
      caption: "站点说明",
      about: "关于本站",
      privacy: "隐私政策",
      aboutHref: "about.html",
      privacyHref: "privacy.html",
    },
    themeToggle: {
      light: "☀️ 浅色",
      dark: "🌙 深色",
    },
    sidebarCollapse: "收起目录",
    sidebarExpand: "展开目录",
    meta: {
      title: "找书吧｜电子书资源与阅读工具导航",
      description:
        "找书吧：聚合电子书下载、在线阅读、书单推荐、学术期刊与阅读工具的书籍导航站。",
    },
    categoryOrder: CATEGORY_ORDER_ZH,
    categoryIcon: CATEGORY_ICON_ZH,
    sites: BUILTIN_SITES_ZH,
    noDesc: "暂无简介",
    tagsFallback: "#书籍资源",
  },
  en: {
    htmlLang: "en",
    toggleLabel: "中文",
    allLabel: "All",
    siteCountSuffix: " sites",
    searchPlaceholder:
      "Search sites, summaries, categories, tags (press / to focus)",
    searchAria: "Search resources",
    categoryBarAria: "Categories",
    sidebarAria: "Sidebar navigation",
    heroTitle: "Zhaoshuba",
    heroSubtitle: "Ebook resources and reading tools",
    sidebarTitle: "Categories",
    feedbackEntry: "Submit a Site",
    emptyState: "No matching results. Try another keyword.",
    overview: {
      total: "Total Sites",
      visible: "Results",
      categories: "Categories",
      reset: "Clear Filters",
    },
    feedback: {
      title: "Submit a Site",
      desc: "Share quality ebook or reading resources. We will review and add them.",
      button: "Email Us",
      hint: "Please include:",
      items: [
        "Site name + URL",
        "Category",
        "Short description",
        "Tags (optional)",
      ],
    },
    donation: {
      badge: "Alipay Support QR",
      note: "This project is free. If it helps, buy me a coffee.",
      alt: "Alipay support QR code",
      closeLabel: "Close support card",
      ariaLabel: "Support",
    },
    footer: {
      caption: "Site Info",
      about: "About",
      privacy: "Privacy Policy",
      aboutHref: "about-en.html",
      privacyHref: "privacy-en.html",
    },
    themeToggle: {
      light: "☀️ Light",
      dark: "🌙 Dark",
    },
    sidebarCollapse: "Collapse categories",
    sidebarExpand: "Expand categories",
    meta: {
      title: "Zhaoshuba | Ebook Resources and Reading Tools",
      description:
        "Zhaoshuba: a curated directory for ebook downloads, online reading, lists, journals, classics, audiobooks, and tools.",
    },
    categoryOrder: CATEGORY_ORDER_EN,
    categoryIcon: CATEGORY_ICON_EN,
    sites: BUILTIN_SITES_EN,
    noDesc: "No description",
    tagsFallback: "#books",
  },
};

const STORAGE_KEYS = {
  theme: "book_nav_theme_v1",
  sidebarCollapsed: "book_nav_sidebar_collapsed_v1",
  language: "book_nav_lang_v1",
};

const state = {
  language: loadLanguage(),
  keyword: "",
  activeCategory: "",
  sidebarCategory: "",
  sidebarCollapsed: loadSidebarCollapsed(),
};

state.activeCategory = getAllLabel();
state.sidebarCategory = getAllLabel();

const scrollSpy = {
  sections: [],
  ticking: false,
};

const refs = {
  layout: document.querySelector(".layout"),
  searchInput: document.getElementById("searchInput"),
  searchLabel: document.getElementById("searchLabel"),
  themeToggle: document.getElementById("themeToggle"),
  langToggle: document.getElementById("langToggle"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  categoryBar: document.getElementById("categoryBar"),
  sidebarNav: document.getElementById("sidebarNav"),
  sectionsRoot: document.getElementById("sectionsRoot"),
  emptyState: document.getElementById("emptyState"),
  totalCount: document.getElementById("totalCount"),
  visibleCount: document.getElementById("visibleCount"),
  categoryCount: document.getElementById("categoryCount"),
  totalLabel: document.getElementById("totalLabel"),
  visibleLabel: document.getElementById("visibleLabel"),
  categoryLabel: document.getElementById("categoryLabel"),
  resetFilterBtn: document.getElementById("resetFilterBtn"),
  heroTitle: document.getElementById("heroTitle"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  sidebarTitle: document.getElementById("sidebarTitle"),
  feedbackEntry: document.getElementById("feedbackEntry"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackDesc: document.getElementById("feedbackDesc"),
  feedbackButton: document.getElementById("feedbackButton"),
  feedbackHint: document.getElementById("feedbackHint"),
  feedbackItem1: document.getElementById("feedbackItem1"),
  feedbackItem2: document.getElementById("feedbackItem2"),
  feedbackItem3: document.getElementById("feedbackItem3"),
  feedbackItem4: document.getElementById("feedbackItem4"),
  donationCard: document.getElementById("donationCard"),
  donationClose: document.getElementById("donationClose"),
  donationBadge: document.getElementById("donationBadge"),
  donationNote: document.getElementById("donationNote"),
  donationImage: document.getElementById("donationImage"),
  footerCaption: document.getElementById("footerCaption"),
  footerAboutLink: document.getElementById("footerAboutLink"),
  footerPrivacyLink: document.getElementById("footerPrivacyLink"),
  metaDescription: document.querySelector('meta[name="description"]'),
};

init();

function init() {
  applySavedTheme();
  applyLanguage();
  bindEvents();
  render();
}

function bindEvents() {
  refs.searchInput.addEventListener("input", (event) => {
    state.keyword = event.target.value.trim().toLowerCase();
    render();
  });

  refs.themeToggle.addEventListener("click", toggleTheme);
  if (refs.langToggle) {
    refs.langToggle.addEventListener("click", toggleLanguage);
  }
  refs.sidebarToggle.addEventListener("click", toggleSidebarCollapsed);
  if (refs.donationClose && refs.donationCard) {
    refs.donationClose.addEventListener("click", () => {
      refs.donationCard.classList.add("is-hidden");
    });
  }

  refs.resetFilterBtn.addEventListener("click", () => {
    state.keyword = "";
    state.activeCategory = getAllLabel();
    state.sidebarCategory = getAllLabel();
    refs.searchInput.value = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !isTypingTarget(event.target)) {
      event.preventDefault();
      refs.searchInput.focus();
    }
  });

  window.addEventListener("scroll", onScrollChanged, { passive: true });
  window.addEventListener("resize", onResizeChanged);
}

function isTypingTarget(target) {
  return (
    target instanceof HTMLElement &&
    (target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable)
  );
}

function getLangConfig() {
  return LANGUAGES[state.language] || LANGUAGES.zh;
}

function getAllLabel() {
  return getLangConfig().allLabel;
}

function getAllSites() {
  return getLangConfig().sites.map((site, index) => ({
    ...site,
    id: `site-${index}`,
  }));
}

function getCategories(sites) {
  const extraCategories = [];
  const categoryOrder = getLangConfig().categoryOrder;
  const seen = new Set(categoryOrder);
  for (const site of sites) {
    if (!seen.has(site.category)) {
      seen.add(site.category);
      extraCategories.push(site.category);
    }
  }
  return [...categoryOrder, ...extraCategories];
}

function siteMatchesKeyword(site, keyword) {
  if (!keyword) {
    return true;
  }
  const haystack = [site.title, site.desc, site.category, ...(site.tags || [])]
    .join(" ")
    .toLowerCase();
  return haystack.includes(keyword);
}

function render() {
  const sites = getAllSites();
  const categories = getCategories(sites);
  const allLabel = getAllLabel();

  if (state.activeCategory !== allLabel && !categories.includes(state.activeCategory)) {
    state.activeCategory = allLabel;
  }

  const searchableSites = sites.filter((site) =>
    siteMatchesKeyword(site, state.keyword),
  );
  const visibleSites = searchableSites.filter(
    (site) => state.activeCategory === allLabel || site.category === state.activeCategory,
  );

  renderCategoryBar(categories, searchableSites);
  renderSidebar(categories, searchableSites);
  renderSections(visibleSites, categories);
  updateCounters(sites.length, visibleSites.length, categories.length);
  collectSections();
  updateSidebarFromScroll();
}

function renderCategoryBar(categories, searchableSites) {
  const allLabel = getAllLabel();
  refs.categoryBar.textContent = "";
  refs.categoryBar.append(createCategoryChip(allLabel, searchableSites.length));
  for (const category of categories) {
    const count = searchableSites.filter((site) => site.category === category).length;
    refs.categoryBar.append(createCategoryChip(category, count));
  }
}

function createCategoryChip(category, count) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.dataset.category = category;
  if (category === getChipActiveCategory()) {
    chip.classList.add("active");
  }
  chip.textContent = `${category} · ${count}`;
  chip.addEventListener("click", () => {
    state.activeCategory = category;
    state.sidebarCategory = category;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return chip;
}

function renderSidebar(categories, searchableSites) {
  const allLabel = getAllLabel();
  refs.sidebarNav.textContent = "";
  refs.sidebarNav.append(createSidebarItem(allLabel, searchableSites.length));
  for (const category of categories) {
    const count = searchableSites.filter((site) => site.category === category).length;
    refs.sidebarNav.append(createSidebarItem(category, count));
  }
}

function createSidebarItem(category, count) {
  const allLabel = getAllLabel();
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "sidebar-link";
  btn.dataset.category = category;
  btn.title = category;
  if (category === state.sidebarCategory) {
    btn.classList.add("active");
  }
  if (count === 0 && category !== allLabel) {
    btn.disabled = true;
  }

  const label = document.createElement("span");
  label.className = "sidebar-main";
  const icon = document.createElement("span");
  icon.className = "sidebar-icon";
  const iconMap = getLangConfig().categoryIcon;
  icon.textContent = iconMap[category] || "📚";
  const text = document.createElement("span");
  text.className = "sidebar-text";
  text.textContent = category;
  label.append(icon, text);

  const number = document.createElement("small");
  number.className = "sidebar-count";
  number.textContent = String(count);
  btn.append(label, number);

  btn.addEventListener("click", () => {
    state.sidebarCategory = category;
    syncSidebarActiveUI();
    syncCategoryChipActiveUI();
    if (category === allLabel) {
      state.activeCategory = allLabel;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (state.activeCategory !== allLabel) {
      state.activeCategory = allLabel;
      render();
    }
    requestAnimationFrame(() => {
      scrollToSection(category);
    });
  });

  return btn;
}

function renderSections(visibleSites, categories) {
  refs.sectionsRoot.textContent = "";
  const grouped = new Map();
  const lang = getLangConfig();
  const iconMap = lang.categoryIcon;

  for (const category of categories) {
    grouped.set(category, []);
  }
  for (const site of visibleSites) {
    if (!grouped.has(site.category)) {
      grouped.set(site.category, []);
    }
    grouped.get(site.category).push(site);
  }

  let sectionCount = 0;
  for (const [category, items] of grouped) {
    if (!items.length) {
      continue;
    }
    sectionCount += 1;
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = getSectionId(category);
    section.dataset.category = category;

    const head = document.createElement("header");
    head.className = "section-head";

    const title = document.createElement("h2");
    title.textContent = `${iconMap[category] || "📚"} ${category}`;

    const count = document.createElement("span");
    count.textContent = `${items.length}${lang.siteCountSuffix}`;

    head.append(title, count);

    const grid = document.createElement("div");
    grid.className = "links-grid";

    for (const site of items) {
      grid.append(createSiteCard(site));
    }

    section.append(head, grid);
    refs.sectionsRoot.append(section);
  }

  refs.emptyState.hidden = sectionCount !== 0;
}

function createSiteCard(site) {
  const lang = getLangConfig();
  const wrapper = document.createElement("article");
  wrapper.className = "site-item";

  const link = document.createElement("a");
  link.className = "site-link";
  link.href = normalizeUrl(site.url);
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const title = document.createElement("span");
  title.className = "site-title";
  title.textContent = site.title;

  const desc = document.createElement("span");
  desc.className = "site-desc";
  desc.textContent = site.desc || lang.noDesc;

  const tags = document.createElement("span");
  tags.className = "site-tags";
  const shownTags = (site.tags || []).slice(0, 3).map((tag) => `#${tag}`);
  tags.textContent = shownTags.length ? shownTags.join(" ") : lang.tagsFallback;

  link.append(title, desc, tags);
  wrapper.append(link);
  return wrapper;
}

function collectSections() {
  scrollSpy.sections = Array.from(
    refs.sectionsRoot.querySelectorAll(".category-section"),
  );
}

function onScrollChanged() {
  if (scrollSpy.ticking) {
    return;
  }
  scrollSpy.ticking = true;
  requestAnimationFrame(() => {
    updateSidebarFromScroll();
    scrollSpy.ticking = false;
  });
}

function onResizeChanged() {
  applySidebarCollapsedState();
  onScrollChanged();
}

function updateSidebarFromScroll() {
  const allLabel = getAllLabel();
  if (state.activeCategory !== allLabel) {
    if (state.sidebarCategory !== state.activeCategory) {
      state.sidebarCategory = state.activeCategory;
      syncSidebarActiveUI();
      syncCategoryChipActiveUI();
    }
    return;
  }

  if (!scrollSpy.sections.length) {
    if (state.sidebarCategory !== allLabel) {
      state.sidebarCategory = allLabel;
      syncSidebarActiveUI();
      syncCategoryChipActiveUI();
    }
    return;
  }

  const marker = window.scrollY + 150;
  let currentCategory = allLabel;

  for (const section of scrollSpy.sections) {
    if (section.offsetTop <= marker) {
      currentCategory = section.dataset.category || currentCategory;
      continue;
    }
    break;
  }

  if (currentCategory !== state.sidebarCategory) {
    state.sidebarCategory = currentCategory;
    syncSidebarActiveUI();
    syncCategoryChipActiveUI();
  }
}

function syncSidebarActiveUI() {
  const buttons = refs.sidebarNav.querySelectorAll(".sidebar-link");
  for (const button of buttons) {
    const category = button.dataset.category;
    button.classList.toggle("active", category === state.sidebarCategory);
  }
}

function syncCategoryChipActiveUI() {
  const activeCategory = getChipActiveCategory();
  const chips = refs.categoryBar.querySelectorAll(".chip");
  for (const chip of chips) {
    chip.classList.toggle("active", chip.dataset.category === activeCategory);
  }
}

function getChipActiveCategory() {
  const allLabel = getAllLabel();
  if (state.activeCategory !== allLabel) {
    return state.activeCategory;
  }
  return state.sidebarCategory || allLabel;
}

function toggleSidebarCollapsed() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  persistSidebarCollapsed();
  applySidebarCollapsedState();
}

function applySidebarCollapsedState() {
  const lang = getLangConfig();
  const isDesktop = window.matchMedia("(min-width: 1141px)").matches;
  const effectiveCollapsed = state.sidebarCollapsed && isDesktop;
  refs.layout.classList.toggle("is-sidebar-collapsed", effectiveCollapsed);

  const nextLabel = effectiveCollapsed ? lang.sidebarExpand : lang.sidebarCollapse;
  refs.sidebarToggle.setAttribute("aria-label", nextLabel);
  refs.sidebarToggle.setAttribute("title", nextLabel);
  refs.sidebarToggle.textContent = effectiveCollapsed ? "⮞" : "⮜";
}

function loadSidebarCollapsed() {
  try {
    return localStorage.getItem(STORAGE_KEYS.sidebarCollapsed) === "1";
  } catch {
    return false;
  }
}

function persistSidebarCollapsed() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.sidebarCollapsed,
      state.sidebarCollapsed ? "1" : "0",
    );
  } catch {
    return;
  }
}

function scrollToSection(category) {
  const section = document.getElementById(getSectionId(category));
  if (!section) {
    return;
  }
  const offset = 16;
  const rawTop = window.scrollY + section.getBoundingClientRect().top - offset;
  const maxTop = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const targetTop = Math.min(rawTop, maxTop);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

function getSectionId(category) {
  return `section-${category
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-")
    .replace(/^-+|-+$/g, "")}`;
}

function updateCounters(total, visible, categoryCount) {
  refs.totalCount.textContent = String(total);
  refs.visibleCount.textContent = String(visible);
  refs.categoryCount.textContent = String(categoryCount);
}

function normalizeUrl(url) {
  if (!url) {
    return "";
  }
  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  return `https://${url}`;
}

function toggleLanguage() {
  state.language = state.language === "zh" ? "en" : "zh";
  persistLanguage();
  state.keyword = "";
  state.activeCategory = getAllLabel();
  state.sidebarCategory = getAllLabel();
  refs.searchInput.value = "";
  applyLanguage();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyLanguage() {
  const lang = getLangConfig();
  document.documentElement.lang = lang.htmlLang;
  document.title = lang.meta.title;
  if (refs.metaDescription) {
    refs.metaDescription.setAttribute("content", lang.meta.description);
  }

  if (refs.heroTitle) {
    refs.heroTitle.textContent = lang.heroTitle;
  }
  if (refs.heroSubtitle) {
    refs.heroSubtitle.textContent = lang.heroSubtitle;
  }
  if (refs.sidebarTitle) {
    refs.sidebarTitle.textContent = lang.sidebarTitle;
  }
  if (refs.searchInput) {
    refs.searchInput.placeholder = lang.searchPlaceholder;
  }
  if (refs.searchLabel) {
    refs.searchLabel.setAttribute("aria-label", lang.searchAria);
  }
  if (refs.categoryBar) {
    refs.categoryBar.setAttribute("aria-label", lang.categoryBarAria);
  }
  if (refs.sidebarNav) {
    refs.sidebarNav.setAttribute("aria-label", lang.sidebarAria);
  }
  if (refs.feedbackEntry) {
    refs.feedbackEntry.textContent = lang.feedbackEntry;
  }
  if (refs.totalLabel) {
    refs.totalLabel.textContent = lang.overview.total;
  }
  if (refs.visibleLabel) {
    refs.visibleLabel.textContent = lang.overview.visible;
  }
  if (refs.categoryLabel) {
    refs.categoryLabel.textContent = lang.overview.categories;
  }
  if (refs.resetFilterBtn) {
    refs.resetFilterBtn.textContent = lang.overview.reset;
  }
  if (refs.emptyState) {
    refs.emptyState.textContent = lang.emptyState;
  }

  if (refs.feedbackTitle) {
    refs.feedbackTitle.textContent = lang.feedback.title;
  }
  if (refs.feedbackDesc) {
    refs.feedbackDesc.textContent = lang.feedback.desc;
  }
  if (refs.feedbackButton) {
    refs.feedbackButton.textContent = lang.feedback.button;
  }
  if (refs.feedbackHint) {
    refs.feedbackHint.textContent = lang.feedback.hint;
  }
  if (refs.feedbackItem1) {
    refs.feedbackItem1.textContent = lang.feedback.items[0];
  }
  if (refs.feedbackItem2) {
    refs.feedbackItem2.textContent = lang.feedback.items[1];
  }
  if (refs.feedbackItem3) {
    refs.feedbackItem3.textContent = lang.feedback.items[2];
  }
  if (refs.feedbackItem4) {
    refs.feedbackItem4.textContent = lang.feedback.items[3];
  }

  if (refs.donationBadge) {
    refs.donationBadge.textContent = lang.donation.badge;
  }
  if (refs.donationNote) {
    refs.donationNote.textContent = lang.donation.note;
  }
  if (refs.donationImage) {
    refs.donationImage.alt = lang.donation.alt;
  }
  if (refs.donationClose) {
    refs.donationClose.setAttribute("aria-label", lang.donation.closeLabel);
    refs.donationClose.setAttribute("title", lang.donation.closeLabel);
  }
  if (refs.donationCard) {
    refs.donationCard.setAttribute("aria-label", lang.donation.ariaLabel);
  }
  if (refs.footerCaption) {
    refs.footerCaption.textContent = lang.footer.caption;
  }
  if (refs.footerAboutLink) {
    refs.footerAboutLink.textContent = lang.footer.about;
    refs.footerAboutLink.href = lang.footer.aboutHref;
  }
  if (refs.footerPrivacyLink) {
    refs.footerPrivacyLink.textContent = lang.footer.privacy;
    refs.footerPrivacyLink.href = lang.footer.privacyHref;
  }
  if (refs.langToggle) {
    refs.langToggle.textContent = lang.toggleLabel;
  }

  syncThemeLabel(document.documentElement.dataset.theme);
  applySidebarCollapsedState();
}

function loadLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.language);
    return saved === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function persistLanguage() {
  try {
    localStorage.setItem(STORAGE_KEYS.language, state.language);
  } catch {
    return;
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = nextTheme;
  localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  syncThemeLabel(nextTheme);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  document.documentElement.dataset.theme = theme;
  syncThemeLabel(theme);
}

function syncThemeLabel(theme) {
  const lang = getLangConfig();
  refs.themeToggle.textContent =
    theme === "dark" ? lang.themeToggle.light : lang.themeToggle.dark;
}
