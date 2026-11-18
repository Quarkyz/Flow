# Patchnotes

Toutes les mises à jour de Quarkyz Flow, de la plus récente à la plus ancienne.

<!--
FORMAT : copiez ce modèle EN HAUT de la liste (juste sous cette introduction),
puis lancez `npm run patchnote` pour recopier la dernière entrée dans le README.
Gardez uniquement les catégories utiles. Pas de tiret long.

## vX.Y.Z · 1 janvier 2027
> Une phrase qui résume la mise à jour.

**✨ Nouveau**
- Ce qui vient d'être ajouté.

**🔧 Amélioré**
- Ce qui fonctionne mieux qu'avant.

**🐛 Corrigé**
- Le problème qui n'existe plus.

**🔒 Sécurité**
- Ce qui a été renforcé.

**⚠️ À savoir**
- Un changement qui demande une action de votre part (migration, variable .env...).
-->

## v0.4.0 · 18 novembre 2026
> Validation des étapes par le client et notifications webhook.

**✨ Nouveau**
- Validation client : le professionnel clique sur « Faire valider », le client répond par **Valider** ou **Demander une modification** (avec un message).
- La réponse apparaît sur l'étape, dans la discussion et chez le professionnel, qui peut « Redemander » après correction.
- Webhook (Réglages › Notifications) : un message est envoyé à chaque message client, validation ou demande de modification. Discord est reconnu directement.

**🔧 Amélioré**
- Les bases existantes reçoivent automatiquement les nouvelles colonnes au démarrage (SQLite, MySQL, MariaDB, PostgreSQL).

**🔒 Sécurité**
- Les adresses de webhook locales ou privées sont refusées, y compris après résolution DNS, et l'adresse n'est jamais visible côté client.
