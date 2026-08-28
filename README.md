# Concentrix x SpaceXAI

Passworded customer leave-behind for Concentrix.

## What it is

Three client-work scenes on one page. Each scene shows a chief agent and
specialist agents working across real tools, then ends with the artifact the
team would review.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set
`SITE_PASSWORD=land2expand`.

## Deploy

Deploy under the `jasonwiker` Vercel team with
`SITE_PASSWORD=land2expand`. The production alias is
`concentrix-grokbot.vercel.app`.
