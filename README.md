## Overview

This repository contains the **Next.js frontend** for my professional portfolio at `caseycapozzi.com`.

- **Frontend**: Next.js (App Router)
- **Deployment**: AWS Amplify (connected to GitLab)
- **Backend API**: Java Spring Boot on AWS ECS at `https://api.caseycapozzi.com`
- **DNS / Domain**: Route 53 manages `caseycapozzi.com`

## Getting Started

- **Install**

```bash
npm install
```

- **Run locally**

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

This app calls the public API at `https://api.caseycapozzi.com`.

If you introduce environment-based API routing, keep it **AWS Amplify-compatible** and prefer:

- `NEXT_PUBLIC_*` variables for browser-accessible configuration
- Amplify Console environment variables for deployment-time configuration

## Deployment (AWS Amplify)

- Amplify builds and deploys on pushes via the GitLab connection.
- Keep configuration compatible with Amplify’s Next.js support (avoid platform-specific files and assumptions).

## Related Repos

- **Backend API**: Java Spring Boot service (AWS ECS) serving `https://api.caseycapozzi.com`

## Tech

- Next.js: `https://nextjs.org/docs`
