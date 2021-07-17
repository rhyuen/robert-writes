---
title: 'Pointer Event'
slug: 'pointerevent'
date: '2021-06-07'
tags: 'css'
---

It seems there's a css property called `pointer-events` then you can set so that clicks don't work on it.  and you can set it with a value of `none`, this lets you use invisible modals instead of needing to use javascript or the :target trick.

```css

.modal{
    pointer-events: none;
}

```


[Wes Bos](https://wesbos.com/javascript/06-serious-practice-exercises/click-outside-modal)