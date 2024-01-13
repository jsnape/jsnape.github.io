---
title: "Mental Health Project Automated Builds"
postDate: 2013-06-07
categories: 
  - "sample-solution"
tags: 
  - "build"
  - "build-automation"
  - "build-management"
  - "ci"
  - "continuous-integration"
  - "deployment"
---

Last time we were looking at the mental health project I was discussing the dimensional model. I think its time to have a crack at some code now. But this first session is just about setting up my project.

There are some key things every agile project should do:

- [Automated build](http://en.wikipedia.org/wiki/Build_automation "Build automation") with acceptance and unit tests
- Automated code analysis
- Automated deployment with integration tests

Note everything is automated - it has to be repeatable and not need human intervention or it won’t get done. I’m a big fan of continuous integration and continuous deployment so I’m going to use [Team City](http://www.jetbrains.com/teamcity/) as a build service since its free for a single agent.

Team City is a very configurable and powerful tool but I want to make sure that I can build and deploy from my local command line in exactly the same way that the Team City agent will since it makes debugging issues easier and allows developers to check the build works before committing.

There are lots of build script tools around such as [FinalBuilder](http://www.FinalBuilder.com/FinalBuilder.aspx "FinalBuilder") but I prefer [MSBuild](http://msdn.microsoft.com/en-us/library/0k6kkbsd.aspx) since its readily available and a text format. Visual Studio uses MSBuild internally but we are not going to change project files; we are going to create a higher level script to tie everything together. Since this is a simple start it's all going in one build file.

https://gist.github.com/jsnape/5730292

The build script is split into 2 main parts. At the top are property and item definitions – this is the build metadata controlling what and how the build will happen. Below that are Imports and Targets which deal with the mechanics of building. This split makes it easy to add new projects and settings without having to change your overall build script.

There are four main targets listed which are Clean, SourceAnalysis, Compile and Test. The last three of which make a build. It's fairly self-explanatory but if you don’t know MSBuild script imagine anything in a $() is a single value or variable, @() is a list of items. Each target has a list of tasks which are executed in order to complete the target.

So, this script is very simple; it just runs StyleCop over a set of source files, builds a Visual Studio solution and runs Xunit against a set of assemblies. Not much but it gives us a single command line action to build and test the solution as we add features:

> C:\\ > msbuild draco.proj

This is then setup as a single step in [TeamCity](http://www.jetbrains.com/teamcity/ "TeamCity"). Every check-in causes the build to run and tests to execute.

The complete set of source for this project is available at [https://github.com/jsnape/draco](https://github.com/jsnape/draco).
