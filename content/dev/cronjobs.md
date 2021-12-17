---
title: 'Why is my cron job NOT working?  It worked before!?'
slug: 'cronjobs'
date: '2021-12-09'
tags: 'bash'
---


# Why the is my cron job NOT working?  It worked before!?

## Things I did 

1. I added absolute paths to script and cronjob
2. I used the sudo crontab -e instead of crontab becuase the latter wasn't working and apparently the contexts are different.
3. It turns out i had "# /bin/bash" instead of "#!/bin/bash".
	- Oddly, it still runs when executed manually.

4. It turns out, that the cron daemon may not be started by default...
	- you can check if it's on by the following commands:

```bash
	$ ps -ef | grep cron | grep -v grep

	# expected output
	# root  1234 1 0 Dec21 ? 00:00:03 cron

	# or 
	# root 4321 1 0 Dec11 ? 00:00:03 crond
```

[Source](https://serverfault.com/questions/449651/why-is-my-crontab-not-working-and-how-can-i-troubleshoot-it)

## Start the cron daemon with the following commands. 

```bash
$ sudo /etc/init.d/cront start
$ sudo service cron start
```

[Source](https://stackoverflow.com/questions/10193788/restarting-cron-after-changing-crontab-file)