---
title: 'On ValidatorJS  the .escape() function'
slug: 'validator-escape-function'
date: '2021-01-17'
tags: 'javascript'
---

# Was wondering if the `validator.escape("some string goes here") mutates the string or returns a new one.

The documentation [here](https://github.com/validatorjs/validator.js#sanitizers) doesn't make it immediately obvious whether the function returns a copy or mutates the existing one.

Below are three examples:

```javascript
const validator = require("validator");

module.exports = async function handler(req, res){
    let escaped = validator.escape("https://robert-writes.vercel.app/<script>alert(1)</script>");
    let notescaped = "https://robert-writes.vercel.app/<script>alert(1)</script>";
    res.send(escaped);    
}
```
The above yields the text `https://robert-writes.vercel.app/<script>alert(1)</script>`.


```javascript
const validator = require("validator");

module.exports = async function handler(req, res){
    let escaped = validator.escape("https://robert-writes.vercel.app/<script>alert(1)</script>");
    let notescaped = "https://robert-writes.vercel.app/<script>alert(1)</script>";
    res.send(notescaped);    
}
```
The above yields an alert function going off and the text 'https://robert-writes.vercel.app/'.  So XSS!

```javascript
const validator = require("validator");

module.exports = async function handler(req, res){
    let escaped = validator.escape("https://robert-writes.vercel.app/<script>alert(1)</script>");
    let notescaped = "https://robert-writes.vercel.app/<script>alert(1)</script>";
    res.status(200).json({
        escaped,
        notescaped
    });    
}
```

No XSS from the example above.

In short, `validator.escape(string)` returns a mutated copy of the string and does not mutate the original.