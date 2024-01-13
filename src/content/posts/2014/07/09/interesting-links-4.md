---
title: "Interesting Links #4"
postDate: 2014-07-09
categories: 
  - "reference"
tags: 
  - "business-intelligence"
  - "data-visualization"
  - "data-warehouse"
  - "excel"
  - "functional-programming"
  - "tableau"
  - "testing"
---

These seem to get longer and longer. A whole pile of links for you.

## Management and Organisational Behaviour

[How Serving Is Your Leadership?](http://www.jrothman.com/blog/mpd/2014/06/how-serving-is-your-leadership.html) - Who is working for who here?

[Be a Manager](https://medium.com/servant-leadership/be-a-manager-3b0e39d87179) - "The only reason there’s so many awful managers is that good people like you refuse to do the job."

[I'm the Boss! Why Should I Care If You Like Me?](http://blogs.hbr.org/2013/05/im-the-boss-why-should-i-care/) - Because your team will be more productive... Here are some pointers.

## Software Development

[Technical debt 101](https://medium.com/@joaomilho/festina-lente-e29070811b84) - Do you think you know what technical debt is and how to tackle it? Even so I'm sure this article has more you can discover and learn. A must read.

[Heisenberg Developers](http://mikehadlow.blogspot.co.uk/2014/06/heisenberg-developers.html) - So true. In fact this hits a little close to home since we use JIRA, the bug tracking tool mentioned in the article.

[What is Defensive Coding?](http://msmvps.com/blogs/deborahk/archive/2014/05/16/what-is-defensive-coding.aspx) - Many think that defensive coding is just making sure you handle errors correctly but that is a small part of the process.

[Need to Learn More about the Work You’re Doing? Spike It!](http://www.agileconnection.com/article/need-learn-more-about-work-you-re-doing-spike-it) - So you are an agile shop, your boss is demanding some story estimates and you have no idea how complex the piece of work is because it's completely new. What do you do?

[Software Development with Feature Toggles](http://msdn.microsoft.com/en-ca/magazine/dn683796.aspx) - Don't branch, toggle instead.

Agile practices roundup - here are a number of articles I've found useful recently:

- [4 Reasons to Include Developers in Story Writing](http://www.mountaingoatsoftware.com/blog/4-reasons-to-include-developers-in-story-writing)
- [2 Times to Play Planning Poker and 1 Time Not To](http://www.mountaingoatsoftware.com/blog/2-times-to-play-planning-poker-and-1-time-not-to)
- [Benefits of Pair Programming](http://geekswithblogs.net/TimothyK/archive/2014/04/27/benefits-of-pair-programming.aspx) [Scheduling Pairing Sessions](http://geekswithblogs.net/TimothyK/archive/2014/04/27/scheduling-pairing-sessions.aspx) [Inside a Pairing Session](http://geekswithblogs.net/TimothyK/archive/2014/04/27/inside-a-pairing-session.aspx)

[How to review a merge commit](http://haacked.com/archive/2014/02/21/reviewing-merge-commits)\- Phil dives into the misunderstood world of merge commits and reviews. Also see this list of [things to look out for during code reviews](http://blogs.msdn.com/b/cdndevs/archive/2014/05/07/what-should-i-be-looking-for-during-code-reviews.aspx).

## Functional Programming

[Don’t Be Scared Of Functional Programming](http://www.smashingmagazine.com/2014/07/02/dont-be-scared-of-functional-programming/) - A good introduction to functional programming concepts using JavaScript as the demonstration language.

[Seamlessly integrating T-SQL and F# in the same code](http://blogs.msdn.com/b/fsharpteam/archive/2014/05/23/fsharp-data-sqlclient-seamlessly-integrating-sql-and-f-in-the-same-code-base-guest-post.aspx) - The latest version of FSharp.Data allows you to write syntax checked SQL directly in your F# source and it executes as fast as Dapper.

[Railway Oriented Programming](http://fsharpforfunandprofit.com/rop/) - This is a functional technique but I've recently been using it in C# when I needed to process many items in a sequence, any of which could fail and I want to collect all the errors up for reporting back to ops. It is harder to do in C# since there are no discriminated unions but a custom wrapper class is enough.

[Erlang and code style](https://medium.com/p/b5936dceb5e4) - A different language this time, Erlang. How easy is programming when you don't have to code defensively and crashing is the preferred way of handling errors.

[Twenty six low-risk ways to use F# at work](http://fsharpforfunandprofit.com/posts/low-risk-ways-to-use-fsharp-at-work/) - Some great ways to get into F# programming without risking your current project.

[A proposal for a new C# syntax](http://www.slideshare.net/ScottWlaschin/c-light) - A lovely way to look at writing C# using a familiar but lighter weight syntax. C#6 have some of these features planned but this goes further. Do check out the [link at the end of the final proposal](http://bit.ly/csharp-light).

[Excel-DNA: Three Stories](http://luajalla.azurewebsites.net/excel-dna-three-stories/) - Integrating F# into Excel - a data analysts dream...

## Data Warehousing

[Signs your Data Warehouse is Heading for the Boneyard](http://richardlees.blogspot.co.uk/2014/06/signs-your-data-warehouse-is-heading.html) - Some interesting things to look out for if you hold the purse strings to a data warehouse project. How many have you seen before?

[The 3 Big Lies of Data](http://www.powerpivotpro.com/2014/05/the-3-big-lies-of-data-power-pivot-vs-power-view-power-query-qa-etc/) - I've heard these three lies over and over from business users and technology vendors alike. Who is kidding who?

[Six things I wish we had known about scaling](http://martin.kleppmann.com/2014/03/26/six-things-about-scaling.html) - Not specifically about data warehouses but these are all issues we see on a regular basis.

[Why Hadoop Only Solves a Third of the Growing Pains for Big Data](http://www.wired.com/2014/01/hadoop-solves-third-growing-pains-big-data/) - You can't just go and install a Hadoop cluster. There is more to it than that.

[Microsoft Azure Machine Learning](http://azure.microsoft.com/en-us/campaigns/machine-learning/) - Finally it looks like we can have a simple way of doing cloud scale data mining.

## Data Visualization

[5 Tips to Good Vizzin'](http://vizcandy.blogspot.no/2014/04/5-tips-to-good-vizzin.html) - So many visualizations break these rules.

[Five indicators you aren’t using Tableau to its full potential](http://www.theinformationlab.co.uk/2014/06/13/five-indicators-arent-using-tableau-full-potential/) - I've seen a few of these recently - tables anyone?

[Create a default Tableau Template](http://wannabedatarockstar.blogspot.co.uk/2013/06/create-default-tableau-template.html) - Should save some time when you have a pile of dashboards to create.

[Building a Tableau Center of Excellence](https://www.slalom.com/thinking/building-a-tableau-center-of-excellence) - It is so easy to misunderstand Tableau which is not helped by a very effective sales team. This article has some great advice for introducing Tableau into your organisation.

[Beginner's guide to R: Painless data visualization](http://www.computerworld.com/s/article/9239723/Beginner_s_guide_to_R_Painless_data_visualization_) - Some simple R data visualization tips.

[Visualizing Data with D3](http://www.sitepoint.com/visualizing-data-d3/) - If you need complete control over your visualization then D3 is just what you need. It can be pretty low-level but its easy to produce some amazing stuff with a bit of JavaScript programming.

**Testing**

[I Don't Have Time for Unit Testing](http://msmvps.com/blogs/deborahk/archive/2014/06/04/i-don-t-have-time-for-unit-testing.aspx) - I've recently been guilt of this myself so I like to keep a reminder around - you will go faster if you write tests.

[Property Based Testing with FsCheck](http://comp-phil.blogspot.co.uk/2014/05/property-based-testing-with-fscheck.html) - FsCheck is a fantastic tool primarily used in testing F# code but there is no reason it can't be used with C# too. It generates automated test cases to explore test boundaries. I love the concise nature of F# test code too especially with proper sentences for test names.

## Analysis Services

I've collected a lot of useful links for Analysis Services, both tabular and multidimensional:

[DAX Patterns website](http://sqlblog.com/blogs/marco_russo/archive/2014/02/18/dax-patterns-website-official-launch-dax-powerpivot-tabular.aspx) - This website is my go-to resource for writing DAX calculations. These two are particularly useful:

- [How to handle fact tables with different granularities](http://sqlblog.com/blogs/marco_russo/archive/2014/05/01/how-to-handle-fact-tables-with-different-granularities-in-dax-powerpivot-tabular.aspx)
- [Implement Budget Allocation in DAX](http://sqlblog.com/blogs/marco_russo/archive/2014/05/15/implement-budget-allocation-in-dax-for-power-pivot-and-tabular-powerpivot-tabular-ssas-dax.aspx)

[Using Tabular Models in a Large-scale Commercial Solution](http://www.sqlbi.com/articles/using-tabular-models-in-a-large-scale-commercial-solution) - Experiences of SSAS tabular in a large solution. Some tips, tricks and things to avoid.

Also:

- [Experiences & Tabular Tips](http://christianwade.wordpress.com/2014/04/16/experiences-tabular-tips/)
- [Row and Column (Cell) based security in SSAS Tabular Model](http://www.mund-consulting.com/Blog/Posts/row-and-column-based-security-in-ssas-tabular-model.aspx)
- [How connections will hurt your Tabular Workload](http://blogs.prodata.ie/post/How-connections-will-hurt-your-Tabular-Workload.aspx)
- [Listing Active Queries with PowerShell](http://geekswithblogs.net/darrengosbell/archive/2014/03/03/ssas-ndash-listing-active-queries-with-powershell.aspx)
- [How to build your own SSAS Resource Governor with PowerShell](http://geekswithblogs.net/darrengosbell/archive/2014/03/31/how-to-build-your-own-ssas-resource-governor-with-powershell.aspx)
- [5 Tools for Understanding BISM Storage](http://prologika.com/CS/blogs/blog/archive/2014/04/13/5-tools-for-understanding-bism-storage.aspx)
- [How to Automate SSAS Cube Partitioning in SSIS](http://dataqueen.azurewebsites.net/?p=1351)
- [How to turn off/on bitmap indexes in SSAS](http://blogs.prodata.ie/post/How-to-turn-offon-bitmap-indexes-in-SSAS.aspx)
- [Context Aware And Customised Drillthrough](http://www.mssqlgirl.com/context-aware-and-customised-drillthrough.html)
