# Contrôle de déploiement — DJ Pirate

Date : 7 septembre 2026.
Cible exclusive : https://github.com/slyd971/dj-pirate-wi, branche `main`.
Le dépôt cible était vide. Export autonome préparé dans un clone séparé ; aucun push vers le socle ou les dépôts des autres artistes.

## Isolation

- Registry : uniquement `dj-pirate`, alias `pirate`.
- `public/` : uniquement 21 médias Pirate (environ 28 MiB).
- Aucun fichier de configuration, média ou contenu de base des autres artistes.
- Routes localisées et Panam retirées de cet export.
- Aucun fichier `.env`, identifiant de connexion ou dossier `.vercel` exporté.
- `vercel.json` définit `PRESS_KIT_CLIENT_SLUG=dj-pirate` au build et au runtime.
- Domaine prévu : `dj-pirate-wi.vercel.app`. À confirmer lors de l’import Vercel.

## Corrections du socle incluses dans ce dépôt autonome

- Niveau de titre configurable dans VideoSection : H1 sur la page vidéos, H2 sur l’accueil.
- Suppression des dimensions Open Graph fixes qui ne correspondaient pas aux photos.
- Image Open Graph générée depuis le média local, sans dépendance au domaine avant sa première mise en ligne ; média inclus dans le traçage de la fonction.
- Conservation des descriptions et du titre SEO Pirate mis à jour.
- Conservation de la photo presse 12 effectivement utilisée dans la galerie et le sitemap.
- Suppression du contenu SLY’D historique de `data/config.ts`, du thème et des routes DJ Flo, et des imports des autres configurations.
- Client local par défaut dérivé de la configuration de déploiement du registry Pirate.

Ces changements sont limités à cet export et ne sont pas poussés vers le dépôt multi-client.

## Vérifications réalisées

- `npm ci --no-audit --no-fund` : OK.
- `npm run build` (Turbopack) et TypeScript : OK.
- Serveur de production : accueil, galerie et vidéos sur le hostname cible et un hostname de preview : HTTP 200, Pirate uniquement, H1 unique, canonical correct, indexation autorisée, JSON-LD valide.
- 60 tentatives via `?client=` et `?artist=` (10 autres slugs × 3 pages × 2 paramètres) : Pirate uniquement.
- `/en`, `/panam-en-fete`, `/en/panam-en-fete` et deux URL de médias d’autres artistes : HTTP 404.
- `/robots.txt` et `/sitemap.xml` : uniquement le domaine Pirate.
- 21 médias : HTTP 200.
- `/opengraph-image` : HTTP 200, PNG 1200 × 630, inspection visuelle effectuée.
- Scan du code applicatif : aucune référence aux autres artistes.

## Limite de mise en ligne

Le domaine prévu répondait 404 avant publication. La connexion locale à l’API Vercel renvoie 403 `invalidToken` ; la mise en ligne Vercel n’est donc pas confirmée par ces contrôles locaux. Le dépôt doit être relié à un projet Vercel dédié ou la connexion Vercel rétablie.
