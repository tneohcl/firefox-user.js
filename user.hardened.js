// ============================================================================
// Terence's Enhanced Hardened user.js (Toggle-Friendly & Annotated)
// Privacy-first but keeps major sites functional (YouTube autoplay, Meet, etc.)
// ============================================================================

// -------------------------------------
// 1. STARTUP & UI BEHAVIOR
// -------------------------------------

// --- Startup Configuration ---
user_pref("browser.startup.page", 0);                          // [Safe] Blank page on startup
user_pref("browser.startup.homepage", "about:blank");          // [Safe]
user_pref("browser.newtabpage.enabled", false);                // [Safe] Disable Firefox's new tab page

// --- Compact Mode UI ---
user_pref("browser.compactmode.show", true);                   // [Safe] Show Compact option in Density menu
user_pref("browser.uidensity", 1);                             // [Safe] 0=normal, 1=compact, 2=touch

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
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.recentsearches.enabled", true);

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
user_pref("privacy.firstparty.isolate", true);                 // [Moderate] Can break cross-site logins (Google/Facebook)
user_pref("privacy.userContext.enabled", true);                // [Moderate] Container tabs
user_pref("privacy.userContext.ui.enabled", true);             // [Moderate]

// --- Enhanced Cookie Management & Partitioning ---
user_pref("network.cookie.cookieBehavior", 5);
user_pref("network.cookie.lifetimePolicy", 0);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("network.cookie.sameSite.schemeful", true);

// --- Advanced Site Data Partitioning ---
user_pref("privacy.partition.network_state", true);
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
user_pref("privacy.partition.bloburl_per_agent_cluster", true);

// --- Data Clearing at Shutdown ---
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.siteSettings", false);

// --- Privacy Headers & Signals ---
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

// --- Query Parameter Stripping ---
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// --- Referrer Policy ---
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);
user_pref("network.http.referer.defaultPolicy", 2);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);

// --- Privacy-preserving Ad Measurement ---
user_pref("dom.private-attribution.submission.enabled", false);

// -------------------------------------
// 3. FINGERPRINTING RESISTANCE
// -------------------------------------

// --- Core Fingerprinting Protection ---
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);

// --- Enhanced Fingerprinting Protection ---
user_pref("privacy.fingerprintingProtection.overrides", "+AllTargets,-CSSPrefersColorScheme,-JSDateTimeUTC,-JSLocale");
user_pref("privacy.resistFingerprinting.randomDataOnCanvasExtract", true); // [Moderate] May cause minor rendering issues

// --- API Hardening ---
user_pref("device.sensors.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.maxHardwareConcurrency", 4);
user_pref("media.navigator.enabled", false);

// --- Timing Attack Prevention ---
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.enable_resource_timing", false);

// --- WebGL Hardening ---
user_pref("webgl.disabled", false);
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.msaa-force", true);

// --- Web Audio Hardening ---
user_pref("dom.webaudio.enabled", true);
user_pref("media.webaudio.max_sources", 8);

// -------------------------------------
// 4. NETWORK & CONNECTIVITY
// -------------------------------------

// --- DNS over HTTPS ---
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");

// --- Network Security ---
user_pref("network.dns.blockDotOnion", true);
user_pref("dom.security.https_only_mode", true); // NEW: Force HTTPS

// --- Disable Prefetching & Prediction ---
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

// --- WebRTC Hardening ---
user_pref("media.peerconnection.enabled", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only", true);
user_pref("media.peerconnection.ice.relay_only", true); // NEW: Prevents IP leaks

// -------------------------------------
// 5. SECURITY HARDENING (CONTINUED)
// -------------------------------------

// --- TLS Security ---
user_pref("security.tls.insecure_fallback_hosts", "");
user_pref("security.tls.hello_downgrade_check", true);

// -------------------------------------
// 6. MEDIA & CONTENT HANDLING
// -------------------------------------

// --- PDF Handling ---
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);

// --- Media Autoplay ---
user_pref("media.autoplay.default", 0);

// --- Permissions ---
user_pref("geo.enabled", false);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.microphone", 0);
user_pref("geo.wifi.uri", ""); // NEW: Disable WiFi geolocation

// -------------------------------------
// 7. FORMS & AUTOFILL
// -------------------------------------

// --- Password Management ---
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

// --- Form Autofill ---
user_pref("extensions.formautofill.addresses.enabled", true);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.payments.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("dom.events.asyncClipboard.enabled", false); // NEW: Restrict clipboard access

// -------------------------------------
// 8. TELEMETRY & DATA COLLECTION
// -------------------------------------

// --- Master Telemetry Controls ---
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.unified", false);

// --- Additional Telemetry Shutdown (Comprehensive Coverage) ---
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
// 10. TOGGLE-FRIENDLY SECTIONS
// -------------------------------------

// === STRICT MODE (Uncomment for maximum privacy) ===
// user_pref("webgl.disabled", true);                    // Complete WebGL disable
// user_pref("media.autoplay.default", 5);              // Block all autoplay
// user_pref("dom.webaudio.enabled", false);            // Disable Web Audio completely

// === COMPATIBILITY MODE (Uncomment if sites break) ===
// user_pref("privacy.firstparty.isolate", false);      // Allow cross-site cookies
// user_pref("network.cookie.cookieBehavior", 4);       // Cross-site tracking only
// user_pref("privacy.fingerprintingProtection", false); // Disable FP protection

// -------------------------------------
// CHANGELOG & NOTES
// -------------------------------------
// [2025-09-07]
// - Re-evaluated and refined fingerprinting protection overrides based on analysis.
// - Added media.peerconnection.ice.relay_only to prevent WebRTC IP leaks.
// - Added three new security controls: dom.security.https_only_mode, dom.events.asyncClipboard.enabled, and geo.wifi.uri.
// - Introduced toggle-friendly sections for "Strict Mode" and "Compatibility Mode" to improve usability and maintenance.
