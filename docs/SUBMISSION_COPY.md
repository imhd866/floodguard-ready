# Devpost submission copy

This is prepared text, not a submitted entry. Replace bracketed URLs after the public repository and demo exist.

## Project name

FloodGuard Ready

## Tagline

Know what to do before the water rises—even when connectivity disappears.

## Inspiration

Flood emergencies create a difficult information gap. People may see worsening rain, blocked drains, or water on a route but still be unsure what those observations mean for the next safe action. That uncertainty is especially dangerous for households with limited connectivity and for people who need assistance moving. We wanted a tool that works with what a person can observe, makes no hidden prediction, and remains useful offline.

## What it does

FloodGuard Ready is a two-minute readiness check for Lagos households and community volunteers. A user answers five plain-language questions about rain, drainage, standing or moving water, access to higher ground, and whether someone needs extra help. The app converts those answers into one of three transparent action cards: Ready, Act now, or Leave safely.

Every result shows its score and calculation. Above-ankle or moving water triggers the highest action level regardless of the total score. Users can print the action card or copy a concise summary. The app does not request an account, track location, store personal information, or depend on AI or a live API. After the first load, it works offline.

FloodGuard Ready is decision support—not a flood forecast or official emergency alert. Immediate danger is directed to Lagos emergency numbers 112 and 767.

## How we built it

The application uses semantic HTML, responsive CSS, and small JavaScript modules. A deterministic scoring module is separated from the interface and covered by Node's built-in test runner. A service worker caches the essential application shell for offline use. The experience includes keyboard-operable native form controls, visible focus styles, high contrast, reduced-motion support, an announced result region, responsive layouts, and a print-specific action-card view.

The submission version was built as a separate clean-room repository during the hackathon period. Earlier FloodGuard research remains documented as prior work and no source code was copied from that prototype. OpenAI Codex assisted with implementation and documentation under the project owner's direction.

## Challenges we ran into

The largest design challenge was balancing urgency with honesty. A flood-safety product must give useful direction without pretending that a simple questionnaire predicts a flood. We addressed that by using observable conditions, exposing every point in the calculation, adding a conservative deep-water override, and repeating that the product does not replace official alerts or human judgment.

Offline behavior also changed the design: the core experience could not depend on maps, live weather, logins, or remote AI services. That constraint led to a smaller and more resilient product.

## Accomplishments we are proud of

- A useful action card in under two minutes
- Fully transparent, deterministic scoring
- Offline operation after the first visit
- No account, surveillance, geolocation, analytics, or personal-data storage
- Accessible native controls and a print-friendly emergency card
- Automated coverage of all three action levels, invalid inputs, and the deep-water safety override
- A documented clean-room boundary between prior research and submission code

## What we learned

Accessibility and resilience are product architecture choices, not finishing touches. Removing network dependencies improved privacy, made the app easier to explain, and kept the core workflow available during connectivity loss. We also learned that safety-critical interfaces need explicit limits: transparent logic and careful language are more valuable here than a confident but opaque prediction.

## What's next

Before operational use, we would co-design and field-test the wording and thresholds with Lagos emergency managers, disabled residents, older residents, caregivers, and community organizations. We would add validated local-language versions, community distribution materials, and a governed process for updating official contact information. The prototype will remain clearly labeled until that validation is complete.

## Built with

HTML5, CSS3, JavaScript ES modules, Service Worker API, Web App Manifest, Node.js test runner

## Links

- Try it: `[DEPLOYED_DEMO_URL]`
- Source: `[PUBLIC_REPOSITORY_URL]`
- Demo video: `[VIDEO_URL]`
