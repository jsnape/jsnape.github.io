---
title: "Senior R&D Engineer"
startDate: 1994-08-01
endDate: 2000-04-01
locationType: "hybrid"
location: "Bournemouth, United Kingdom"
employmentType: "Full-time"
companyName: "Sony Broadcast & Professional Europe"
companyUrl: "https://pro.sony/en_GB/products/broadcast-and-production"
companyLogo:
    src: "./sony-logo.jpeg"
    alt: ""
skills:
    - requirements gathering & analysis
    - application architecture
    - software design
    - video & broadcast technologies
    - video editing
    - DVD authoring
    - object oriented analysis & design
    - project management
technologies:
    - Visual Basic 6
    - C++
    - Win32
    - COM / ActiveX
    - DirectShow
---
Software design and development on video server, video editor and dvd authoring systems.

### April 1999: DVD Authoring (Project Leader)

This project was a single and multi-seat DVD authoring system with two main aims; to build a market-beating product and introduce a number of new high level authoring concepts.

The product architecture is based around a C++ framework that can host ActiveX controls in dockable windows and provides a number of services to the application in the form of COM objects. A traditional COM based document object model provides structured storage persistence and the ability to script. XML descriptions of the DVD are generated and passed to the multiplexer for DVD creation. The multiplexer used a combination of XSL and script components to create DVD binaries. DVD data is then injected into a DirectShow filter graph for preview.

My main role was application architect and project lead.

### November 1998: DVD Market Research

This was a short investigation into the needs of the DVD authoring market. This was at a time when there were only a few companies creating DVDs in the UK and Europe. It was difficult to ascertain these needs but I concluded that the DVD production market would follow a similar trend to that of CDs but much more rapidly. Christmas 1999 would be the main consumer discovery of the format. This investigation also enabled me to build and maintain a number of relationships with DVD authors useful in my next project.

### May 1998: Concept Editor (Project Leader)

This was a pure research project to provide a basis for Sony’s next generation of non-linear editors. This involved the analysis, design and implementation of a modular system that could be used in a number of product configurations from news to post production. The modularity of the system also enabled research to be carried out on a number of new editing techniques.

### May 1997: Digital Non-Linear Editing (Project Leader)

The project was to port an existing product from Window 3.1 to NT 4.0. In addition, we were required to refactor the existing code base into a maintainable architecture and add new customer requirements.

The first port took only two weeks before the system was running under NT. However, due the existing code structure and many new features required, I persuaded my manager to allow me to take a different approach. The system was redesigned and the existing code was pulled across in small sections. This allowed the quality of the system to be maintained whilst new features were added to the system.

This project also enabled me to build the capability of the three graduate team members, two of which were promoted soon after project completion. The original product used low-level access to the parallel port. I wrote the NT kernel mode driver to give this functionality to the system.

### January 1997: Server Integration Feasibility Study (Project Leader)

The project was a very short study to prove that it was possible to integrate Sony’s three server products (On-Air, Daily and Archive) into a single hierarchical storage management system. Each of these products had been implemented by different groups within Sony and had widely different data models and communications.

I abstracted both data and communications to produce a common server model and implemented DCOM adapters for each of the servers. The COM interfaces were then used as a basis for a universal client.

### June 1996: Daily Server Hot Standby (Project Leader)

After the initial delivery of the video server, the customers requested the addition of a dual hot standby fail over system. This was a very challenging project as fail over had not been part of the original requirements specification and the back-end device control systems had no redundancy built-in. I developed a mechanism for fail resistant RPC, socket communication and database replication. The resulting system was similar in design to the Microsoft Message Queue server that exists today.

### September 1995: Daily Server (Research & Development Engineer)

I was then transferred back to the Daily Server project to take responsibility for the database subsystem. This involved implementation of SQL Server schemas, stored procedures, triggers and C++ wrapper classes using ODBC.

Approximately half way through the project the system was sold to NHK (Japanese broadcaster) to be used as a content transmission server. This changed the entire focus of the project but enabled me to adapt the database to cope with both scenarios.

### April 1995: Sony/Oracle Gateway (Research & Development Engineer)

After a successful demonstration, I was asked to develop the product with Oracle. Whilst Oracle took over the Journalist Workstation, I designed and implemented a loose replication server between the Journalist Workstation and Daily Server using SQL Server Open Data Services.

### January 1995: Journalist Workstation (Research & Development Engineer)

The project was a joint venture with Oracle to produce a networked clip editing and script writing tool for television news journalists. I was brought on to the project to work with the existing engineer to produce a practical demonstration at the National Association of Broadcasters trade show that I attended in April.

### August 1994: Daily Server (Research & Development Engineer)

I was very lucky to join the department at the start of their first major software project and was immediately involved with the system analysis and architecture team. We used Rumbaugh’s Objective Modelling Technique (OMT) to architect a video server for television news organisations.
