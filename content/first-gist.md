---
title: 'First Gist, Part 1'
slug: 'first-gist'
date: '2021-01-21'
---

# My First Github Gist 

I was curious as to how a Github gist looks embedded into a markdown file looks in comparison to the annotated markdown code text or the markup that starts with three backticks.

It seems that you need to enable 'setting dangerous html' for the library ("react-markdown") I'm using in order to enable the visuals of the gist on the website.  That sounds ominous despite this being a 'trusted environment'.  I am deterred.  Instead, here's a [link](https://gist.github.com/rhyuen/024c755aa35140744a5dcb4a1eb6c093.js).

It never really occurred to me that I would have enable scripting and allow for the setting of dangerous html in order to host the scripts.  I always thought it was an image or something that linked back to the source.  Well, now I know.

Here's the code with the three backticks instead.  It looks terrible.


```javascript
function makeChart(id, type, xData, yData) {
            let mountPoint = document.getElementById(id).getContext("2d");
            let currentChart = new Chart(mountPoint, {
                type: "line",
                data: {
                    labels: yData,
                    datasets: [{
                        label: "Arbitrary Data Label",
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        data: xData
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
```

I also tried adding "remark-gfm" using `npm install remark-gfm` as shown [here](https://github.com/remarkjs/react-markdown#use).  It did not allow for the magical appearance of the formatted code.

There's a happy ending [here](/posts/first-gist-p2).
