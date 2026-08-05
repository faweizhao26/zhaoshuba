# 找书吧 zhaoshuba.top

书籍与阅读资源导航站（Hugo 构建）。**只收录正版、公版与合法来源**，不收录任何盗版电子书站点。

## 项目结构

- `content/sites/` — 48 个收录站点页（含原创评测）
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

1. 来源合法（正版/公版/开放授权）
2. 信息清晰、定位明确
3. 稳定可用
4. 对读者有实际价值

不收录：盗版电子书站、来源不明的资源聚合站。
