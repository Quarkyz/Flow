# Politique de sécurité

## Signaler une vulnérabilité

Merci de **ne pas** ouvrir d'issue publique pour une faille de sécurité.

- Utilisez le bouton **« Report a vulnerability »** de l'onglet *Security* du dépôt (signalement privé), ou
- écrivez à **carreira.vincent@outlook.fr** avec « Quarkyz Flow, sécurité » en objet.

Indiquez la version concernée, les étapes pour reproduire le problème et son impact possible. Vous recevrez une réponse dès que possible, et nous convenons ensemble d'un délai avant toute publication.

## Ce qui nous intéresse

- contournement de l'isolation entre espaces ou de l'accès par code
- XSS, CSRF, injection, envoi de fichier malveillant
- fuite de données, de sessions ou d'adresses de webhook
- contournement des protections réseau des webhooks

## Bonnes pratiques si vous l'hébergez

- servez Flow en **HTTPS** et ajoutez `TRUST_PROXY=1` derrière un proxy
- gardez `.env` et le dossier `data/` hors de tout accès public et sauvegardez `data/`
- n'activez jamais le mode démo (`DEV_LOGIN`) en production
- tenez Node.js et vos dépendances à jour
