---
title: "Thinking functionally about surrogate key mapping"
postDate: 2013-07-02
categories: 
  - "sample-solution"
tags: 
  - "f"
  - "functional"
  - "surrogate-key"
---

I’m currently trying to learn F# because I’m keen to learn new programming styles as well as languages. It turns out that many of the concepts we C# programmers know and love such as [Linq](http://en.wikipedia.org/wiki/Language_Integrated_Query "Language Integrated Query") ([monads](http://en.wikipedia.org/wiki/Monad_(functional_programming))), generics and [async workflows](http://msdn.microsoft.com/en-us/library/dd233250.aspx) originated in either F# or other [functional languages](http://en.wikipedia.org/wiki/Functional_programming "Functional programming"). Thinking ‘functionally’ is a great skill to have too. How does this apply to [surrogate key](http://en.wikipedia.org/wiki/Surrogate_key "Surrogate key") mapping? Well to borrow a notation from F# we are looking for a function like this:

> string –> int

That is, a function that takes a string (the business key) and returns an integer (the surrogate key). Surrogate key lookup is a perfect fit for the functional view where “functions have no side effects”. Pass the same string to our lookup function any number of times and it should return the same integer value. The poorly performing version of this function might run off to the database every call and retrieve the value but there is a familiar functional technique called [Memoization](http://en.wikipedia.org/wiki/Memoization) that can help. C# programmers might call this technique “store the values in a hashtable and only call the database if the value is missing”. A few other optimisations are necessary. Firstly, memoization will only cache the result of a single call so if we have a few hundred thousand dimension members in the database it will still take a lot of calls to populate the cache. Secondly, my lookup function doesn’t really care about the mechanics for the real database call so it would be nice if we could abstract that away. Finally, because I intend this class to be used a part of a multithreaded pipeline it needs to make sure that the internal data structures are protected. Piecing these requirements together we can start to flesh out the code. The main map function as we mentioned takes a string and returns an int:

\[code language="csharp"\] public int Map(string businessKey) { } \[/code\]

Since we want to prime the cache with a set of values and abstract the real lookup functionality the best place to configure this is in the constructor:

\[code language="csharp"\] public DimensionMapper(IDictionary<string, int>initialCache, Func<string, int> lookup) { } \[/code\]

Assuming the constructor just saves these parameters for later we can create a first cut version of the Map function:

\[code language="csharp"\] public int Map(string businessKey) { int surrogateKey;

if (this.map.TryGetValue(businessKey, out surrogateKey)) { return surrogateKey; }

surrogateKey = this.lookup(businessKey);

this.map.Add(businessKey, surrogateKey);

return surrogateKey; } \[/code\]

This works but it isn’t thread safe. For that we need a [ReaderWriterLockSlim](http://msdn.microsoft.com/en-us/library/system.threading.readerwriterlockslim.aspx) since only writes need to be synchronised. If you look at the code above there are two parts to it – the first few lines check the cache and return a value if it exists (the majority path); the last three lines are concerned with calling the real lookup function and populating the cache with the result when it doesn't exist. Splitting on this boundary allows us to wrap the first part in a read lock and the second in a write lock - turning the write part into a separate function is a little cleaner:

\[code language="csharp"\] public int Map(string businessKey) { this.updateLock.EnterUpgradeableReadLock();

try { int surrogateKey;

if (this.map.TryGetValue(businessKey, out surrogateKey)) { return surrogateKey; }

return this.Lookup(businessKey); } finally { this.updateLock.ExitUpgradeableReadLock(); } }

private int Lookup(string businessKey) { this.updateLock.EnterWriteLock();

try { int surrogateKey = this.lookup(businessKey);

this.map.Add(businessKey, surrogateKey);

return surrogateKey; } finally { this.updateLock.ExitWriteLock(); } } \[/code\]

So we have most of the class written now and I haven't discussed anything to do with databases or how we get a real surrogate key because...well its not relevant here since a function is passed to the constructor. I like this ability to concentrate on just a single algorithm and not worry about the wider solution. From what I've learned so far F# is better as this than C#.

For the full class definition see the [full source file](https://github.com/jsnape/draco/blob/master/source/Draco.Domain/SurrogateKeyMapper.cs) in context and [associated unit tests](https://github.com/jsnape/draco/blob/master/source/Draco.Domain.Tests/SurrogateKeyMapperTests.cs).

###### Related articles

- [Learning to think Functionally: Memoization](http://www.devjoy.com/2013/05/learning-to-think-functionally-memoization/) (devjoy.com)
