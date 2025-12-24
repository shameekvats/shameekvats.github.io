---
layout: post
title: "Early Steps in Industrial Robotics and Automation"
date: 2025-12-18
thumbnail: assets/img/project_robotics/industrial_robotics.mp4
description: Setting up a simulated production line with Python and Dobot Magician
tags: robotics automation python 
categories: engineering
featured: true
---

This project marks the beginning of my exploration into industrial robotics, a field where programming meets real-world machinery. I set up a simulated production line using a Dobot Magician robot, where a continuous conveyor belt delivers cubes in different colors. Programmed in Python, the robot picks up each cube, takes it to a detection point, and then sorts it into the correct container based on its color.

To ensure smooth operation, I integrated a light sensor and an infrared sensor into the setup. The light sensor detects the cube's color, while the infrared sensor controls the process by automatically turning it on or off when cubes are present. Working with three distinct colors not only demonstrates the basics of automation, but also fuels my curiosity for merging robotics with digital programming. This project is an exciting early step in refining my skills in Python-driven automation.

## The Setup

The automated production line consists of:
- **Dobot Magician robotic arm**: A versatile 4-axis robotic arm ideal for educational and light industrial applications
- **Continuous conveyor belt**: Delivers colored cubes to the detection point
- **Light sensor**: Identifies the color of each cube (red, green, or blue)
- **Infrared sensor**: Detects cube presence and controls process flow
- **Python control system**: Orchestrates the entire operation

## How It Works

The workflow is straightforward but demonstrates key automation principles:

1. **Detection**: The infrared sensor detects when a cube arrives on the conveyor
2. **Color Recognition**: The light sensor identifies the cube's color
3. **Pick-and-Place**: The robot picks up the cube and moves it to the sorting area
4. **Sorting**: Based on color data, the robot places the cube in the corresponding container
5. **Reset**: The system returns to standby mode, ready for the next cube

## Technical Challenges

Working with real hardware presented interesting challenges:
- **Sensor Calibration**: Getting accurate color detection required careful calibration of the light sensor
- **Timing Synchronization**: Coordinating the conveyor belt speed with robot movements
- **Error Handling**: Implementing fallback logic when sensors provide ambiguous readings

## Lessons Learned

This project taught me valuable lessons about the intersection of software and hardware:
- The importance of robust error handling in physical systems
- How sensor data can be unreliable and requires filtering
- The value of incremental testing when working with robotics
- Python's versatility in controlling industrial hardware

## The Result

Below is a video showcasing the setup in action:

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        <video controls class="img-fluid rounded z-depth-1">
            <source src="{{ 'assets/img/project_robotics/industrial_robotics.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>

## Next Steps

This foundational project has opened doors to more advanced automation concepts. Future explorations might include:
- Integrating computer vision for more complex object recognition
- Implementing quality control checks during the sorting process
- Scaling to multi-robot coordination
- Adding machine learning for adaptive sorting algorithms

---

*This project was completed as an introduction to industrial automation and represents my early steps in merging robotics with digital programming.*
