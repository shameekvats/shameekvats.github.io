---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed papers, conference contributions and theses on textile recycling, electrospinning and fibre materials.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<!-- Journal Articles -->
<h2 class="bibliography-title">Journal Articles</h2>
{% bibliography --query @*[category=journal] %}

<!-- Conference Papers -->
<h2 class="bibliography-title">Conference Papers</h2>
{% bibliography --query @*[category=conference] %}

<!-- Theses -->
<h2 class="bibliography-title">Theses</h2>
{% bibliography --query @*[category=thesis] %}

</div>
