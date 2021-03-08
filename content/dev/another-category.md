---
title: 'Adding another category to the blog'
slug: 'another-category'
date: '2021-03-08'
tags: 'updates,issues,next'
---

I added another category to the blog: "Consumption"

I ended up duplicating more code than I thought I would.  Nothing else was quickly coming to mind.  The chief impetus was adding another category to the blog was on my todo list and I wanted to check it off.  A potential solution was doing something fancy withstate manipulation but I kind of thought the dynamic routing inherent to the framework would be a better fit.  I assume I'll find a better solution as I continue to use the framework.

Some Problems encountered during the attempt:

1. Got an Illiegal read operation on a directory when trying to `fs.readdirSync(postsDirectory)` on a directory within a directory in it whilst adding a new section of posts.  I ended up having two sibling directories, one for 'dev' posts and the other for 'consumption'.


2. I encountered an issue when I attempt to mix dynamic routing  with static/fixed/imperative routes.  It didn't work as advertsied when I tried it.  It's even listed explicitly in an example [here](https://nextjs.org/docs/routing/dynamic-routes#caveats) that /consumption/index should be reachable.  Instead, I got a 404.

Some `JSON` to illustrate the point.

```json
{
    "consumption": [
        "[id].js",
        "index.js"
    ]        
}
```    