---
title: "Subcube Queries"
postDate: 2006-11-09
categories: 
  - "data-warehousing"
tags: 
  - "analysis-services"
  - "performance"
---

I've been doing some Analysis Services 2005 performance work for a customer. Eventually I want to talk about some sort of a performance process for AS2005 but right now [Chris Webb](http://cwebbbi.spaces.live.com/) has a pretty good reference on [designing effective aggregations](http://cwebbbi.spaces.live.com/Blog/cns!7B84B0F2C239489A!907.entry "Designing Effective Aggregations in AS2005"). This is just a quick description of what the 11100101010,1010001000000 means in SQL Server Profiler.

Since SQL Profiler now supports Analysis Services you can monitor queries as they execute to find the poorly performing ones. Chances are you will see a _Progress Report_ event similar to _Started reading data from the 'XXX' partition_ closely followed by a _Query Subcube_ event with _TextData_ looking like a string of ones and zeros such as: '00001000000000000,10111100000011111100,10' The progress report tells you that data was read directly from the partition and no aggregation was used.

If you turn on the _Query Subcube Verbose_ event then a more complete description is printed but quite often you will receive traces with just the subcube strings as the verbose event is hidden from the default set of options.

The subcube string tells you which dimensions and attributes are involved. Each group of digits, separated by a comma, denotes a dimension and each digit denotes an attribute within that dimension. The digit is '1' if that attribute is part of the subcube and '0' otherwise. Some things to note:

- These are cube dimensions so the same dimension, e.g. Date, can be represented many times as a role-playing dimension, e.g. Ship Date
- The order is defined by the actual order of dimensions and attributes in the measure group, not alphabetical or any other sort order.

Since the order of dimensions and attributes is not immediately obvious, it's better to write some code to print them out in the correct order. The following prints all the dimensions and attributes of the supplied measure group object in order:

private static void PrintMeasureGroupDimensions(MeasureGroup mg) {
 for (int j = 0; j < mg.Dimensions.Count; ++j) { 
   CubeDimension dim = mg.Dimensions\[j\].CubeDimension; 
   Console.WriteLine("DIM:\\t{0} ({1})", dim.Name, dim.Attributes.Count); 

   for (int k = 0; k < dim.Attributes.Count; ++k) { 
     CubeAttribute attr = dim.Attributes\[k\]; 
     Console.WriteLine("ATT:\\t\\t{0}", attr.Attribute.Name); 
   }
 }
}

I've attached a piece of sample code that compiles into a console application to either print the entire set of dimensions for a measure group or, if you pass a subcube string, will just print those involved in the query. Execute with no args or '/h' to get some help.

[SubcubeQueries.cs](http://sdrv.ms/1aw4EMg "Subcube Queries Sample Program")
