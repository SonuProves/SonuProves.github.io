# Sonu Kumar — Personal Website

Personal academic site for Sonu Kumar, B.Math candidate at ISI Bangalore. Built with [Jekyll](https://jekyllrb.com/) — blog posts are dynamic; everything else is static HTML/CSS.

## Writing a new post

Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`:

```yaml
---
layout: post
title: "Your Title"
date: 2026-07-07
tags: [math, stats]
excerpt: "Short summary for the blog card."
---

Your content here. Use `$...$` for inline math and `$$...$$` for display math.
```

## Build locally

```bash
gem install jekyll bundler
jekyll serve
```

Site builds to `_site/` and previews at `http://localhost:4000`.

## Deploy

Push the repo (including `_site/` or configure a CI deploy). If using GitHub Pages:

1. Push to a `gh-pages` branch or configure the root branch in repo settings.
2. GitHub Pages runs Jekyll automatically — no build step needed.

---

*Design preserved from the original static site — only the blog was converted to Jekyll.*
