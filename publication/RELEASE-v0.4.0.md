# Quarkyz Flow v0.4.0, première version publique

**Your projects, always in flow.**

Quarkyz Flow est une plateforme open source de suivi de projets et de communication client. Vous gérez vos projets et vos clients depuis un espace clair, puis vous donnez à chaque client une **page dédiée, à vos couleurs**, pour suivre l'avancement en direct : étapes, dates prévues, images, fichiers et chat.

Pas de compte à créer pour vos clients : un lien et un code personnel suffisent.

## Utilisez-le comme vous voulez

- 🌐 **En ligne, gratuit et illimité** : https://flow.carreira.website
- 🖥️ **Chez vous** : `npm install && npm start`, ou `docker compose up -d --build` (MySQL inclus). SQLite par défaut, MySQL, MariaDB ou PostgreSQL au choix.

## Dans cette version

**✨ Nouveau**
- Validation client : « Faire valider », puis **Valider** ou **Demander une modification** (avec un message).
- La réponse apparaît sur l'étape, dans la discussion et chez le professionnel, qui peut « Redemander » après correction.
- Webhook (Réglages › Notifications) à chaque message client, validation ou demande de modification. Discord est reconnu directement.

**🔧 Amélioré**
- Les bases existantes reçoivent automatiquement les nouvelles colonnes au démarrage.

**🔒 Sécurité**
- Les adresses de webhook locales ou privées sont refusées, y compris après résolution DNS.

## Pour commencer

Le [README](https://github.com/Quarkyz/quarkyz-flow#readme) explique l'installation, les bases de données et les méthodes de connexion.

Un bug, une idée ? Ouvrez une [issue](https://github.com/Quarkyz/quarkyz-flow/issues/new/choose) ou venez sur [Discord](https://discord.gg/vwdbmyPyJY).

Les anciens patchnotes sont dans [`PATCHNOTE.md`](https://github.com/Quarkyz/quarkyz-flow/blob/main/PATCHNOTE.md).
