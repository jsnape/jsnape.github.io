---
title: "Risk Driven Architecture"
postDate: 2013-04-27
categories: 
  - "sample-solution"
tags: 
  - "architecture"
  - "business-intelligence"
  - "data-warehouse"
  - "risk"
  - "stakeholder-concerns"
---

Architecture shares something with testing in that resources are limited so effort is best directed toward maximising risk reduction.

The amount of ‘architecture’ in a solution should also reflect the risk associated with a project. For example the sample solution I’m creating carries almost no risk apart from my pride so a light touch is warranted.

However in a real solution what are the major risks? Where should we concentrate our efforts? Below are some of the common risks associated with business intelligence projects:

- Unclean data e.g. Key pathologies – see later post.
- Unreliable sources – how are failed connections, retries and duplicates handled?
- Data volumes – what are the expected peak volumes? What will happen if these peaks are exceeded?
- Latency requirements – can data be supplied to users fast enough? What is the business cost of delays?
- Testability – how testable is the solution? How long can you keep going before [technical debt](http://en.wikipedia.org/wiki/Technical_debt "Technical debt") catches up with you?
- History and archive – in my experience most source systems don’t keep a full fidelity history so it ends up being the data warehouse’s responsibility.
- Staying agile – unfortunately many problems with business intelligence solutions are due to an inability to change things; once users, reports, spread-sheets, and ETL code depend on data warehouse schemas or cube designs the whole thing becomes very difficult to change.
- Disaster recovery – what happens when your server dies? Network fails? Data centre fails?
- Scalability – what are your expected user loads? what happens if they are exceeded? are there any events that could cause your user load to be drastically exceeded?
- Usability – how will your users interact with the system? how much training will they need? what if they need help? how can you make the solution easier to use?

“Agile architecture is the art of constraining a solution in order to optimise competing stakeholder concerns whilst maximising the number of options for future design decisions.” – James Snape (just now)

So to be agile lets just concentrate on the risks and try to not be too prescriptive over the final solution. Everything else can generally be quickly changed if it doesn't work out.
