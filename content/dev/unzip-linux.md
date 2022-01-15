---
title: 'Unzipping a (.gz) file with Linux'
slug: 'unzip-linux'
date: '2021-12-26'
tags: 'Linux'
---

## Context

I was using Kali Linux and needed a wordlist located in `/usr/shares/wordlists/` for use with `gobuster`, which can conveniently be installed with `sudo apt-get install gobuster`.  However, the `rockyou` wordlist was in a `.gz` archive.  I didn't know how to unzip it using the command line.

The internet saved me.

## Solution

```bash
> $ sudo gzip -d nameofarchive.gz
```

The sudo is required.  I don't know why though.

[Source](https://linuxize.com/post/how-to-unzip-gz-file/)
