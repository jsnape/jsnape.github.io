---
title: "Deeply 0.2.0 Alpha"
postDate: 2013-10-11
categories: 
  - "data-warehousing"
tags: 
  - "dataflow"
  - "deeply"
  - "etl"
  - "nuget"
---

I've just pushed a new version of [Deeply to nuget.org](https://www.nuget.org/packages/Deeply/). This version provides just enough functionality to write some basic ETL jobs:

- Parallel and Sequential Tasks
- Execute SQL Task
- Execute Process Task
- Simple Dataflow Task

The tasks are pretty self-explanatory. The key part it nearly all the setup is done in the constructor; once the structure is created then it is executed asynchronously.

Data flows are a little harder to configure. You need a source, a target and a mapping function. A source is anything conforming to IEnumerable<T>, a target is class that accepts and IEnumerable<T> implemented in IBulkRepository<T> and finally a mapping function that maps the source<T> to the target<T>.

The code for using a simple data flow looks a little like the pseudo-csharp below:

\[code language="CSharp"\] var source = new CsvReader("C:\\sourcefile.csv");

var connectionFactory = new SqlConnectionFactory("Data Source=(localdb)\\v11.0;");

var columnMappings = new Dictionary<string, string="">() { { "Id", "Id" }, { "Name", "Name" }, { "Created", "Created" } };

var target = new SqlBulkRepository("dbo.FactTable", connectionFactory, columnMappings);

var dataflow = new SimpleDataflowTask<sourcetype, targettype="">( this.source, MappingFunctions.Identity, target);

var context = new TaskContext(); await dataflow.ExecuteAsync(context); \[/code\]

If anyone would like to help write some examples and documentation I'd be immensely grateful but otherwise please let me know of your experiences using this package.
