---
title: "Surgical Team Development"
postDate: 2004-09-15
categories: 
  - "agile"
tags: 
  - "surgical-teams"
---

Sometimes, when you have to get a lot done in a ridiculously short time, you need a different approach. As a case in point, we need to replace all the remaining ASP code in our product with ASP.NET before we add some essential new functionality. If we don't we will be stuck with the old code forever. This new functionality has to be delivered in a matter of weeks. It could be implemented in classic ASP but it will be much easier and faster using .NET.

What is called for is a few days of pure implementation. No "discussion", no "difference of opinion", just code. It's risky - probably only a 50% chance of success but if it works then we could save days in the immediate future and extra weeks down the line.

There is a way this could work; by modelling the team on an operating theatre. In this setup, there is one person who does the bulk of the work backed by a second to give help and support. These two make the core pair - everything goes through them on the way into the product. The rest of the team are assigned packets of work by the core pair on an as needed basis. When the packets are complete they are given back to the core pair to stitch into the product. Effectively, one feature at a time is worked on by the entire team.

The main benefit to this style of team is the minimal communication needed, resulting in a higher code to comms ratio. The packets of work are usually so small that they can be described in a couple of sentences. If the result is not quite right then the core pair make whatever changes are required saving the time usually spent explaining extra work to the developer.

There are two key points to note before you embark on a development style such as this. Firstly, the core pair has to have a very strong shared vision of what the result should be. If not then you won't be on a straight line to goal and too much rework will kill the efficiency of the method. Secondly, it can be a bit ego bruising to the non-core developers. They are told exactly what to produce, they have no real opportunity for free thought and the code they return may be modified or even not used. Nearly everyone can put their needs and feelings on hold for a week (even developers) but I wouldn't push it beyond that. This is only for tiger-team style development.
