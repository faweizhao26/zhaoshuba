const SITES = [
  {
    url: "https://z-library.la/",
    category: "ebook-downloads",
    titleKey: "zlibrary",
    descKey: "zlibrary",
    tagsKeys: ["chinese_english", "epub_mobi_azw3_pdf"],
  },
  {
    url: "https://zh.annas-archive.li/",
    category: "ebook-downloads",
    titleKey: "annas_archive",
    descKey: "annas_archive",
    tagsKeys: ["chinese_english", "epub"],
  },
  {
    url: "https://liber3.eth.limo/#/",
    category: "ebook-downloads",
    titleKey: "liber3",
    descKey: "liber3",
    tagsKeys: ["chinese_english", "epub"],
  },
  {
    url: "https://www.xiaolipan.com/index.html",
    category: "ebook-downloads",
    titleKey: "xiaolipan",
    descKey: "xiaolipan",
    tagsKeys: ["chinese_english", "epub_pdf"],
  },
  {
    url: "https://24hbook.store/",
    category: "ebook-downloads",
    titleKey: "24hbook",
    descKey: "24hbook",
    tagsKeys: ["chinese_english", "epub"],
  },
  {
    url: "https://www.book345.com/",
    category: "ebook-downloads",
    titleKey: "book345",
    descKey: "book345",
    tagsKeys: ["chinese_english", "epub"],
  },
  {
    url: "https://www.zhishikoo.com/",
    category: "ebook-downloads",
    titleKey: "zhishikoo",
    descKey: "zhishikoo",
    tagsKeys: ["chinese_english", "epub_mobi_azw3_pdf"],
  },
  {
    url: "https://www.gutenberg.org/",
    category: "ebook-downloads",
    titleKey: "gutenberg",
    descKey: "gutenberg",
    tagsKeys: ["public_domain", "english", "epub"],
  },
  {
    url: "https://standardebooks.org/",
    category: "ebook-downloads",
    titleKey: "standard_ebooks",
    descKey: "standard_ebooks",
    tagsKeys: ["public_domain", "typesetting", "epub"],
  },
  {
    url: "https://manybooks.net/",
    category: "ebook-downloads",
    titleKey: "manybooks",
    descKey: "manybooks",
    tagsKeys: ["free", "fiction", "downloads"],
  },
  {
    url: "https://openstax.org/subjects",
    category: "ebook-downloads",
    titleKey: "openstax",
    descKey: "openstax",
    tagsKeys: ["textbooks", "learning", "pdf"],
  },
  {
    url: "https://archive.org/details/texts",
    category: "ebook-downloads",
    titleKey: "internet_archive_texts",
    descKey: "internet_archive_texts",
    tagsKeys: ["archive", "history", "pdf"],
  },
  {
    url: "https://openlibrary.org/",
    category: "online-reading",
    titleKey: "openlibrary",
    descKey: "openlibrary",
    tagsKeys: ["online_reading", "lending", "english"],
  },
  {
    url: "https://books.google.com/",
    category: "online-reading",
    titleKey: "google_books",
    descKey: "google_books",
    tagsKeys: ["search", "preview", "multilingual"],
  },
  {
    url: "https://wikisource.org/",
    category: "online-reading",
    titleKey: "wikisource",
    descKey: "wikisource",
    tagsKeys: ["library", "public_domain", "online"],
  },
  {
    url: "https://read.douban.com/",
    category: "online-reading",
    titleKey: "douban_read",
    descKey: "douban_read",
    tagsKeys: ["chinese", "original", "bookstore"],
  },
  {
    url: "https://weread.qq.com/",
    category: "online-reading",
    titleKey: "wechat_read",
    descKey: "wechat_read",
    tagsKeys: ["chinese", "notes", "reading"],
  },
  {
    url: "https://archive.org/details/books",
    category: "online-reading",
    titleKey: "ia_bookreader",
    descKey: "ia_bookreader",
    tagsKeys: ["online_reading", "archive", "multilingual"],
  },
  {
    url: "https://book.douban.com/",
    category: "book-recommendations",
    titleKey: "douban_books",
    descKey: "douban_books",
    tagsKeys: ["reviews", "ratings", "recommendations"],
  },
  {
    url: "https://mp.weixin.qq.com/s/wy9VRewPCOxzJwto3zHehw",
    category: "book-recommendations",
    titleKey: "book_list_weekly",
    descKey: "book_list_weekly",
    tagsKeys: ["reviews", "ratings", "recommendations"],
  },
  {
    url: "https://www.goodreads.com/",
    category: "book-recommendations",
    titleKey: "goodreads",
    descKey: "goodreads",
    tagsKeys: ["english", "community", "ratings"],
  },
  {
    url: "https://app.thestorygraph.com/",
    category: "book-recommendations",
    titleKey: "storygraph",
    descKey: "storygraph",
    tagsKeys: ["recommendations", "visualization", "community"],
  },
  {
    url: "https://www.fantasticfiction.com/",
    category: "book-recommendations",
    titleKey: "fantastic_fiction",
    descKey: "fantastic_fiction",
    tagsKeys: ["fiction", "authors", "series"],
  },
  {
    url: "https://www.whatshouldireadnext.com/",
    category: "book-recommendations",
    titleKey: "what_should_i_read",
    descKey: "what_should_i_read",
    tagsKeys: ["recommendations", "discovery", "english"],
  },
  {
    url: "https://mangadex.org/",
    category: "magazines-comics",
    titleKey: "mangadex",
    descKey: "mangadex",
    tagsKeys: ["manga", "multilingual", "online"],
  },
  {
    url: "https://comic-walker.com/",
    category: "magazines-comics",
    titleKey: "comic_walker",
    descKey: "comic_walker",
    tagsKeys: ["manga", "official", "online"],
  },
  {
    url: "https://ac.qq.com/",
    category: "magazines-comics",
    titleKey: "tencent_comics",
    descKey: "tencent_comics",
    tagsKeys: ["comics", "chinese", "serials"],
  },
  {
    url: "https://manga.bilibili.com/",
    category: "magazines-comics",
    titleKey: "bilibili_manga",
    descKey: "bilibili_manga",
    tagsKeys: ["comics", "chinese", "serials"],
  },
  {
    url: "https://www.manhuagui.com/",
    category: "magazines-comics",
    titleKey: "manhuagui",
    descKey: "manhuagui",
    tagsKeys: ["comics", "chinese", "updates"],
  },
  {
    url: "https://shiyuezazhi.com/sy/index.html",
    category: "magazines-comics",
    titleKey: "shiyue_magazine",
    descKey: "shiyue_magazine",
    tagsKeys: ["magazine", "chinese", "literature"],
  },
  {
    url: "https://www.dili360.com/Cng/index/index.htm",
    category: "magazines-comics",
    titleKey: "cngeography",
    descKey: "cngeography",
    tagsKeys: ["magazine", "chinese", "geography"],
  },
  {
    url: "https://www.dili360.com/nh/mag/detail/1001.htm",
    category: "magazines-comics",
    titleKey: "natural_history_mag",
    descKey: "natural_history_mag",
    tagsKeys: ["magazine", "chinese", "biology"],
  },
  {
    url: "https://scholar.google.com/",
    category: "academic-journals",
    titleKey: "google_scholar",
    descKey: "google_scholar",
    tagsKeys: ["papers", "search", "academic"],
  },
  {
    url: "https://doaj.org/",
    category: "academic-journals",
    titleKey: "doaj",
    descKey: "doaj",
    tagsKeys: ["open_access", "oa", "academic"],
  },
  {
    url: "https://about.jstor.org/oa-and-free/",
    category: "academic-journals",
    titleKey: "jstor_open",
    descKey: "jstor_open",
    tagsKeys: ["journals", "humanities", "open"],
  },
  {
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    category: "academic-journals",
    titleKey: "pubmed",
    descKey: "pubmed",
    tagsKeys: ["medicine", "search", "papers"],
  },
  {
    url: "https://arxiv.org/",
    category: "academic-journals",
    titleKey: "arxiv",
    descKey: "arxiv",
    tagsKeys: ["preprints", "stem", "research"],
  },
  {
    url: "https://www.semanticscholar.org/",
    category: "academic-journals",
    titleKey: "semantic_scholar",
    descKey: "semantic_scholar",
    tagsKeys: ["ai", "citations", "academic"],
  },
  {
    url: "https://ctext.org/zhs",
    category: "classical-texts",
    titleKey: "chinese_text_project",
    descKey: "chinese_text_project",
    tagsKeys: ["classics", "chinese", "search"],
  },
  {
    url: "https://gj.zdic.net/",
    category: "classical-texts",
    titleKey: "handian_classics",
    descKey: "handian_classics",
    tagsKeys: ["classical_chinese", "tools", "handian"],
  },
  {
    url: "https://www.ancientbooks.cn/",
    category: "classical-texts",
    titleKey: "ancientbooks",
    descKey: "ancientbooks",
    tagsKeys: ["classics", "digitization", "resources"],
  },
  {
    url: "https://zh.wikisource.org/",
    category: "classical-texts",
    titleKey: "wikisource_classics",
    descKey: "wikisource_classics",
    tagsKeys: ["classics", "open", "online"],
  },
  {
    url: "https://www.nlc.cn/pcab/zy/zhgj_zyk/",
    category: "classical-texts",
    titleKey: "nlc_classics",
    descKey: "nlc_classics",
    tagsKeys: ["classics", "open", "online"],
  },
  {
    url: "https://wenyuan.aliyun.com/home",
    category: "classical-texts",
    titleKey: "handian_chongguang",
    descKey: "handian_chongguang",
    tagsKeys: ["classics", "open", "online"],
  },
  {
    url: "https://www.ximalaya.com/",
    category: "audiobooks",
    titleKey: "ximalaya",
    descKey: "ximalaya",
    tagsKeys: ["chinese", "audiobooks", "listening"],
  },
  {
    url: "https://www.lrts.me/",
    category: "audiobooks",
    titleKey: "lrts",
    descKey: "lrts",
    tagsKeys: ["audiobooks", "chinese", "mobile"],
  },
  {
    url: "https://at.qq.com/",
    category: "audiobooks",
    titleKey: "wechat_listen",
    descKey: "wechat_listen",
    tagsKeys: ["audiobooks", "chinese", "mobile"],
  },
  {
    url: "https://novelfm.changdunovel.com/",
    category: "audiobooks",
    titleKey: "tomato_audiobooks",
    descKey: "tomato_audiobooks",
    tagsKeys: ["audiobooks", "chinese", "mobile"],
  },
  {
    url: "https://librivox.org/",
    category: "audiobooks",
    titleKey: "librivox",
    descKey: "librivox",
    tagsKeys: ["audiobooks", "public_domain", "free"],
  },
  {
    url: "https://www.loyalbooks.com/",
    category: "audiobooks",
    titleKey: "loyal_books",
    descKey: "loyal_books",
    tagsKeys: ["classics", "audiobooks", "free"],
  },
  {
    url: "https://open.spotify.com/genre/audiobooks-page",
    category: "audiobooks",
    titleKey: "spotify_audiobooks",
    descKey: "spotify_audiobooks",
    tagsKeys: ["audiobooks", "subscription", "english"],
  },
  {
    url: "https://www.audible.com/",
    category: "audiobooks",
    titleKey: "audible",
    descKey: "audible",
    tagsKeys: ["audiobooks", "english", "subscription"],
  },
  {
    url: "https://calibre-ebook.com/",
    category: "reading-tools",
    titleKey: "calibre",
    descKey: "calibre",
    tagsKeys: ["conversion", "management", "desktop"],
  },
  {
    url: "https://sigil-ebook.com/",
    category: "reading-tools",
    titleKey: "sigil",
    descKey: "sigil",
    tagsKeys: ["epub", "editing", "creation"],
  },
  {
    url: "https://pandoc.org/",
    category: "reading-tools",
    titleKey: "pandoc",
    descKey: "pandoc",
    tagsKeys: ["conversion", "cli", "formats"],
  },
  {
    url: "https://cloudconvert.com/",
    category: "reading-tools",
    titleKey: "cloudconvert",
    descKey: "cloudconvert",
    tagsKeys: ["online_conversion", "formats", "tools"],
  },
  {
    url: "https://www.zamzar.com/",
    category: "reading-tools",
    titleKey: "zamzar",
    descKey: "zamzar",
    tagsKeys: ["online_conversion", "formats", "easy"],
  },
  {
    url: "https://www.koodoreader.com/",
    category: "reading-tools",
    titleKey: "koodo_reader",
    descKey: "koodo_reader",
    tagsKeys: ["reader", "crossplatform", "notes"],
  },
];

const TRANSLATIONS = {
  siteTitle: {
    zlibrary: { zh: "Z-Library", en: "Z-Library" },
    annas_archive: { zh: "安娜的档案", en: "Anna's Archive" },
    liber3: { zh: "Liber3", en: "Liber3" },
    xiaolipan: { zh: "小力盘搜索", en: "Xiaolipan Search" },
    "24hbook": { zh: "24h 搜书", en: "24h Book Search" },
    book345: { zh: "无名图书", en: "Nameless Books" },
    zhishikoo: { zh: "书籍知识库", en: "Book Knowledge Base" },
    gutenberg: { zh: "Project Gutenberg", en: "Project Gutenberg" },
    standard_ebooks: { zh: "Standard Ebooks", en: "Standard Ebooks" },
    manybooks: { zh: "ManyBooks", en: "ManyBooks" },
    openstax: { zh: "OpenStax", en: "OpenStax" },
    internet_archive_texts: { zh: "Internet Archive Texts", en: "Internet Archive Texts" },
    openlibrary: { zh: "Open Library", en: "Open Library" },
    google_books: { zh: "Google Books", en: "Google Books" },
    wikisource: { zh: "Wikisource", en: "Wikisource" },
    douban_read: { zh: "豆瓣阅读", en: "Douban Read" },
    wechat_read: { zh: "微信读书网页版", en: "WeChat Read (Web)" },
    ia_bookreader: { zh: "Internet Archive BookReader", en: "Internet Archive BookReader" },
    douban_books: { zh: "豆瓣读书", en: "Douban Books" },
    book_list_weekly: { zh: "书单来了", en: "Book List Weekly" },
    goodreads: { zh: "Goodreads", en: "Goodreads" },
    storygraph: { zh: "The StoryGraph", en: "The StoryGraph" },
    fantastic_fiction: { zh: "Fantastic Fiction", en: "Fantastic Fiction" },
    what_should_i_read: { zh: "What Should I Read Next", en: "What Should I Read Next" },
    mangadex: { zh: "MangaDex", en: "MangaDex" },
    comic_walker: { zh: "ComicWalker", en: "ComicWalker" },
    tencent_comics: { zh: "腾讯动漫", en: "Tencent Comics" },
    bilibili_manga: { zh: "哔哩哔哩漫画", en: "Bilibili Manga" },
    manhuagui: { zh: "Manhuagui", en: "Manhuagui" },
    shiyue_magazine: { zh: "十月", en: "October Magazine" },
    cngeography: { zh: "中国国家地理", en: "Chinese National Geography" },
    natural_history_mag: { zh: "博物", en: "Natural History" },
    google_scholar: { zh: "Google Scholar", en: "Google Scholar" },
    doaj: { zh: "DOAJ", en: "DOAJ" },
    jstor_open: { zh: "JSTOR Open Content", en: "JSTOR Open Content" },
    pubmed: { zh: "PubMed", en: "PubMed" },
    arxiv: { zh: "arXiv", en: "arXiv" },
    semantic_scholar: { zh: "Semantic Scholar", en: "Semantic Scholar" },
    chinese_text_project: { zh: "中国哲学书电子化计划", en: "Chinese Text Project" },
    handian_classics: { zh: "汉典古籍", en: "Han Dian Classics" },
    ancientbooks: { zh: "中华经典古籍库（公开信息）", en: "Chinese Classics Database (Info)" },
    wikisource_classics: { zh: "Wikisource 古籍", en: "Wikisource Classics" },
    nlc_classics: { zh: "中华古籍资源库", en: "Chinese Ancient Books Resources" },
    handian_chongguang: { zh: "汉典重光", en: "Handian Chongguang" },
    ximalaya: { zh: "喜马拉雅", en: "Ximalaya" },
    lrts: { zh: "懒人听书", en: "LRTS Audiobooks" },
    wechat_listen: { zh: "微信听书", en: "WeChat Listen" },
    tomato_audiobooks: { zh: "番茄畅听", en: "Tomato Audiobooks" },
    librivox: { zh: "LibriVox", en: "LibriVox" },
    loyal_books: { zh: "Loyal Books", en: "Loyal Books" },
    spotify_audiobooks: { zh: "Spotify Audiobooks", en: "Spotify Audiobooks" },
    audible: { zh: "Audible", en: "Audible" },
    calibre: { zh: "Calibre", en: "Calibre" },
    sigil: { zh: "Sigil", en: "Sigil" },
    pandoc: { zh: "Pandoc", en: "Pandoc" },
    cloudconvert: { zh: "CloudConvert", en: "CloudConvert" },
    zamzar: { zh: "Zamzar", en: "Zamzar" },
    koodo_reader: { zh: "Koodo Reader", en: "Koodo Reader" },
  },
  siteDesc: {
    zlibrary: { zh: "海量电子书，支持多种格式下载。", en: "Large ebook collection with multiple formats." },
    annas_archive: { zh: "人类历史上最大的完全开放的图书馆。", en: "The largest fully open library in human history." },
    liber3: { zh: "海量电子书。", en: "Massive ebook library." },
    xiaolipan: { zh: "海量电子书，支持多种格式下载。", en: "Large ebook collection with multiple formats." },
    "24hbook": { zh: "海量电子书。", en: "Massive ebook collection." },
    book345: { zh: "海量电子书。", en: "Massive ebook collection." },
    zhishikoo: { zh: "海量电子书，支持多种格式下载。", en: "Large ebook collection with multiple formats." },
    gutenberg: { zh: "海量公版电子书，支持多种格式下载。", en: "Public domain ebooks with multiple formats." },
    standard_ebooks: { zh: "高质量排版的免费经典电子书。", en: "High-quality typeset classics for free." },
    manybooks: { zh: "提供免费和折扣电子书下载与推荐。", en: "Free and discounted ebooks for download and discovery." },
    openstax: { zh: "开放教材资源，适合学习与教学。", en: "Open textbook resources for learning and teaching." },
    internet_archive_texts: { zh: "互联网档案馆文献区，覆盖多语种图书。", en: "Internet Archive texts collection across languages." },
    openlibrary: { zh: "支持在线借阅与阅读海量图书。", en: "Borrow and read millions of books online." },
    google_books: { zh: "图书检索与部分在线预览。", en: "Search books with limited online previews." },
    wikisource: { zh: "维基文库，开放文本在线阅读。", en: "Open text library for online reading." },
    douban_read: { zh: "中文书城与原创作品在线阅读平台。", en: "Chinese bookstore and original works platform." },
    wechat_read: { zh: "腾讯微信读书 Web 端，支持笔记与划线。", en: "WeChat Read web app with notes and highlights." },
    ia_bookreader: { zh: "互联网档案馆在线阅读入口，覆盖历史文献与图书。", en: "Online reader for Internet Archive books and documents." },
    douban_books: { zh: "中文书评、书单与高频热门推荐。", en: "Chinese reviews, lists, and popular picks." },
    book_list_weekly: { zh: "中文书评、书单与高频热门推荐。", en: "Chinese reviews, lists, and popular picks." },
    goodreads: { zh: "全球读书社区，擅长英文书单发现。", en: "Global reading community for English book lists." },
    storygraph: { zh: "可视化阅读偏好分析和书籍推荐。", en: "Visualized reading preferences and recommendations." },
    fantastic_fiction: { zh: "按作者和系列发现相关作品。", en: "Discover books by author and series." },
    what_should_i_read: { zh: "输入一本书，发现相似书籍。", en: "Enter a book to find similar reads." },
    mangadex: { zh: "多语言漫画阅读与更新追踪。", en: "Multilingual manga reading and update tracking." },
    comic_walker: { zh: "日本官方漫画在线平台（部分免费）。", en: "Official Japanese manga platform (some free)." },
    tencent_comics: { zh: "国漫与日漫内容平台。", en: "Chinese and Japanese comics platform." },
    bilibili_manga: { zh: "国漫与日漫内容平台。", en: "Chinese and Japanese comics platform." },
    manhuagui: { zh: "漫画资源聚合平台。", en: "Comics aggregation platform." },
    shiyue_magazine: { zh: "大型文学期刊。", en: "Large literary magazine." },
    cngeography: { zh: "大型科普杂志。", en: "Popular science magazine." },
    natural_history_mag: { zh: "大型科普杂志。", en: "Popular science magazine." },
    google_scholar: { zh: "学术论文检索入口，覆盖广泛。", en: "Academic search engine across disciplines." },
    doaj: { zh: "开放获取期刊目录。", en: "Directory of Open Access Journals." },
    jstor_open: { zh: "JSTOR 开放内容资源页面。", en: "JSTOR open content resources." },
    pubmed: { zh: "医学与生命科学论文检索数据库。", en: "Biomedical literature database." },
    arxiv: { zh: "预印本论文平台，理工科常用。", en: "Preprint platform widely used in STEM." },
    semantic_scholar: { zh: "AI 驱动的论文检索与引用分析。", en: "AI-powered paper search and citation analysis." },
    chinese_text_project: { zh: "中文古籍在线检索与阅读。", en: "Search and read Chinese classics online." },
    handian_classics: { zh: "汉典古籍页面与古文辅助。", en: "Handian classics and classical Chinese tools." },
    ancientbooks: { zh: "古籍数字化资源入口与资讯。", en: "Portal and news for digitized classics." },
    wikisource_classics: { zh: "维基文库中文古籍公开文本。", en: "Chinese classics on Wikisource." },
    nlc_classics: { zh: "中华古籍保护计划。", en: "Chinese classics preservation program." },
    handian_chongguang: { zh: "古籍数字化平台。", en: "Digitized classics platform." },
    ximalaya: { zh: "中文有声内容平台，含有声书频道。", en: "Chinese audio platform with audiobooks." },
    lrts: { zh: "中文听书平台，涵盖小说和知识内容。", en: "Chinese audiobook platform covering novels and knowledge." },
    wechat_listen: { zh: "微信官方有声内容平台。", en: "Official WeChat audio platform." },
    tomato_audiobooks: { zh: "今日头条有声内容平台。", en: "Toutiao audio platform." },
    librivox: { zh: "志愿者录制的免费公版有声书。", en: "Volunteer-recorded public domain audiobooks." },
    loyal_books: { zh: "经典有声书与电子书结合平台。", en: "Classics with audiobooks and ebooks." },
    spotify_audiobooks: { zh: "Spotify 的有声书分类入口。", en: "Spotify audiobooks category." },
    audible: { zh: "亚马逊有声书平台，资源丰富。", en: "Amazon audiobook platform." },
    calibre: { zh: "本地电子书管理、转换、传输全能工具。", en: "All-in-one ebook manager, converter, and transfer tool." },
    sigil: { zh: "EPUB 编辑器，适合制作电子书。", en: "EPUB editor for making ebooks." },
    pandoc: { zh: "文档格式转换利器，可处理 Markdown、EPUB、PDF。", en: "Document conversion for Markdown, EPUB, and PDF." },
    cloudconvert: { zh: "在线文件格式转换，支持电子书格式。", en: "Online file conversion with ebook formats." },
    zamzar: { zh: "多格式文件转换，适合临时处理电子书。", en: "Multi-format converter for quick tasks." },
    koodo_reader: { zh: "跨平台电子书阅读器，支持笔记和高亮。", en: "Cross-platform reader with notes and highlights." },
  },
  siteTags: {
    chinese_english: { zh: "中英文", en: "Chinese/English" },
    epub_mobi_azw3_pdf: { zh: "EPUB/MOBI/AZW3/PDF", en: "EPUB/MOBI/AZW3/PDF" },
    epub: { zh: "EPUB", en: "EPUB" },
    epub_pdf: { zh: "EPUB/PDF", en: "EPUB/PDF" },
    public_domain: { zh: "公版书", en: "Public domain" },
    english: { zh: "英文", en: "English" },
    typesetting: { zh: "排版", en: "Typesetting" },
    free: { zh: "免费", en: "Free" },
    fiction: { zh: "小说", en: "Fiction" },
    downloads: { zh: "下载", en: "Downloads" },
    textbooks: { zh: "教材", en: "Textbooks" },
    learning: { zh: "学习", en: "Learning" },
    pdf: { zh: "PDF", en: "PDF" },
    archive: { zh: "档案", en: "Archive" },
    history: { zh: "历史", en: "History" },
    online_reading: { zh: "在线阅读", en: "Online reading" },
    lending: { zh: "借阅", en: "Lending" },
    search: { zh: "检索", en: "Search" },
    preview: { zh: "预览", en: "Preview" },
    multilingual: { zh: "多语言", en: "Multilingual" },
    library: { zh: "文库", en: "Library" },
    public_domain_ol: { zh: "公版", en: "Public domain" },
    online: { zh: "在线", en: "Online" },
    chinese: { zh: "中文", en: "Chinese" },
    original: { zh: "原创", en: "Original" },
    bookstore: { zh: "书城", en: "Bookstore" },
    notes: { zh: "笔记", en: "Notes" },
    reading: { zh: "阅读", en: "Reading" },
    archive_ol: { zh: "档案馆", en: "Archive" },
    reviews: { zh: "书评", en: "Reviews" },
    ratings: { zh: "评分", en: "Ratings" },
    recommendations: { zh: "推荐", en: "Recommendations" },
    community: { zh: "社区", en: "Community" },
    visualization: { zh: "可视化", en: "Visualization" },
    authors: { zh: "作者", en: "Authors" },
    series: { zh: "系列", en: "Series" },
    discovery: { zh: "发现", en: "Discovery" },
    manga: { zh: "漫画", en: "Manga" },
    official: { zh: "官方", en: "Official" },
    comics: { zh: "漫画", en: "Comics" },
    serials: { zh: "连载", en: "Serials" },
    updates: { zh: "更新", en: "Updates" },
    magazine: { zh: "杂志", en: "Magazine" },
    literature: { zh: "文学", en: "Literature" },
    geography: { zh: "地理", en: "Geography" },
    biology: { zh: "生物", en: "Biology" },
    papers: { zh: "论文", en: "Papers" },
    academic: { zh: "学术", en: "Academic" },
    open_access: { zh: "开源期刊", en: "Open access" },
    oa: { zh: "OA", en: "OA" },
    journals: { zh: "期刊", en: "Journals" },
    humanities: { zh: "人文", en: "Humanities" },
    open: { zh: "开放", en: "Open" },
    medicine: { zh: "医学", en: "Medicine" },
    preprints: { zh: "预印本", en: "Preprints" },
    stem: { zh: "理工", en: "STEM" },
    research: { zh: "科研", en: "Research" },
    ai: { zh: "AI", en: "AI" },
    citations: { zh: "引用", en: "Citations" },
    classics: { zh: "古籍", en: "Classics" },
    classical_chinese: { zh: "古文", en: "Classical Chinese" },
    tools: { zh: "工具", en: "Tools" },
    handian: { zh: "汉典", en: "Handian" },
    digitization: { zh: "数字化", en: "Digitization" },
    resources: { zh: "资源", en: "Resources" },
    chinese_audio: { zh: "中文", en: "Chinese" },
    audiobooks: { zh: "有声书", en: "Audiobooks" },
    listening: { zh: "听书", en: "Listening" },
    mobile: { zh: "移动端", en: "Mobile" },
    public_domain_audio: { zh: "公版", en: "Public domain" },
    free_audio: { zh: "免费", en: "Free" },
    subscription: { zh: "订阅", en: "Subscription" },
    conversion: { zh: "格式转换", en: "Conversion" },
    management: { zh: "管理", en: "Management" },
    desktop: { zh: "桌面端", en: "Desktop" },
    epub_tool: { zh: "EPUB", en: "EPUB" },
    editing: { zh: "编辑", en: "Editing" },
    creation: { zh: "制作", en: "Creation" },
    cli: { zh: "命令行", en: "CLI" },
    formats: { zh: "格式", en: "Formats" },
    online_conversion: { zh: "在线转换", en: "Online conversion" },
    easy: { zh: "便捷", en: "Easy" },
    reader: { zh: "阅读器", en: "Reader" },
    crossplatform: { zh: "跨平台", en: "Cross-platform" },
  },
  category: {
    "ebook-downloads": { zh: "电子书下载", en: "Ebook Downloads" },
    "online-reading": { zh: "电子书在线阅读", en: "Online Reading" },
    "book-recommendations": { zh: "书单/书籍推荐", en: "Book Lists & Recommendations" },
    "magazines-comics": { zh: "杂志漫画", en: "Magazines & Comics" },
    "academic-journals": { zh: "学术期刊", en: "Academic Journals" },
    "classical-texts": { zh: "数字古籍", en: "Classical Texts" },
    audiobooks: { zh: "有声书", en: "Audiobooks" },
    "reading-tools": { zh: "阅读软件/工具", en: "Reading Tools" },
  },
  categoryIcon: {
    "ebook-downloads": "📥",
    "online-reading": "📖",
    "book-recommendations": "🧭",
    "magazines-comics": "📰",
    "academic-journals": "🧪",
    "classical-texts": "🏛️",
    audiobooks: "🎧",
    "reading-tools": "🛠️",
  },
};

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
  sitesCache: null,
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
  backToTop: document.getElementById("backToTop"),
};

init();

function init() {
  applySavedTheme();
  applyLanguage();
  bindEvents();
  render();
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedRender = debounce(() => render(), 150);

function bindEvents() {
  refs.searchInput.addEventListener("input", (event) => {
    state.keyword = event.target.value.trim().toLowerCase();
    debouncedRender();
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
  if (refs.backToTop) {
    refs.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  refs.sidebarNav.addEventListener("keydown", (e) => {
    const buttons = Array.from(refs.sidebarNav.querySelectorAll(".sidebar-link:not(:disabled)"));
    const currentIndex = buttons.findIndex(b => b === document.activeElement);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % buttons.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = buttons.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    buttons[nextIndex].focus();
  });
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

function t(keyObj, lang) {
  return keyObj[lang] || keyObj.zh || "";
}

function getAllSites() {
  if (state.sitesCache) {
    return state.sitesCache;
  }
  const lang = state.language;
  state.sitesCache = SITES.map((site, index) => ({
    id: `site-${index}`,
    url: site.url,
    category: site.category,
    title: t(TRANSLATIONS.siteTitle[site.titleKey], lang),
    desc: t(TRANSLATIONS.siteDesc[site.descKey], lang),
    tags: site.tagsKeys.map(k => t(TRANSLATIONS.siteTags[k], lang)),
  }));
  return state.sitesCache;
}

function invalidateSitesCache() {
  state.sitesCache = null;
}

function getCategories(sites) {
  const lang = state.language;
  const extraCategories = [];
  const categoryKeys = Object.keys(TRANSLATIONS.category);
  const seen = new Set(categoryKeys);
  for (const site of sites) {
    if (!seen.has(site.category)) {
      seen.add(site.category);
      extraCategories.push(site.category);
    }
  }
  const ordered = categoryKeys.filter(k => TRANSLATIONS.category[k][lang]);
  return [...ordered, ...extraCategories];
}

function getCategoryName(categoryKey, lang) {
  return TRANSLATIONS.category[categoryKey]?.[lang] || categoryKey || "";
}

function getCategoryIcon(categoryKey) {
  return TRANSLATIONS.categoryIcon[categoryKey] || "📚";
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
  const displayName = category === getAllLabel() ? category : getCategoryName(category, state.language);
  chip.textContent = `${displayName} · ${count}`;
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
  btn.setAttribute("role", "tab");
  btn.setAttribute("aria-selected", category === state.sidebarCategory ? "true" : "false");
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
  icon.textContent = getCategoryIcon(category);
  const text = document.createElement("span");
  text.className = "sidebar-text";
  text.textContent = getCategoryName(category, state.language);
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
    title.textContent = `${getCategoryIcon(category)} ${getCategoryName(category, state.language)}`;

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

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function highlightKeyword(text, keyword) {
  if (!keyword) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return escaped.replace(regex, "<mark>$1</mark>");
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
  title.innerHTML = highlightKeyword(site.title, state.keyword);

  const desc = document.createElement("span");
  desc.className = "site-desc";
  desc.innerHTML = highlightKeyword(site.desc || lang.noDesc, state.keyword);

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
    updateBackToTopVisibility();
    scrollSpy.ticking = false;
  });
}

function updateBackToTopVisibility() {
  if (!refs.backToTop) return;
  const shouldShow = window.scrollY > 400;
  refs.backToTop.classList.toggle("visible", shouldShow);
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
    const isActive = category === state.sidebarCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
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
  invalidateSitesCache();
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
