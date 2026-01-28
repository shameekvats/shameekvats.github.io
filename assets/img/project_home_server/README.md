# Home Server Project Images

## Required Images

This folder needs the following images from your Old-laptop-home-server GitHub repository:

### 1. Gallery Images (for project page)
Source these from: `https://github.com/shameekvats/Old-laptop-home-server/tree/main/images`

- **hp-mini-1.jpg** - Main hardware photo of the HP Mini netbook
- **hp-mini-headless.jpg** - Photo showing the server running with lid closed
- **filebrowser-web.jpg** - Screenshot of the FileBrowser web interface

### 2. Header Image (for thumbnail)
Location: `/assets/img/project_headers/home_server.jpg`

**Options:**
- Use the hp-mini-1.jpg as the header image
- Create a composite/enhanced version with overlay text
- Use a cropped/edited version optimized for the header card

## How to Get the Images

### Option 1: Clone the Repository (Recommended)
```bash
# Navigate to a temporary location
cd ~/Downloads

# Clone the repository
git clone https://github.com/shameekvats/Old-laptop-home-server.git

# Copy images to your website
cp Old-laptop-home-server/images/* ~/Documents/GitHub/shameekvats.github.io/assets/img/project_home_server/

# Copy one image for the header (choose the best one)
cp Old-laptop-home-server/images/hp-mini-1.jpg ~/Documents/GitHub/shameekvats.github.io/assets/img/project_headers/home_server.jpg
```

### Option 2: Download from GitHub
Visit: https://github.com/shameekvats/Old-laptop-home-server/tree/main/images

Click on each image → "Download" or "View Raw" → Save to this folder

### Option 3: Direct GitHub URLs
You can also reference images directly from GitHub (though local hosting is preferred):

```
https://raw.githubusercontent.com/shameekvats/Old-laptop-home-server/main/images/hp-mini-1.jpg
```

## Image Requirements

- **Format:** JPG or PNG
- **Gallery images:** Minimum 800px width recommended
- **Header image:** Minimum 1200px width for crisp display
- **Optimization:** Consider compressing images for faster page load

## After Adding Images

1. Verify all three gallery images are in this folder
2. Verify the header image is in `/assets/img/project_headers/`
3. Test the project page to ensure images load correctly
4. Consider adding alt text descriptions if needed

## Current Status

- [ ] hp-mini-1.jpg
- [ ] hp-mini-headless.jpg  
- [ ] filebrowser-web.jpg
- [ ] home_server.jpg (in project_headers folder)

Mark items as complete once added!
