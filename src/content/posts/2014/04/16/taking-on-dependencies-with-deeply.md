---
title: "Taking on dependencies with Deeply"
postDate: 2014-04-16
image:
  src: "./1508970498_f58062eaeb_k.jpg"
  alt: "Photo of a scuba diver swimming away from the camera at 30m depth. Blue hues throughout the photo due to light filtering at depth."
categories: 
  - "data-warehousing"
tags: 
  - "autofac"
  - "csvhelper"
  - "deeply"
  - "nuget"
---

Generally I try hard to avoid adding dependencies to a library project designed for reuse. Since Deeply is a Nuget package I have no idea how it might end up being used and for that reason I'm unwilling to add dependencies that might not fit with a user's design. As a user of Deeply however, I'm finding that I have to add the same patterns repeatedly and would rather just use a pre-existing package.

How to reconcile these opposing arguments? I've decided to add a new package to Nuget - [Deeply.Extras.](https://www.nuget.org/packages/Deeply.Extras) This assembly is free to on take whatever dependencies make sense. Initially this is going to be [Autofac](https://www.nuget.org/packages/Autofac/) for its CommonServiceLocator implementation and [CsvHelper](https://www.nuget.org/packages/CsvHelper/) to provide a CsvBulkRepository.
