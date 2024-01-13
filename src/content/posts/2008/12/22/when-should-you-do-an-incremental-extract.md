---
title: "When should you do an incremental extract?"
postDate: 2008-12-22
categories: 
  - "data-warehousing"
tags: 
  - "incremental-extracts"
  - "source-system"
---

There are no hard and fast rules but the goal is to cut the time taken to extract data from a source system and cut the amount of work you have to do with the extracted data. The numbers quoted here are the ones I use as a starting point but you need to measure to find the best values.

Don't do an incremental extract if:

- There isn't much data in the source table (less than 100k rows)
- There is enough change in the source table to require that you read most of it each time (such as more than half the rows changing between extracts)
- The data in the source table is used for periodic snapshots (such as a balance sheet) and you need to track how a table changes at particular points in time

Do an incremental extract if:

- There is a lot of data in the source table
- Rows are only ever added to the source table (i.e. rows are not updated)
- You need to track each and every change to a source row
- The source data is updated several times before being closed and once closed is never updated again (also known as an accumulating snapshot)

In general dimension tables match the first set of rules and are not extracted incrementally where as fact tables normally match the second set of rules.
