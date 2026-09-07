# DJ Pirate — Press kit

Dépôt autonome réservé à DJ Pirate.

- Branche de production : `main`
- Client unique : `dj-pirate` (alias `pirate`)
- Médias : `public/pirate/` uniquement
- Domaine Vercel prévu : `dj-pirate-wi.vercel.app`
- `vercel.json` fixe `PRESS_KIT_CLIENT_SLUG=dj-pirate` pour le build et le runtime.

Importer ce dépôt dans un projet Vercel dédié nommé `dj-pirate-wi`. Aucun lien vers le projet Vercel du socle multi-client n’est inclus. Si le domaine attribué diffère, adapter `vercelSubdomain` dans `data/clients/dj-pirate.ts` avant publication.

```sh
npm ci
npm run dev
npm run build
```

Contrôles avant publication : voir `agents/QA_MULTI_CLIENT_REPORT.md`.
