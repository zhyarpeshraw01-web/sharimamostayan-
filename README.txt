URBAN FIELDNOTES — SHARI MAMOSTAYAN
==================================

START HERE: Open START_HERE.html for the step-by-step setup guide.
OPEN THE WEBSITE: Open index.html for local mode.

Members: Zhyar, Akam, Bria, Yasr, Nma, Layad, Snur, Soma.
Questionnaire: all 35 items from the original four-page PDF.

The package is HTML + CSS + JavaScript. No build, npm install or Java needed.
Upload the CONTENTS of this folder so index.html sits at your website root.
Keep assets/ and source/ in their original folders.

LOCAL MODE
----------
Works without a Firebase account. Data remains in this browser only.
The name selector can edit any of the eight local profiles; it is not a login.
Local browser storage is not a backup. Export JSON regularly.
If your browser blocks storage for local files, use your hosted website.

LIVE TEAM MODE — ONE-TIME OWNER SETUP REQUIRED
--------------------------------------------
The Firebase project is not provisioned or connected in this ZIP.
1. Create your Firebase project and register a Web app.
2. Create a Cloud Firestore Standard/native-mode default database.
3. Publish the supplied firestore.rules in the Firestore Rules tab.
4. Enable Authentication > Email/Password.
5. Create 8 individual accounts in Authentication > Users.
6. For each account UID, add members/{UID} with memberId (string).
   Values: zhyar, akam, bria, yasr, nma, layad, snur, soma.
   Assign exactly one account to each member. Do not duplicate memberId.
7. Copy your Web app's firebaseConfig object into config.js in place of null.
8. Upload files to an HTTPS host such as GitHub Pages.
9. Add your hosted domain in Authentication > Settings > Authorized domains.
10. Complete the two-device verification in START_HERE.html before fieldwork.

WHAT SAVING MEANS
-----------------
Edits become local drafts immediately and auto-save after a short pause.
In live mode, wait for "Saved to team" before closing the tab.
An initial successful server snapshot is required before editing live data.
If the network drops, drafts stay on the device and can retry after reconnect.
Reloading offline may fail to load Firebase's online SDK. Reopen online to
recover pending drafts; the app does not promise offline access to team data.
Signing out keeps unsent drafts on that device for the same assigned member.
Separate members save separate documents. Revisions detect simultaneous
edits of the same member's same question; choose which version to keep.

EXPORTS
-------
CSV: one row for every member/question slot (280), including empty answers.
JSON: full saved records, questionnaire, and currently loaded local drafts.
Print/PDF: all saved team responses. Choose Save as PDF in your print dialog.
JSON is an archival backup; there is no automatic restore/import interface.
Local-mode answers are not automatically uploaded when Firebase is enabled.
Export them first, then re-enter the intended answers under each member's login.

SCORING
-------
The source PDF contains no rating scale. Optional 1–5 ratings were added for
the team, from weakest to strongest support for smart growth. They do not
replace the questionnaire answer. Blank/N/A ratings are excluded from means.
Only answered, applicable records rated 1–5 contribute to averages.
The overall mean equally weights each rated response; it is not a validated
index. Completion counts observations, explicit unknowns and N/A responses.
An evidence field or rating alone does not count as an answered question.

FILES
-----
index.html                 Website entry point
config.js                  Firebase web configuration (initially local mode)
assets/styles.css          Responsive design and printable report styles
assets/questions.js        All 35 source questions, members, field glossary
assets/core.js             Data validation, metrics, CSV formatting
assets/app.js              UI, local drafts, authentication, realtime syncing
assets/favicon.svg         App icon
source/questionnaire.pdf   Original questionnaire supplied by you
firestore.rules            Server-enforced membership and answer ownership
START_HERE.html            Owner setup guide, mobile-friendly and printable
README.txt                 This overview

VERIFICATION LIMIT
------------------
JavaScript syntax and data/behavior tests were performed during creation.
No Firebase project credentials were supplied, so real cross-device syncing,
deployed security rules and account sign-in require the acceptance check in
the setup guide. A graphical browser preview was unavailable in the build
environment; check the hosted page on your target iPhone/iPad before use.

No passwords, service-account keys, billing credentials or API secrets are
included. Firebase web configuration is public app identification, not an
admin key. Never replace the supplied rules with allow read, write: if true.
