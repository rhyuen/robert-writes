---
title: 'Linux Environment Variable Process Notes'
slug: 'linux8-envvar'
date: '2020-12-24'
---

# Environment Variables (DEC 24,2020)

> $ env  # shows you all of your environment variables.

> $ set # shows all environment variables: shell variables, local varibales, bash methods, user-defined variables, shell aliases.

> $ set | grep string_you_are_looking_for # to find a particular key.

> $ env | grep NAME_OF_KEY # to get a key's value.


To find out the directories in your PATH environment variable.

> $ echo $PATH

Most commands in your PATH are in `/usr/local/sbin` or `usr/local/bin`


# Appending to your PATH

> $ PATH=$PATH:/path/to/new/thing  # takes the original PATH value and appends the latest path of the thing you want to add to it and supplants the old PATH value.