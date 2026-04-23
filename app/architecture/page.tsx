import { Layers, Globe, Shield, GitBranch, Server, Route, ArrowRight } from 'lucide-react';

function Card(props: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] p-6">
      <div className="flex items-center gap-2 text-slate-200">
        <div className="text-blue-300/80">{props.icon}</div>
        <h2 className="text-sm font-bold tracking-wide">{props.title}</h2>
      </div>
      <div className="mt-3 text-[15px] text-slate-300 leading-relaxed">{props.children}</div>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <header className="pt-6 pb-10">
        <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-black tracking-tight text-slate-50">
          <Layers size={32} className="text-blue-400" />
          Architecture
        </h1>
        <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl">
          This portfolio is intentionally straightforward: a Next.js frontend deployed with AWS Amplify,
          backed by a Spring Boot API running in ECS and exposed behind an ALB.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Frontend (Next.js) — AWS Amplify" icon={<Globe size={16} />}>
          Amplify builds and deploys the App Router frontend from GitLab. The custom domain
          `caseycapozzi.com` points to Amplify for fast global delivery.
        </Card>

        <Card title="Backend (Spring Boot) — ECS" icon={<Server size={16} />}>
          The API runs as a containerized service in ECS. It exposes health/status endpoints and
          serves OpenAPI docs for exploration and debugging.
        </Card>

        <Card title="Traffic Routing — ALB" icon={<Route size={16} />}>
          `api.caseycapozzi.com` routes to an Application Load Balancer. The ALB forwards requests to
          the ECS target group and performs health checks to keep traffic on healthy tasks.
        </Card>

        <Card title="DNS + Domain — Route 53" icon={<Shield size={16} />}>
          Route 53 manages DNS for `caseycapozzi.com` and `api.caseycapozzi.com`. This keeps the domain
          configuration centralized while allowing independent frontend/backend deployments.
        </Card>

        <Card title="CI/CD" icon={<GitBranch size={16} />}>
          Frontend deploys via Amplify’s GitLab integration. Backend deploys via container build/push
          and ECS service updates.
        </Card>

        <Card title="How the pieces interact" icon={<ArrowRight size={16} />}>
          Frontend pages call a same-origin proxy route (`/api/status`) to avoid browser CORS issues.
          That proxy reaches the API via `api.caseycapozzi.com` in production, or `localhost:8080` in local dev.
        </Card>
      </section>
    </div>
  );
}

