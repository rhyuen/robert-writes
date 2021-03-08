---
title: 'Linux User Permission Notes'
slug: 'linux5'
date: '2020-12-22'
tags: 'linux'
---

# User Permissions and what nto.

When you invoke ls -l

drwxr-xr-x  # this denotes a directory (the leading 'd')
-rw-r--r--  # this denotes a file (the '-')

There are three sets of permissions (read, write, execute) for each of "OWNER", "GROUP" and "Everyone ELSE", in that order.  A '-' means that batch of people don't have permission to do that operation.

-rw-r--r--

The above is a file.  The Owner has Read and Write permissions but no execution abilities.  Everyone else only has Read privileges.