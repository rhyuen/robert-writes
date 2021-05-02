---
title: 'Multiple Headers using curl on the command line.'
slug: 'curl-headers'
date: '2021-04-18'
tags: 'curl,headers,linux'
---

# Scenario

I need to send a HTTP request with multiple headers.  Such as an authorized request with content headers.  Usually, it is not uncommon for me to send a request with a `Content-Type: application/json` header.  However, I needed to send something with more than one header like a custom header or an Authorization header.

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "my name is", "email": "email@email.ca"}' http://localhost:8080/api/subscribe
```

# Solution

You can have multiple headers in your request by adding successive `-H "Header_NAME: header_VALUE"` flags and values to your command. 

```bash
$ 
```

[Source: StackOverflow](https://stackoverflow.com/questions/4212503/how-can-i-set-the-request-header-for-curl)