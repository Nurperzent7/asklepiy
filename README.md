# Replica skills for Cursor

Project-local install of [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) (MIT): eleven Agent Skills that reverse-engineer an app’s product surface, rebuild a clean-room version, test it, then improve it from real user complaints.

Skills live in `.cursor/skills/`. Cursor picks them up automatically for this repo.

## How to use

In Cursor Agent chat, ask for a step by name (or paste the URL of the app you want to study):

| Skill | What it does |
| --- | --- |
| `replica-recon` | Map screens, flows, components, data model |
| `replica-architect` | Plan stack, schema, API |
| `replica-design` | Design tokens (color, type, spacing, components) |
| `replica-build` | Build screens from the recon map |
| `replica-backend` | Auth, database, payments, integrations |
| `replica-test` | Click through flows and find bugs |
| `replica-diff` | Parity score vs the original |
| `replica-entrepreneur` | Turn user-review complaints into product fixes |
| `replica-brand` | Rename / rebrand so it’s yours |
| `replica-launch` | Landing page, pricing, store listing |
| `replica-deploy` | Ship to your domain |

Recommended order:

```text
recon → architect → design → build → backend → test → diff → entrepreneur → brand → launch → deploy
```

Each skill writes into the `replica/` folder for the next one to read.

Example prompt:

```text
Run replica-recon on https://example.com — map public screens, flows, and data model into replica/
```

## Notes

- Clean-room only: features and flows, not the original’s code, logo, copy, or content. Brand/sweep skills check for that.
- Some skills ship small Python helpers (`contrast.py`, `parity.py`, `reviews.py`, …). Needs Python 3.8+; no pip packages required.
- Upstream: https://github.com/Jakeschincariol/replica-skill
