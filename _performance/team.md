---
title: The Team
layout: redirected
sitemap: false
redirect_to:  "https://louisvilleky.gov/government/performance-improvement/about-us"
position: 1
---
{% assign staff = site.people | where: "agency", "opi" | sort: "start_date"  %}
{% include page-section--people-team.html
  section_headline=page.staff_section_headline
  people=staff %}
