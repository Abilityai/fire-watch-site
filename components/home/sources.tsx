import {
  BellRing,
  Flame,
  Gauge,
  Globe,
  Satellite,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { home } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const icons: Record<string, LucideIcon> = {
  danger: Gauge,
  satellite: Satellite,
  incidents: Flame,
  weather: Wind,
  effis: Globe,
  alerts: BellRing,
};

export function Sources() {
  const { data } = home;
  return (
    <Section id="data" className="bg-card-warm/50">
      <Container>
        <p className="eyebrow">
          <b>02</b> {data.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {data.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{data.lede}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.sources.map((s) => {
            const Icon = icons[s.key] ?? Flame;
            return (
              <div
                key={s.key}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <Icon className="size-5 text-ember" aria-hidden />
                <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
                  {s.role}
                </p>
                <p className="mt-3 text-[0.92rem] text-ink-muted">{s.detail}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-[0.95rem] text-ink-muted">
          {data.note}
        </p>
      </Container>
    </Section>
  );
}
