---
title: 'ESLint, Typescript and NextJS'
slug: 'eslint-typescript'
date: '2021-03-20'
tags: 'typescript,eslint,nextjs'
---

# Typescript, ESLint and NextJS

## Why?

Because I was following a [video series on accessiblity](https://egghead.io/lessons/react-set-up-eslint-to-audit-accessibility-issues-in-react) (I would like to not be terrible at it) and it said to add ESLint.  I followed, as ones does.  Due to NextJS being like React but 'more special'.  One can expect behaviour when adding libraries to be 'different' by that I mean, "expect red text and/or errors and be prepared to start searching".  Typescript doesn't really help things.

## Results

Once again, we enter the realm of config galore.  The main reason I started using NextJS was because I didn't like installing and updating the litany of modules to make it work the way you want it to work.  By opting to add ESLint, you are reintroducing that factor into your project.  However, *some refrain on best practices and whatnot goes here*.

### My Commands, Errors and Solutions are as follows

Starting state:

```bash
$ npm install eslint eslint-plugin-jsx-a11y -D
```

The command I ran:

```json
    "lint": "eslint pages/*.tsx" # it seems parentheses don't work here so (ts|tsx).
```

The resulting error:

```json
    error: "Parsing error: The keyword 'import' is reserved"
```

Solution: 
```bash
$ npm install babel-eslint -D
```
[Source for the Solution](https://stackoverflow.com/a/41190209)

Also install the following: 
```bash
$ npm install eslint-plugin-import -D
$ npm install eslint-plugin-react -D
$ npm install eslint-plugin-react-hooks -D
```

And add the following to `.eslintrc.json` at the top-level.

```json
{
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react-hooks/recommended"
    ]
}
```

[Below Source referenced on Stack Overflow](https://stackoverflow.com/a/59248070)
[Source for solution](https://melih193.medium.com/next-js-eslint-setup-tutorial-for-airbnb-config-c2b04183a92a)

### Run the command again

```json
    "lint": "eslint pages/*.tsx"
```

### The resulting error is most prominent:

```json
    error: "React must be in scope when using JSX"
```

### Solution:

In `.eslintrc.json` at the top level:

```json
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
```

This is because you don't have to do the following in NextJS projects but you do in React projects.

```javascript
    import * as React from "react" // This is not required in NextJS
```


### Run the Command again:

```bash
 eslint pages/*.tsx
```

### Issue

```json
    error: "Unable to resolve path to module "../components/layout"
```

### The solution was as follows:

```bash
$ npm install -D eslint-plugin-import
$ npm install -D @typescript-eslint/parser
$ npm install -D eslint-import-resolver-typescript
```

[Solution on StackOverflow](https://stackoverflow.com/a/59825899)
[Link to npm package with Configuration for ESLint](https://www.npmjs.com/package/eslint-import-resolver-typescript)

```json
"settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            "typescript": {},
            "node": {
                "extension": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
```

### Run the Command

```bash
 eslint pages/*.tsx
```

### Results

Something about no unsanitized characters which was addressed by using HTML Entities in the ESLint Produced error message.