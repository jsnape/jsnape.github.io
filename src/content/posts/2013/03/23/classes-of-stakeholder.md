---
title: "Classes of stakeholder"
postDate: 2013-03-23
categories: 
  - "solution-architecture"
tags: 
  - "mental-health"
  - "mental-health-project"
  - "stakeholder"
  - "stakeholders"
---

![bournemouthlibrary](./bournemouthlibrary.jpg "bournemouthlibrary")So this is the second attempt at writing this post. The first was very complete but read like a textbook and it makes more sense to read a real book – I recommend the [stakeholder section](http://www.viewpoints-and-perspectives.info/home/stakeholders/) in this book: [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives](http://www.amazon.co.uk/gp/product/032171833X/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=032171833X&linkCode=as2&tag=jamessnape-21)![](http://www.assoc-amazon.co.uk/e/ir?t=jamessnape-21&l=as2&o=2&a=032171833X).

All stakeholders have requirements, needs and interests which collectively I call “concerns”. I even track them in the same work item tracking system used for requirements since it means they never get lost and you can ensure traceability from concerns to requirements and architectural decisions.

The classes can be broadly split into three groups. The first being “receivers”:

- Acquirers
- Assessors
- Users
- Administrators
- Support staff

Acquirers may be wanting your software for a number of reasons. They might not actually use it so their concerns are likely to be related to cost, need and satisfying other concerns indirectly, for example purchasing reporting software because a regulator has demanded accurate reporting of patient outcomes with possible penalties for failure.

In the mental health arena there are many additional “assessor” agencies and regulators such as the [Care Quality Commission](http://www.nhs.uk/NHSEngland/thenhs/healthregulators/Pages/carequalitycommission.aspx), [Monitor](http://www.monitor-nhsft.gov.uk/), professional bodies such as the [General Medical Council](http://www.gmc-uk.org/) and watchdogs like [Healthwatch](http://www.healthwatch-uk.org/). Fortunately they are mainly concerned with the quality of healthcare, patient outcomes and overall costs; less so about software.

Administrators and support staff want to spend as little time, money and effort as possible with your solution so anything that eases deployment, automatically heals or diagnoses issues and keeps the software running will help. Its worth looking further though – what if an administrator has a review objective of reducing disk costs over the year and you turn up asking for terabytes of clustered storage?

The second group of stakeholders are the “producers”:

- Developers
- Testers
- Maintainers
- Suppliers

Their concerns should be easy to list and meet since they want the same things as you. In this sample project the only producer is me and anyone who supplies me with coffee.

The remaining category are “communicators”. The book defines them as those who “…explain the system to other stakeholders…” but I think is should also include anyone who will discuss, promote, detract, educate, deny, network, rally and gossip about your project and are not in either of the other two groups. They may only by interested in your project for their own political reasons.

Do you have stakeholders from all these categories? If so look at things from each stakeholder’s angle and try to imagine what their needs are. Then go talk to them and confirm it.
