#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 Hugo 预览版里的站内链接 / 资源引用改写成 file:// 可直开的相对路径。

用法: python3 fix-file-links.py <preview_root>

规则（href= 与 src= 都处理）：
- 站内页面链接 → 指向真实存在的 <dir>/index.html 文件
- 站内资源（css/svg/png/...） → 改成相对路径，并丢掉 ?v= 查询串
  （file:// 下带 query 会当成文件名的一部分，导致 404）
- http(s)/mailto/#/javascript:/data: 一律不动
"""
import os
import re
import sys

root = os.path.abspath(sys.argv[1])

ATTR_RE = re.compile(r'\b(href|src)=(["\'])([^"\']*)\2')


def resolve(url, curdir):
    if not url or url.startswith(("http://", "https://", "//", "mailto:", "tel:", "#", "javascript:", "data:")):
        return None
    path = url.split("?")[0].split("#")[0]
    if path == "":
        return None

    here = os.path.join(root, curdir)
    if path.startswith("/"):
        # 站点根路径（相对 preview 根）
        candidates = [os.path.normpath(os.path.join(root, path.lstrip("/")))]
    elif path.startswith("./") or path.startswith("../"):
        # 先按「相对当前页面目录」解释，再回退到「相对站点根」
        # （Hugo relativeURLs 生成的 ./blog/x.html 实为相对站点根）
        candidates = [
            os.path.normpath(os.path.join(here, path)),
            os.path.normpath(os.path.join(root, path)),
        ]
    else:
        return None

    for target in candidates:
        if not (target == root or target.startswith(root + os.sep)):
            continue
        if os.path.isfile(target):
            fixed = os.path.relpath(target, here)
        elif os.path.isdir(target) and os.path.exists(os.path.join(target, "index.html")):
            fixed = os.path.relpath(os.path.join(target, "index.html"), here)
        elif os.path.isfile(target + ".html"):
            # uglyURLs 预览版：/about/ 实际是 about.html
            fixed = os.path.relpath(target + ".html", here)
        else:
            continue
        fixed = fixed.replace(os.sep, "/")
        if not fixed.startswith("."):
            fixed = "./" + fixed
        return fixed
    return None


changed_files = 0
changed_refs = 0


def walk():
    global changed_files, changed_refs
    for dirpath, _dirs, files in os.walk(root):
        for fn in files:
            if not fn.endswith(".html"):
                continue
            path = os.path.join(dirpath, fn)
            curdir = os.path.relpath(dirpath, root)
            with open(path, encoding="utf-8") as f:
                html = f.read()

            stats = {"n": 0}

            def repl(m):
                fixed = resolve(m.group(3), curdir)
                if fixed:
                    stats["n"] += 1
                    return "%s=%s%s%s" % (m.group(1), m.group(2), fixed, m.group(2))
                return m.group(0)

            new = ATTR_RE.sub(repl, html)
            if stats["n"]:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new)
                changed_files += 1
                changed_refs += stats["n"]
                print("✓ %s (%d 处)" % (os.path.relpath(path, root), stats["n"]))


walk()
print("\n共修复 %d 个页面 / %d 处引用" % (changed_files, changed_refs))
