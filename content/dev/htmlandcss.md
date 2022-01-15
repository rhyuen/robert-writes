---
title: 'Stuff I learned doing a few weeks of CSS and HTML'
slug: 'htmlandcss'
date: '2021-07-17'
tags: 'css,html'
---

## Preamble

Just some stuff I had to look up frequently or often enough that I felt writing it down would benefit me on a longer term basis whilst making a bunch of, mostly, responsive HTML/CSS web pages and fiddling with CSS naming conventions/styles (mainly BEM).

## Listicle

1. HTML `input` elements don't have `:before` and `:after` pseudo elements.
2. `user-select: none` to prevent users from high-lighting your text or perhaps the text in a button.
3. responsive squares
4. Below from [web.dev](https://web.dev/css-web-vitals/#critical-css)
5. For `:focus` pseudo selector, you can't change the border radius of the outline.  But you can change the color, width and style of the border.  

```css
a:focus{
    outline: 1px solid black;
}
```

> Stylesheets are render-blocking. This means that the browser encounters a stylesheet, it will stop downloading other resources until the browser has downloaded and parsed the stylesheet. This may delay LCP. To improve performance, consider removing unused CSS, inlining critical CSS, and deferring non-critical CSS.
