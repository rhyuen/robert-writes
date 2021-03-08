---
title: 'Linux Environment Variable Process Notes'
slug: 'linux8-envvar'
date: '2020-12-24'
tags: 'linux'
---

# Environment Variables (DEC 24,2020)

```bash
$ env  # shows you all of your environment variables.

$ set # shows all environment variables: shell variables, local varibales, bash methods, user-defined variables, shell aliases.

$ set | grep string_you_are_looking_for # to find a particular key.

$ env | grep NAME_OF_KEY # to get a key's value.
```

To find out the directories in your PATH environment variable.

```bash
$ echo $PATH
```

Most commands in your PATH are in `/usr/local/sbin` or `usr/local/bin`


## Appending to your PATH

```bash
 $ PATH=$PATH:/path/to/new/thing  # takes the original PATH value and appends the latest path of the thing you want to add to it and supplants the old PATH value.
```