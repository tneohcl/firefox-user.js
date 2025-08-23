// ============================================================================
// Terence's Hardened user.js (finalized)
// Privacy-first but keeps major sites functional (YouTube autoplay, Meet, etc.)
// ============================================================================

// -------------------------------------
// 1. GENERAL BROWSER BEHAVIOR & UI
// -------------------------------------

// --- Startup & New Tabs ---
user_pref("browser.startup.page", 0);                   // 0=blank, 1=home, 2=last visited, 3=resume previous session
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);         // Disable Firefox's built-in new tab page
user_pref("browser.newtab.url", "about:blank");

// --- Firefox Home & Activity Stream ---
user_pref("browser.newtabpage.activity-stream.supported", false); // Hard kill for the entire activity stream
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredLinks", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.showRecentSaves", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false); // Disable new tab wallpapers
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // Disable addon recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Disable feature recommendations

// --- Search & URL Bar ---
user_pref("browser.search.suggest.enabled", false);     // Disable search suggestions in the search bar
user_pref("browser.search.suggest.prompted", true);
user_pref("browser.urlbar.suggest.searches", false);    // Disable search suggestions in the URL bar
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.recentsearches.enabled", false);
user_pref("browser.urlbar.suggest.history", true);      // Keep history suggestions for usability

// --- Forms & Passwords ---
user_pref("signon.rememberSignons", false);             // Disable password manager
user_pref("signon.autofillForms", false);               // Disable autofill for forms
user_pref("signon.formlessCapture.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.payments.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);

// --- File Handling ---
user_pref("pdfjs.disabled", true);                      // Disable built-in PDF viewer for security

// --- Media Autoplay ---
user_pref("media.autoplay.default", 0);                 // 0=allow autoplay, 1=block autoplay

// --- UI Density ---
user_pref("browser.uidensity", 1);                      // 0=Normal, 1=Compact, 2=Touch
user_pref("browser.compactmode.show", true);            // Show Compact mode option in Customize menu

// -------------------------------------
// 2. PRIVACY & TRACKING PROTECTION
// -------------------------------------

// --- Enhanced Tracking Protection (ETP) ---
user_pref("browser.contentblocking.category", "strict");     // Enable strict content blocking
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// --- Referrer Policy ---
user_pref("network.http.referer.XOriginPolicy", 2);          // Only send referer for same-origin requests
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);  // Trim referer to origin for cross-origin

// --- Do Not Track & GPC ---
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

// --- Cookie & Site Data Management ---
user_pref("network.cookie.cookieBehavior", 1);       // 1=block 3rd-party, 2=block all
user_pref("network.cookie.lifetimePolicy", 2);       // Clear cookies at shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", false);

// --- Network & Connectivity ---
user_pref("network.predictor.enabled", false);          // Disable network predictor (prefetching)
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("captivedetect.canonicalURL", "");            // Disable captive portal detection
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// --- Privacy-preserving Ad Measurement ---
user_pref("dom.private-attribution.submission.enabled", false);

// -------------------------------------
// 3. FINGERPRINTING RESISTANCE
// -------------------------------------

user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);     // Apply protection in private browsing mode
user_pref("privacy.resistFingerprinting.randomDataOnCanvasExtract", true); // Randomize Canvas output
user_pref("privacy.resistFingerprinting.letterboxing", true);   // Adds padding to standardize window sizes

// --- WebGL & Web Audio Hardening ---
user_pref("webgl.disabled", false);                             // Allow WebGL, rely on RFP protections
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("dom.webaudio.enabled", false);                       // Disable Web Audio API (prevents audio fingerprinting)

// --- WebRTC Hardening ---
user_pref("media.peerconnection.enabled", true);  // (needed for Meet)
user_pref("media.peerconnection.ice.default_address_only", true); // WebRTC IP leak prevention
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only", true); // ensures only proxy addresses go out

// -------------------------------------
// 4. TELEMETRY & DATA COLLECTION
// -------------------------------------

// --- General Telemetry & Health Reports ---
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// --- Pings & Studies ---
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("nimbus.debug", false);

// --- Targeted Telemetry ---
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.contextual-services.contextId", "");
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("browser.discovery.enabled", false);

// --- Crash Reports ---
user_pref("browser.crashReports.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// -------------------------------------
// 5. SECURITY
// -------------------------------------

// --- HTTPS-Only Mode ---
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// --- Mixed Content ---
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.tls.insecure_fallback_hosts", "");

// --- DNS over HTTPS (DoH) ---
user_pref("network.trr.mode", 2);                               // 2=Enable DoH, 3=enable DoH with TRR
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");


// -------------------------------------
// 6. MISCELLANEOUS
// -------------------------------------

// --- Permissions ---
user_pref("geo.enabled", false);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.microphone", 0);

// --- Firefox Accounts & Sync ---
user_pref("identity.fxaccounts.enabled", false);
user_pref("services.sync.engine.addresses.available", false);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);

// --- Other UI & Feature Flags ---
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.provider", "");
user_pref("browser.vpn_promo.enabled", false);

// --- DEPRECATED FLAGS (kept for reference) ---
// user_pref("privacy.trackingprotection.pbmode.enabled", true); // Its function is now handled by other flags.
// user_pref("media.autoplay.blocking_policy", 0); // This flag is no longer used.
