---
title: "A behaviour driven testing framework for batch processing systems"
postDate: 2013-03-29
categories: 
  - "software-testing"
tags: 
  - "batch"
  - "batch-processing"
  - "batch-systems"
  - "bdd"
  - "fitnesse"
  - "github"
  - "powershell"
  - "testing"
---

Recently I've been working on a testing framework to support testing of batch systems such as data warehouses.

The framework is called '**posh-gwen**' due to the three behaviour driven methods Given, When, and thEN. The first version is on github at: [https://github.com/jsnape/posh-gwen](https://github.com/jsnape/posh-gwen). Comments, suggestions and pull requests are welcome.

So why should you care about using this framework?

It is difficult to test batch systems using modern test frameworks such as [Specflow](http://www.specflow.org/) or [FitNesse](http://www.fitnesse.org/) because of the simple rule that good tests should be isolated from one another. All these frameworks run tests in sequence:

- do something
- check something
- clean up
- move on to the next test

For this to be successful each test has to run very fast. Most batch processing systems are optimised for bulk processing of data. They may take tens of seconds to run end to end even with a single row of data so running hundreds of tests independently can take hours.

This framework is designed to break the rule of sequential test execution. All tests are run in parallel by phase.

The best way to test batch processing is for a known input data to contain many test cases. The batch is run loading all data at once. Finally a number of queries are executed against the resulting system. So for example a data warehouse might load a number of source files using an [ETL framework](http://en.wikipedia.org/wiki/Extract,_transform,_load) such as [SQL Server Integration Services](http://msdn.microsoft.com/en-us/library/ms141026.aspx). Once loaded the data warehouse can be queried to check that expected values exist in the final system.

It is still important to make sure that each test is isolated from others or else changes in one might cause a number of others to fail or become invalid.

We can do this for batch processing by **data isolation** - that is to carve up data domains in a way that only a single test uses data from that domain. Then verification of the results force the query to execute against that test specific sub-domain.

There are a number of suitable domains to use but any with high cardinality are best:

- **Dates** - each day is a single test (or blocks of days, weeks, years etc. for those tests that need to span days).
- **Transaction identifiers** - use a map of IDs to test cases or in the case of strings prefix the transaction id with the test case number.
- **Business keys** - for entities such as customer or product there is usually an ID field used as the business key; use the same methods as transaction identifiers.
- **Custom attributes** - if none of the above will work then you might consider adding an extra attribute to the source data which is passed through the batch system. Obviously this is not a preferred solution single you will have to change your system.
- Combinations of the above - sometimes depending on where you need to validate you might need multiple solutions.

Go try it out and let me know how it goes. I plan on adding more features over the coming months.
