---
title: 'Get an IP Address from an HTTP Request in NodeJS on Vercel'
slug: 'get-ip-in-node'
date: '2021-01-02'
tags: 'node,serverless'
---


```javascript
const handler = (req, res) => {
    res.status(200).json({
        ip: req.connection.remoteAddress || "nope"
    })
}

module.exports = handler;
```

The above returns: 

```javascript
{
    ip: "127.0.0.1"
}
```

which is probably not what you want.

The app instance is behind a proxy and what you're probably looking for is as follows:

```javascript
const handler = (req, res) => {
    res.status(200).json({
        ip: req.headers["x-forwarded-for] || "nope"
    })
}

module.exports = handler;
```

hit your deployed endpoint again and the result should match your ip address.

[Source](https://stackoverflow.com/a/8107922)
