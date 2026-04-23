# AGENTS.md — AI Agent Context for portfolio-web

Read this file at the start of every session. It contains persistent project context, conventions, and session history that are not captured in commit messages.

---

## Project Summary

**portfolio-web** is the Next.js frontend for Casey Capozzi's professional portfolio, deployed at [caseycapozzi.com](https://caseycapozzi.com). It is a multi-page App Router application styled with Tailwind CSS. The backend is a Java Spring Boot API (`portfolio-api`) running on AWS ECS at `api.caseycapozzi.com`.

---

## Architecture

```
caseycapozzi.com      → AWS Amplify (Next.js frontend, this repo)
api.caseycapozzi.com  → AWS ALB → ECS → Spring Boot container
Route 53              → DNS for both domains
GitLab CI/CD          → pushes trigger Amplify builds
```

---

## Pages

| Route           | File                          | Purpose                                          |
|-----------------|-------------------------------|--------------------------------------------------|
| `/`             | `app/page.tsx`                | Hero landing page — bio, tech stack, contact     |
| `/resume`       | `app/resume/page.tsx`         | Career history, education, technologies          |
| `/architecture` | `app/architecture/page.tsx`   | AWS infrastructure overview (card-based)         |
| `/playground`   | `app/playground/page.tsx`     | Live API health check dashboard (hidden from nav) |

---

## Shared Components

| Component                          | Purpose                                                |
|------------------------------------|--------------------------------------------------------|
| `app/layout.tsx`                   | Root layout — Navigation + Footer wrapping all pages  |
| `app/components/Navigation.tsx`    | Floating pill nav — avatar home link + icon nav items  |
| `app/components/Footer.tsx`        | Footer — AWS status line + copyright                  |
| `app/components/LiveAwsCoreStatus.tsx` | Polls `/api/status`, shows online/offline badge    |
| `app/components/RoleEntry.tsx`     | Resume role entry with mobile "View details" toggle    |

---

## API Proxy Routes

To avoid browser CORS issues, all API calls go through Next.js server routes:

| Next.js Route      | Target (dev)                        | Target (prod)                            |
|--------------------|-------------------------------------|------------------------------------------|
| `/api/status`      | `http://localhost:8080/api/v1/status` | `https://api.caseycapozzi.com/api/v1/status` |
| `/api/docs`        | Redirect → `http://localhost:8080/swagger-ui/index.html` | Redirect → `https://api.caseycapozzi.com/swagger-ui/index.html` |

---

## Key Coding Conventions

- **Tailwind only** — never inline styles or CSS modules
- **Named exports** for all components; Next.js page files use default exports
- **`"use client"`** only when a component uses hooks, events, or browser APIs
- **Prefer server components** for pages that are purely presentational
- **Lucide-react** for icons (preferred); react-icons as secondary
- **Lombok** in Java — never write boilerplate getters/setters
- **Constructor injection** in Spring beans (not `@Autowired` on fields)

---

## Environment

| Variable        | Value                        |
|-----------------|------------------------------|
| Local frontend  | http://localhost:3000         |
| Local API       | http://localhost:8080         |
| Prod frontend   | https://caseycapozzi.com      |
| Prod API        | https://api.caseycapozzi.com  |

Amplify env vars use `NEXT_PUBLIC_*` prefix for browser-accessible config. `NODE_ENV` is the primary switch for dev vs. prod routing inside server routes.

---

## Outstanding Work

Always check `TODO.md` for the current task list. Key pending items as of the last session:

- **Playground page** — minimal stub, intentionally hidden from nav until ready
- **Resume polish** — AmFam bullet points need a rewrite once Casey has updated notes
- **Download Resume button** — copy PDF to `public/`, add download link on `/resume`

## Cursor Extensions

These are the extensions installed in Cursor on Casey's machine. Install these when setting up on a new PC:

| Extension ID | Description |
|---|---|
| `amazonwebservices.aws-toolkit-vscode` | AWS Toolkit (S3, ECS, Lambda explorer) |
| `bradlc.vscode-tailwindcss` | Tailwind CSS IntelliSense |
| `dbaeumer.vscode-eslint` | ESLint |
| `eamodio.gitlens` | GitLens — enhanced Git history/blame |
| `esbenp.prettier-vscode` | Prettier code formatter |
| `rangav.vscode-thunder-client` | Thunder Client (REST API client) |
| `redhat.java` | Java Language Support |
| `usernamehw.errorlens` | Error Lens — inline error highlighting |
| `vmware.vscode-boot-dev-pack` | Spring Boot Dev Pack |
| `vmware.vscode-spring-boot` | Spring Boot Tools |
| `vscjava.vscode-gradle` | Gradle support |
| `vscjava.vscode-java-debug` | Java Debugger |
| `vscjava.vscode-java-dependency` | Java Dependency Viewer |
| `vscjava.vscode-java-pack` | Java Extension Pack |
| `vscjava.vscode-java-test` | Java Test Runner |
| `vscjava.vscode-maven` | Maven support |
| `vscjava.vscode-spring-boot-dashboard` | Spring Boot Dashboard |
| `vscjava.vscode-spring-initializr` | Spring Initializr |
| `wallabyjs.console-ninja` | Console Ninja — runtime value inspection |

To install all at once on a new machine, run from a terminal:
```bash
cursor --install-extension amazonwebservices.aws-toolkit-vscode
cursor --install-extension bradlc.vscode-tailwindcss
cursor --install-extension dbaeumer.vscode-eslint
cursor --install-extension eamodio.gitlens
cursor --install-extension esbenp.prettier-vscode
cursor --install-extension rangav.vscode-thunder-client
cursor --install-extension redhat.java
cursor --install-extension usernamehw.errorlens
cursor --install-extension vmware.vscode-boot-dev-pack
cursor --install-extension vmware.vscode-spring-boot
cursor --install-extension vscjava.vscode-gradle
cursor --install-extension vscjava.vscode-java-debug
cursor --install-extension vscjava.vscode-java-dependency
cursor --install-extension vscjava.vscode-java-pack
cursor --install-extension vscjava.vscode-java-test
cursor --install-extension vscjava.vscode-maven
cursor --install-extension vscjava.vscode-spring-boot-dashboard
cursor --install-extension vscjava.vscode-spring-initializr
cursor --install-extension wallabyjs.console-ninja
```

---

## Session History

### Session 2 — April 2026 (Content Polish + Docs)

**What was built/changed:**
- Architecture page header: replaced "AWS-first, simple..." h1 with clean icon + "Architecture" title + kept description paragraph
- Home page hero reworked significantly:
  - Quick stats bar replaced with single `Senior Engineer · American Family Insurance` mono line
  - Bio rewritten to be accurate + personality-forward (test automation at AmFam, AWS experimentation, northern Wisconsin cabin)
  - "Currently" block restyled: green left border accent + pulsing dot (no clock icon), tightened copy
  - Bio accurately reflects: QE role today, transitioning to backend dev (Spring Boot, Python)
- Created `AGENTS.md` + `CLAUDE.md` for persistent AI session context
- Updated `Project-description.mdc` with ports, component conventions, key files
- Updated `README.md` with page/component tables, local dev notes
- Updated `TODO.md` with session completed items

**Key content decisions (for future accuracy):**
- Casey currently does **test automation** at AmFam (REST Assured, Karate, Playwright) — NOT cloud-native dev
- Currently **transitioning** into backend dev (Spring Boot, Python) on Rate Platform Microservices
- **No Menards** in bio — just AmFam is sufficient
- AWS experimentation is through **this portfolio site**, not at work
- Outside of work: hunting, fishing, family cabin in **northern Wisconsin**

**Pending from this session:**
- Re-add Playground to nav when page is ready (see `TODO.md`)
- ECS production deployment is still broken (503 from ALB)

---

### Session 1 — April 2026 (Multi-page Refactor)

**What was built:**
- Migrated deployment from Vercel → AWS Amplify; removed all Vercel references
- Added workspace rules: `Deployment-AWS-Amplify.mdc`, `Project-description.mdc`
- Rewrote READMEs for both `portfolio-web` and `portfolio-api`
- Refactored single-page `app/page.tsx` into a multi-page App Router structure:
  - `/` — hero landing (bio, tech tiers, "Get in Touch", personal projects placeholder)
  - `/resume` — career history pulled from PDF, timeline style with mobile toggles
  - `/architecture` — AWS stack overview (card layout)
  - `/playground` — live API health check dashboard (hidden from nav for now)
- Created `Navigation.tsx` — floating pill with avatar + icon/label links, active route state
- Created `Footer.tsx` — AWS status line + copyright, shared across all pages via `layout.tsx`
- Created `LiveAwsCoreStatus.tsx` — polls `/api/status`, shows online/offline, hydration-safe
- Created `/api/status` Next.js server route to proxy API health check (bypasses CORS)
- Created `/api/docs` Next.js server route to redirect to Swagger UI conditionally
- Fixed hydration mismatch caused by `typeof window` in server components
- Fixed blurry scroll text by removing `backdrop-blur` from nav and moving gradient to `globals.css`
- Fixed background gradient cut-off on long pages
- Added profile picture to hero (`public/profile.png`)
- Added tech stack section with tier rankings (Current Focus / Proficient / Growing)
- Added mobile "View details" toggle on resume role entries (`RoleEntry.tsx`)
- Added `TODO.md` for persistent task tracking across sessions
