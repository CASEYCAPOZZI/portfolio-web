## Overview

This repository contains the **Next.js frontend** for my professional portfolio at [caseycapozzi.com](https://caseycapozzi.com).

- **Frontend**: Next.js (App Router, TypeScript, Tailwind CSS)
- **Deployment**: AWS Amplify (connected to GitLab — pushes auto-deploy)
- **Backend API**: Java Spring Boot on AWS ECS at `https://api.caseycapozzi.com`
- **DNS / Domain**: Route 53 manages `caseycapozzi.com`

---

## Pages

| Route           | Description                                              |
|-----------------|----------------------------------------------------------|
| `/`             | Hero landing — bio, tech stack tiers, contact section    |
| `/resume`       | Career history, education, technologies                  |
| `/architecture` | AWS infrastructure overview (Amplify, ECS, Route 53, ALB)|
| `/playground`   | Live API health check dashboard *(hidden from nav)*      |

---

## Key Components

| File                                    | Purpose                                                |
|-----------------------------------------|--------------------------------------------------------|
| `app/layout.tsx`                        | Root layout — wraps all pages with Navigation + Footer |
| `app/components/Navigation.tsx`         | Floating pill nav with avatar home link + page icons   |
| `app/components/Footer.tsx`             | Shared footer — AWS status line + copyright            |
| `app/components/LiveAwsCoreStatus.tsx`  | Polls `/api/status`, renders online/offline badge      |
| `app/components/RoleEntry.tsx`          | Resume role with mobile "View details" toggle          |
| `app/api/status/route.ts`               | Server-side proxy → Spring Boot `/api/v1/status`       |
| `app/api/docs/route.ts`                 | Server-side redirect → Swagger UI                      |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The local API is expected at `http://localhost:8080`. Start `portfolio-api` locally to get live status in the footer.

---

## Environment Variables

API routing is handled entirely inside Next.js server routes using `NODE_ENV` — no `.env` file is required for basic local development.

If you add `NEXT_PUBLIC_*` variables, keep them **AWS Amplify-compatible** and set them in the Amplify Console, not in a committed `.env` file.

---

## Deployment (AWS Amplify)

- Amplify builds and deploys automatically on pushes to the connected GitLab branch.
- Keep all configuration Amplify-compatible — avoid platform-specific output or runtime assumptions.
- The build command is `npm run build`; output directory is `.next`.

---

## Related Repos

- **[portfolio-api](../portfolio-api)** — Java Spring Boot service deployed to AWS ECS, serving `https://api.caseycapozzi.com`

---

## Docs

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [AWS Amplify + Next.js](https://docs.amplify.aws/nextjs/)
