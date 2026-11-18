# Contribuer à Quarkyz Flow

Merci de l'intérêt que vous portez au projet ! Voici comment participer.

## Signaler un problème ou proposer une idée

- **Un bug ?** Ouvrez une [issue](https://github.com/Quarkyz/quarkyz-flow/issues/new/choose) avec les étapes pour le reproduire.
- **Une idée ?** Ouvrez une issue « Proposition » ou venez en parler sur [Discord](https://discord.gg/vwdbmyPyJY).
- **Une faille de sécurité ?** Ne la publiez pas : suivez [`SECURITY.md`](./SECURITY.md).

## Lancer le projet en local

Node.js 18+ (20+ recommandé), aucune étape de build.

```bash
git clone https://github.com/Quarkyz/quarkyz-flow.git
cd quarkyz-flow
npm install
npm run dev        # http://localhost:3000, rechargement automatique
```

En local, sans fournisseur de connexion configuré, le bouton « Entrer en mode démo » permet de tout essayer.

## Tests

```bash
npm test
```

Les tests s'exécutent sur le moteur configuré dans `.env`. Pour MySQL ou PostgreSQL, `npm test` **vide** la base : utilisez une base de test.

## Proposer une modification

1. Créez une branche à partir de `main`.
2. Gardez le style existant : Node.js et Express côté serveur, interface **sans framework** et sans étape de build.
3. Si votre modification touche la base de données, elle doit fonctionner sur SQLite, MySQL/MariaDB **et** PostgreSQL.
4. Lancez `npm test`.
5. Ajoutez une entrée en haut de [`PATCHNOTE.md`](./PATCHNOTE.md) si le changement est visible pour les utilisateurs, puis `node scripts/sync-patchnote.js`.
6. Ouvrez une pull request en expliquant le pourquoi du changement.

## À savoir

Certaines fonctionnalités (par exemple MCP) existent uniquement sur la version en ligne et ne font pas partie de ce dépôt. Les demandes qui les concernent peuvent donc être refusées ici.

En contribuant, vous acceptez que votre code soit publié sous la licence [MIT](./LICENSE) du projet.
