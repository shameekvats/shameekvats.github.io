---
layout: about
title: home #about
permalink: /
subtitle: R&D Engineer & Project Manager based in Luxembourg #Materials, R&D Engineer, Project Management, Luxembourg. 

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

Materials Research Engineer specializing in polymer science and electrospinning for advanced nanofiber production. My interests lie in polymer processing, electrospinning process development, and programming to streamline and automate fabrication.

In my spare time, I explore maker projects through 3D modeling, 3D printing, electronics, and coding, often using Raspberry Pi and embedded systems, alongside web development. As a Professional Scrum Master (PSM I), I foster structured, collaborative workflows across diverse technical teams.


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

    <!-- 3D Design Card -->
    <div class="col-lg-4 col-md-6 mb-4">
        <a href="{{ '/projects/3dprint/' | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 2px solid var(--global-divider-color); border-radius: 12px; overflow: hidden; height: 100%; transition: transform 0.2s, box-shadow 0.2s; background: var(--global-bg-color);">
                <div style="width: 100%; height: 180px; overflow: hidden; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    {% include figure.liquid loading="eager" path="assets/img/project_headers/3dprint.jpg" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" alt="3D printing and design" %}
                </div>
                <div style="padding: 1.5rem; text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 600;">3D Design & Print</h4>
                    <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin: 0;">Parametric design & functional prototypes</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Embedded Systems Card -->
    <div class="col-lg-4 col-md-6 mb-4">
        <a href="{{ '/projects/chipset/' | relative_url }}" style="text-decoration: none; color: inherit;">
            <div style="border: 2px solid var(--global-divider-color); border-radius: 12px; overflow: hidden; height: 100%; transition: transform 0.2s, box-shadow 0.2s; background: var(--global-bg-color);">
                <div style="width: 100%; height: 180px; overflow: hidden; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    {% include figure.liquid loading="eager" path="assets/img/project_headers/chipset.jpg" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" alt="Embedded systems and IoT" %}
                </div>
                <div style="padding: 1.5rem; text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 600;">Embedded Systems</h4>
                    <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin: 0;">Raspberry Pi & IoT experiments</p>
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

<div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;">
    <a href="mailto:shameekvats@proton.me" class="btn btn-primary btn-lg" style="padding: 0.75rem 2rem; font-size: 1.1rem; border-radius: 8px;">
        Click to Collaborate
    </a>
    <p style="margin-top: 1rem; color: var(--global-text-color-light); font-size: 0.95rem;">
        Interested in innovative projects in materials science, advanced manufacturing, or digital innovation? Let's connect.
    </p>
</div>
