---
title: 'Linux Stuff.'
slug: 'dec17-21-linux'
date: '2021-12-17'
tags: 'linux'
---

## About

I learned some stuff whilst following the 'Advent of Cyber' labs on [TryHackMe](https://tryhackme.com).

## Stuff I learned

### Finding Text in Folders 1

To find specific text in a given series of file in a folder

In the video for the AWS Challenge, they use the following:

```bash

> cat * | grep textyouarelookingfor

```

### Finding Text in Folders 2

Unfortunately, the above doesn't give you what file the string in question is located in.  The following addresses that concern.

```bash
> grep -r textyouarelookingfor 
# in this case, I was looking for an Amazon Access ID Key so...
> grep -r AKIA
```

### Terminal Command Completion in KALI

When using `kali` linux and typing commands in the terminal, you'll often see grayed out text but if you hit the `tab` key it doesn't fill out the command for you.  It's the `RIGHT ARROW KEY` to fill out the command, which is wildly inconventient.

[Source](https://unix.stackexchange.com/a/643401)

### Scrolling UP/DOWN the terminal with Keyboard only

1. Ctrl + Shift + PageUp
2. Ctrl + Shift + PageDown
