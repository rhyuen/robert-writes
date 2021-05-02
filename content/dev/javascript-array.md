---
title: 'Javascript Array of a denoted length'
slug: 'javascript-array'
date: '2021-05-01'
tags: 'javascript'
---

This has come up more than once and I've had to search for it more than once.  As such, a regression blog post that only I will read.

```javascript
    let latest = new Array(12);  
    //Creates a new empty array of length 12

    let latestSecond = new Array(20).fill(15);  
    // Creates a new empty array of length 20 filled with the Number 15.

    let latestRandom = new Array(20).fill(Math.ceil(Math.random()*100));  
    // Creates a new empty array with length 20 filled with one random number.  
    // They're not all different for each cell.  I tried it.
```

[Source: StackOverflow](https://stackoverflow.com/a/3746797)

Addendum

Just as I finished writing above I found an even more useful method...such is life.

```javascript

    let latest = [...new Array(25).keys()];
    //Creates an array with values 0 to 24

```


[Source: StackOverflow](https://stackoverflow.com/a/33352604)