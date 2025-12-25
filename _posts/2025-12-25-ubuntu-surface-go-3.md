---
layout: post
title: "Breathing New Life into a Surface Go 3 with Ubuntu"
date: 2025-12-25
thumbnail: assets/img/blog/surface-ubuntu.jpg
description: A comprehensive guide to installing Ubuntu on a Microsoft Surface Go 3 tablet
tags: linux ubuntu surface hardware
categories: linux
featured: true
---

The Microsoft Surface Go 3 is an interesting piece of hardware—compact, portable, and versatile as both a laptop and tablet. However, running Windows 11 on it can feel sluggish due to its modest specifications. This led me to an interesting experiment: installing Ubuntu Linux on the Surface Go 3. The result? A significantly more responsive device that's perfect for everyday tasks, browsing, and light development work.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/blog/surface-ubuntu.jpg" 
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

The standard Ubuntu kernel provides basic Surface support, but to unlock full functionality—especially for improved touch support, stylus input, and better power management—you'll want to install the specialized [Linux Surface kernel](https://github.com/linux-surface/linux-surface).

### What is the Linux Surface Kernel?

The linux-surface project is a community effort to provide enhanced Linux support for Microsoft Surface devices. It includes:
- Optimized drivers for Surface-specific hardware
- Improved touch and stylus input
- Better battery management
- Thermal management improvements

### Installation Steps

Follow the installation instructions from the [official linux-surface installation guide for Debian/Ubuntu](https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup#debian--ubuntu):

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

# Reboot to use the new kernel
sudo reboot
```

After rebooting, you can verify you're running the Surface kernel:

```bash
uname -r
```

You should see output containing "surface" in the kernel name, such as `6.x.x-surface`.

For more detailed information and troubleshooting, refer to the [complete installation guide](https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup#debian--ubuntu).

## Step 6: Optimizing Your Ubuntu Experience

To enhance your Ubuntu experience on the Surface Go 3, the linux-surface project provides additional configuration options and tweaks. These include:

- **Virtual keyboard improvements** for better tablet mode functionality
- **Touch scrolling enhancements** for smoother navigation
- **Power management optimizations** to extend battery life
- **Thermal management configurations** to prevent overheating
- **Application recommendations** specific to Surface devices

For detailed optimization guides and configurations, visit the [linux-surface contrib directory](https://github.com/linux-surface/linux-surface/tree/master/contrib) which contains scripts, tweaks, and configuration examples to improve your Linux experience on Surface devices.

You can customize these based on your specific preferences and use case.

## Troubleshooting Common Issues

If you encounter issues during or after installation, here are some common problems and general guidance:

### Touch Screen Not Working During Installation

This is unusual as the touch screen should work from the first installation screen. Ensure you're using a recent Ubuntu ISO (22.04 LTS or newer).

### Wi-Fi Not Connecting

Check if your Wi-Fi adapter is detected and try restarting the Network Manager. If problems persist, search for your specific Wi-Fi chipset in the Ubuntu forums.

### Stylus Pen Not Working

After installing the linux-surface kernel, the Surface Pen should work automatically. If not, ensure the wacom support packages are installed.

### System Not Booting to Ubuntu

You may need to adjust boot order in UEFI or check that Secure Boot is properly configured. Boot into UEFI (Volume Up + Power) and verify settings.

For more detailed troubleshooting and device-specific issues, visit:
- [Linux Surface Wiki](https://github.com/linux-surface/linux-surface/wiki)
- [Linux Surface GitHub Issues](https://github.com/linux-surface/linux-surface/issues)
- [Ubuntu Forums](https://ubuntuforums.org/)

## My Experience: Performance and Daily Use

After completing the installation and setup, the Surface Go 3 running Ubuntu feels significantly more responsive than it did with Windows 11. Applications launch faster, multitasking is smoother, and the overall system feels less sluggish.

### What Works Well:
- **Web browsing**: Firefox and Chrome run smoothly
- **Light development**: VS Code works great for coding
- **Media consumption**: YouTube, streaming services all work perfectly
- **Touch screen**: Responsive and accurate
- **Battery life**: Comparable to or better than Windows 11
- **System responsiveness**: Noticeably faster than Windows 11
- **Multitasking**: Handles multiple applications smoothly

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
