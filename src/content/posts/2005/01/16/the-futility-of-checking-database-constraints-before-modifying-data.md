---
title: "The futility of checking database constraints before modifying data"
postDate: 2005-01-16
categories: 
  - "data-warehousing"
tags: 
  - "database-constraints"
  - "sql"
  - "transactions"
---

Just a quick reminder that there is no point manually checking database constraints before modifying your data. Take this code:

create table Users ( UserID uniqueidentifier primary key not null default newid(), LoginName nvarchar(50) not null unique )

if not exists ( select \* from Users where LoginName = 'JohnSmith' ) begin insert into Users (LoginName) values ('JohnSmith') end

There is a race condition between the _if not exists_ check and the insertion of data. Another connection could insert the same data before this insert gets a chance to complete. We could wrap the check and insert in a transaction to make sure consistency as follows (note the isolation level because we need to place a range lock on data that could be there):

begin tran     set transaction isolation level repeatable read     if not exists ( select \* from Users where LoginName = 'JohnSmith' )     begin insert into Users (LoginName) values ('JohnSmith')     end commit

This works but we've got the added cost of a transaction. There is no point in doing this though as there is already a unique constraint on the column and databases are very good at checking constraints. With this in mind, the new and improved version looks like:

insert into Users (LoginName) values ('JohnSmith')

Much simpler. There is only one minor problem, for which I don’t have an answer, and that is if you have multiple constraints on a table then it’s very difficult to find which one failed. The _@@error_ variable will be set to 547 (constraint violation) and a suitable _raiserror_ is generated which could be parsed by the caller but not easily.
