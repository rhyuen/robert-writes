---
title: 'Linux tar (Tape Archive) Notes'
slug: 'linux9-tar'
date: '2020-12-25'
tags: 'linux'
---

# tar (tape archive) (Dec.25,2020)

```bash
$ tar -cvf latest.tar fileone.txt filetwo.txt filethree.js
```

c is for concatenate
v is for verbose
f is for filename to mush it all into.

> $ tar -tf latest.tar # ls for .tar files.

t for text
f is for filename

```bash
> $ tar -xf latest.tar # extracts tar contents into directory
```


## Compression

For varying degrees of compression and decompression.

```bash
$ gzip archive.tar
$ gunzip archive.tar.gz


$ compress archive.tar
$ uncompress archive.tar.Z

$ bzip2 archive.tar 
$ bunzip2 archive.tar.bz2

# stopping a service
$ service rsyslog stop
$ service name_of_service start
$ service name_of_service restart

```
