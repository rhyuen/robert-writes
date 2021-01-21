---
title: 'Vercel and Whitelisting your MongoDB instance on Mongo Cloud'
slug: 'cloud-mongo-whitelist'
date: '2021-01-09'
---

I was setting up a new Vercel API to try out their CORS example code [here](https://vercel.com/knowledge/how-to-enable-cors).

The code (just an api responding to a GET HTTP Request) I was trying out was working locally.  As such, the next logical step is to deploy.  It worked fine.

I decided to add persistent storage: MongoDB.

I tried it out locally and it worked.  A lot of frivolous DB entries were added.

> $ vercel --prod  # deploy to production

All of a sudden, my requests start timing out and my endpoint starts sending me back empty error messages.

Earlier I had forgotten to add my `.env` file to the `.vercelignore` and accidentally deployed my database credentials to the internet.  That's the first time I can recall having done it.  

As such I had to reroll my credentials, as one does.

![Screenshot depicting the MongoDB Cloud user permissions edit screen](/images/mongo-db-edit.png)

![Screenshot depicting the MongoDB Cloud user update password form.](/images/mongo-db-update-pw.png)


Back to the request timeouts and empty error messages.

Put console log messages and noticed that some of them were getting through and others weren't.

I recalled that after migrating to the MongoDB Cloud platform there was a less than frictionless `Network Access` introduction.  

There's a `Network Access` tab under `Security` for your MongoDB Project.

To add an IP Address, the Form demands that you add an IP Range.  

![Screenshot showing the network access tab to a MongoDB Cloud instance and a red circle around the green "add ip address" button. ](/images/mongo-db-add-ip.png)

Vercel does not have a specific IP Range as noted [here](https://vercel.com/knowledge/how-to-allowlist-deployment-ip-address).

So, the answer is 0.0.0.0/0 and call it a day.  You can always remove it if it doesn't solve the issue.

Redeploy.

The requests no longer timeout.  Huzzah.