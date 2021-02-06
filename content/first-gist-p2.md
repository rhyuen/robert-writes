---
title: 'First Gist - Part 2: Styled Code Syntax'
slug: 'first-gist-p2'
date: '2021-01-21'
tags: 'markdown'
---

Continued from [Part 1](/posts/first-gist).

I ended up looking up a Code syntax highlighter I saw a while back in a post [here](https://dev.to/imranib/build-a-next-js-markdown-blog-5777).  Which led me to trying out `react-syntax-highlighter`.  Here's a [link](https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme).

I Changed the styles using this snippet of code from the docs [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter#prism).

Ended up getting this unexpected token thrown while using 'react-syntax-highlighter' together with 'react-markdown'.

```javascript
../node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js:1
export { default as coy } from './coy';
^^^^^^

SyntaxError: Unexpected token export
```

I ended up googling `'export { default as coy } from './coy'; nextjs'`.  I added the NextJS because I suspected something to do with things needing to be compiled in the node context instead of the browser context and there may or may not have been issues regarding that.  At least that was my instinct/hypothesis.

It led me to this comment [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-663992983).

The solution was in the path above `../node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js`, you change `esm` to `cjs` and everything works again.  

