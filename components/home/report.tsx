import { ArrowUpRight, FileText } from "lucide-react";
import { home } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Report() {
  const { report } = home;
  return (
    <Section id="report">
      <Container>
        <p className="eyebrow">
          <b>01</b> {report.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {report.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{report.lede}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {report.deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-muted">{d.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[0.95rem] text-ink-muted">
          {report.delivery}
        </p>

        <a
          href={report.example.href}
          className="mt-6 flex max-w-2xl items-center gap-4 rounded-2xl border border-ember/30 bg-ember-soft p-6 transition-colors hover:border-ember/60"
        >
          <FileText className="size-8 shrink-0 text-ember" aria-hidden />
          <span className="flex-1">
            <span className="flex items-center gap-1.5 font-bold text-ember-deep">
              {report.example.label}
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
            <span className="mt-1 block text-sm text-ink-muted">
              {report.example.note}
            </span>
          </span>
        </a>
      </Container>
    </Section>
  );
}
