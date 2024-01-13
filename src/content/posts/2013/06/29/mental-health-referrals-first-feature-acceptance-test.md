---
title: "Mental Health Referrals - First Feature Acceptance Test"
postDate: 2013-06-29
categories: 
  - "sample-solution"
tags: 
  - "linq"
  - "mental-health-project"
  - "specflow"
---

I’ve been working on this for a few weeks now, half an hour at a time in the evenings and I can safely say it’s pretty hard to maintain a train of thought in thirty minute intervals. However a bare minimum implementation is complete and ready to discuss.

We start with an acceptance test:

https://gist.github.com/jsnape/5887988

The first part of the feature describes the user story and the second part tells us that when we load three patient referrals then the total count should be 3 with 1 on the 1st January.

I’m using [SpecFlow](http://www.specflow.org) for acceptance tests since it is very easy to define tables and there are some useful binding utilities as we will see. After entering the test we can immediately compile the application and run the tests without writing anything else. The test will obviously fail since we haven’t written any code. In fact the acceptance test will stay broken for some time as we write code and unit tests. When it passes we know the feature is done.

So thinking about this functionally we effectively want to write a function that transforms an enumerable of source referral records into an enumerable of referral facts; then pipe this iterator into a [SqlBulkCopy](http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlbulkcopy.aspx) instance. Effectively this code needs to work:

> referralrepository.BulkCopy(referrals.Select(x => mapper.Map(x)));

This is a Linq transform with a mapping function applied to each item in the source list. In the next few posts I’m going to break it into bite size chunks to implement.
