---
title: "Mental Healthcare Workflow"
postDate: 2013-03-09
categories: 
  - "sample-solution"
tags: 
  - "child-and-adolescent-psychiatry"
  - "mental-health-project"
---

As I mentioned in my last post I wanted to setup the scenario I'm going to use for my examples. My lovely wife is a [child psychiatrist](http://en.wikipedia.org/wiki/Child_and_adolescent_psychiatry "Child and adolescent psychiatry") so I have learned a fair amount about the way psychiatric services work in the UK. Lets dive right in.

There are four main workflow steps to all patient care:

1. Referral - prospective patients are referred to the service with behaviours that indicate a [mental health](http://en.wikipedia.org/wiki/Mental_health "Mental health") problem.
2. Assessment - a file is opened for the patient and they are assessed. If required, tests are performed, then where appropriate a diagnosis is given and the patient is referred for treatment or discharged.
3. Treatment - depending on the diagnosis, one or more treatment approaches may be required. Each approach has a outcome: either further assessment and treatment or discharge.
4. Discharge - the patient is released from mental health services.

There are two queues in the workflow:

1. Assessment queue - those that have been referred but are waiting assessment. There is a government target of 4 weeks for this queue.
2. Treatment queue - those that have a diagnosis requiring treatment. There is a desirable target of 6 weeks for this queue for the patient to begin their first treatment.

Some additional notes:

- Whilst a patient may be seen by many professionals during treatment there is usually a single mental health professional that oversees the overall care.
- There are multiple levels of discharge - each treatment approach and then final discharge from the service by the lead professional.
- Diagnoses in the UK are made according to the [International Classification of Diseases](http://www.who.int/classifications/icd/en/ "International Classification of Diseases (ICD)") (WHO) which covers all diseases and includes mental health disorders. Other countries such as the USA diagnose using the [Diagnostic and Statistical Manual of Mental Disorders](http://www.psychiatry.org/practice/dsm "Diagnostic and Statistical Manual of Mental Disorders (DSM)").
- Services are divided into tiers from Tier 1 (GP treatment) to Tier 4 (intensive, possibly in-patient, treatment).
- There are other business processes that don't contribute directly to the value stream but are essential to the overall efficiency of the service and quality of patient care such as treatment reviews.
- Treatments are conducted over a number of sessions. Even if the treatment is medication there are still sessions required to monitor and evaluate the drug effects and side-effects.

I'm sure this isn't a complete picture but its enough to make a start. First we need to look at some requirements; then review the stakeholders and begin to outline the architecture.
