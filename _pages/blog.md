---
layout: page
title: blog
permalink: /blog/
description: Insights on engineering, automation, and experiences from lab to life
nav: true
nav_order: 3
---

<div class="post">

  <!-- Featured Post Section -->
  {% assign featured_posts = site.posts | where: "featured", true %}
  {% if featured_posts.size > 0 %}
    {% assign featured = featured_posts.first %}
    <div class="featured-post" style="margin-bottom: 3rem; padding: 2rem; border: 2px solid var(--global-divider-color); border-radius: 12px; background: var(--global-bg-color);">
      <div class="row">
        <div class="col-md-6">
          {% if featured.img %}
            <img src="{{ featured.img | relative_url }}" alt="{{ featured.title }}" class="img-fluid rounded" style="width: 100%; height: 300px; object-fit: cover;">
          {% elsif featured.thumbnail %}
            <img src="{{ featured.thumbnail | relative_url }}" alt="{{ featured.title }}" class="img-fluid rounded" style="width: 100%; height: 300px; object-fit: cover;">
          {% else %}
            <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px;"></div>
          {% endif %}
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <span class="badge badge-primary" style="width: fit-content; margin-bottom: 0.5rem;">Featured</span>
          <h2 style="margin-bottom: 1rem;">
            <a href="{{ featured.url | relative_url }}" style="text-decoration: none; color: inherit;">{{ featured.title }}</a>
          </h2>
          <p style="color: var(--global-text-color-light); font-size: 0.9rem; margin-bottom: 1rem;">
            <i class="fa-regular fa-calendar"></i> {{ featured.date | date: "%B %-d, %Y" }}
            {% if featured.tags %}
              <span style="margin-left: 1rem;">
                {% for tag in featured.tags limit:3 %}
                  <span class="badge badge-secondary">{{ tag }}</span>
                {% endfor %}
              </span>
            {% endif %}
          </p>
          <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">{{ featured.description }}</p>
          <div>
            <a href="{{ featured.url | relative_url }}" class="btn btn-primary">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  {% endif %}

  <!-- Recent Posts Grid -->
  <h3 style="margin-bottom: 2rem; border-bottom: 2px solid var(--global-divider-color); padding-bottom: 0.5rem;">Recent Posts</h3>
  
  <div class="row">
    {% assign recent_posts = site.posts | where_exp: "post", "post.featured != true" %}
    {% for post in site.posts limit:9 %}
      <div class="col-md-4 mb-4">
        <div class="card h-100" style="border: 2px solid var(--global-divider-color); border-radius: 10px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s;">
          <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: inherit;">
            {% if post.img %}
              <img src="{{ post.img | relative_url }}" alt="{{ post.title }}" class="card-img-top" style="height: 200px; object-fit: cover;">
            {% elsif post.thumbnail %}
              <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="card-img-top" style="height: 200px; object-fit: cover;">
            {% else %}
              <div style="height: 200px; background: linear-gradient(135deg, #{{ post.date | date: "%m" | times: 15 | modulo: 256 | prepend: '00' | slice: -2, 2 }}{{ post.date | date: "%d" | times: 10 | modulo: 256 | prepend: '00' | slice: -2, 2 }}{{ post.title.size | times: 20 | modulo: 256 | prepend: '00' | slice: -2, 2 }} 0%, #{{ post.title.size | times: 15 | modulo: 256 | prepend: '00' | slice: -2, 2 }}{{ post.date | date: "%m" | times: 20 | modulo: 256 | prepend: '00' | slice: -2, 2 }}{{ post.date | date: "%d" | times: 15 | modulo: 256 | prepend: '00' | slice: -2, 2 }} 100%);"></div>
            {% endif %}
            <div class="card-body" style="padding: 1.5rem;">
              <h5 class="card-title" style="margin-bottom: 0.75rem; font-weight: 600;">{{ post.title }}</h5>
              <p class="card-text" style="color: var(--global-text-color-light); font-size: 0.85rem; margin-bottom: 0.75rem;">
                <i class="fa-regular fa-calendar"></i> {{ post.date | date: "%b %-d, %Y" }}
              </p>
              {% if post.description %}
                <p class="card-text" style="font-size: 0.9rem; line-height: 1.5;">{{ post.description | truncate: 120 }}</p>
              {% endif %}
              {% if post.tags %}
                <div style="margin-top: 1rem;">
                  {% for tag in post.tags limit:2 %}
                    <span style="display: inline-block; background: var(--global-theme-color); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.25rem;">{{ tag }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </a>
        </div>
      </div>
    {% endfor %}
  </div>

  <!-- Categories Section -->
  {% if site.display_categories.size > 0 %}
    <h3 style="margin-top: 3rem; margin-bottom: 2rem; border-bottom: 2px solid var(--global-divider-color); padding-bottom: 0.5rem;">Browse by Category</h3>
    
    {% for category in site.display_categories %}
      {% assign categorized_posts = site.categories[category] %}
      {% if categorized_posts.size > 0 %}
        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; text-transform: capitalize;">{{ category }}</h4>
          <div class="row">
            {% for post in categorized_posts limit:3 %}
              <div class="col-md-4 mb-3">
                <div style="border-left: 3px solid var(--global-theme-color); padding-left: 1rem;">
                  <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--global-text-color); font-weight: 500;">{{ post.title }}</a>
                  <p style="font-size: 0.85rem; color: var(--global-text-color-light); margin-top: 0.25rem;">{{ post.date | date: "%B %-d, %Y" }}</p>
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
  {% endif %}

  <!-- Archive Link -->
  <div style="text-align: center; margin-top: 3rem; padding: 2rem; border-top: 2px solid var(--global-divider-color);">
    <a href="{{ '/blog/archive/' | relative_url }}" class="btn btn-outline-primary">View All Posts →</a>
  </div>

</div>

<style>
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
</style>
