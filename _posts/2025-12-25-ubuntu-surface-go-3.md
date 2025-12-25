---
layout: post
title: "Breathing New Life into a Surface Go 3 with Ubuntu"
date: 2025-12-25
thumbnail: assets/img/blog/SurfaceUbuntu.jpg
description: A comprehensive guide to installing Ubuntu on a Microsoft Surface Go 3 tablet
tags: linux ubuntu surface hardware
categories: linux
featured: true
---

The Microsoft Surface Go 3 is an interesting piece of hardware—compact, portable, and versatile as both a laptop and tablet. However, running Windows 11 on it can feel sluggish due to its modest specifications. This led me to an interesting experiment: installing Ubuntu Linux on the Surface Go 3. The result? A significantly more responsive device that's perfect for everyday tasks, browsing, and light development work.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/blog/SurfaceUbuntu.jpg" 
           title="Ubuntu running on Surface Go 3" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ubuntu brings new life to the Surface Go 3
</div>

## Why Ubuntu on Surface Go 3?

With Windows 10 support ending in October 2025 and Windows 11 being somewhat demanding on older hardware, Linux presents an excellent alternative to keep perfectly functional devices out of landfills. The Surface Go 3, while not a powerhouse, has enough capability to run a lightweight Linux distribution smoothly.

Ubuntu was my distribution of choice for several reasons:
- Wide hardware support and active community
- Excellent documentation and troubleshooting resources
- Regular security updates and LTS (Long Term Support) versions
- Familiar interface for those transitioning from Windows

The Surface Go 3's hardware—with its modest RAM and processor—actually benefits from Ubuntu's lighter resource footprint compared to Windows 11.

## Prerequisites

Before beginning the installation, you'll need:
- A USB drive (at least 4GB)
- The Surface Go 3 itself
- Another computer to create the bootable USB (I used a Mac)
- A USB-C to USB-A adapter (for connecting the USB drive to the Surface)
- Patience and time to complete the process
- **Important**: Backup any data on your Surface Go 3—this process will erase everything!

## Step 1: Creating a Bootable USB Drive

The first step is creating a bootable USB drive with Ubuntu on it. I used [Balena Etcher](https://etcher.balena.io/) on my Mac, which makes the process straightforward:

1. Download the latest [Ubuntu Desktop ISO](https://ubuntu.com/download/desktop) from the official website
2. Download and install [Balena Etcher](https://etcher.balena.io/)
3. Insert your USB drive
4. Open Balena Etcher and select the Ubuntu ISO file
5. Select your USB drive as the target
6. Click "Flash!" and wait for the process to complete

<div class="row">
    <div class="col-sm-12 mt-3">
        <div class="alert alert-warning" role="alert">
            <strong>Note:</strong> The flashing process will erase all data on the USB drive. Make sure you've backed up any important files from it first.
        </div>
    </div>
</div>

Alternative tools for creating bootable USB drives include [Rufus](https://rufus.ie/) (Windows) or the command-line `dd` utility on Linux. If you're comfortable with the terminal, check out this [guide on using dd](https://linuxiac.com/how-to-create-bootable-usb-drive-using-dd-command/).

## Step 2: Accessing the Surface Go 3 Boot Menu

Unlike traditional PCs, the Surface Go 3 has its own unique method for accessing the boot menu and UEFI settings. Here's how to prepare your Surface for Ubuntu installation:

### Disable Secure Boot

1. **Power off your Surface Go 3 completely**
2. **Press and hold the Volume Up button**
3. **While still holding Volume Up, press and release the Power button**
4. Continue holding Volume Up until the Surface UEFI screen appears

Once in the UEFI:
1. Navigate to **"Security"** tab
2. Find **"Secure Boot"** settings
3. Change from **"Microsoft Only"** to **"None"** or **"Disabled"**
4. Save changes and exit (or continue to the next step)

### Configure Boot Order

While still in the UEFI menu:
1. Navigate to **"Boot Configuration"**
2. Move **"USB Storage"** to the top of the boot order
3. Save and exit

<div class="row">
    <div class="col-sm-12 mt-3">
        <div class="alert alert-info" role="alert">
            <strong>Tip:</strong> After successful Ubuntu installation, you may need to return to UEFI and change Secure Boot to "Microsoft & 3rd party CA" for optimal functionality.
        </div>
    </div>
</div>

For a visual guide on accessing the Surface UEFI, check out this helpful [video tutorial](https://www.youtube.com/watch?v=6_EHEmz_j4o).

## Step 3: Installing Ubuntu from USB

With your bootable USB drive ready and the Surface configured to boot from USB, you're ready to install Ubuntu:

1. **Insert the USB drive** into your Surface Go 3 (using the USB-C to USB-A adapter if needed)
2. **Restart the Surface**—it should automatically boot from the USB drive
3. **Wait patiently**—the Surface Go 3 isn't the fastest device, so the initial boot from USB can take several minutes
4. Eventually, you'll see the Ubuntu boot menu with options to "Try Ubuntu" or "Install Ubuntu"
5. **Select "Try Ubuntu"** to test everything first, or go straight to installation

### Installation Process

Once Ubuntu loads, you'll see an icon on the desktop labeled "Install Ubuntu." Double-click it to begin:

1. **Select your language** and click "Continue"
2. **Choose your keyboard layout**
3. **Select installation type**:
   - For a fresh install, choose "Erase disk and install Ubuntu"
   - This will remove Windows completely and give Ubuntu full access to the disk
4. **Select your timezone** and create your user account
5. **Click "Install Now"** and confirm the changes
6. Wait for the installation to complete (this can take 20-30 minutes)
7. **Restart** when prompted and remove the USB drive

The Ubuntu installer is quite intuitive, and the touch screen works throughout the installation process, which is a pleasant surprise.

## Step 4: Initial Ubuntu Setup

After rebooting into your fresh Ubuntu installation, there are a few essential tasks:

### Install System Updates

The first thing Ubuntu will prompt you to do is install updates. Don't skip this step—it includes important security patches and driver updates:

```bash
sudo apt update && sudo apt upgrade -y
```

This command updates the package list and upgrades all installed packages to their latest versions. You'll need to enter your password when prompted.

### Check Hardware Functionality

At this point, test the basic hardware:
- ✅ Touch screen should work
- ✅ Physical keyboard (if attached)
- ✅ Wi-Fi connectivity
- ✅ Bluetooth
- ✅ USB ports
- ✅ Audio output
- ❌ Cameras may not work yet
- ❌ Some touch features might be limited

## Step 5: Installing the Linux Surface Kernel

The standard Ubuntu kernel provides basic Surface support, but to unlock full functionality—especially for cameras, improved touch support, and better power management—you'll want to install the specialized [Linux Surface kernel](https://github.com/linux-surface/linux-surface).

### What is the Linux Surface Kernel?

The linux-surface project is a community effort to provide enhanced Linux support for Microsoft Surface devices. It includes:
- Optimized drivers for Surface-specific hardware
- Camera support
- Improved touch and stylus input
- Better battery management
- Thermal management improvements

### Installation Steps

The installation process varies slightly depending on your Ubuntu version, but here's the general approach for Debian-based systems (including Ubuntu):

```bash
# Add the repository key
wget -qO - https://raw.githubusercontent.com/linux-surface/linux-surface/master/pkg/keys/surface.asc \
    | gpg --dearmor | sudo dd of=/etc/apt/trusted.gpg.d/linux-surface.gpg

# Add the repository
echo "deb [arch=amd64] https://pkg.surfacelinux.com/debian release main" \
    | sudo tee /etc/apt/sources.list.d/linux-surface.list

# Update package lists
sudo apt update

# Install the Surface kernel and related packages
sudo apt install linux-image-surface linux-headers-surface iptsd libwacom-surface

# Install Surface firmware (important for cameras)
sudo apt install linux-firmware-surface
```

After installation, reboot your system:

```bash
sudo reboot
```

When your system restarts, it should automatically boot into the new Surface-optimized kernel.

### Verifying the Installation

After rebooting, verify you're running the Surface kernel:

```bash
uname -r
```

You should see output containing "surface" in the kernel name, something like:
```
6.x.x-surface
```

### Camera Support

To get the cameras working, you'll need to install the camera drivers and ensure your user has the proper permissions:

```bash
# Install camera support
sudo apt install linux-surface-ipu3-firmware

# Add your user to the video group for camera access
sudo usermod -a -G video $USER

# Log out and back in for the group change to take effect
```

To test the cameras, you can use the `cam` utility:

```bash
# Install testing utilities
sudo apt install libcamera-tools

# Test with cam
cam --list-cameras
```

For a graphical interface, you can use Cheese or qcam:

```bash
# Install and run Cheese
sudo apt install cheese
cheese
```

<div class="row">
    <div class="col-sm-12 mt-3">
        <div class="alert alert-warning" role="alert">
            <strong>Camera Quality Note:</strong> While the cameras do work with the linux-surface kernel, the image quality may not match Windows performance. This is a known limitation of the current drivers.
        </div>
    </div>
</div>

### Understanding MOK (Machine Owner Key)

During the linux-surface kernel installation, you may encounter a blue screen asking you to enroll a MOK (Machine Owner Key). This is part of the Secure Boot process:

1. When prompted, **select "Enroll MOK"** (not the other options)
2. Follow the on-screen prompts
3. You may be asked to create a password—remember this password
4. Confirm enrollment
5. The system will reboot automatically

If you miss this screen or need to retry:

```bash
# Remove the MOK package
sudo apt remove linux-surface-secureboot-mok

# Reboot
sudo reboot

# Reinstall it
sudo apt install linux-surface-secureboot-mok

# Reboot again to see the MOK enrollment screen
sudo reboot
```

For more detailed information, check out the [official linux-surface installation guide](https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup#debian--ubuntu).

## Step 6: Optimizing Your Ubuntu Experience

### Enable Virtual Keyboard

Since the Surface Go 3 is a tablet, having a reliable on-screen keyboard is essential. Ubuntu includes a basic virtual keyboard, but it's not always optimal. Here's how to improve it:

```bash
# Install GNOME Extension Manager
sudo apt install gnome-shell-extension-manager

# Launch the Extension Manager
gnome-extensions-prefs
```

From the Extension Manager, you can install:
- **Touch X**: Adds an icon to manually trigger the on-screen keyboard
- **GJS OSK**: A more configurable replacement for the default keyboard

### Improve Touch Scrolling

Out of the box, two-finger scrolling might not work perfectly in all applications. While the fix varies by desktop environment, for GNOME (Ubuntu's default), touchpad settings can be adjusted in:

**Settings → Mouse & Touchpad → Touchpad → Enable Natural Scrolling**

### Install Essential Applications

Here are some recommended applications to enhance your Ubuntu experience on the Surface Go 3:

```bash
# Web browser (if not using Firefox)
sudo snap install chromium

# Text editor for coding
sudo snap install code --classic

# Media player
sudo snap install vlc

# PDF reader (already installed, but ensure it's updated)
sudo apt install evince
```

### Power Management

To extend battery life, consider installing TLP, a power management tool:

```bash
sudo apt install tlp tlp-rdw
sudo systemctl enable tlp
sudo systemctl start tlp
```

TLP automatically optimizes various power settings without requiring configuration.

## Troubleshooting Common Issues

### Issue: Touch Screen Not Working During Installation

**Solution**: This is unusual as the touch screen should work from the first installation screen. Ensure you're using a recent Ubuntu ISO (22.04 LTS or newer).

### Issue: Wi-Fi Not Connecting

**Solution**: 
```bash
# Check if the Wi-Fi adapter is detected
lshw -C network

# Restart Network Manager
sudo systemctl restart NetworkManager
```

### Issue: Cameras Not Recognized

**Solution**: Ensure you've installed the linux-surface kernel and camera firmware as described in Step 5. Some applications may still not recognize the cameras due to driver limitations.

### Issue: Stylus Pen Not Working

**Solution**: After installing the linux-surface kernel, the Surface Pen should work automatically. If not:

```bash
# Check if the pen is detected
xinput list

# Ensure wacom support is installed
sudo apt install xserver-xorg-input-wacom libwacom-surface
```

### Issue: System Not Booting to Ubuntu

**Solution**: You may need to adjust boot order in UEFI or check that Secure Boot is properly configured. Boot into UEFI (Volume Up + Power) and verify settings.

## My Experience: Performance and Daily Use

After completing the installation and setup, the Surface Go 3 running Ubuntu feels significantly more responsive than it did with Windows 11. Applications launch faster, multitasking is smoother, and the overall system feels less sluggish.

### What Works Well:
- **Web browsing**: Firefox and Chrome run smoothly
- **Light development**: VS Code works great for coding
- **Media consumption**: YouTube, streaming services all work perfectly
- **Touch screen**: Responsive and accurate
- **Battery life**: Comparable to or better than Windows 11

### Limitations:
- **Camera quality**: Works but not as good as Windows
- **Stylus pen**: Basic functionality works, but advanced features may be limited
- **Some apps**: A few Windows-only applications obviously won't work
- **Occasional bugs**: Minor UI glitches in some GNOME applications

For my use case—casual browsing, reading documentation, light coding, and media consumption—the Surface Go 3 running Ubuntu is now a perfectly capable device that I enjoy using.

## Resources and References

Throughout this installation journey, I found these resources invaluable:

### Official Documentation
- [Ubuntu Desktop Download](https://ubuntu.com/download/desktop)
- [Linux Surface GitHub Repository](https://github.com/linux-surface/linux-surface)
- [Linux Surface Installation Guide](https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup)
- [Linux Surface Camera Support](https://github.com/linux-surface/linux-surface/wiki/Camera-Support)

### Tools Used
- [Balena Etcher](https://etcher.balena.io/) - USB creation tool
- [Rufus](https://rufus.ie/) - Alternative USB creation tool (Windows)

### Helpful Blog Posts
- [The Privacy Dad's Guide to Ubuntu on Surface Go 3](https://theprivacydad.com/ubuntu-on-a-windows-surface-go-3/)
- [Rockford Lhotka's Experience Running Linux on Surface Go](https://blog.lhotka.net/2025/04/22/Running-Linux-on-My-Surface-Go)

### Video Tutorials
- [How to Access Surface UEFI](https://www.youtube.com/watch?v=6_EHEmz_j4o)
- [Creating Bootable USB with dd](https://linuxiac.com/how-to-create-bootable-usb-drive-using-dd-command/)

## Final Thoughts

Installing Ubuntu on the Surface Go 3 breathes new life into what many might consider an underpowered Windows device. While there are some trade-offs—primarily around camera quality and some advanced stylus features—the improvements in system responsiveness and overall user experience more than make up for these limitations.

If you have a Surface Go 3 (or similar Surface device) gathering dust because Windows 11 feels too slow, I highly recommend giving Ubuntu a try. The installation process is straightforward, well-documented, and the result is a device that's genuinely pleasant to use for everyday tasks.

The Linux community's work on the linux-surface project demonstrates the power of open-source collaboration, and it's exciting to see Microsoft hardware running so well on a completely different operating system. Plus, you're keeping a perfectly functional device out of a landfill—a win for both your productivity and the environment.

---

*Have you tried installing Linux on a Surface device? What was your experience? Feel free to reach out and share your story!*
