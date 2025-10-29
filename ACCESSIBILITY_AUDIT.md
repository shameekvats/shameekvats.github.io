# Accessibility & Performance Audit Report

**Date:** October 29, 2025  
**Website:** shameekvats.github.io  
**Theme:** al-folio v0.13.4

---

## Executive Summary

### ✅ Strengths
- Image optimization (WebP, lazy loading, responsive) is well-configured
- Semantic HTML structure via Jekyll
- Professional theme with good baseline accessibility

### ⚠️ Areas Needing Attention
1. **Missing alt text on all images** - Critical accessibility issue
2. **Large video files** - Performance bottleneck (92 MB in 2 files)
3. **No explicit color contrast testing** - Need WCAG AA compliance verification

---

## 1. Image Performance Optimization

### Current Status: ✅ Excellent

#### What's Working:
- **WebP Generation**: Jekyll-imagemagick plugin generates 3 responsive sizes (480/800/1400px)
- **Lazy Loading**: Enabled site-wide with `loading="lazy"` attribute
- **Responsive Images**: Proper srcset implementation with `sizes="95vw"`
- **Quality**: WebP compression at quality 85 (good balance)

#### Image Statistics:
```
Total image assets: ~169 MB
├── project_e-spin/: 81 MB (largest folder)
├── project_3d/: 31 MB
├── project_robotics/: 29 MB
├── project_headers/: 22 MB
├── project_chipset/: 3.3 MB
└── project_bm/: 3.9 MB
```

#### Video Files (Major Performance Issue):
```
Cover video.mp4:              63 MB ⚠️ CRITICAL
industrial_robotics.mp4:      29 MB ⚠️ HIGH
Co-axial.mp4:                3.7 MB ✓ Acceptable
movie3.mp4:                  1.2 MB ✓ Good
```

### Recommendations:

#### High Priority:
1. **Compress large video files:**
   ```bash
   # Suggested compression for Cover video.mp4 (target: <10 MB)
   ffmpeg -i "Cover video.mp4" -vcodec libx264 -crf 28 -preset slow "Cover video_compressed.mp4"
   
   # For industrial_robotics.mp4 (target: <10 MB)
   ffmpeg -i "industrial_robotics.mp4" -vcodec libx264 -crf 28 -preset slow "industrial_robotics_compressed.mp4"
   ```
   Expected size reduction: 92 MB → ~15-20 MB (75-80% savings)

#### Medium Priority:
2. **Add poster images to videos** - Shows preview before loading
3. **Consider video streaming** - Use YouTube/Vimeo for large files

#### Low Priority:
4. **Audit old/unused images** - Remove duplicates if any

---

## 2. Alt Text Audit

### Current Status: ❌ CRITICAL ISSUE

**Finding:** NO images currently have alt text attributes.

#### Affected Images (20+ found):

**Project: Electrospinning (8 images)**
- `fiber1.jpg` - No alt
- `sem.jpg` - No alt  
- `Image_31.png` - No alt
- `fiber_lc.png` - No alt
- `espin_fluidnatek.JPG` - No alt
- `setup.png` - No alt
- (Plus 2 more)

**Project: 3D Printing (10+ images)**
- `lithophane1.jpg` through `lithophane3.jpg` - No alt
- `mouse1.jpg` through `mouse3.jpg` - No alt
- (Plus more)

**Project: Chipset (4+ images)**
- `ubit.jpg` - No alt
- `robot_arm.jpg` - No alt
- `pi-zero.jpg` - No alt
- `pi-hole.png` - No alt

**Project: Project Management (6+ images)**
- Festival/event images - No alt

**About Page:**
- Profile image (`prof_pic.jpg`) - Likely missing alt

### Impact:
- **Screen readers**: Cannot describe images to visually impaired users
- **SEO**: Search engines can't index image content
- **WCAG 2.1**: Fails Level A (most basic compliance)

### Action Required:
Add descriptive alt text to ALL images. See recommendations section below.

---

## 3. Accessibility Compliance

### Areas to Test:

#### Color Contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
- [ ] Test body text vs background
- [ ] Test link colors vs background
- [ ] Test button/CTA colors
- [ ] Test navigation menu
- [ ] Test code blocks syntax highlighting

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Test skip-to-content link
- [ ] Verify focus indicators visible
- [ ] Test dropdown menus (if any)
- [ ] Verify modal dialogs are keyboard accessible

#### Screen Reader Testing
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] Verify heading hierarchy (h1 → h2 → h3)
- [ ] Check ARIA labels on interactive elements
- [ ] Test form labels (if any)

#### Semantic HTML
- [ ] Verify proper heading hierarchy
- [ ] Check landmark regions (header, nav, main, footer)
- [ ] Validate HTML with W3C validator

### Tools to Use:
1. **Browser Extensions:**
   - Lighthouse (Chrome DevTools) - Overall audit
   - WAVE (WebAIM) - Visual accessibility tester
   - axe DevTools - Detailed WCAG testing

2. **Contrast Checkers:**
   - WebAIM Contrast Checker
   - Colour Contrast Analyser (desktop app)

3. **Screen Readers:**
   - VoiceOver (macOS: Cmd+F5)
   - NVDA (Windows, free)

---

## Recommended Action Plan

### Immediate (This Session):
1. ✅ **Task 8 Complete:** Image optimization already excellent
2. **Task 9:** Add alt text to all images (see implementation below)
3. **Task 10:** Run accessibility tests and document findings

### Post-Deployment:
4. Compress video files before next deployment
5. Run Lighthouse audit on live site
6. Test with real screen reader

---

## Implementation Guide: Adding Alt Text

### Pattern 1: Simple Descriptive Alt
```liquid
{% include figure.liquid 
   path="assets/img/project_e-spin/fiber1.jpg" 
   title="fiber" 
   alt="Optical microscope image of electrospun nanofibers showing uniform fiber structure"
   class="img-fluid rounded z-depth-1" 
%}
```

### Pattern 2: Technical/Scientific Alt
```liquid
{% include figure.liquid 
   path="assets/img/project_e-spin/sem.jpg" 
   title="sem" 
   alt="Scanning electron microscopy (SEM) image revealing detailed surface texture of electrospun fibers at microscopic level"
   class="img-fluid rounded z-depth-1" 
%}
```

### Pattern 3: Equipment/Setup Alt
```liquid
{% include figure.liquid 
   path="assets/img/project_e-spin/espin_fluidnatek.JPG" 
   title="espin equipment" 
   alt="Commercial Fluidnatek electrospinning equipment setup in laboratory, showing enclosed chamber and control systems"
   class="img-fluid rounded z-depth-1" 
%}
```

### Alt Text Best Practices:
1. **Be descriptive but concise** (aim for <125 characters)
2. **Don't start with "Image of..."** or "Picture of..." (screen readers announce it's an image)
3. **Include relevant technical details** for scientific images
4. **Describe function** for interactive elements
5. **Use empty alt=""** for decorative images (none identified yet)
6. **Context matters**: Alt text should serve the same purpose as the image

---

## Next Steps

Would you like me to:
1. **Add alt text to all images** in project files?
2. **Run Lighthouse audit** on your local site?
3. **Create video compression script** for the large MP4 files?
4. **Test color contrast** ratios?

All four tasks are important, but **alt text (Task 9)** is the highest priority for accessibility compliance.
