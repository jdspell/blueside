# Blueside

Learning journal at [blueside.ai](https://blueside.ai). Built with Jekyll, hosted on GitHub Pages.

## Creating a Post

1. Create a folder under `_articles/` named `YYYY-MM-DD/`
2. Add a file named after the topic (e.g. `attention.md`) with the following front matter:

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

## Upcoming / Drafts

Work-in-progress posts live in `_upcoming/topic-name/` with no date in the folder name.
Jekyll ignores this folder entirely, so nothing there affects the live site.

The file inside is plain Markdown — no front matter required, just write freely.

When a post is ready to publish:

1. Move the folder to `_articles/YYYY-MM-DD/` and rename the file to `topic-name.md`
2. Add the full front matter (see template above)
3. Push — it will appear on the site automatically

## Code Files

Add a `code/` directory inside the post folder:

```
_articles/
  2025-08-02/
    attention.md
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
