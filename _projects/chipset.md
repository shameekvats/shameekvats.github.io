---
layout: page
title: embedded systems
description: micro:bit & raspberry pi
img: assets/img/project_headers/chipset.jpg
importance: 2
category: portfolio #work
related_publications: false #true
---


The [micro:bit] (https://microbit.org/) is a compact, versatile microcontroller designed to simplify programming and digital creation. Widely used in education and rapid prototyping, it features an LED matrix, built-in sensors, and connectivity options that empower users to explore interactive projects and learn coding.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_chipset/ubit.jpg" title="ubit" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Microbit used to power robot arm.
</div>


I utilized the Micro:bit to develop a moving robot arm, which is controlled via a dedicated remote and mobile app. Programmed in Python, this project demonstrated the device's capacity for real-time control and automation, merging robotics with intuitive user interaction.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_chipset/robot_arm.jpg" title="robo arm" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Python programmed micro:bit used to power a robot arm, controlled by attached remote and an app.
</div>


Currently, I am expanding my exploration of the micro:bit's capabilities by developing methods to collect real time data using its sensors. This initiative is aimed at gathering rich datasets to train advanced AI models.

---

The [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) is a compact, low-power single-board computer. Its affordability, versatility, and strong community support have made it a popular among hobbyists and learners for a multitude of DIY, educational, and IoT projects.

I utilized the [Raspberry Pi zero](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) capabilities to transform it into a network-wide ad blocker through the [Pi-hole](https://pi-hole.net/) project. By configuring it as a DNS sinkhole, I intercepted and filtered out unwanted advertisements and tracking domains before they reached my devices. This approach resulted in a cleaner, faster, and more secure browsing experience, while also reducing overall bandwidth consumption and boosting network performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_chipset/pi-zero.jpg" title="pi-zero" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Raspberry pi zero used for Pi-hole.
</div>



