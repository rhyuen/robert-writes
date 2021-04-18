---
title: 'Typescript and Mongoose and Sonarlint'
slug: 'typescript-mongoose'
date: '2021-03-17'
tags: 'typescript,mongoose,sonarlint'
---

Converting a NextJS Api and frontend to Typescript.

Sonarlint flags the following:

```javascript
const result = await Poll.findOne({ _id: escID });
```

```javascript
const result = await Poll.findOne({ _id: escID }).exec();
```

According to the Source below, due to the peculiar nature of mongoose 'promises' (them technically not being promises but behaving like promises), you need to tack an `.exec()` to the end to make the 'issue' go away.

Also have to remember to remove the '.js' extension from module imports.  I don't quite recall the reason, however, I think it has to do with when babel compiles/transpiles turns typescript to javascript, having the explicit reference to a file extension gums up the manner in which babel works.

## Before

```javascript
import Poll from "../models/poll.js";
```

## After

```javascript
import Poll from "../models/poll";
```

[Source: Stackoverflow](https://stackoverflow.com/a/56457912)