---
title: 'Curl and Reddit'
slug: 'curl-and-reddit'
date: '2021-02-06'
tags: 'curl,linux,json'
---

## Preamble

I wanted a some data that was familiar but not too familiar.  I recall learning from a `MongoDB` course that you could get the `JSON` data for `reddit` by appending `.json` to the end of the `URL` and return the payload as `JSON`.  Cue attempt and the ensuing issues that occur.

## Attempt 1

```bash
curl https://reddit.com/.json
```

Returns nothing

## Attempt 2

```bash
curl https://reddit.com/.json -o sample.json
```

Returns a blank file.

## Attempt 3

```bash
curl -L https://reddit.com/.json
```

`-L` means to follow redirects.

## Result 3

```javascript
{"message": "Too Many Requests", "error": 429}
```

Rate limited after four requests...

I also briefly investigated killing connections on `curl`.  And read some stuff on there being 'Keep-Alive' connections or something.  I had a thought to change the 'User-Agent' string instead.

## Attempt 4

It seems Reddit may have something against `curl`.

Changing the 'User-Agent' header.

A StackOverflow post on how to do it [here](https://stackoverflow.com/a/31597823).

A valid 'User-Agent' value found on MDN [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent#examples).

```bash

$ curl -X GET -L -H "User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0" https://reddit.com/.json

```

Success.  Unfortunately, the file is 480kB on disc and takes a while to open...  I guess I'll have to figure out a way to trim it down.
