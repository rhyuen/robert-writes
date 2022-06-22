---
title: 'Using Javascript and Dialog to make the browser go fullscreen.'
slug: 'browser-fullscreen'
date: '2022-04-18'
tags: 'web,javascript,html'
---

You can't.

The element in question cannot be within the tree of a `<dialog>` tag.  Otherwise, it can go fullscreen, but it will immediately exit out of fullscreen.

Update: It doesn't work at all even if there is a `<dialog>` tag.
