# My Hardened Firefox `user.js` Configurations

This repository contains two curated `user.js` files for Firefox, designed to enhance privacy, security, and anti-fingerprinting defenses while balancing usability.

The philosophy behind this setup is simple:

* Use the **Enhanced Hardened Configuration** for strong privacy in daily browsing.  
* Fall back to the **Minimal Configuration** when maximum compatibility is needed.

---

## Configurations Overview

### Enhanced Hardened Configuration (`user.hardened.js`)
This is the main, recommended configuration. It applies **strong privacy measures, enhanced fingerprinting resistance, API hardening, HTTPS-only mode, DNS over HTTPS, and comprehensive telemetry disabling**. Optional toggle sections for Strict Mode or Compatibility Mode allow you to adapt privacy vs. compatibility for specific use cases. It is designed to be your daily driver while keeping essential services (like video conferencing, streaming, and collaboration tools) fully usable.

### Minimal Backup Configuration (`user.minimal.js`)
A stripped-down failsafe configuration including only the essentials—core tracking protection, DNS over HTTPS, and telemetry disabling. It drops advanced isolation, API hardening, and WebGL/Web Audio tweaks to **maximize site compatibility**, especially for banking portals, corporate logins, or streaming services that may refuse hardened environments.

---

## Feature Comparison

| Category | Enhanced Hardened Config (`user.hardened.js`) | Minimal Config (`user.minimal.js`) |
| :--- | :--- | :--- |
| **Tracking Protection** | ✅ Strict (ETP + social + crypto + fingerprinting) | ✅ Strict (ETP + social + crypto) |
| **Telemetry / Data Collection** | ✅ Fully disabled | ✅ Fully disabled |
| **HTTPS-Only Mode** | ✅ Enabled | ✅ Enabled |
| **DNS over HTTPS (DoH)** | ✅ Enabled (with fallback) | ✅ Enabled |
| **Mixed Content Blocking** | ✅ Enabled | ✅ Enabled |
| **Fingerprinting Protection** | ✅ RFP + WebGL/WebAudio/Hardware + Canvas Randomization + Timing Attack Prevention | ✅ RFP only |
| **WebRTC (Video Calls)** | ✅ Enabled + IP leak protection (relay-only / proxy-only) | ✅ Fully functional (no extra hardening) |
| **Containers / First-Party Isolation (FPI)** | ✅ Enabled (FPI + Container Tabs) | ❌ Not included |
| **Breakage Risk** | ⚠️ Low (some strict sites may fail, e.g., cross-site logins) | 🟢 Minimal (highest compatibility) |
| **Toggle-Friendly Sections** | ✅ Strict Mode & Compatibility Mode options included | ❌ Not included |
| **Best Use Case** | Everyday browsing with strong privacy and anti-fingerprinting | Troubleshooting, banking, corporate sites |

---

## Installation Guide

Follow these steps carefully to apply a configuration to your Firefox profile.

1. **Backup Your Profile**  
   * Copy your profile folder to a safe location before making changes.  

2. **Locate Your Firefox Profile Folder**  
   * Open Firefox and type `about:support`.  
   * Find the "**Profile Directory**" row and click "**Open Folder**".  

3. **Place the `user.js` File**  
   * Copy `user.hardened.js` or `user.minimal.js` into the **root** of your profile folder.  
   * Rename the file to **`user.js`** (no extra extensions).  

4. **Restart Firefox**  
   * Fully close Firefox to ensure settings load. Re-open Firefox.  

---

## Important Notes

* **Firefox Version Compatibility:**  
  Configurations are tested on **Firefox 142.0 and newer**. Some preferences (e.g., `privacy.fingerprintingProtection`) exist only in recent versions.  

* **`user.js` Overrides Manual Tweaks:**  
  Any conflicting `about:config` changes will reset on startup.  

* **Search Engine:**  
  The configuration does **not automatically set Startpage**. To use Startpage, add it manually in Firefox settings and set it as default.  

* **Verification:**  
  In `about:config`, search for a preference from the file. If **bold** and marked **user set**, the file has loaded correctly.  

* **Advanced Check:**  
  View enforced enterprise policies at `about:policies#active`.  

---

## Troubleshooting

* If a website fails, switch to the **Minimal Configuration** first.  
* To rule out add-on conflicts, start Firefox in **Troubleshoot Mode** (Help → Troubleshoot Mode…).  
* Advanced users can maintain multiple profiles—one hardened, one minimal—for quick switching.  

---

## Acknowledgments

Inspired by various privacy-focused Firefox tweaks, community discussions, and experimental setups. This repository represents a **distilled approach** to privacy, usability, and practical anti-fingerprinting measures.

