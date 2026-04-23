# Portfolio TODO

A running list of outstanding tasks across `portfolio-web` and `portfolio-api`.
Update this file as things get done or priorities shift.

---

## 🔴 High Priority

### ~~portfolio-api — Fix ECS / ALB Production Deployment~~ ✅ RESOLVED
API returning `{"status":"UP and running!","environment":"production"}` — confirmed healthy.
- [ ] Verify `/swagger-ui/index.html` returns 200 and is browsable (not yet confirmed)

---

## 🟡 Medium Priority

### portfolio-web — Build Out the Playground Page
The `/playground` page exists but is minimal. It is intentionally hidden from the nav until it's ready.

- [ ] Design what the Playground should showcase (API explorer, latency sampler, uptime history, etc.)
- [ ] Implement the features
- [ ] **Once ready: re-add Playground to the nav**
  - File: `app/components/Navigation.tsx`
  - Uncomment the `FlaskConical` import and add back to `navItems`:
    ```ts
    { href: '/playground', label: 'Playground', icon: FlaskConical }
    ```

### portfolio-web — Resume Content Polish
The resume page descriptions are pulled from the original PDF and could be tightened up significantly.

- [ ] **Update AmFam experience** — rewrite to better reflect current senior-level responsibilities, recent projects, and impact (ask AI to help punch up the language once you have updated notes)
- [ ] **AI cleanup pass on all three role descriptions** — condense and sharpen bullet points across AmFam, Menards, and Midwest Manufacturing
- [ ] **Keep `app/resume/page.tsx` and `Casey_Capozzi_Resume.pdf` in sync** after any content changes — update both at the same time

### portfolio-web — Download Resume Button
Add a button on the `/resume` page so visitors can download a PDF copy directly.

- [ ] Copy the latest `Casey_Capozzi_Resume.pdf` into `portfolio-web/public/` so it is served as a static asset
- [ ] Add a download button to the resume page header (e.g. "Download PDF" with a `Download` Lucide icon)
  - Use `<a href="/Casey_Capozzi_Resume.pdf" download>` — Next.js serves `public/` files at the root
- [ ] Each time the PDF resume is updated, replace `public/Casey_Capozzi_Resume.pdf` and update the web resume content to match

### portfolio-web — Personal Projects Section
The home page has a "Check back soon" placeholder for personal projects.

- [ ] WI Outdoor Monitor — add a card when there is something to show
- [ ] Reloading & Ballistics app — add a card when there is something to show

---

## 🟢 Low Priority / Nice to Have

### portfolio-web
- [ ] Add active route highlighting to nav (already partially done with `pathname` check)
- [ ] Consider adding a `og:image` / social card meta tag for link previews
- [ ] Disclaimer footer note (AmFam) was removed — decide if it should live anywhere (e.g. `/resume`)
- [ ] Update `README.md` if project structure changes significantly

### portfolio-api
- [ ] Update `README.md` once Swagger URL is confirmed working in production
- [ ] Consider adding Spring profiles (`dev`, `prod`) for cleaner environment separation
- [ ] Evaluate whether PostgreSQL datasource should be wired up (currently excluded via autoconfigure)

---

## ✅ Recently Completed

### Session 2 — April 2026 (Content Polish + Docs)
- Reworked home page hero bio — accurate, personality-forward, correct tech context
- Restyled "Currently" block — green left border accent + pulsing dot
- Replaced quick stats bar with single role/company line
- Updated Architecture page header (icon + title, kept description)
- Created `AGENTS.md` + `CLAUDE.md` for persistent AI session context
- Updated `Project-description.mdc` with default ports, component guidance, key files
- Updated `README.md` with page/component tables

### Session 1 — April 2026 (Multi-page Refactor)
- Migrated deployment from Vercel to AWS Amplify (GitLab connected)
- Removed all Vercel references from codebase
- Added AWS Amplify + ECS + Route 53 Cursor workspace rules (`Deployment-AWS-Amplify.mdc`)
- Added READMEs to both `portfolio-web` and `portfolio-api`
- Refactored single-page app into multi-page Next.js App Router (`/`, `/resume`, `/playground`, `/architecture`)
- Added shared floating pill Navigation with Lucide icons and active route state
- Added `/api/status` server-side proxy to avoid CORS issues
- Added `/api/docs` redirect route (local → `localhost:8080`, prod → `api.caseycapozzi.com`)
- Added profile picture to hero
- Added tech stack section with tier rankings (Current Focus / Proficient / Growing)
- Added "Get in Touch" contact section
- Added low-key AWS Core status line in shared `Footer` component (all pages)
- Redesigned resume page header (removed "Resume" label, two-column contact layout)
- Added mobile "View details" toggle on resume role entries (`RoleEntry.tsx`)
- Fixed blurry scroll text — removed `backdrop-blur` from nav, moved gradient to `globals.css`
- Fixed background gradient cut-off on long pages
- Fixed hydration mismatch from `typeof window` in server components
