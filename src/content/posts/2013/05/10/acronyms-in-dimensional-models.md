---
title: "Acronyms in Dimensional Models"
postDate: 2013-05-10
categories: 
  - "business-intelligence"
tags: 
  - "dimensional-model"
  - "domain-driven-design"
  - "naming-conventions"
  - "ubiquitous-language"
---

Whilst researching the previous article I came across this link on [Acronyms and Ubiquitous Language](http://aspiringcraftsman.com/2011/12/11/acronyms-and-ubiquitous-language/). It is well worth reading as everything discussed also applies to dimensional models. There is one quote that I want to reprint from the .NET Framework General Naming Conventions:

> **_Do not use any acronyms that are not widely accepted, and then only when necessary._**

Your business users should be able to point Excel (or whatever tool you are using) at a dimensional model and intuitively know what the measures, dimensions and attributes are because they describe the business your users work in. Since acronyms obfuscate meaning they don't belong in dimensional models.

The only time I generally relax this rule is when both the following are true:

- All business users know the meaning of the acronym
- The expanded version is so long that it becomes unwieldy
