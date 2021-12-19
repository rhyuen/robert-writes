---
title: 'Installing Docker on Kali Linux'
slug: 'kali-and-docker'
date: '2021-12-19'
tags: 'linux,kali,docker'
---

## Preamble

I was doing the updates and upgrades on the kali linux:

```bash
> sudo apt-get update
> sudo apt-get upgrade
```

However, for whatever reason, probably because I said "OK" to letting the OS restart services as they're updated, the `dpkg` install stopped working or was interrupted when it was doing its business.  Things stopped working.

I would get an error that was along these lines:

> Message 'dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.'

However, after running

```bash
> sudo dpkg --configure -a 
```

The result was some text which did not really make much sense to me.

The solution:

```bash
> cd /var/lib/dpkg/updates
> sudo rm * # things with wildcards at the end are scary.
> sudo apt-get update
```

Everything works out and I can resume attempting to install Docker.

[AskUbuntu](https://askubuntu.com/a/483614)

## Installing Docker

### docker.io or docker-ce

It seems there are two potential installs for kali and there's a difference between the two.
[Kali Linux Docker Install Doc](https://www.kali.org/docs/containers/installing-docker-on-kali/)

There's a difference between `docker.io` and `docker-ce`.

`docker.io` is easier to install and is the debian/ubuntu package manager release as such the following command will install it.  `docker-ce` is the official, latest and greatest install from the creators/maintainers.  At least that's what I took away from this thread [here](https://stackoverflow.com/a/45023650).

```bash
> sudo apt-get install docker-io 
```

I've installed `docker-ce` on Ubuntu a bunch of times before, but it's always unpleasant, mainly because there are a bunch of commands from the internet that I cut and paste/typed into my terminal without fully understanding.  Yes, I know that's terrible and unbecoming.  Regardless, I ended up putting strange commands that I don't fully understand and executing under sudo again.  

```bash
> printf '%s\n' "deb https://download.docker.com/linux/debian buster stable" | sudo tee /etc/apt/sources.list.d/docker-ce.list
> curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-ce-archive-keyring.gpg
> sudo apt update
> sudo apt install -y docker-ce docker-ce-cli containerd.io
```

## All Sources

[AskUbuntu](https://askubuntu.com/a/483614)
[Kali Linux Docker Install Doc](https://www.kali.org/docs/containers/installing-docker-on-kali/)
[Stack Overflow](https://stackoverflow.com/a/45023650)
