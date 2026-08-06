#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 Hugo 预览版中所有站内链接改写为 file:// 可直开的相对路径（指向 index.html 文件）。
用法: python3 fix-file-links.py <preview_root>
"""
import os
import re
import sys

root = sys.argv[1]

def fix_href(href, curdir):
    if not href:
        return None
    if href.startswith(("http://", "https://", "mailto:", "#", "javascript:", "tel:")):
        return None
    if re.search(r"\.(css|js|svg|png|jpg|jpeg|ico|webp|xml|json|txt|zip|pdf)(\?.*)?$", href):
        return None
    base = href.split("?")[0].split("#")[0]
    if not base:
        return None

    # 相对当前页面文件所在的目录
    if base.startswith("/"):
        # 绝对站内路径（相对站点根）
        rel = base.lstrip("/")
    elif base.startswith("./"):
        rel = base[2:]
    elif base.startswith("../"):
        rel = base
    else:
        return None

    target = os.path.normpath(os.path.join(curdir, rel))
    target_abs = os.path.join(root, target)

    if os.path.isdir(target_abs) and os.path.exists(os.path.join(target_abs, "index.html")):
        fixed = os.path.join(target, "index.html")
    elif os.path.isfile(target_abs):
        fixed = target
    else:
        return None

    # 从当前 HTML 文件所在目录算相对路径
    relpath = os.path.relpath(fixed, curdir).replace(os.sep, "/")
    if not relpath.startswith("."):
        relpath = "./" + relpath
    return relpath

count = 0

def fix_dir(root):
    global count
    for dirpath, _dirs, files in os.walk(root):
        for fn in files:
            if not fn.endswith(".html"):
                continue
            path = os.path.join(dirpath, fn)
            curdir = os.path.relpath(dirpath, root)
            with open(path, encoding="utf-8") as f:
                html = f.read()
            changed = False

            def repl(m):
                nonlocal changed
                href = m.group(1)
                fixed = fix_href(href, curdir)
                if fixed:
                    changed = True
                    return f'href="{fixed}"'
                return m.group(0)

            new = re.sub(r'href="([^"]*)"', repl, html)
            if changed:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new)
                count += 1
                print(f"✓ {os.path.relpath(path, root)}")

fix_dir(root)
print(f"\n共修复 {count} 个页面")
