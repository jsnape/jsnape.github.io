---
title: "Using an open source committer policy in the enterprise"
postDate: 2014-02-11
categories: 
  - "agile"
tags: 
  - "code-quality"
  - "code-reviews"
---

![Southbourne Beach](./12467521734_d2293e9855_z.jpg)How would you change your behaviour if the person reviewing your code had the final say on whether it makes it into the source repository?

I often see code reviews done in principle but not practice. The workflow goes something like this:

- Developer assigned a new feature
- Developer designs and codes up the feature
- Developer checks the code into source control
- A reviewer is found/assigned
- The reviewer reviews code and finds a bunch of issues - a lot to do with the design
- The developer fixes a few of the easy code related issues
- Time is running out so the remaining issues are left
- Developer moves to the next feature

Contrast this with the usual open source workflow where the reviewer is the committer and not the developer; the reviewer is responsible for the final code quality and it easy for them to refuse your code.

If you were the developer in this situation what would you do? Would you discuss your design with the reviewer before you started work? Would you keep the reviewer updated with your progress and any decisions you made? Would you make sure there were no surprises for the reviewer when they finally saw your code?

If you did then the reviewer feedback should be minimal and relatively easy to fix, more importantly code quality is maintained and without an expensive rewrite.
