// ============================================================================
// Terence's Hardened user.js (Final - Reorganized)
// Privacy-first but keeps major sites functional (YouTube autoplay, Meet, etc.)
// ============================================================================

// -------------------------------------
// 1. STARTUP & UI BEHAVIOR
// -------------------------------------

// --- Startup Configuration ---
user_pref("browser.startup.page", 0);                          // 0=blank page on startup
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);                // Disable Firefox's new tab page

// --- Compact Mode UI ---
user_pref("browser.compactmode.show", true);                   // Show Compact option in Density menu
user_pref("browser.uidensity", 1);                             // 0=normal, 1=compact, 2=touch

// --- Activity Stream & Home Page Removal ---
user_pref("browser.newtabpage.activity-stream.supported", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredLinks", false);
user_pref("browser.newtabpage.activity-stream.showRecentSaves", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// --- Search & URL Bar ---
user_pref("browser.search.suggest.enabled", false);            // No search suggestions
user_pref("browser.urlbar.suggest.searches", false);           // No URL bar search suggestions
user_pref("browser.urlbar.showSearchSuggestionsFirst", true);
user_pref("browser.urlbar.suggest.history", true);             // Keep history suggestions
user_pref("browser.urlbar.recentsearches.enabled", true);      // Show recent searches

// -------------------------------------
// 2. PRIVACY & TRACKING PROTECTION
// -------------------------------------

// --- Enhanced Tracking Protection ---
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// --- Site Isolation & Containers ---
user_pref("privacy.firstparty.isolate", true);                 // Isolate site data per domain
user_pref("privacy.userContext.enabled", true);                // Enable container tabs
user_pref("privacy.userContext.ui.enabled", true);

// --- Cookie Management ---
user_pref("network.cookie.cookieBehavior", 1);                 // Block 3rd-party cookies
user_pref("network.cookie.lifetimePolicy", 0);                 // Keep cookies normally
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("network.cookie.sameSite.schemeful", true);

// --- Data Clearing at Shutdown ---
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.downloads", false);         // Keep download history
user_pref("privacy.clearOnShutdown.history", false);           // Keep browsing history
user_pref("privacy.clearOnShutdown.siteSettings", false);      // Keep site permissions

// --- Privacy Headers & Signals ---
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

// --- Query Parameter Stripping ---
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// --- Referrer Policy ---
user_pref("network.http.referer.XOriginPolicy", 2);            // Same-origin only
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);    // Trim to origin
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);

// --- Privacy-preserving Ad Measurement ---
user_pref("dom.private-attribution.submission.enabled", false);

// -------------------------------------
// 3. FINGERPRINTING RESISTANCE
// -------------------------------------

// --- Core Fingerprinting Protection ---
// 'privacy.fingerprintingProtection' is a modern, breakage-aware anti-fingerprinting
// measure that is enabled by default with ETP "Strict" and is the recommended setting
// for a balance of privacy and functionality.
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);

// --- API Hardening ---
user_pref("device.sensors.enabled", false);   // Disable motion/orientation sensors
user_pref("dom.gamepad.enabled", false);      // Disable Gamepad API
user_pref("dom.battery.enabled", false);      // Disable Battery API
user_pref("dom.maxHardwareConcurrency", 4);   // Reduce reported CPU threads
user_pref("media.navigator.enabled", false); // Disable MediaDevices enumeration

// --- WebGL Hardening ---
user_pref("webgl.disabled", false);                            // Allow WebGL for functionality
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.disable-extensions", true);                   // Block fingerprinting extensions
user_pref("webgl.disable-fail-if-major-performance-caveat", false); // Set to false for safety

// --- Web Audio Hardening ---
user_pref("dom.webaudio.enabled", true);                       // Enable for functionality
user_pref("media.webaudio.max_sources", 8);                    // Limit for anti-fingerprinting

// -------------------------------------
// 4. NETWORK & CONNECTIVITY
// -------------------------------------

// --- DNS over HTTPS ---
user_pref("network.trr.mode", 2);                              // Enable DoH with fallback
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");

// --- Disable Prefetching & Prediction ---
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

// --- WebRTC Hardening ---
user_pref("media.peerconnection.enabled", true);               // Keep for Meet/Discord
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only", true);

// -------------------------------------
// 5. SECURITY HARDENING
// -------------------------------------

// --- HTTPS-Only Mode ---
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);

// --- Mixed Content Protection ---
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.upgrade_display_content", true);

// --- TLS Security ---
user_pref("security.tls.insecure_fallback_hosts", "");
user_pref("security.tls.hello_downgrade_check", true);

// -------------------------------------
// 6. MEDIA & CONTENT HANDLING
// -------------------------------------

// --- PDF Handling ---
user_pref("pdfjs.disabled", false);                            // Keep PDF.js for convenience
user_pref("pdfjs.enableScripting", false);                     // Disable PDF JavaScript

// --- Media Autoplay ---
user_pref("media.autoplay.default", 0);                        // Allow autoplay for usability

// --- Permissions ---
user_pref("geo.enabled", false);                               // Disable geolocation
user_pref("permissions.default.geo", 2);                       // Block geo requests
user_pref("permissions.default.camera", 0);                    // Ask for camera
user_pref("permissions.default.microphone", 0);                // Ask for microphone

// -------------------------------------
// 7. FORMS & AUTOFILL
// -------------------------------------

// --- Password Management ---
user_pref("signon.rememberSignons", false);                    // Use external password manager
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

// --- Form Autofill ---
user_pref("extensions.formautofill.addresses.enabled", true);   // Addresses only (less sensitive)
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.payments.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);

// -------------------------------------
// 8. TELEMETRY & DATA COLLECTION
// -------------------------------------

// --- Master Telemetry Controls ---
// Note: These are the primary switches that control most telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Master switch
user_pref("toolkit.telemetry.unified", false);                  // Master telemetry switch

// --- Additional Telemetry Shutdown (Comprehensive Coverage) ---
// The following provide extra assurance and handle edge cases
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);

// --- Specific Telemetry Pings ---
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);

// --- Coverage & Experiments ---
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("nimbus.debug", false);

// --- UI Telemetry ---
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.contextual-services.contextId", "");
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);

// --- Crash Reports ---
user_pref("browser.crashReports.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("breakpad.reportURL", "");

// -------------------------------------
// 9. MOZILLA SERVICES & FEATURES
// -------------------------------------

// --- Firefox Accounts & Sync ---
user_pref("identity.fxaccounts.enabled", false);
user_pref("services.sync.engine.addresses.available", false);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);

// --- Extension & Add-on Management ---
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.cache.enabled", false);

// --- Mozilla Features ---
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.provider", "");
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.discovery.enabled", false);

// -------------------------------------
// NOTES & DEPRECATED FLAGS
// -------------------------------------

// The following flags are no longer relevant in modern Firefox versions:
// user_pref("browser.newtab.url", "about:blank"); // Deprecated - handled by newtabpage.enabled
// user_pref("security.mixed_content.send_hsts_priming", true); // No longer effective (removed in FF91)
// user_pref("browser.search.suggest.prompted", true); // First-run only flag
// user_pref("privacy.trackingprotection.pbmode.enabled", true); // Now handled by other ETP flags
// user_pref("media.autoplay.blocking_policy", 0); // No longer used in modern Firefox
// user_pref("privacy.resistFingerprinting.randomDataOnCanvasExtract", false); // Legacy RFP pref, not needed with fingerprintingProtection
// user_pref("privacy.resistFingerprinting.letterboxing", false); // Legacy RFP pref, not needed with fingerprintingProtection
