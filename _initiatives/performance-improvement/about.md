---
title: About
permalink: "/initiatives/"
lede_markdown: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
---

<div class="hidden-md hidden-lg hidden-xl" role="menu">
{% assign new_collection = site.collections | where: "title", page.nav_from_collection | first %}
{% assign items = new_collection.docs | sort: "url" | sort: "position" %}
{% assign base_path = page.nav_from_collection | downcase | prepend: "/_" | append: "/"  %}
{% include recursive-nav.html items=items base_path=base_path  %}
</div>

### What is Continuous Improvement (CI)?

The American Society for Quality defines Continuous Improvement as "an ongoing effort to improve products, services or processes. These efforts can seek 'incremental' improvement over time or 'breakthrough' improvement all at once."

### What does OPI do?

OPI provides management consulting services to all of Louisville Metro Government. OPI staff facilitate cross-functional teams tasked with solving known problems, which span multiple departments or stakeholders within Metro Government. OPI offers training to Metro leadership, management and employees in continuous improvement methodologies including Lean, Plan-Do-Check-Act Problem Solving, Six Sigma process improvement, project management, as well as overall management best practices.

Improvement Stories:  Learn how Louisville Metro Government's departments and agencies are using Continuous Improvement (CI) tools and methodology to increase efficiency, improve quality of service, and cascade improvement efforts throughout Louisville Metro!
