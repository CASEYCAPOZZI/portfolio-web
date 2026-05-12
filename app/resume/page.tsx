import { GraduationCap, Mail, Download } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { RoleEntry } from '../components/RoleEntry';

const experience = [
  {
    company: 'American Family Enterprise',
    title: 'Senior Engineer',
    dates: 'June 2022 — Present',
    summary:
      'GitLab Wiki command center for pipelines, Python/Jira–Xray automation, multi-cloud validation with GCP, OAuth 2.0 and AWS Secrets Manager, and AI-assisted legacy refactors.',
    bullets: [
      'Architected a centralized GitLab Wiki dashboard that serves as a command center for scheduled runs, providing real-time status tracking and the ability to trigger pipeline executions directly from the UI.',
      'Engineered an automated lifecycle bridge using Python and APIs to dynamically update Jira/Xray details, significantly reducing manual administrative overhead.',
      'Synchronized multi-cloud data integrity by collaborating with GCP teams to validate that streaming data matched AWS environments, ensuring consistency across the enterprise data lake.',
      'Hardened application security by implementing OAuth 2.0 and migrating sensitive credentials from hard-coded configurations to AWS Secrets Manager.',
      'Transformed high-complexity, legacy projects into optimized structures using Claude, reducing execution times and improving system readability for the entire engineering team.',
      'Drove engineering excellence through active participation in the Community of Excellence, leading code reviews, and partnering with performance teams to ensure scalability standards.',
      'Collaborated within an Agile/Scrum framework, working closely with Product Owners to translate high-level requirements into technical design and participating in strategic release planning.',
    ],
  },
  {
    company: 'Menards Inc.',
    title: 'Developer II',
    dates: 'May 2018 — June 2022',
    summary:
      'Lead on a two-year Time & Attendance redesign, intelligent store scheduling, mission-critical web apps for desktop and mobile, Oracle reporting, and junior developer mentorship.',
    bullets: [
      'Held a lead role in the two-year structural redesign of the enterprise Time and Attendance system, modernizing core logic and system architecture to improve scalability and performance.',
      'Took a lead role in developing an intelligent resource-allocation model that automated store scheduling by cross-referencing employee skills, experience, and shift preferences against operational requirements.',
      'Engineered mission-critical web services and applications, ensuring seamless functionality across both desktop and mobile team member portals.',
      'Optimized organizational data strategy by authoring complex Oracle SQL solutions to deliver actionable reporting on labor metrics and business insights.',
      'Served in a lead role for junior developer mentorship, establishing best practices and technical documentation that increased team velocity.',
    ],
  },
  {
    company: 'Midwest Manufacturing',
    title: 'Java Intern',
    dates: 'May 2017 — May 2018',
    summary: 'Java and .NET apps for manufacturing plants and internal tools for countertop production workflows.',
    bullets: [
      'Maintained standalone Java and .NET applications for manufacturing plants, ensuring continuous operational uptime and cross-platform compatibility.',
      'Contributed to internal software solutions designed to streamline production workflows within the countertop manufacturing division.',
    ],
  },
];

const techSections: { label: string; items: string }[] = [
  {
    label: 'AI-augmented development',
    items:
      'Advanced prompt engineering; GPT-4 to accelerate delivery; cross-language solutions; refactoring complex legacy systems; workflow automation with Claude (Sonnet).',
  },
  {
    label: 'Core engineering',
    items: 'API design; database management (SQL/Oracle); legacy system modernization; system architecture.',
  },
  {
    label: 'DevOps & automation',
    items:
      'AWS; custom automation (e.g. Datadog MCP); Docker; GitLab CI/CD; GitLab Wiki dashboards with integrated pipeline triggering; Xray/Jira APIs.',
  },
  {
    label: 'Enterprise architecture',
    items: 'Messaging (ActiveMQ/JMS); microservices; modern automation frameworks (Karate, REST Assured).',
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <header className="pt-10 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="text-slate-50 font-black tracking-tight text-2xl md:text-4xl">
              <span className="md:hidden">Resume</span>
              <span className="hidden md:inline">Casey Capozzi</span>
            </h1>
            <div className="mt-5 border-t border-slate-800/70" />
          </div>
          <a
            href="/Casey_Capozzi_Resume.pdf"
            download="Casey_Capozzi_Resume.pdf"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-900 transition-colors"
          >
            <Download size={14} className="text-blue-400" />
            Download PDF
          </a>
        </div>
      </header>

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Experience</p>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-12 pl-6">
            {experience.map((role) => (
              <RoleEntry
                key={role.company}
                company={role.company}
                title={role.title}
                dates={role.dates}
                summary={role.summary}
                bullets={role.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────── */}
      <section className="mt-14 pt-8 border-t border-slate-800/70">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-6">Education</p>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div className="flex items-start gap-3">
            <GraduationCap size={16} className="text-slate-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-200">
                IT — Software Development, Associate&apos;s Degree
              </p>
              <p className="text-sm text-slate-500">Chippewa Valley Technical College</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 shrink-0">Sept 2016 — May 2018</span>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section className="mt-14 pt-8 border-t border-slate-800/70">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-6">Skills</p>

        <dl className="space-y-3.5">
          {techSections.map(({ label, items }) => (
            <div key={label} className="flex gap-4">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 w-40 shrink-0 pt-0.5 leading-snug">
                {label}
              </dt>
              <dd className="text-[14px] text-slate-300 leading-relaxed">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="border-t border-slate-800/70 mt-10 pt-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Get in Touch</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:capozzicasey@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900/80 transition-colors"
          >
            <Mail size={15} className="text-slate-400" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/casey-capozzi-188b2a128/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-[#0A66C2] hover:bg-slate-900/80 transition-colors"
          >
            <FaLinkedinIn size={15} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
