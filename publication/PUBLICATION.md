# Fiche de publication du dépôt (à ne pas committer)

## Réglages du dépôt (colonne « About », roue crantée)

**Nom** : `quarkyz-flow`

**Description** (350 caractères max, ici 197) :
Suivi de projets et page client en direct : étapes, dates prévues, images et chat, à vos couleurs. Open source, auto-hébergeable (SQLite, MySQL, PostgreSQL). Version en ligne gratuite et illimitée.

**Website** : https://flow.carreira.website

**Topics** :
`project-management` `client-portal` `project-tracking` `self-hosted` `open-source` `nodejs` `express` `sqlite` `mysql` `mariadb` `postgresql` `docker` `realtime` `oauth` `white-label` `freelance` `agency` `french`

**Cases à cocher** : Releases, Packages décoché si inutilisé.

## Onglet Settings

- General > Social preview : envoyer `social-preview.png` (1280 x 640)
- General > Features : Issues activé, Discussions activé (optionnel), Wikis et Projects désactivés
- Code security > **Private vulnerability reporting** : activé (utilisé par `SECURITY.md`)
- Branches : protéger `main` si vous travaillez avec des pull requests

## Première release

- Tag : `v0.4.0` sur `main`
- Titre : `Quarkyz Flow v0.4.0, première version publique`
- Description : le contenu de `RELEASE-v0.4.0.md`
- Cocher « Set as the latest release »

## À faire côté projet avant de publier

- Vérifier que `.env` et `data/` ne sont pas dans le dépôt (le `.gitignore` les exclut déjà)
- Garder `"license": "MIT"` dans `package.json`
- Ajouter dans `package.json` : `"patchnote": "node scripts/sync-patchnote.js"`
