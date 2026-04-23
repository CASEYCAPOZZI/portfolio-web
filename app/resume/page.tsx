import { GraduationCap } from 'lucide-react';
import { RoleEntry } from '../components/RoleEntry';

const experience = [
  {
    company: 'American Family Enterprise',
    title: 'Senior Software Engineer',
    dates: 'June 2022 — Present',
    summary: 'Built and maintained API test suites and CI/CD automation across multiple teams, driving quality and release confidence at an enterprise scale.',
    bullets: [
      'Designed and developed API test suites using Rest Assured and Karate for multiple applications, leveraging GitLab CI/CD pipelines, Python, and Bash scripting to schedule tests and upload results via Xray and Jira APIs.',
      'Responsible for developing and maintaining both targeted feature tests and comprehensive regression tests, coordinating testing efforts across several development teams to ensure seamless integration of changes across interconnected applications.',
      'Managed task allocation among testers on my team, aligning assignments with capacity and expertise in various testing frameworks to optimize productivity and effectiveness.',
    ],
  },
  {
    company: 'Menards Inc.',
    title: 'Developer II',
    dates: 'May 2018 — June 2022',
    summary: 'Led a two-year redesign of the enterprise Time & Attendance system, delivering Java applications, Oracle SQL reporting, and cross-platform features while mentoring junior developers.',
    bullets: [
      'Led the redesign of key concepts and structure of the Time and Attendance system during a two-year project, collaborating with business users, development, QA, and infrastructure teams to define requirements and test cases.',
      'Developed and maintained several Java web applications and services integral to the Time and Attendance system, as well as complex Oracle SQL reports for business use.',
      'Developed and tested features for the team member portal ensuring compatibility across desktop and mobile devices; served as lead mentor for two team members, creating tutorials and documentation for the team.',
    ],
  },
  {
    company: 'Midwest Manufacturing',
    title: 'Java Intern',
    dates: 'May 2017 — May 2018',
    summary: 'Maintained Java and .NET applications supporting manufacturing operations at the Countertops plants.',
    bullets: [
      'Maintained standalone Java applications and .NET applications used at the Countertops plants.',
    ],
  },
];

const techSections: { label: string; items: string }[] = [
  { label: 'Languages',    items: 'Java, MySQL, Oracle SQL, JavaScript, HTML, CSS, XML, JSON' },
  { label: 'Frameworks',   items: 'Spring, Java Servlet, JSP, JMS, jQuery, Apache ActiveMQ, Rest Assured, Karate, Cucumber' },
  { label: 'Tooling',      items: 'Maven, Jenkins, Nexus, Git, Unix, IntelliJ, DataGrip, Eclipse, AWS, Docker, Postman' },
  { label: 'Process',      items: 'GitLab, BitBucket, Jira, Confluence, Xray, Zabbix, Agile Scrum' },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <header className="pt-12 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left — name + title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-50">
              Casey Capozzi
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-8 bg-blue-500/60" />
              <p className="text-base text-blue-300/80 font-semibold tracking-wide">
                Senior Software Engineer
              </p>
            </div>
          </div>

          {/* Right — contact info stacked */}
          <div className="flex flex-col gap-2 text-sm md:text-right">
            <a
              href="mailto:capozzicasey@gmail.com"
              className="font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              capozzicasey@gmail.com
            </a>
            <span className="font-mono text-slate-500">715-450-5502</span>
            <span className="font-mono text-slate-500">Eau Claire, WI</span>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/70" />
      </header>

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section className="mt-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Experience</p>

        <div className="relative">
          {/* Timeline spine */}
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
              <p className="text-sm font-semibold text-slate-200">IT — Software Development, Associate&apos;s Degree</p>
              <p className="text-sm text-slate-500">Chippewa Valley Technical College</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 shrink-0">Sept 2016 — May 2018</span>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────────────── */}
      <section className="mt-14 pt-8 border-t border-slate-800/70">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-6">Technologies</p>

        <dl className="space-y-3.5">
          {techSections.map(({ label, items }) => (
            <div key={label} className="flex gap-4">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500 w-24 shrink-0 pt-0.5">
                {label}
              </dt>
              <dd className="text-[14px] text-slate-300 leading-relaxed">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

    </div>
  );
}
