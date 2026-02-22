# Blueside

Learning journal at [blueside.ai](https://blueside.ai). Built with Jekyll, hosted on GitHub Pages.

## Creating a Post

1. Create a folder under `_articles/` named `YYYY-MM-DD_topic-name/`
2. Add `index.md` with the following front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
permalink: /posts/YYYY-MM-DD-topic-name/
tags: [tag1, tag2]
description: "One sentence shown on the homepage."
github: "https://github.com/..."      # optional
github_label: "label text"            # optional, defaults to "code"
published: true
---
```

3. Write content in Markdown below the front matter.
4. Optionally add a `code/` subfolder for any code files associated with the post.

## Drafts and Coming Soon

Set `published: false` in front matter. The post lives in the repo but will not appear on the live site.

To preview unpublished posts locally:

```bash
bundle exec jekyll serve --unpublished
```

## Code Files

Add a `code/` directory inside the post folder:

```
_articles/
  2025-08-02_transformer-attention/
    index.md
    code/
      attention.py
      notebook.ipynb
```

Link to code on GitHub using the `github` front matter field, or inline in the post body.
Jupyter notebooks render natively on GitHub, so a direct link is enough for readers.

## RSS Feed

Available at `/feed.xml`. Used for Substack cross-posting via *Settings > Import* on Substack.

## Local Development

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000`.
