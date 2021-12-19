---
title: 'Some Notes on Linux Processes 2'
slug: 'linux-process-2'
date: '2021-01-02'
tags: 'linux'
---

## Linux Processes 2

`ps` stands for processes snapshot.

[Source](https://btholt.github.io/complete-intro-to-linux-and-the-cli/processes)

Once again:

```bash
$ ps

$ ps aux # every process currently running.

# shows currently running jobs.
$ jobs
```

Closing one's terminal does end all your jobs running in the background.  This can be avoided or worked around with `tmux` or `screen`.

[Source](https://btholt.github.io/complete-intro-to-linux-and-the-cli/processes#foreground-and-background)

Also, it seems `PS1` is one of those fancy reserved words and/or preset environment variables.

I noticed because of [here](https://btholt.github.io/complete-intro-to-linux-and-the-cli/customize-your-shell#prompts).  I was playing with PS1 a while back and noticed odd behaviour with it.
