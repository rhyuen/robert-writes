---
title: 'Css odds and ends'
slug: 'css-odds-and-ends'
date: '2022-01-17'
tags: 'css'
---

Aug 07, 21

It seems there's another Horizonal and Vertical Radius when using border-radius for css.
border-radius: 50% 50% 50% 50%/50% 50% 50% 50%;

You can use it for a finer grained control with respect to circles.
[Source](https://egghead.io/lessons/css-use-the-border-radius-css-property-to-define-horizontal-and-vertical-radius)

there's "CSS Overview Tab" in the Chrome Inspector Dev Tools page which shows a number of handy stats for your web page.

Access by:

> F12 , Settings, Experiments, CSS Overview

[Source](https://egghead.io/lessons/chrome-devtools-explore-a-site-s-css-with-chrome-devtools-css-overview)


YOu can use hsl() to make quick, minor variations of buttons that serve different functions.

[Source](https://egghead.io/lessons/css-use-the-hsl-color-space-and-scoped-css-variables-to-prototype-ui-variants)


You can dramatically reduce render time by using for a given HTML section:

content-visibility: auto;

However, this causes scroll to be more abrupt than one might be accustomed to.  In order to mitigate this issue one can use the following: 

contain-intrinsic-size: 500px;

where the 500px can be substituted to the approximate size of each HTML section that has been differed with respect to the browser rendering process.

```css
section{
	content-visiblity: auto;
	contain-intrinsic-size: 500px;
}
```

[Source](https://egghead.io/lessons/css-use-content-visibility-auto-to-improve-initial-page-load-time)


You can use filter: drop-shadow() instead of filter: box-shadow() for a finer grained control shadow effect on content.

[Source](https://egghead.io/lessons/egghead-use-css-filter-to-create-a-drop-shadow)


You can create coloured image filter effects using pseudo elements `:before` and `:after` with `mix-blend-mode: lighten;`.
However, image tags don't have pseudo elemnts, so you have to wrap them in another element and use the parent's pseudo elemnts.
[Source](https://egghead.io/lessons/css-use-css-pseudo-elements-and-mix-blend-mode-to-create-a-duotone-style-effect)





Sep 30, 21

Shorter get random index from an array.

Math.floor(Math.random() * array.length)

for getting a random index in an array as oppoosed to.

Math.floor(Matn.random * 100) % array.length

[Source](https://egghead.io/lessons/next-js-request-notion-database-data-from-the-api-with-next-js)


Sept 30, 21

Pretty Print JSON 

JSON.stringify(jsonblob, null, 2);

[Source](https://egghead.io/lessons/next-js-request-notion-database-data-from-the-api-with-next-js)




October 15, 2021

As this has happened more than once, I feel compelled to document this in a place that I check somewhat irregularly.  

I was forced to do this again because of `SonarLint` and the Java Runtime Environment being "computer"-y.

So...

Handling *.tar.gz and *.deb files.



```bash


## Handling *.deb files.
$ dpkg -i jdk-17_linux-x64_bin.deb


## Handling *.tar.gz files.
$ sudo tar-xzf jdk-17_linux-x64_bind.tar.gz

```

I had to use the dpkg command again on November 1, 2021 and this time there was a *.tar.xz archive, which was new to me, but old to the other linux people so here's the command that I used to resolve the issue.

```bash

$ > tar xf *.tar.xz

```


[dpkg Source](https://help.ubuntu.com/kubuntu/desktopguide/C/manual-install.html)
[tar.gz Source](https://www.howtogeek.com/362203/what-is-a-tar.gz-file-and-how-do-i-open-it/)
[tar.xz Source](https://askubuntu.com/a/107976)



OCT 16, 2021
## Finding out where your java instance is installed


I didn't know there was a command called 'update-alternatives'.  I thought it was 3rd party software that had to be downloaded, but it's included by default.  Pretty cool.

$ update-alternatives --list java


[Source](https://askubuntu.com/a/772238)



NOV 3, 2021
## Finding text files in a series of directories

> $ find -name *.txt # returns all directories

[TryHackMe](https://tryhackme.com/room/linuxfundamentalspart1)

NOV3, 2021
## Downloading a File from the Command Lin

Because I had to google it a couple of days ago.  

> $ wget http://wherethefileislocatedontheinternet


NOV 3, 2021
## file command

`file` determines the type of file the following path is.

> $ file nameoffile


to change users 

> $ su nameofprofileyouwouldliketoswitchto


`/etc `
I thought this was where env files and config files were stored.  The source says it's used for 'system files used by your OS'.

`/var` is where frequently used data is placed for both apps and the system.

Log files for apps go to `/var/log`.

`/tmp` is where temporary files are stored and is wiped out on retart of the computer.

[TryHackMe](https://tryhackme.com/room/linuxfundamentalspart2)


NOV 3, 2021
# More Linux Stuff from TryHackMe

You can securely copy files from your computer to another computer and back using `scp`.  The 's' is for secure, because SSH.

> $ # scp command goes here.


`systemd` is one of the first processes started when your linux box starts up.  I always thought it was a process manager of sorts...  

`systemctl` is the process manager it seems.

[TryHackMe](https://tryhackme.com/room/linuxfundamentalspart3)