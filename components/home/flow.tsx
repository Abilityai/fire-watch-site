import { Send } from "lucide-react";
import { home, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Flow() {
  const { flow, contact } = home;
  const tg = siteConfig.contact.telegram;
  return (
    <Section id="request" className="bg-card-warm/50">
      <Container>
        <p className="eyebrow">
          <b>05</b> {flow.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {flow.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{flow.lede}</p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flow.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <span className="font-mono text-sm font-bold text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-[0.92rem] text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex max-w-2xl flex-col gap-5 rounded-2xl border border-ember/30 bg-card p-7">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-bold">{contact.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-muted">{contact.text}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {tg.url ? (
              <a
                href={tg.url}
                className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                <Send className="size-4" aria-hidden />
                {tg.handle} on Telegram
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-card-warm px-6 py-3 font-mono font-semibold">
                <Send className="size-4 text-ember" aria-hidden />
                {tg.handle} on Telegram
              </span>
            )}
            <span className="rounded-full border border-line bg-card-warm px-4 py-1.5 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink-muted">
              {flow.pilotNote}
            </span>
          </div>
          <p className="text-sm text-ink-faint">{tg.note}</p>
        </div>
      </Container>
    </Section>
  );
}
