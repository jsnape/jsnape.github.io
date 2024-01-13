---
title: "Interesting Links #2"
postDate: 2014-02-18
categories: 
  - "reference"
tags: 
  - "apache-hadoop"
  - "domain-driven-design"
  - "microsoft-excel"
  - "tableau"
  - "test-driven-development"
  - "testing"
---

January was a long month so I’ve got quite a list for you. I may consider doing these more often if readers think there are too many items for a single list.

## Governance

[Self-Service Business Intelligence Governance](http://channel9.msdn.com/Events/SharePoint-Conference/2012/SPC206) - Essential reading/watching for anyone planning to deliver self-service business intelligence.

[Five Stages of Data Grief](http://theodi.org/blog/five-stages-of-data-grief) - we’ve all been through this, _“If you don’t think you have a quality problem with your data you haven’t looked at it yet”_.

## Functional Programming

[Maybe that shouldn’t be settable](http://lostechies.com/sharoncichelli/2014/01/13/maybe-that-shouldnt-be-settable/) - Bringing some of the F# Option type goodness into a C# world.

## Software Process

[Five Tips to Get Your Organisation Releasing Software Frequently](https://www.simple-talk.com/opinion/opinion-pieces/five-tips-to-get-your-organisation-releasing-software-frequently/) - my team score well on these but culturally I can see some being quite difficult to implement, particularly around the devops style organisation of teams.

[Pairing vs. Code Review: Comparing Developer Cultures](http://phinze.github.io/2013/12/08/pairing-vs-code-review.html) - pros and cons for each style of quality culture. Which, if any, is best?

[Is Agile BI Really a Better Mousetrap?](http://www.b-eye-network.com/view/17177) - A great article on the benefits of agile BI. This really appeals due to its use of development process business intelligence - measure and optimise just like we preach to our customers.

[Using Vertical Slicing and Estimation to make Business Decisions at Adobe](http://www.mountaingoatsoftware.com/blog/using-vertical-slicing-and-estimation-to-make-business-decisions-at-adobe) - A good look at the release planning process at Adobe with some nice techniques discussed.

## Personal Development

[Of Orcs and Software Craftsmanship](http://odetocode.com/blogs/scott/archive/2014/01/27/of-orcs-and-software-craftsmanship.aspx) - Best quote of the month if you are a parent: _“These are the types of error messages that make debugging a software like debugging a 2 month old baby.”_

[Yak Shaving Defined](http://www.hanselman.com/blog/YakShavingDefinedIllGetThatDoneAsSoonAsIShaveThisYak.aspx) - Sometimes if feels like this all day long in software.

## Organisational Behaviour

[Performance Reviews Are Not Useful; Feedback Is](http://www.jrothman.com/blog/mpd/2014/01/performance-reviews-are-not-useful-feedback-is.html) - Personally I think performance reviews are something that human resources departments mandate; feedback is something that leaders give.

[If Managers Don’t Give Performance Reviews, What Happens?](http://www.jrothman.com/blog/mpd/2014/01/if-managers-dont-give-performance-reviews-what-happens.html) - Well, as it turns out, a lot of good things start to happen.

[Top 10 ways to ensure your best people will quit](http://www.ragan.com/Main/Articles/Top_10_ways_to_ensure_your_best_people_will_quit_47779.aspx) - some common mistakes; how many have you come across?

## Testing and Test Driven Development

These next three links are related and if you read the first you should also read the second and third.

[The Failures of "Intro to TDD"](http://blog.testdouble.com/posts/2014-01-25-the-failures-of-intro-to-tdd.html) - Justin Searls rips into the current way of teaching test driven development.

[The Domain Discontinuity](http://blog.8thlight.com/uncle-bob/2014/01/27/TheChickenOrTheRoad.html) - Bob Martin responds comprehensively but ends with why the issue is not about test driven development but wider issues such as architecture and domain design.

[Commentary on 'Roman Numerals Kata with Commentary'](http://fsharpforfunandprofit.com/posts/roman-numeral-kata/) - Ultimately you must understand your domain before trying to do test driven development.

## Databases

[Default Configuration of SQL Server](http://blog.kejser.org/2014/01/15/default-configuration-of-sql-server-and-query-hints/) - Like most software, out of the box SQL is configured for the most general case and may need extra tuning for specific workloads. Thomas gives a simple set of extra configuration changes and reasons why. Also love the quote _“If you are working in a bank, they may not apply to you.”_

## Data Visualization

[Announcing Power BI for Office 365](http://blogs.office.com/2013/07/08/announcing-power-bi-for-office-365/) - In case you missed it, all the fancy new BI capabilities in the Microsoft cloud are publicly available now. Shame we are stuck using corporate infrastructure.

[Famous Movie Quotes as Charts](http://flowingdata.com/famous-movie-quotes-as-charts/) - A fun look at communication in chart form.

[Ten Tips and Tricks for New Tableau users](http://wannabedatarockstar.blogspot.co.uk/2014/01/ten-tips-and-tricks-for-new-tableau.html) - A rather nausea inducing format but useful tips for making great Tableau dashboards.

[Power Tools for Tableau](http://powertoolsfortableau.com/) - Desperate for some sort of an API with Tableau? This may be the answer.

## Statistics and Data Analysis

[Revolution Analytics](http://hortonworks.com/partner/revolution-analytics/) - Want to run ‘R’ statistics against your Hadoop data? This seems to be the way to do it…

[Learn R interactively with the swirl package](http://flowingdata.com/2014/01/29/learn-r-interactively-with-the-swirl-package/) - It looks like R is going to be an important tool for us so anything that makes it easier to learn is a bonus.

[Learn Data Science Online with DataCamp](http://datascience101.wordpress.com/2014/01/16/learn-data-science-online-with-datacamp/) - Similarly, learning data science online and interactively.

[Analysis of Health Inspection Data using F#](http://jamessdixon.wordpress.com/2014/02/11/analysis-of-health-inspection-data-using-f/) - Another great example of using F# (and D3) to analyse data quickly and easily.

## Big Data

[Big Data: The organizational challenge](http://www.microsoft.com/enterprise/it-trends/big-data/articles/Big-Data-The-organizational-challenge.aspx) - Some interesting stats comparing companies with the best analytic capabilities vs. those that don’t.

[Update on Stinger: the view from a Microsoft Committer](http://hortonworks.com/blog/update-stinger-view-microsoft-committer/) - Stinger is the Hortonworks initiative for faster SQL queries against Hadoop. This article describes some of the recent performance gains.

[How To Install Hadoop on Windows with HDP 2.0](http://hortonworks.com/blog/install-hadoop-windows-hortonworks-data-platform-2-0/) - Get Hadoop running on Windows with a minimum of fuss. However, [our local Hadoop expert](https://github.com/harisekhon) recommends you only do this at home; in the enterprise just setup a proper development cluster.

[How To Use Microsoft Excel to Visualize Hadoop Data](http://hortonworks.com/blog/hortonworks-data-platformhdp-microsoft-business-intelligence-better-together/) - Tutorial for visualizing Hadoop data in Excel/PowerView, this one is for stock quotes.

[How to Visualize Website Clickstream Data](http://hortonworks.com/hadoop-tutorial/how-to-visualize-website-clickstream-data) - Another Hadoop tutorial this time on web click-stream data.

[50+ Open Source Tools for Big Data](http://blog.starbridgepartners.com/2014/01/22/50-open-source-tools-for-big-data-see-anything-missing/) - I think one of the problems with open source is it littered with cute names that do little to describe software function so here is a useful list to help you distinguish the likes of Orient, Flock, Storm and others.

[Building your own web analytics system using Big Data tools](http://www.liesdamnedlies.com/2014/02/building-your-own-web-analytics-system-using-big-data-tools.html) - Should you build these things yourself? What are the choices? Are there any risks?

[Master Data the noun in Big Data sentences](http://www.experimentswithdata.com/2014/01/14/master-data-the-noun-in-big-data-sentences/) - I often talk about master data and spend more time worrying about dimension design than facts. It is useful to see how this applies to big data too.

[You don’t have big data…](http://blog.mongohq.com/you-dont-have-big-data/) - With all this talk of big data it is worth remembering that most use cases do not quality at big. Most likely you have ‘hot data’.
