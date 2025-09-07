My Hardened Firefox user.js Configurations

This repository contains two curated user.js files for Firefox, designed to enhance privacy, security, and anti-fingerprinting defenses while balancing usability.

The philosophy behind this setup is simple:

Use the Hardened Configuration for strong privacy in daily browsing.

Fall back to the Minimal Configuration when maximum compatibility is needed.

🔐 Configurations Overview

Hardened Configuration (user.hardened.js)
Balanced and powerful — strong privacy measures, hardened APIs, HTTPS-only, and telemetry disabled, while keeping essential services (like video conferencing, streaming, and collaboration tools) usable.

Minimal Backup Configuration (user.minimal.js)
A stripped-down failsafe — includes only the essentials (tracking protection, DoH, HTTPS-only, telemetry disabled). Drops advanced isolation and API hardening for maximum compatibility with strict sites (e.g., banking, corporate logins).

📊 Key Differences
Feature / Setting	Hardened Config (user.hardened.js)	Minimal Config (user.minimal.js)
Enhanced Tracking Protection	✅ Strict	✅ Strict
Telemetry / Data Collection	✅ Disabled	✅ Disabled
HTTPS-Only Mode	✅ Enabled	✅ Enabled
Mixed Content Blocking	✅ Enabled	✅ Enabled
Fingerprinting Protection	✅ Modern + API hardening (WebGL, Audio, Hardware)	✅ Core only (lower breakage)
WebRTC (Video Calls)	✅ Hardened but enabled	✅ Fully functional
Containers / First-Party Isolate	❌ Disabled (for usability)	❌ Not included
Breakage Risk	⚠️ Low (some strict sites)	🟢 Minimal
Best For	Everyday browsing with strong privacy	Troubleshooting / strict sites
