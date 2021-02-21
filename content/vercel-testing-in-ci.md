---
title: 'The Painful Process of CI and Testing with Vercel'
slug: 'vercel-testing-in-ci'
date: '2021-02-06'
tags: 'bash,circleci,vercel,deployment'
---

# Preamble

This is my second time attempting this.  The first time was around a year ago and it was oh so unpleasant.  I left some notes in the `README.md` of the old repo; however, I found that the results were kind of lacking.  Hopefully, this `README.md` will be more fruitful (less bad) and more informative.

# Encountered Problems and Solutions

Attempting to use vercel dev in CI results in this:

![](/images/vercel-login-ci.png)

## Problem  

It seems I have to login or something.  I addressed this last time using the vercel token, so this part wasn't so bad.


## Solution

```bash
$ vercel dev --listen 8080 --token $VERCEL_TOKEN
```

Acquire the token in the Screen Below:

![](/images/vercel-token.png)

Go fetch the Vercel API Token from your account.

Also, in the CIRCLECI gui, you have to add the name for the environment variable of the token.

![](/images/circleci-envvar.png)

![](/images/circleci-project-settings.png)

## Next Problem

There's a prompt that demands questions be answered.

![](/images/vercel-login-ci-prompt.png)

Solution

"vercel dev --listen 8080 --token $VERCEL_TOKEN --confirm"


# There's an issue with the PORT: 8080 being Refused

Download `wait-on` via `npm`.

`npm` page is [here](https://www.npmjs.com/package/wait-on).

```bash
npm install wait-on
```

then...

Run the line with '--confirm' as a background process using the `&` operator.

According to this StackOverflow post [here](https://unix.stackexchange.com/a/451502) the `&` operator turns the preceeding command into a background process AND serves as a line terminator like `;`.

This line in particular from the link above:
"`& acts as a command separator, as well as placing the command preceding it in the background.`"

```bash
$ vercel dev --listen 8080 --token $VERCEL_TOKEN --confirm &
```

Working Scripts are as follows: 

```javascript
{
    "test": "jest",
    "dev:start": "vercel dev --listen 8080 &",
    "dev:test": "npm run dev:start && wait-on tcp:8080 && npm run test && npm run cleanup",
    "ci:dev": "vercel dev --listen 8080 --token $VERCEL_TOKEN --confirm &",    
    "cleanup": "ps | grep node | awk '{print $1}' | xargs kill -9 $1",
    "ci": "NODE_ENV=test npm run ci:dev && wait-on tcp:8080 && npm run test"
}
```


It should now work.