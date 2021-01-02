---
title: 'linux notes for hackers'
slug: 'linux4'
date: '2020-12-23'
---

# Some notes from Linux for Hackers


*APT* stands for `Advanced Packaging Tool`.

```shell
apt-cache search `keyword` ## for finding packages
```

```shell
apt-get remove `packagename` # removes package but keeps config file.
```

```shell
apt-get purge `packagename` # removes package AND config file.
```


```shell
apt-get update  # just updates the list of packages you can download from the repository.
```

Upgrade starts with 'G', it's second so it does more stuff.  update starts with 'D', it does less stuff.  This assumes after the 'up'.

```shell
apt-get upgrade # downloads and upgrades software.  Need sudo
```


You can add new repositories to find packages to download by editing the `/etc/apt/sources.list` file.