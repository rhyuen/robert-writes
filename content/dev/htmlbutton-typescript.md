---
title: 'typescript, react and buttons'
slug: 'htmlbutton-typescript'
date: '2021-05-10'
tags: 'typescript,react'
---


On an error denoted below:

`const name: any. Property 'name' does not exist on type 'EventTarget'.ts(2339).`

```javascript

const handleChoiceCountChange = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target;
        /*
            ** The Typescript error that appeared.**
            const name: any
            Property 'name' does not exist on type 'EventTarget'.ts(2339)
        */

        if (name === "increment") {
            const nextValue: number = inputCount + 1;
            setInputCount(nextValue);
        }

        if (name === "decrement") {
            const nextValue: number = inputCount - 1 >= 2 ? inputCount - 1 : inputCount;
            setInputCount(nextValue)
        }
}

```

```javascript

const handleChoiceCountChange = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        if (name === "increment") {
            const nextValue: number = inputCount + 1;
            setInputCount(nextValue);
        }

        if (name === "decrement") {
            const nextValue: number = inputCount - 1 >= 2 ? inputCount - 1 : inputCount;
            setInputCount(nextValue)
        }
}

```

[StackOverflow](https://stackoverflow.com/a/42066698)