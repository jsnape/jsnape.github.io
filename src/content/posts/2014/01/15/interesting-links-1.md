---
title: "Interesting Links #1"
postDate: 2014-01-15
categories: 
  - "reference"
tags: 
  - "business-intelligence"
  - "code"
  - "indexes"
  - "organisational-behaviour"
  - "personal-development"
  - "software-process"
  - "sql-server"
  - "tableau"
  - "testing"
---

Since I manage to read so much on the train I think readers will find some of the articles useful so I plan on listing up the best ones each month.

## Business Intelligence

- [Design Tip #162 Leverage Data Visualization Tools, But Avoid Anarchy](http://www.kimballgroup.com/2014/01/07/design-tip-162-leverage-data-visualization-tools-but-avoid-anarchy/) - This month’s Kimball Group design tip and incredibly timely considering how we are using Tableau at work. I think we should make it required reading for all business users of Tableau.

## Databases

- [The Baker’s Dozen: 13 Differences Between Analysis Services OLAP and Tabular](http://www.codemag.com/Article/1308091) - An in-depth look at the functional and usage differences between the two flavours of Analysis Services.
- [Clustered Indexes vs. Heaps](http://blog.kejser.org/2014/01/12/clustered-indexes-vs-heaps/) - Not a lot of people know that… Thomas Kejser goes in-depth on clustered index performance relative to heaps for both OLTP and OLAP workloads. I bet there is something for everyone to learn in this article.
- [Indexing a PK GUID in SQL Server 2012](http://dba.stackexchange.com/questions/52601/indexing-a-pk-guid-in-sql-server-2012/56154#56154) - Again Thomas debunks some myths about GUID keys and scalability in OLTP systems.

## Code

- [Complete Guide to Lazy Loading in C#](http://www.ganshani.com/2011/10/complete-guide-to-lazy-loading-lazy-csharp/) - The Lazy type in C# 4.0 is a useful tool for performance optimising applications. This article describes its use and various threading options.
- [F#, Deedle and Computational Investing](http://dkowalski.com/blog/archive/2014/01/11/f-deedle-and-computational-investing.aspx) - Another example of how concise F# is; stock correlation charts in under 75 lines of code.

## Testing

- [Patterns of Effective Test Setup](https://github.com/spetryjohnson/Talk-Patterns_of_Effective_Test_Setup/blob/master/Patterns_of_Effective_Test_Setup%20FINAL.pptx?raw=true) - A set of techniques for avoiding complete unit test setup code; ensuring test clarity and reducing brittleness. This is just the start really and libraries such as [AutoFixture](http://autofixture.codeplex.com/) can help even more once you have the basics right.
- [Unit Testing SQL Server OLAP Cubes Using C#](http://msdn.microsoft.com/en-gb/magazine/dn519927.aspx) - Not really unit testing by most definitions, more like regression testing. In many ways similar to what we do at work with some interesting additions.
- [Test SAML with #Tableau Server on the cheap](http://tableaulove.tumblr.com/post/72694988761/test-saml-with-tableau-server-on-the-cheap) - If you end up having to configure and test Tableau SAML this will help.

## Development Process

- [Workflows of Refactoring](http://martinfowler.com/articles/workflowsOfRefactoring/) - A great little slide deck from Martin Fowler about the various refactoring workflows (hint: it is to never refactor and add functionality at the same time).
- [When Should Y](http://ardalis.com/when-should-you-refactor)[ou Refactor](http://ardalis.com/when-should-you-refactor) - Everyone remembers the conversation with your manager “We really need to spend some time refactoring; can we add some time in the schedule?”. This article discussing this “Big Bang Refactor” with a far better “Incremental Refactor”.
- [The Value of Persistent Chat in Incident Management, Support and Business Continuity](http://cdn2.hubspot.net/hub/293670/file-385747408-pdf/Pdf/The_Value_of_Persistent_Chat_in_Incident_Mgmt,_Support__Bus.Cont._Nov13.pdf) - We have talked about persistent chat a lot in our sprint retrospectives. This is a bit salesy but good points on the value it brings.
- [When is it a Good Idea to write Bad Code?](http://lostechies.com/bradcarleton/2014/01/09/when-is-it-a-good-idea-to-write-bad-code/) - Discusses the trade-offs you make when introducing technical debt into the code base.
- [How to Run a Successful Open Source Project](http://mikehadlow.blogspot.co.uk/2013/12/how-to-run-successful-open-source.html) - Good advice for all successful projects, not just open source ones.

## Personal Development

- [Best development book I've read, has no code in it](http://arasatasaygin.com/pages/best-development-book-I-read-has-no-code-in-it.html) - Looks like one of those must read books for those that take their career seriously. Love the quotes “_If you’re worried that your current job is rotting your brain, it probably is._” and “_Expose Your Ignorance. Tomorrow I need to look stupider and feel better about it. This staying quiet and trying to guess what’s going on isn’t working so well._”
- [Don't Get Me Started: The Steam Drill](http://msdn.microsoft.com/en-gb/magazine/dn567960.aspx) - Learn to recognise when your skills are out of date and need refreshing to stay competitive.
- [Uber-Architects: The Building Metaphor Is Dead](http://www.daedtech.com/uber-architects-the-building-metaphor-is-dead) - Not what you think. The role of the architect is changing for the better.

## Organisational Behaviour

- [The Open-Office Trap](http://www.newyorker.com/online/blogs/currency/2014/01/the-open-office-trap.html) - New Yorker article rounding up all the research done one open space workplace productivity. Some interesting results among the expected ones.
- [Can-Do vs. Can’t-Do Culture](http://recode.net/2014/01/01/can-do-vs-cant-do-culture/) - “_The trouble with innovation is that truly innovative ideas often look like bad ideas at the time._” Next time you are thinking why something won’t work, take a moment to consider if you are stopping innovation.
- [Don’t interrupt developers](http://www.ata.io/dont-interrupt-developers) - Absolutely nails why you should not interrupt developers.
- [Are Your Programmers Working Hard, Or Are They Lazy?](http://mikehadlow.blogspot.co.uk/2013/12/are-your-programmers-working-hard-or.html) - “_the appearance of hard work is often an indication of failure_” - a must read for both developers and managers.
