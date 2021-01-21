---
title: 'An HTTP Request behind a Proxy on Vercel'
slug: 'http-request-behind-a-proxy'
date: '2021-01-16'
---

# Getting the Details of an HTTP Request in NodeJS whilst behind a proxy in Vercel.

## An addendum to [get-ip-in-node](/posts/get-ip-in-node)

```javascript

module.exports = function handler(req, res){
    const {headers} = req;
    console.log(Object.keys(headers));
    console.log(Objectv.values(headers));
    /*
    [
        'host',
        'x-forwarded-host',
        'x-forwarded-proto',
        'x-forwarded-port',
        'x-forwarded-for',
        'x-vercel-id',
        'x-vercel-forwarded-for',
        'x-vercel-deployment-url',
        'x-real-ip',
        'accept-language',
        'accept-encoding',
        'sec-fetch-dest',
        'sec-fetch-user',
        'sec-fetch-mode',
        'sec-fetch-site',
        'accept',
        'user-agent',
        'upgrade-insecure-requests',
        'dnt',
        'sec-ch-ua-mobile',
        'sec-ch-ua',
        'connection'
        ]
    */
}

```        

I do not think you can get any paths (eg: https://domain.tld/path/to/subpage, the stuff after '.tld') from the referred domain.

if one calls `req.url`, you only get the post-domain url for the proxy not the referrer.

`req.headers["x-real-ip"]`, `req.headers["x-vercel-forwarded-for"]`, `req.headers["x-forwarded-for"]` for the original request's ip address.

`req.headers["referrer"]` or `req.headers["origin"]` for the origin's domain.