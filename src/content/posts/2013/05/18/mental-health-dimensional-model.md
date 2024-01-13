---
title: "Mental Health Dimensional Model"
postDate: 2013-05-18
categories: 
  - "sample-solution"
tags: 
  - "dimensional-model"
  - "mental-health"
  - "mental-health-project"
---

For this week’s post I want to continue the sample solution. Even though I’m going to be as agile as possible we still need to have a rough idea of a roadmap and the best way to do that is with a [dimensional model](http://en.wikipedia.org/wiki/Dimensional_modeling).

Each [business process](http://en.wikipedia.org/wiki/Business_process "Business process") we want to model is represented as a fact on columns. They are all to be stored at the transactional grain except possibly admissions. The conformed dimensions are listed on rows with the facts they are related to.

|  | Referral | Assessment | Treatment | Discharge | Complaint | Incident | Admission |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Date | 
•

 | 

•

 | 

•

 | 

•

 | 

•

 | 

•

 | 

•

 |
| 

Diagnosis

 |  | 

•

 | 

•

 |  |  |  |  |
| 

Health Professional

 |  | 

•

 | 

•

 |  | 

•

 | 

•

 | 

•

 |
| 

Patient

 | 

•

 | 

•

 | 

•

 | 

•

 | 

•

 | 

•

 | 

•

 |
| 

Referrer

 | 

•

 |  |  |  |  |  |  |
| 

Service (Tier)

 | 

•

 |  | 

•

 | 

•

 |  |  | 

•

 |
| 

Time

 | 

•

 |  | 

•

 | 

•

 |  | 

•

 | 

•

 |
| 

Treatment Outcome

 |  |  | 

•

 |  |  |  |  |
| 

Clinic

 |  | 

•

 |  |  | 

•

 | 

•

 | 

•

 |

It is interesting to note that this is a very patient focused model since that dimension is related to every fact. There are some unanswered questions within the model though:

- How do we represent treatment outcomes? Is there a standard method? Can this be represented in a single dimension?
- What grain are admissions? Given the goal of calculating '[bed days](http://www.ehow.com/how_5631290_calculate-hospital-bed-days-care.html)' we might need to model them as [events in progress](http://cwebbbi.wordpress.com/2011/01/22/solving-the-events-in-progress-problem-in-mdx-part-2role-playing-measure-groups/).

I think we have enough to make a start and I don't think we will deliver faster if we stop to resolve these issues first. Initially I'm going to concentrate on referrals, assessments and discharges since the number of patients in the system is one of the most useful metrics to monitor.
