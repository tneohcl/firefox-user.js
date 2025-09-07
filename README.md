# My Hardened Firefox `user.js` Configurations

This repository contains two curated `user.js` files for Firefox, designed to enhance privacy, security, and anti-fingerprinting defenses while balancing usability.

The philosophy behind this setup is simple:
* Use the **Hardened Configuration** for strong privacy in daily browsing.
* Fall back to the **Minimal Configuration** when maximum compatibility is needed.

---

## Configurations Overview

### Hardened Configuration (`user.hardened.js`)
This is the main, recommended configuration. It is balanced and powerful, applying strong privacy measures, hardened APIs, HTTPS-only mode, DNS over HTTPS, and comprehensive telemetry disabling. It is designed to be your daily driver, providing a significant privacy boost while keeping essential services (like video conferencing, streaming, and collaboration tools) fully usable.

### Minimal Backup Configuration (`user.minimal.js`)
This is a stripped-down failsafe. It includes only the essentials—core tracking protection, DNS over HTTPS, and telemetry disabling. It drops advanced isolation and API hardening for maximum compatibility with strict sites (e.g., banking portals, corporate logins, or streaming services that may refuse hardened environments).

---

## Feature Comparison

| Category | Hardened Config (`user.hardened.js`) | Minimal Config (`user.minimal.js`) |
| :--- | :--- | :--- |
| **Tracking Protection** | ✅ Strict (ETP + social + crypto) | ✅ Strict (ETP + social + crypto) |
| **Telemetry / Data Collection** | ✅ Fully disabled | ✅ Fully disabled |
| **HTTPS-Only Mode** | ✅ Enabled | ✅ Enabled |
| **DNS over HTTPS (DoH)** | ✅ Enabled (with fallback) | ✅ Enabled |
| **Mixed Content Blocking** | ✅ Enabled | ✅ Enabled |
| **Fingerprinting Protection** | ✅ `privacy.fingerprintingProtection` + WebGL/WebAudio/Hardware hardening | ✅ `privacy.fingerprintingProtection` only (reduced breakage) |
| **WebRTC (Video Calls)** | ✅ Enabled + hardened IP handling | ✅ Fully functional (no extra hardening) |
| **Containers / FPI Isolation** | ❌ Not included (kept out for usability) | ❌ Not included |
| **Breakage Risk** | ⚠️ Low (some strict sites may fail) | 🟢 Minimal (highest compatibility) |
| **Best Use Case** | Everyday browsing with strong privacy | Troubleshooting, banking, corporate sites |

---

## Installation Guide

Follow these steps carefully to apply a configuration to your Firefox profile.

1. **Before You Begin: Backup Your Profile**  
   * Before making any changes, it is highly recommended that you back up your entire profile folder.  
   * To do this, simply copy the profile folder you find in the next step to a safe location. This makes it easy to revert if needed.  

2. **Locate Your Firefox Profile Folder:**  
   * Open Firefox and type `about:support` in the address bar.  
   * Find the row labeled "**Profile Directory**".  
   * Click the "**Open Folder**" button next to it. This will open your active profile directory.  

3. **Place the `user.js` File:**  
   * Copy your preferred configuration file (`user.hardened.js` or `user.minimal.js`) into the **root** of your profile folder.  
   * ⚠️ **Do not put `user.js` in a `chrome` folder.** The `chrome` folder is for UI styling (`userChrome.css`) only.  
   * Rename the file you just copied to **`user.js`**. The name must be **exactly** `user.js` (no extra file extensions like `.txt`).  

4. **Restart Firefox:**  
   * **Important:** Make sure Firefox is fully closed (check your Task Manager or Activity Monitor if needed) to ensure the new settings are loaded.  
   * Re-open Firefox. The new settings will now be active.  

---

## Important Notes

* **`user.js` Overrides Manual Tweaks:** Any changes you make directly in `about:config` will be reset the next time Firefox starts if they conflict with a preference defined in your `user.js` file.  
* **Verification:** You can confirm the settings are working by going to `about:config` and searching for a preference from the file (e.g., `browser.uidensity`). If the preference name is **bold** and the status is **"user set"**, the file has loaded correctly.  
* **Advanced Check:** To see enforced enterprise policies (if any), visit `about:policies#active`.  

---

## Troubleshooting

If you encounter an issue with a website, the first step is to switch to the **Minimal Configuration**. If the problem persists, it may be caused by an add-on.

* To rule out add-on conflicts, try starting Firefox in **Troubleshoot Mode** (Help → Troubleshoot Mode…).  
* Advanced users can also manage multiple Firefox profiles—one hardened, one minimal—for quick switching without renaming files.  

---
