---
title: 'NextJS + Vercel + Mongoose: 'Cannot overwrite model once compiled Mongoose' '
slug: 'nextandmongoose'
date: '2021-02-14'
tags: 'NextJS,vercel,mongoose'
---

# An issue with Mongoose, Vercel and NextJS 

I kept getting an error popping up that mentioned 'not being able to overwrite the model once compiled' or something to that effect.  I can't quite recall (I'm writing this a week after I resolved the issue).

It seems that you can resolve the issue by checking `mongoose`'s `models` field for the presence of the error mentioning model and if it exists use it, otherwise export it.


## Original

```javascript
module.exports = mongoose.model("Vote", voteSchema);
```

## Updated

```javascript
module.exports = mongoose.models.Vote || mongoose.model("Vote", voteSchema);
```

[Source](https://stackoverflow.com/a/43761258)