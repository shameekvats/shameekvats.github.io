---
layout: page
title: blog
permalink: /blog/
description: Insights on engineering, automation, and experiences from lab to life
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="post">

  {% if page.pagination_info.curr_page == 1 %}
  <ul class="post-list">
    {% for post in paginator.posts %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-meta">
          {{ post.date | date: '%B %-d, %Y' }}
          {% if post.author %}
            • {{ post.author }}
          {% endif %}
        </p>
        <p>{{ post.description }}</p>
      </li>
    {% endfor %}
  </ul>

  {% include pagination.liquid %}
  {% endif %}

</div>
