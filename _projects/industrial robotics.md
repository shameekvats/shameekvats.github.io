---
layout: page
title: industrial robotics
description: early steps in automation
img: assets/img/project_headers/industrial_robotics.jpg
importance: 6
category: portfolio #work
related_publications: false #true
---

This project marks the beginning of my exploration into industrial robotics, a field where programming meets real-world machinery. I set up a simulated production line using a Dobot Magician robot, where a continuous conveyor belt delivers cubes in different colors. Programmed in Python, the robot picks up each cube, takes it to a detection point, and then sorts it into the correct container based on its color.

To ensure smooth operation, I integrated a light sensor and an infrared sensor into the setup. The light sensor detects the cube's color, while the infrared sensor controls the process by automatically turning it on or off when cubes are present. Working with three distinct colors not only demonstrates the basics of automation, but also fuels my curiosity for merging robotics with digital programming. This project is an exciting early step in refining my skills in Python-driven automation.

Below is a video showcasing the setup in action.

<!-- Insert video here -->
<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        <video controls class="img-fluid rounded z-depth-1">
            <source src="{{ 'assets/img/project_robotics/industrial_robotics.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>