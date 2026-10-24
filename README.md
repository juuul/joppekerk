# Behoud Joppekerk

Een moderne, responsive website voor Stichting tot Behoud en Beheer van de Joppekerk. Gebouwd met HTML, CSS en JavaScript, zonder externe runtime-afhankelijkheden.

## Lokaal starten

Vereist Node.js 20 of nieuwer. Geen installatie van pakketten nodig.

```sh
npm run dev
```

Open http://localhost:3001. De server toont ook de netwerkadressen waarmee u de website vanaf een ander apparaat kunt openen. Met `PORT=3002 npm run dev` kiest u een andere poort. Gebruik `HOST=127.0.0.1 npm run dev` om toegang tot deze computer te beperken.

## Controleren en bouwen

```sh
npm run check
npm run build
```

Publiceer de inhoud van `dist/` op een statische webhost. Voor een lokale controle van de gebouwde versie: `node scripts/serve.mjs --dist`.

## Mailfunctie

Het steunformulier is bewust uitgeschakeld en zichtbaar als voorbeeld gemarkeerd. Er worden geen gegevens verzonden of opgeslagen. Er is geen mailserver, API of mailto-link aangesloten. Telefonisch en per post contact opnemen is mogelijk. Voor activatie zijn een verzendservice, servervalidatie, spambeveiliging en een passende privacyverklaring nodig.

## Inhoud en beelden

De inhoud en kerkfoto's zijn afkomstig van https://behoudjoppekerk.nl/, geraadpleegd op 24 oktober 2026. De originele fotobestanden staan lokaal in `assets/`; de fotocredit in de interieurfoto is behouden.

Ontwikkelingen zijn als gedateerde archiefberichten opgenomen. Er zijn geen nieuwe resultaten van gesprekken of een bevestigde ANBI-status verondersteld. Het beleidsplan is samengevat. Controleer de inhoud en gebruiksrechten van het bestaande beeldmateriaal voor publicatie. Deze repository is lokaal opgebouwd; de bestaande live website is niet gewijzigd.
