---
title: 'NextJS + Link'
slug: 'next-and-link'
date: '2021-02-19'
tags: 'NextJS,link'
---

Weird issue with a space between <Link> ... </Link>
and you get an issue with something only allowing one `React.Children`.

I found the solution resolved from the source below.

```javascript
<Link> {some} {text} </Link>

//to

<Link><a>some more text</a></Link>
```

I think that was the answer to the problem; however, I am not entirely sure if it was.

[source](https://stackoverflow.com/questions/61651497/next-js-error-react-children-only-expected-to-receive-a-single-react-element-c)