import { Cpu, UserRound } from "lucide-react";
import { home } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Method() {
  const { method } = home;
  return (
    <Section id="method">
      <Container>
        <p className="eyebrow">
          <b>04</b> {method.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {method.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{method.lede}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { icon: Cpu, ...method.engine },
            { icon: UserRound, ...method.analyst },
          ].map(({ icon: Icon, title, points }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-card p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-ember-soft">
                  <Icon className="size-5 text-ember" aria-hidden />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] text-ink-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {method.principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-card-warm/60 p-6"
            >
              <h3 className="font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
