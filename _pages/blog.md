---
layout: page
title: blog
permalink: /blog/
description: Insights on engineering, automation, and experiences from lab to life
nav: true
nav_order: 3
---

<div class="post">

  {% if site.posts.size == 0 %}
    <p style="padding: 2rem; text-align: center; color: var(--global-text-color-light);">No posts yet. Check back soon!</p>
  {% endif %}

  <div class="blog-posts">
    {% for post in site.posts %}
      <article class="blog-post-preview" style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--global-divider-color);">
        <div class="row">
          <!-- Content Column -->
          <div class="{% if post.thumbnail %}col-md-8{% else %}col-md-12{% endif %}">
            <h3 style="margin-top: 0;">
              <a class="post-title" href="{{ post.url | relative_url }}" style="text-decoration: none;">{{ post.title }}</a>
            </h3>
            
            <p class="post-meta" style="color: var(--global-text-color-light); font-size: 0.9rem; margin-bottom: 1rem;">
              {{ post.date | date: '%B %-d, %Y' }}
              {% if post.author %}
                • {{ post.author }}
              {% endif %}
            </p>
            
            <p style="margin-bottom: 1rem;">{{ post.description }}</p>
            
            <!-- Tags and Categories -->
            <div style="margin-top: 1rem;">
              {% assign year = post.date | date: '%Y' %}
              <a href="{{ year | prepend: '/blog/' | relative_url }}" class="badge" style="background-color: var(--global-theme-color); color: white; text-decoration: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem; margin-right: 0.25rem;">
                {{ year }}
              </a>
              
              {% if post.tags %}
                {% for tag in post.tags %}
                  <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="badge badge-secondary" style="text-decoration: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem; margin-right: 0.25rem;">
                    #{{ tag }}
                  </a>
                {% endfor %}
              {% endif %}
              
              {% if post.categories %}
                <span style="margin: 0 0.5rem;">·</span>
                {% for category in post.categories %}
                  <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="badge badge-primary" style="text-decoration: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem; margin-right: 0.25rem;">
                    {{ category | capitalize }}
                  </a>
                {% endfor %}
              {% endif %}
            </div>
          </div>
          
          <!-- Thumbnail Column -->
          {% if post.thumbnail %}
            <div class="col-md-4">
              <a href="{{ post.url | relative_url }}">
                {% if post.thumbnail contains '.mp4' or post.thumbnail contains '.webm' %}
                  <video class="img-fluid rounded z-depth-1" style="width: 100%; height: auto; object-fit: cover; max-height: 200px;" muted loop autoplay>
                    <source src="{{ post.thumbnail | relative_url }}" type="video/{{ post.thumbnail | split: '.' | last }}">
                  </video>
                {% else %}
                  {% include figure.liquid 
                    path=post.thumbnail 
                    class="img-fluid rounded z-depth-1" 
                    style="width: 100%; height: auto; object-fit: cover; max-height: 200px;"
                    alt=post.title 
                    zoomable=false
                  %}
                {% endif %}
              </a>
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>

</div>
