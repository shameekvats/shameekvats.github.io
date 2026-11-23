---
layout: about
title: about
permalink: /
subtitle: "Waste Textile Fibre Recycling · Electrospinning · Sustainable Materials"

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  alt: "Shameek Vats, materials engineer working on waste textile fibre recycling and electrospinning"

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false
  limit: 3 # leave blank to include all the blog posts

journey: true # career map at the bottom of the page (_data/journey.yml)
map: true # loads Leaflet for the career map
---

I’m a materials engineer who turns **waste textile fibres** and bio-based polymers into new fibres. My work sits where polymer science meets the circular economy: recovering value from textile waste and other waste streams, and spinning it back into functional fibres and materials.

**Electrospinning** is at the core of my expertise. I tune solution rheology, build and optimise spinning setups from lab bench to pilot scale, and characterise the results with FTIR, SEM, rheology and mechanical testing.

Over the past decade this has taken me from upcycling waste cotton and polyester textiles in my MSc, through electrospun fibres in my PhD within the Horizon 2020 project INTERACT, to cellulose fibres from waste streams in the M-ERA.NET project BIOCEL-3D.

A background in polymer science and materials engineering underpins all of it. Alongside the research, I design and build: parametric CAD, 3D-printed prototypes and electronics-integrated builds.

<div class="home-actions">
  <a class="btn btn-sm btn-outline-primary" href="{{ '/cv/' | relative_url }}">CV</a>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/publications/' | relative_url }}">Publications</a>
  <a class="btn btn-sm btn-outline-primary" href="mailto:{{ site.data.socials.email }}">Email</a>
</div>

<div class="clearfix"></div>

<div class="at-a-glance">
  <div class="glance-item"><span class="glance-number">12</span><span class="glance-label">publications</span></div>
  <div class="glance-item"><span class="glance-number">10+</span><span class="glance-label">years in fibre &amp; polymer R&amp;D</span></div>
  <div class="glance-item"><span class="glance-number">2015</span><span class="glance-label">working with textile waste since</span></div>
</div>
<p class="glance-projects">
  EU-funded projects: INTERACT (Horizon 2020) ·
  <a href="https://www.biocel3d.eu/" target="_blank" rel="noopener noreferrer">BIOCEL-3D</a> (M-ERA.NET) ·
  STREP (Horizon Europe)
</p>

<div class="row mt-4 mb-2 justify-content-center">
  {% include feature_card.liquid url="/publications/" image="assets/img/publication_preview/textile_recycling.png" alt="Recycled textile fibres" title="Waste Textile Recycling" text="Turning waste cotton, polyester and blended textiles back into fibres" %}
  {% include feature_card.liquid url="/projects/electrospinning/" image="assets/img/project_headers/espin.jpg" alt="Electrospinning nanofibres" title="Electrospinning" text="Nano- and microfibres from recycled and bio-based polymers" %}
  {% include feature_card.liquid url="/projects/3dprint/" image="assets/img/project_headers/3dprint.jpg" alt="3D-printed functional parts" title="Design &amp; Fabrication" text="Parametric CAD, functional prototypes and additive manufacturing" %}
</div>
