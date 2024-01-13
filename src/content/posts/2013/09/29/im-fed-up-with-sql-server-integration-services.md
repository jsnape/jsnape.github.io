---
title: "I'm fed* up with SQL Server Integration Services"
postDate: 2013-09-29
categories: 
  - "business-intelligence"
tags: 
  - "c"
  - "data-transformation-services"
  - "sql-server-developers"
  - "ssis"
---

\* I mean this in a the most British sense of the phrase

I remember how painful the original [Data Transformation Services](http://en.wikipedia.org/wiki/Data_Transformation_Services) tool was to use (loops anyone?) and when Integration Services was shipped with SQL Server 2005 is was a breath of fresh air for anyone trying to build data warehouses. For SQL Server developers the choice was simple use the free tool that was easy to use and fast to execute or try to code your own. In 2005 the code your own option was hard. You had to write your own threading model, workflow, streaming primitives, event logging etc. since the managed APIs of the time were not that mature.

In contrast Integration Services was easy. Easy to create, even if you don’t know anything able code; easy to run, even if you are not a SQL Server administrator and blisteringly fast, provided you follow some best practice guidelines. This may be one of the reasons I dislike it so much – it sets unrealistic expectations to project managers on how long it should take to develop real software solutions. Bear with me on this one as the point of the post is not about what’s wrong with SSIS but how it limits you in the wider solution.

I do remember an e-mail conversation with [Kirk Haselden](http://www.linkedin.com/in/knightreign) before I joined Microsoft about how COM, which SSIS is built on, leaks abstractions all over the .NET API. He maintained it was the right thing to do; I wasn't so sure but it was his product so I didn't put up much of a fight.

I believe that SSIS is designed as a tool for DBAs or those database developers that only know SQL, MDX and Reporting Services. It is the best is can possibly be without introducing code concepts to these people.

A few months back I read a post by Teo Lachev called [When Developers and BI Collide](http://prologika.com/CS/blogs/blog/archive/2013/03/09/when-developers-and-bi-collide.aspx) which I agree with large parts of – primarily that you must have BI specialists if you want to develop BI solutions and some that I disagree with – maintaining SSIS is easier than maintaining custom code, coders are not BI pros. I consider myself a coder AND a BI pro and there are a number of similar people working in the team I architect for at the moment. Actually when hiring I have found is it often easier and more productive to find and teach a coder about BI than the reverse.

So anyway I digress, I joined Microsoft in 2006 and did a lot of consulting around integration services. It was a popular tool for customers to have problems with. We used it as part of a solution for a large UK bank’s faster payments implementation. It was a hard project for me – the rest of the team were designing C# code and publishing object based APIs. I had to use a shared encryption routine so when BizTalk unwrapped a transaction at the other end it would be able to decrypt it. This API meant I has to spend a good proportion of my time writing boring and error prone code to convert data sets (SSIS data flow) to objects and back to data sets again. This data mapping code was the interesting part though – I hate ‘programming’ by mouse; click, click, type, drag, click...and this is what the SSIS experience is. That was the first time I regretted using SSIS on a project.

There are [plenty](http://ayende.com/Wiki/I+Hate+SSIS.ashx) of [posts](http://ayende.com/blog/992/ssis-debugging-frustrations) about what is [wrong](http://ayende.com/blog/2659/ssis-the-backlash) with SSIS and some equally [passionate](http://consultingblogs.emc.com/jamiethomson/archive/2007/07/27/SSIS_3A00_-The-backlash-continues.aspx) [responses](http://consultingblogs.emc.com/jamiethomson/archive/2007/07/30/SSIS_3A00_-A-response-from-Microsoft-to-the-growing-criticism.aspx). My main issues with it are all related to real world usage. I have never been involved in a project where SSIS was the whole solution. It is always just a component of something bigger, an architecture, a project, a development team and a process. I work exclusively in agile teams now and every step of the way SSIS slows things down:

- Unit testing is not possible ([SSISUnit](http://ssisunit.codeplex.com/) is really a component or integration test)
- Agile team development requires code branching and merging which is not possible
- Distributed source control (such as Git) can’t be used at all since there is no way to lock a file whilst you are working on it
- Code reviews are difficult – you have to open up every package and click every box to check
- It is hard to enforce project standards – StyleCop and FxCop do not work on VSA code
- There is no way to share code – copy/paste coding is prolific
- Everyone uses a template package to try and ensure some standards – unfortunately you can’t make changes to that template though since it was copied
- COM leaks abstractions everywhere from the C# APIs to the type system
- The type system to too tightly bound to metadata – need to change a column length, shame now you have to open all the relevant packages and fix the issues; ANSI <-> Unicode conversions must be explicit
- There is no way to stub out data sources or destinations i.e. temporarily replace a SQL table with a local file for testing
- Mouse based programming

The net result of all this is yes, it is very quick to get something running but you must forever pay interest on the technical debt you just created. SSIS is not friction free in a team development environment.

There are two situations where I believe you should use SSIS:

1. If you are a DBA or database developer, you just need to get something done quickly and don’t care about the maintenance issues I've described above
2. You need to take advantage of some of the more complex to code components such as CDC or fuzzy matching (remember that it is very easy to call packages from code anyway so no need to base the entire solution on SSIS)

What are the alternatives? The simplest one is to make use of SSIS in an abstract way – code up something that can load your configuration, pass it to packages, execute them and capture the events for logging. We use something like this on my current project and to an extent it has helped a little. We still have to manage lots of packages though.

Next up the ladder is to create abstractions of the tasks that packages are performing and generate them. [Biml](http://www.varigence.com/Products/Biml/Capabilities) is a perfect example of this.

Finally, I mentioned that APIs back in 2005 were not that mature. Here in 2013 though we have some fantastic APIs to work with – [Task Parallel Library](http://msdn.microsoft.com/en-us/library/dd460717.aspx), [asynchronous workflows](http://msdn.microsoft.com/en-us/library/vstudio/hh191443.aspx), [Linq](http://msdn.microsoft.com/en-us/library/vstudio/bb397926.aspx), [functional programming concepts](http://aabs.wordpress.com/2008/04/16/functional-programming-in-csharp-higher-order-functions/) and the rich ecosystem of [Nuget packages](https://www.nuget.org/). Coding isn't as hard as it used to be.

I started out this summer to produce an [end to end BI solution](http://snape.me/category/sample-solution/) in an agile way but quickly found out I needed to update some of my skills with respect to the C# tools and techniques available. So whilst I haven’t been blogging I have coded, learned and tried out ideas. Some of these are ready to show and you can try them out look for [Deeply on Github](https://github.com/jsnape/deeply) or on [Nuget](https://www.nuget.org/packages/deeply/). It is early days but try it out and let me know what you think.
