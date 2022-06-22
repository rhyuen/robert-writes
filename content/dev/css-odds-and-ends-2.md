---
title: 'Css odds and ends 2'
slug: 'css-odds-and-ends-2'
date: '2022-01-17'
tags: 'css'
---


Aug 12, 21

It seems that if you use @keyframes animation, when the animation completes, it resets to its original position.

As such, if you want the state to be maintained, you need the following property `animation-fill-mode: forwards`

[Source](https://stackoverflow.com/questions/4359627/stopping-a-css3-animation-on-last-frame)


Aug 12, 21

I never quite recall this without having to look it up.

Form submission without the forced refresh.

More specifically what I forget is whether html is case-sensitive or not and whether having arguments and the parens in the html makes the javascript run immediately on load or not.

```html

<form onsubmit="handleFormSubmit(event)"></form>
<script>
	function handleFormSubmit(event){
		event.preventDefault();
	}

</script>

```