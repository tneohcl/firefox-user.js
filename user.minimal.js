// ============================================================================
// Terence's Minimal Backup user.js
// Privacy & security essentials only — designed to avoid breakage
// ============================================================================
//
// TECHNICAL NOTE:
// The tracking protection flags below (privacy.trackingprotection.*) are
// technically redundant because `browser.contentblocking.category = "strict"`
// already enforces them. However, they are kept here explicitly for:
//
//   1. Documentation clarity (shows exactly what’s enabled)
//   2. Debugging transparency (no guesswork during testing)
//   3. Future-proofing (in case Mozilla changes "Strict" defaults)
//
// ============================================================================

// -------------------------------------
// 1. PRIVACY & TRACKING PROTECTION
// -------------------------------------
user_pref("browser.contentblocking.category", "strict"); // Strict ETP (covers tracking, crypto, fingerprinting)
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// -------------------------------------
// 2. FINGERPRINTING RESISTANCE
// -------------------------------------
user_pref("privacy.fingerprintingProtection", true);  // Modern RFP replacement
user_pref("privacy.fingerprintingProtection.pbmode", true);

// -------------------------------------
// 3. NETWORK & CONNECTIVITY
// -------------------------------------
user_pref("network.trr.mode", 2);                     // DoH with fallback
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");

// -------------------------------------
// 4. SECURITY HARDENING
// -------------------------------------
user_pref("dom.security.https_only_mode", true);      // Force HTTPS
user_pref("dom.security.https_only_mode_pbm", true);

user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);

// -------------------------------------
// 5. TELEMETRY & DATA COLLECTION
// -------------------------------------
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Master kill switch
user_pref("toolkit.telemetry.unified", false);                  // Disable unified telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("app.shield.optoutstudies.enabled", false);           // No Normandy/Shield tests
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// -------------------------------------
// 6. MOZILLA SERVICES & FEATURES
// -------------------------------------
user_pref("extensions.pocket.enabled", false);        // Disable Pocket
user_pref("browser.discovery.enabled", false);        // No “recommendations”
user_pref("identity.fxaccounts.enabled", false);      // Disable Firefox Sync/Accounts
