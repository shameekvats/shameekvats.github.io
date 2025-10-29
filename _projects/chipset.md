---
layout: page
title: embedded systems
description: micro:bit & raspberry pi
img: assets/img/project_headers/chipset.jpg
importance: 5
category: portfolio #work
related_publications: false #true
---


The [micro:bit](https://microbit.org/) is a compact, versatile microcontroller designed to simplify programming and digital creation. Widely used in education and rapid prototyping, it features an LED matrix, built-in sensors, and connectivity options that empower users to explore interactive projects and learn coding.


I utilized the Micro:bit to develop a moving robot arm, which is controlled via a dedicated remote and mobile app. Programmed in Python, this project demonstrated the device's capacity for real-time control and automation, merging robotics with intuitive user interaction.


<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_chipset/ubit.jpg" title="ubit" alt="Micro:bit microcontroller board with LED matrix and sensors powering a robot arm" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_chipset/robot_arm.jpg" title="robo-arm" alt="Python-programmed robot arm controlled by Micro:bit with remote control and mobile app integration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Picture 1: A Micro:bit board powering a robot arm.  
    Picture 2: A Python-programmed Micro:bit in action, controlling a robot arm through an attached remote and mobile app.
</div>



Currently, I am expanding my exploration of the micro:bit's capabilities by developing methods to collect real time data using its sensors. This initiative is aimed at gathering rich datasets to train advanced AI models.

---

The [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) is a compact, low-power single-board computer. Its affordability, versatility, and strong community support have made it a popular among hobbyists and learners for a multitude of DIY, educational, and IoT projects.

I utilized the [Raspberry Pi zero](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) capabilities to transform it into a network-wide ad blocker through the [Pi-hole](https://pi-hole.net/) project. By configuring it as a DNS sinkhole, I intercepted and filtered out unwanted advertisements and tracking domains before they reached my devices. This approach resulted in a cleaner, faster, and more secure browsing experience, while also reducing overall bandwidth consumption and boosting network performance.


<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_chipset/pi-zero.jpg" title="pi-zero" alt="Raspberry Pi Zero single-board computer showcasing compact low-power computing capabilities" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_chipset/pi-hole.png" title="pi-hole" alt="Pi-hole dashboard showing network-wide ad blocking statistics and DNS filtering configuration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  Picture 1: A Raspberry Pi Zero board, showcasing compact yet powerful computing.  
  Picture 2: A screenshot of the Pi-hole setup, effectively blocking ads and filtering network traffic.
</div>

