---
title: 'Typescript and new Date() Difference'
slug: 'date-difference-typescript'
date: '2021-05-1'
tags: 'javascript,typescript'
---

### Issue

The code works but typescript flags the below code as a typescript issue.

```javascript
const date = "2021-05-02T07:06:48.437Z"
const differenceInSeconds: number = (new Date()- new Date(date)) / 1000;
/*
Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)

However, the code still runs.
*/
```

### Solution

```javascript
const date = "2021-05-02T07:06:48.437Z"
const differenceInSeconds: number = (new Date().valueOf()- new Date(date).valueOf()) / 1000;
```

The answer in the source posits that there is an implicit usage of `valueOf()` on new Date() by the `-` operattion which typescript finds is an issue.  `new Date().valueOf()` yields the same result without the implicitness.

[Source: StackOverflow](https://stackoverflow.com/a/60688789)