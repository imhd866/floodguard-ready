# FloodGuard Ready

FloodGuard Ready is a new, offline-first flood-readiness check for Lagos households and community volunteers. It converts five observable conditions into a transparent action card. It does not predict floods, track people, or replace official alerts.

## Why this is a separate submission

The repository also contains `../floodguard-lagos-lite`, a prior research prototype first committed on 21 August 2026. That project remains unchanged and is **not** represented as newly written submission code. FloodGuard Ready was clean-room implemented in this directory on 4 October 2026. It shares the humanitarian problem area and general research context, but no Python or Streamlit source code.

See [PROVENANCE.md](PROVENANCE.md) for the precise boundary and [docs/RULES_REVIEW.md](docs/RULES_REVIEW.md) for eligibility and date risks.

## Product

- Two-minute self-assessment using observable, plain-language conditions
- Three transparent action levels: Ready, Act now, Leave safely
- Safety override for above-ankle or moving water
- Offline support after the first load
- No account, analytics, geolocation, server, AI, or personal-data storage
- Keyboard-accessible controls, visible focus, semantic landmarks, live result announcement, reduced-motion support, responsive layout, and print view

The scoring is a conservative hackathon prototype, not a validated emergency model. Field testing with emergency managers, disabled residents, and community groups is required before operational use.

## Run and test

Requirements: Node.js 18+ for tests. The site itself is buildless HTML/CSS/JavaScript.

```powershell
cd floodguard-ready
npm test
npm run serve
```

Open the local URL printed by `serve`. For a no-install alternative:

```powershell
python -m http.server 4173
```

## Deploy

The directory can be deployed unchanged to GitHub Pages, Cloudflare Pages, Netlify, or any static host. Set the publish directory to the repository directory (or copy its contents to a host's static output folder). No environment variables or secrets are required.

## Safety

The interface directs immediate danger to Lagos emergency numbers 112 and 767, verified on 4 October 2026 against the [official Lagos State website](https://www.lagosstate.gov.ng/). Contact details can change and must be verified again immediately before public deployment. Never rely on this prototype as an official alert.

## License

Apache-2.0; see [LICENSE](LICENSE). Third-party platform and service names belong to their owners.
