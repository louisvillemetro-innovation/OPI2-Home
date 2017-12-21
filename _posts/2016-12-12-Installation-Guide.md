---
title: Installation Guide
date: 2016-12-12 00:00:00 Z
categories:
- documentation
tags:
- documentation
- sample
layout: post
author: Paul Le
image:
  feature: city-2.jpg
---

Millennial is a Jekyll theme that was built to be 100% compatible with [GitHub Pages](https://pages.github.com/). If you are unfamiliar with GitHub Pages, you can check out [their documentation](https://help.github.com/categories/github-pages-basics/) for more information. [Jonathan McGlone's guide](http://jmcglone.com/guides/github-pages/) on creating and hosting a personal site on GitHub is also a good resource.

### What is Jekyll?

Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites. Basically, Jekyll takes your page content along with template files and produces a complete website. For more information, visit the [official Jekyll site](https://jekyllrb.com/docs/home/) for their documentation.

### Never Used Jekyll Before?

The beauty of hosting your website on GitHub is that you don't have to actually have Jekyll installed on your computer. Everything can be done through the GitHub code editor, with minimal knowledge of how to use Jekyll or the command line. All you have to do is add your posts to the `_posts` directory and edit the `_config.yml` file to change the site settings. With some rudimentary knowledge of HTML and CSS, you can even modify the site to your liking.

This can all be done through the GitHub code editor, which acts like a content management system (CMS).

### Quick-Start Guide

To start using Jekyll right away, [fork the Millennial repository on GitHub](https://github.com/LeNPaul/Millennial/fork). From there, you can rename the repository to 'USERNAME.github.io', where 'USERNAME' is your GitHub username, and edit the `_config.yml` file to your liking. Ensure that you have a branch named `gh-pages`. Your website should be ready immediately at 'http://USERNAME.github.io'.

Head over to the `_posts` directory to view all the posts that are currently on the website, and to see examples of what post files generally look like. You can simply just duplicate the template post and start adding your own content.

### Full Installation Guide

For a full local installation of Millennial, [download your own copy of Millennial](https://github.com/LeNPaul/Millennial/archive/gh-pages.zip) and unzip it into it's own directory. From there, open up your favorite command line tool, and enter `jekyll serve`. Your site should be up and running locally at [http://localhost:4000](http://localhost:4000).

The same process follows from above for adding new posts and content to your site. For a full guide on using Millennial, check out the [Working With Jekyll]({{ site.github.url }}{% post_url 2016-11-11-Working-With-Jekyll %}) post.