---
title: "Deployment Planning"
postDate: 2004-08-02
categories: 
  - "solution-architecture"
tags: 
  - "deployment"
---

I have a meeting tomorrow to discuss a number of deployments we have in the next couple of weeks. One thing to note is that all installations come with their own set of problems and I don't always have the answers. However, preparation is key; as they say - "pathetic preparation makes for a piss poor presentation".

One thing I'm going to try is a bit of brainstorming. I'm going to draw up each installation on a white-board and we'll list up anything that could go wrong. From that we should be able to plan for nearly every eventuality. Hopefully it won't be a too depressing experience.

The main stay of my deployment plans is practice. If you have done it in the office without a customer breathing down your neck then the real thing is usually much easier. We try to get hold of a backup from the customer as they usually have data-sets containing unforeseen combinations of data (especially as the source database doesn't have any constraints - shame on you Cisco!).

The last thing that commonly trips us up is firewalls - most of our customers are in retail or banking so security is sometimes taken to the extreme. It would be costly for us to reproduce their firewall configuration (one customer has DMZ's around each server), so a quick tip is to use personal firewalls such as [ZoneAlarm](http://www.zonelabs.com/) to lock down your test servers similar to a DMZ deployment.
