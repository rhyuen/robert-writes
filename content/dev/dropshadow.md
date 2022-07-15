---
title: 'Drop Shadow around Elements'
slug: 'dropshadow'
date: '2022-07-14'
tags: 'css'
---

This comes up often enough but not enough for me to memorize it.

Shadows around elements.

```css

/*This shadow surrounds the element.*/

div{
    filter: drop-shadow(0 0 0.75rem rgba(0,0,0,0.2));
}

/*This shadow extends solely upwards of the element*/
div{
    filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
}
```

[https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow](MDN)
