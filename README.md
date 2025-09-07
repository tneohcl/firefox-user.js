# My Hardened Firefox `user.js` Configuration

This repository contains a curated `user.js` file designed to enhance Firefox's privacy, security, and anti-fingerprinting defenses without sacrificing usability or breaking essential websites.

The philosophy behind this configuration is to strike a perfect balance: applying robust privacy measures while ensuring a smooth, functional browsing experience for common tasks like streaming video, video conferencing, and general web browsing.

---

### Key Features

* **Strong Privacy and Tracking Protection:** Implements Firefox's "Strict" Enhanced Tracking Protection and further blocks social tracking, cryptomining, and third-party cookies.
* **Comprehensive Anti-Telemetry:** Shuts down all major telemetry, crash reporting, and experimental data collection pings to prevent any data from being sent to Mozilla.
* **Modern Anti-Fingerprinting:** Utilizes the robust `privacy.fingerprintingProtection` flag and hardens specific APIs (such as WebGL, Web Audio, and hardware enumeration) to significantly reduce your unique browser fingerprint without causing site breakage.
* **Enhanced Security:** Enables HTTPS-Only Mode and blocks mixed content to ensure connections are always encrypted and secure.
* **Preserved Functionality:** Unlike more extreme configurations, this setup maintains key features like video autoplay and full functionality for services like Google Meet, Discord, and others by allowing necessary APIs (e.g., WebRTC) with enhanced security.
* **Clean and Organized:** The file is meticulously commented and organized into logical sections, making it easy to understand and customize.

---

### Installation

Follow these steps carefully to apply the `user.js` configuration to your Firefox profile.

1.  **Before You Begin: Backup Your Profile**
    * Before making any changes, it is highly recommended that you back up your entire profile folder.
    * To do this, simply copy the profile folder you find in the next step to a safe location. This makes it easy to revert if needed.

2.  **Locate Your Firefox Profile Folder:**
    * Open Firefox and type `about:support` in the address bar.
    * Find the row labeled "**Profile Directory**".
    * Click the "**Open Folder**" button next to it. This will open your active profile directory.

3.  **Place the `user.js` File:**
    * Place the `user.js` file directly into the **root** of your profile folder.
    * **⚠️ Do not put `user.js` in a `chrome` folder.** The `chrome` folder is for UI styling (`userChrome.css`) only.
    * The file's name must be **exactly** `user.js` (no extra file extensions like `.txt`).

4.  **Restart Firefox:**
    * **Important:** Make sure Firefox is fully closed (check your Task Manager or Activity Monitor if needed) to ensure the new settings are loaded.
    * Re-open Firefox. The new settings will now be active.

---

### Important Notes

* **`user.js` Overrides Manual Tweaks:** Any changes you make directly in `about:config` will be reset the next time Firefox starts if they conflict with a preference defined in your `user.js` file.
* **Verification:** You can confirm the settings are working by going to `about:config` and searching for a preference from the file (e.g., `browser.uidensity`). If the preference name is **bold** and the status is **"user set"**, the file has loaded correctly.
* **Advanced Check:** To see enforced enterprise policies (if any), visit `about:policies#active`.

---

### Failsafe Configuration

This repository includes a second, minimal configuration for troubleshooting. If a website breaks while using the main hardened config, you can quickly switch to the failsafe version.

The failsafe version removes stricter isolation and API hardening. It ensures maximum compatibility (e.g., for banking, corporate logins, or video streaming sites that refuse hardened environments).

To apply a different configuration:
* Copy the desired file (e.g., `user.minimal.js`).
* Paste the copy into the root of your profile folder.
* Rename the file to **`user.js`**.
* Restart Firefox.

**Troubleshooting:** If switching configurations doesn't solve the issue, try starting Firefox in Troubleshoot Mode (Help → Troubleshoot Mode…) to rule out add-on conflicts.

**Tip for Advanced Users:** You can manage multiple Firefox profiles, each with its own `user.js` file, to separate browsing activities and configurations.

---

### Acknowledgments

This configuration is based on the work of the [ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js) project and was refined through collaborative feedback to create a modern, balanced, and highly effective privacy solution for Firefox.
