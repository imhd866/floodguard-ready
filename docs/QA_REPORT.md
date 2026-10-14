# Quality-assurance report

Last updated: 14 October 2026.

## Automated verification

- **Core behavior:** `npm test` — 6 tests passed, 0 failed.
- **Syntax:** `node --check` passed for `app.js`, `core.js`, `service-worker.js`, and `scripts/static-server.js`.
- **Git state before this QA pass:** clean.

The tests cover Ready, Act now, Leave safely, the deep-water safety override, invalid data, transparent explanations, and the decision-support disclaimer in shared text.

## Browser verification

Verified in the Codex in-app browser against the local HTTP preview:

- Semantic page landmarks and heading structure are exposed.
- All five question groups expose labeled native radio controls.
- Emergency numbers are exposed as telephone links.
- The result appears in an `aria-live` region.
- The result includes a visible score, action level, summary, ordered next steps, calculation disclosure, print action, and copy action.
- A low combined score with above-ankle or moving water still produces “Leave safely.”
- The result heading is programmatically focusable after submission.
- Responsive CSS collapses multi-column controls and safety content below 760 px.
- Reduced-motion preferences disable smooth scrolling and transitions.
- Print CSS removes navigation and form content and retains the action card.

## Accessibility safeguards in source

- Skip link to the readiness check
- Native `fieldset`, `legend`, radio, button, link, and heading elements
- Visible keyboard focus using a high-contrast outline
- No color-only result communication
- Minimum large touch-card controls and fluid typography
- `prefers-reduced-motion` support
- Live result announcement plus focus transfer to the result heading
- No automatic timeout or disappearing safety content

## Remaining human checks before public launch

- [ ] Complete a keyboard-only walkthrough in Chrome and Firefox.
- [ ] Verify at 200% browser zoom without lost content or horizontal scrolling.
- [ ] Test at 320 px and 375 px wide on a physical or emulated mobile browser.
- [ ] Complete NVDA + Chrome and VoiceOver + Safari screen-reader walkthroughs.
- [ ] Reconfirm live focus transfer on the current build; the in-app browser could only access its earlier offline-cached build after the local preview restarted.
- [ ] Verify offline reload after service-worker installation in a production HTTPS deployment.
- [ ] Verify the print/PDF result on Windows and mobile.
- [ ] Test the Copy summary control where clipboard permission is restricted.
- [ ] Conduct comprehension testing with intended users, including disabled residents and caregivers.

This report records engineering checks, not certification against WCAG or validation as an emergency-response system.
