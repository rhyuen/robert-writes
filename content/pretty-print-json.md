---
title: 'Pretty Print JSON using Bash'
slug: 'pretty-print-json'
date: '2021-01-19'
tags: 'linux'
---

# Pretty Printing JSON on the Bash Command Line with 2 solutions

## Python3 

```bash
curl -X GET "https://api.github.com/users/rhyuen" | python3 -m json.tool
```

## jq 

```bash
sudo apt install jq # to install the package
curl -X GET "https://api.github.com/users/rhyuen" | jq 
```

## jq get all top level keys [Source](https://stackoverflow.com/a/65485614)

```bash
curl -X GET "https://api.github.com/users/rhyuen" | jq '. |= keys'
```

# Extra 

## To clear the entire line of text from where your cursor is `CTRL + U`

```bash
curl -X GET "https://api.github.com/users/rhyuen" >> sample.jso12n_ # Underscore is where the cursor is 
```

## Get N number of bytes from a large text file [Source](https://stackoverflow.com/a/9679852)

```bash
cat large_data_file.json | head --bytes=200
```