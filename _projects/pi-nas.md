---
layout: page
title: raspberry pi NAS
description: building a self-hosted NAS with cloud services on a Raspberry Pi 5
img: assets/img/project_headers/pi_nas.jpg
importance: 4
category: portfolio
related_publications: false
---

## From Single-Board Computer to Personal Cloud

Modern cloud storage is convenient, but comes at a cost—privacy, ongoing fees, and vendor lock-in. This project turns a Raspberry Pi 5 into a full-featured Network Attached Storage system that rivals commercial NAS solutions, running an entire self-hosted cloud stack: file sync, photo backup, smart home automation, and more—all on local hardware, accessible from anywhere via VPN.

The result is a low-power, always-on personal server with 2.7TB of NAS-grade storage, running Nextcloud, Immich, and Home Assistant inside Docker containers, protected by SnapRAID parity and accessible remotely via Tailscale—for a fraction of what cloud subscriptions would cost.

---

## Project Overview

This project builds a home NAS from a Raspberry Pi 5 paired with the Radxa Penta SATA HAT, enabling up to five 2.5" SATA drives directly connected to the board. OpenMediaVault provides the NAS OS and management interface, while Docker containers power the application layer on top.

### Key Features

<div class="row mt-4 mb-4">
    <div class="col-md-6">
        <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 0.5rem;">✅ <strong>2.7TB Storage Pool</strong> - mergerfs spanning 3× WD Red NAS SSDs</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>SnapRAID Parity</strong> - Data protection against single-drive failure</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>Nextcloud</strong> - Self-hosted Google Drive replacement</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>Immich</strong> - Google Photos replacement with mobile auto-backup</li>
        </ul>
    </div>
    <div class="col-md-6">
        <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 0.5rem;">✅ <strong>Home Assistant</strong> - Smart home hub with sensor monitoring</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>Tailscale VPN</strong> - Secure remote access, no port forwarding</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>SMB Shares</strong> - Auto-mounted in macOS Finder on login</li>
            <li style="margin-bottom: 0.5rem;">✅ <strong>Daily Backups</strong> - Automated rsync vault backup via OMV scheduler</li>
        </ul>
    </div>
</div>

---

## Hardware

The hardware stack centers on the Raspberry Pi 5, chosen for its significant performance jump over the Pi 4 and its support for PCIe—which the Radxa Penta SATA HAT exploits to attach five SATA ports via a PCIe-to-SATA bridge.

<div class="row mt-4 mb-4">
    <div class="col-md-8 offset-md-2">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Specification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>SBC</strong></td>
                    <td>Raspberry Pi 5 (16GB RAM)</td>
                </tr>
                <tr>
                    <td><strong>SATA Expansion</strong></td>
                    <td>Radxa Penta SATA HAT + Top Board</td>
                </tr>
                <tr>
                    <td><strong>Primary Storage</strong></td>
                    <td>3× WD Red 1TB NAS SSD (mergerfs pool)</td>
                </tr>
                <tr>
                    <td><strong>Secondary Storage</strong></td>
                    <td>Kingston A400 480GB (Docker + backups)</td>
                </tr>
                <tr>
                    <td><strong>Cooling</strong></td>
                    <td>Official Raspberry Pi 5 Active Cooler + HAT fan header</td>
                </tr>
                <tr>
                    <td><strong>Power Supply</strong></td>
                    <td>12V 6A barrel jack (powers HAT + Pi via GPIO)</td>
                </tr>
                <tr>
                    <td><strong>Boot Media</strong></td>
                    <td>MicroSD card (119GB, OS only)</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

**Hardware Challenge — GPIO Interference:** The Pi 5 Active Cooler's power connector sits directly where the Penta SATA HAT Top Board connects to the GPIO header. The solution is a GPIO extension cable that raises the Top Board just enough to clear the cooler, without removing it. Stack order: Pi 5 → GPIO extension → Top Board → SATA HAT.

---

## Software Stack

<div class="row mt-4 mb-4">
    <div class="col-md-6">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
            <h5>NAS OS</h5>
            <p><strong>OpenMediaVault 8 (OMV)</strong></p>
            <p style="font-size: 0.9rem;">Debian-based NAS platform providing web UI for storage management, SMB, SMART monitoring, and scheduled tasks.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
            <h5>Storage Layer</h5>
            <p><strong>mergerfs + SnapRAID</strong></p>
            <p style="font-size: 0.9rem;">mergerfs presents multiple drives as one unified volume; SnapRAID adds parity protection using the Kingston drive as a dedicated parity disk.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
            <h5>Container Runtime</h5>
            <p><strong>Docker + Portainer</strong></p>
            <p style="font-size: 0.9rem;">Docker manages all application containers; Portainer provides a web UI for container lifecycle management and compose deployments.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
            <h5>Remote Access</h5>
            <p><strong>Tailscale</strong></p>
            <p style="font-size: 0.9rem;">WireGuard-based mesh VPN. No port forwarding, no dynamic DNS—every device joins the same private network regardless of location.</p>
        </div>
    </div>
</div>

**Application Containers:**
- **Nextcloud** — Self-hosted file sync and cloud storage (port 8080)
- **Immich** — AI-powered photo library with mobile app auto-backup (port 2283)
- **Home Assistant** — Smart home platform, also used for GPIO-based fan control (port 8123)

---

## Access Methods

<div class="row mt-4">
    <div class="col-md-4 mb-4">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 10px; padding: 1.5rem; height: 100%; background: var(--global-bg-color);">
            <h4 style="margin-top: 0;">🔐 SSH</h4>
            <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 1rem;">Remote terminal access</p>
            <div style="background: var(--global-code-bg-color); padding: 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.85rem; margin-bottom: 1rem;">
                ssh user@pi5-nas.local
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5;">Full terminal for administration, log inspection, scripting, and ad-hoc commands.</p>
        </div>
    </div>

    <div class="col-md-4 mb-4">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 10px; padding: 1.5rem; height: 100%; background: var(--global-bg-color);">
            <h4 style="margin-top: 0;">🌐 Web UIs</h4>
            <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 1rem;">Browser-based management</p>
            <div style="background: var(--global-code-bg-color); padding: 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.85rem; margin-bottom: 1rem;">
                http://pi5-nas.local
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5;">OMV dashboard, Portainer, Nextcloud, Immich, and Home Assistant each expose their own web interface.</p>
        </div>
    </div>

    <div class="col-md-4 mb-4">
        <div style="border: 2px solid var(--global-divider-color); border-radius: 10px; padding: 1.5rem; height: 100%; background: var(--global-bg-color);">
            <h4 style="margin-top: 0;">📁 SMB Shares</h4>
            <p style="font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 1rem;">macOS Finder integration</p>
            <div style="background: var(--global-code-bg-color); padding: 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.85rem; margin-bottom: 1rem;">
                smb://pi5-nas/Documents
            </div>
            <p style="font-size: 0.85rem; line-height: 1.5;">Documents, Photos, and Media shares auto-mount on Mac login via LaunchAgent. Credentials stored in Keychain.</p>
        </div>
    </div>
</div>

---

## Storage Architecture

The drives are assigned distinct roles to balance performance, longevity, and data safety:

```
WD Red Pool (2.7TB) — mergerfs across 3× WD Red 1TB
├── Documents/       → Nextcloud external storage
├── Photos/          → Immich photo library
├── Media/           → Jellyfin content (Movies, TV, Music)
├── Backups/         → System and config backups
└── Docker/          → Compose files and app configs

Kingston A400 (480GB) — dedicated secondary drive
├── docker/          → Docker engine root (images + volumes)
└── Backups/Documents_Vault/   → Daily rsync from WD pool (2AM)
```

**SnapRAID parity** is stored on the Kingston drive. Since parity is written only during nightly syncs, the write-heavy main data stays on the more durable WD Red drives, while the Kingston's lower endurance rating is well-suited to the read-heavy parity workload.

---

## Implementation Highlights

### Fan Control via Home Assistant

The Radxa Penta Top Board exposes a 4-pin PWM fan header. Rather than a standalone service, fan control runs as a Home Assistant automation: a temperature sensor monitors CPU temperature, and automations trigger GPIO commands to spin the fan up above 55°C and back down below 50°C. This integrates hardware monitoring with the smart home dashboard.

### Network Recovery from Bad netplan Config

A `sudo omv-salt deploy run compose` call regenerated the netplan network config using the interface name stored in OMV's `config.xml`—which had been set to `eth0`. On the Pi 5, the actual Ethernet interface is `end0`. The Pi became completely unreachable: no IP, no mDNS, no Tailscale.

Recovery required mounting the SD card on a separate Linux machine, reading the systemd journal from the last boot to confirm the true interface name, then patching both the netplan file *and* `config.xml`—because patching only the netplan file would be overwritten on the next salt deploy.

```bash
# Fix the regenerated netplan
sudo sed -i 's/eth0/end0/g' /mnt/etc/netplan/20-openmediavault-eth0.yaml

# Fix OMV's source-of-truth so it won't regenerate the wrong config again
sudo sed -i 's/<devicename>eth0<\/devicename>/<devicename>end0<\/devicename>/g' \
  /mnt/etc/openmediavault/config.xml
```

### Automated Vault Backup

Critical files are placed in a `Documents/Vault/` folder on the WD Red pool. A daily rsync job scheduled in OMV copies the Vault to the Kingston drive at 2 AM. This gives a two-drive separation for the most important data without complex RAID.

---

## Services at a Glance

<div class="row mt-4 mb-4">
    <div class="col-md-3 col-sm-6 mb-3">
        <div style="text-align: center; padding: 1.5rem; border: 2px solid var(--global-divider-color); border-radius: 8px;">
            <h3 style="color: var(--global-theme-color); margin-bottom: 0.5rem;">2.7TB</h3>
            <p style="font-size: 0.9rem; margin: 0;">Usable Storage<br>(mergerfs pool)</p>
        </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3">
        <div style="text-align: center; padding: 1.5rem; border: 2px solid var(--global-divider-color); border-radius: 8px;">
            <h3 style="color: var(--global-theme-color); margin-bottom: 0.5rem;">5</h3>
            <p style="font-size: 0.9rem; margin: 0;">SATA Ports<br>(Penta HAT)</p>
        </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3">
        <div style="text-align: center; padding: 1.5rem; border: 2px solid var(--global-divider-color); border-radius: 8px;">
            <h3 style="color: var(--global-theme-color); margin-bottom: 0.5rem;">~110MB/s</h3>
            <p style="font-size: 0.9rem; margin: 0;">Network Speed<br>(GbE practical)</p>
        </div>
    </div>
    <div class="col-md-3 col-sm-6 mb-3">
        <div style="text-align: center; padding: 1.5rem; border: 2px solid var(--global-divider-color); border-radius: 8px;">
            <h3 style="color: var(--global-theme-color); margin-bottom: 0.5rem;">~15W</h3>
            <p style="font-size: 0.9rem; margin: 0;">Power Draw<br>(typical)</p>
        </div>
    </div>
</div>

---

## Use Cases

- 📂 **Personal Cloud** - Nextcloud replaces Google Drive / iCloud for file sync across devices
- 📸 **Photo Backup** - Immich automatically backs up the camera roll, with facial recognition and timeline view
- 🏠 **Smart Home Hub** - Home Assistant controls devices, monitors sensors, and manages fan speed
- 🎬 **Media Server** - Centralized storage ready for Jellyfin and automated media management
- 🔐 **Zero-Trust Remote Access** - Tailscale VPN provides full access from any network without exposing ports
- 🎓 **Homelab Platform** - Hands-on experience with Linux, Docker, networking, and storage concepts

---

## Key Challenges

**1. Physical Hardware Compatibility**  
The Active Cooler power connector physically blocks the Penta HAT Top Board. No modification to either component is needed—GPIO extension pins solve it cleanly.

**2. Drive Endurance Mismatch**  
The Kingston A400 is not rated for 24/7 NAS workloads. Assigning it to the parity role (read-heavy, writes only during nightly sync) dramatically extends its lifespan—estimated at 10–15 years in this configuration vs. 1–2 years as a primary data drive.

**3. Interface Naming on Pi 5**  
The Pi 5's Ethernet adapter is `end0`, not the conventional `eth0`. OMV-managed network configs must use the correct name, or any subsequent salt deploy will silently break networking.

**4. SD Card Longevity**  
The OS SD card is the weakest link for long-term reliability. Docker's data root is redirected to the Kingston SSD, and the OMV `flashmemory` plugin reduces unnecessary writes to the card.

---

## Security Practices

- 🔐 Default passwords changed on all services immediately after installation
- 🔑 SSH key authentication for remote login
- 🌐 No open ports to the internet—all remote access via Tailscale
- 🔄 Automatic `apt` updates + monthly Docker image updates
- 📧 SMART monitoring with email alerts on drive health changes
- 🛡️ 2FA enabled on Nextcloud and Immich

---

## Future Plans

- 📺 **Jellyfin** - Media streaming server with library auto-management
- 🌍 **Pi-hole migration** - Move DNS ad-blocking from a Pi Zero to the NAS
- 📊 **Grafana dashboard** - InfluxDB + Telegraf for long-term drive health graphs
- 🔄 **DHCP reservation** - Lock the Pi's IP in the router for zero-configuration stability
- 💿 **4th WD Red drive** - Expand the storage pool and introduce a dedicated SnapRAID parity drive

---

**Project Status:** ✅ Operational  
**Last Updated:** June 2026
