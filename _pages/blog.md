---
layout: page
title: blog
permalink: /blog/
description: Insights on engineering, automation, and experiences from lab to life
nav: true
nav_order: 3
---

<div class="post">

  <ul class="post-list">
    {% for post in site.posts %}
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
        {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags %}
              <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="badge badge-primary">{{ tag }}</a>
            {% endfor %}
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>

</div>
