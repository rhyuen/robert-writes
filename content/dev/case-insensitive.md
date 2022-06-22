---
title: 'Issue with case-sensitive filenames with git and github.'
slug: 'case-insensitive'
date: '2021-07-17'
tags: 'git'
---

## Issue

The names of files on my local environment (Windows 10 + WSLv1) has a local file name "Home.tsx" but it's recorded in git and Github as "home.tsx". At one point, the file on my local system was 'home.tsx', but I changed it for convention and consistency purposes.  Back to the topic at hand.  When CI attempts to build the project, it fails because "/components/home.tsx" is referenced as "/components/Home.tsx" in the code as such : 

```typescript
import Home from "./components/Home.tsx"
```

One would imagine that it's easy to address this issue.  Go into the editor and rename the file and commit the changes.

```bash
> git add .
> git commit -m "Change filename for Home.tsx to Home.tsx because github has home.tsx and it's making the CI build fail."
```

The build fails again.  You check the github page and it's still 'home.tsx' and not "Home.tsx".

![Screenshot of Github and the issue](/images/case-insensitive.png)

## Solution

I am not the only that had this problem.  I found the solution [here](https://github.com/isaacs/github/issues/1520#issuecomment-810678233).

The issue can be resolved by using `mv` to rename the file to something that's not the final intended name for the file like 'home1234.tsx', followed by add the change in file name to the git staging area.  Finally, one calls mv again on the 'home1234.tsx' file and then gives it the intended filename of 'Home.tsx' and adds the results to staging followed by a commit.

```bash
> mv home.tsx home1234.tsx
> git add home1234.tsx
> mv home1234.tsx Home.tsx
> git add Home.tsx
> git commit -m "Resolved case-sensitivity issue and changed '/components/home.tsx' to '/components/Home.tsx'."
```

## Aside

I also learned that `git add` and `git stage` are the same.

The solution had a command that used `git stage` and I wasn't sure what it was.  A stack overflow [post](https://stackoverflow.com/a/34175877) made things clear by stating that `git add` and `git stage` are synonyms.

## Sources

[Github](https://github.com/isaacs/github/issues/1520#issuecomment-810678233)
[Stack Overflow for difference between git add and git stage](https://stackoverflow.com/a/34175877)