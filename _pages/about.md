---
layout: about
title: home #about
permalink: /
subtitle: "R&D Engineer · Polymers, Electrospinning & Additive Manufacturing"

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  alt: "Shameek Vats - Materials Engineer and R&D professional specializing in electrospinning and polymer science"
  more_info: #>
    # <p>555 your office number</p>
    # <p>123 your address street</p>
    # <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false #true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false #true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I’m an R&D engineer who turns polymers, including waste and bio-based feedstocks, into functional fibres and materials. Over the past decade I’ve worked across Luxembourg and Denmark, developing processes from first lab trials to working prototypes.

My core expertise is electrospinning and polymer processing: tuning solution rheology, building and optimising spinning setups, and characterising the results (FTIR, SEM, rheology, mechanical testing).

Beyond materials, I design and build: parametric CAD, 3D-printed functional prototypes and electronics-integrated builds, and I run hands-on 3D printing workshops. As a Professional Scrum Master (PSM I), I bring structure to multi-partner, cross-disciplinary projects.

I’m interested in work where materials, products and processes come together, especially when sustainability is part of the brief.


<div style="clear: both;"></div>

---

<div class="row mt-5 mb-5 justify-content-center">
    <!-- Materials Engineering Card -->
    <div class="col-lg-4 col-md-6 mb-4">
        <a href="{{ '/projects/electrospinning/' | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 2px solid var(--global-divider-color); border-radius: 12px; overflow: hidden; height: 100%; transition: transform 0.2s, box-shadow 0.2s; background: var(--global-bg-color);">
                <div style="width: 100%; height: 180px; overflow: hidden; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    {% include figure.liquid loading="eager" path="assets/img/project_headers/espin.jpg" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" alt="Electrospinning materials research" %}
                </div>
                <div style="padding: 1.5rem; text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Materials Engineering</h4>
                    <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin: 0;">Polymer science, electrospinning & nanofiber production</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Additive Design Card -->
    <div class="col-lg-4 col-md-6 mb-4">
        <a href="{{ '/projects/3dprint/' | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 2px solid var(--global-divider-color); border-radius: 12px; overflow: hidden; height: 100%; transition: transform 0.2s, box-shadow 0.2s; background: var(--global-bg-color);">
                <div style="width: 100%; height: 180px; overflow: hidden; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    {% include figure.liquid loading="eager" path="assets/img/project_headers/3dprint.jpg" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" alt="Additive manufacturing and product design" %}
                </div>
                <div style="padding: 1.5rem; text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Design & Fabrication</h4>
                    <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin: 0;">Parametric design, functional prototyping & additive manufacturing</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Home Server Card -->
    <div class="col-lg-4 col-md-6 mb-4">
        <a href="{{ '/projects/pi-nas/' | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 2px solid var(--global-divider-color); border-radius: 12px; overflow: hidden; height: 100%; transition: transform 0.2s, box-shadow 0.2s; background: var(--global-bg-color);">
                <div style="width: 100%; height: 180px; overflow: hidden; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    {% include figure.liquid loading="eager" path="assets/img/project_pi-nas/IMG_6002.jpg" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" alt="Raspberry Pi 5 NAS in 3D printed case" %}
                </div>
                <div style="padding: 1.5rem; text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Home Server</h4>
                    <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin: 0;">Self-hosted cloud storage, photo backup & smart home on a Pi 5</p>
                </div>
            </div>
        </a>
    </div>
</div>

<style>
.row > div > a > div:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>

---
