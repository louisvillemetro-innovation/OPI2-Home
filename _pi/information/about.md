---
title: About
lede_markdown: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
---

<div class="hidden-md hidden-lg hidden-xl" role="menu">
{% assign new_collection = site.collections | where: "title", page.nav_from_collection | first %}
{% assign items = new_collection.docs | sort: "url" | sort: "position" %}
{% assign base_path = page.nav_from_collection | downcase | prepend: "/_" | append: "/"  %}
{% include recursive-nav.html items=items base_path=base_path  %}
</div>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
