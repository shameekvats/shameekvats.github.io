---
layout: post
title: "Designing a Full-Size LED Table Lamp: Ribbed Shade, Wooden Base, Practical Glow"
date: 2026-06-11
thumbnail: assets/img/blog/led_lamp.PNG
description: A larger, practical lamp build combining a ribbed cylindrical shade, wooden base, and LED lighting into a refined everyday object
tags: additive-manufacturing prototyping lighting cad
categories: engineering
featured: true
---

After the mini-lamp project, I wanted to scale up — both in size and ambition. This table lamp is a proper room piece: tall enough to throw real light, warm enough to set a mood, and sturdy enough to live on a shelf or bedside table long-term.

The design centers on a tall ribbed cylinder shade mounted on a minimal wooden base with thin legs. When lit, the ribbing diffuses the LED glow evenly across the surface, creating a soft, even column of light that works well in any room.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/blog/led_lamp.PNG"
           title="3D printed LED table lamp illuminated" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final lamp in use: warm LED glow diffused through the ribbed cylindrical shade
</div>

## Project Goal

The mini lamps were expressive and fun, but limited in practical output. This project had a clear functional target:
- Produce genuine ambient lighting — not just a visual accent
- Be large enough to hold presence in a room
- Use a shade geometry that distributes light softly and evenly
- Pair cleanly with a natural wood base for a refined finish

The ribbed cylinder form came out of that constraint set. Vertical fluting diffuses light well, adds visual texture, and prints reliably without support.

## CAD Design

The CAD model breaks into two main assemblies: the shade and the base. The shade is a full-height ribbed cylinder with a wall thin enough to transmit light but rigid enough to hold shape. The base uses a simple platform with four slender legs — a design that keeps the lamp feeling light and open rather than heavy or decorative.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/blog/cad.png"
           title="CAD model of the table lamp" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/blog/led_lamp2.PNG"
           title="Printed lamp variants on display" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD model (left) and fabricated variants including ribbed white, diamond-textured, and ribbed blue (right)
</div>

The CAD model also informed the LED housing integration — the base cavity is sized to fit a standard LED puck, keeping the electrical components clean and out of sight.

## Variants and Exploration

One of the advantages of working from a parametric CAD base is that design variations are cheap. Beyond the original white ribbed version, I explored:
- **Blue ribbed** — same fluted geometry in a bold accent color
- **Diamond-textured** — a faceted surface pattern for a completely different light diffusion character

Each variant uses the same base assembly, so the production workflow stays consistent.

## Why This Scales Up Well

Bigger lamps introduce structural challenges that mini versions sidestep. The shade needs to be stiff enough to stay upright without a thick wall that blocks light. The base needs weight or footprint to prevent tipping. Aligning the LED source with the shade geometry so the light distributes evenly takes iteration.

Getting all of that right in a single print-and-assemble workflow — without any fasteners or glue — was the core engineering challenge here.

## Next Iterations

Future versions may explore:
- Dimmable LED integration with a touch-sensitive base
- Taller and narrower proportions for a floor-lamp variant
- Two-tone prints pairing translucent shade material with an opaque colored base
- A parametric shade generator for custom rib counts and profiles

## Explore More

See the broader portfolio context for this work here: [Design and Fabrication Project Page]({{ '/projects/3dprint/' | relative_url }}).

---

*This project is part of my broader design and fabrication portfolio focused on additive manufacturing, prototyping, and functional creative products.*
