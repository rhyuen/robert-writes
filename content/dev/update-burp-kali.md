---
title: 'Updating Burp in Kali'
slug: 'update-burp-kali'
date: '2021-12-26'
tags: 'Linux,kali'
---

## Context

I needed to update Burp because I'm not sure if log4j affects it but the log4j CVE sounds serious/scary enough that I should get the latest version.

## Solution

When it gets to the downloading the 'Linux 64Bit Community Edition' part on the Portswigger/Burp Suite website and then pick 'Save to Disk' and not 'Open with vim'.

Once it's done downloading do the following:

```bash
> sudo chmod +x recentlydownloadedpatch.sh
> ./recentlydownloadedpatch.sh
```

Yes, it does bother me that I'm running a shellscript from the internet, even if it is a trusted source, but it's a VM so whatever.

And then the dialogs on installing the update show up and we're done.

[Source](https://www.linuxfordevices.com/tutorials/linux/install-burpsuite-community)
