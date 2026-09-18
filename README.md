# 找书吧 zhaoshuba.top

书籍与阅读资源导航站（Hugo 构建）。收录电子书下载、在线阅读、书单推荐、数字古籍、学术文献与阅读工具类站点，纯导航、不存储任何书籍文件。

## 项目结构

- `content/sites/` — 73 个收录站点页（含原创介绍与使用提示）
- `content/categories/` — 8 个分类落地页
- `content/blog/` — 原创文章
- `content/about.md` `content/faq.md` `content/privacy.md` — 站务页
- `themes/zhaoshuba/` — 自写轻量主题（含结构化数据）
- `scripts/` — 内容生成脚本

## 本地开发

```bash
hugo server -D
```

## 部署

main 分支 = 构建产物（GitHub Pages 直接 serve），源码在本分支（hugo-source）维护。

```bash
hugo --minify
# 将 public/ 内容部署到 main 分支
```

## 收录原则

1. 内容与阅读 / 书籍 / 学习相关
2. 信息清晰、定位明确
3. 稳定可用
4. 对读者有实际价值

本站是纯导航站，只提供第三方网站入口，不存储、不分发任何书籍文件；第三方站点的内容、广告与版权状态由各自负责。
