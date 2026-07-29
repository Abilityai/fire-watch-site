import { home } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const levelColor: Record<string, string> = {
  Green: "bg-lvl-green",
  Yellow: "bg-lvl-yellow",
  Orange: "bg-lvl-orange",
  Red: "bg-lvl-red",
};

export function Hero() {
  const { hero } = home;
  return (
    <section className="border-b border-line py-14 md:py-20">
      <Container>
        <p className="eyebrow anim-fade-up">
          <b>▲</b> {hero.eyebrow}
        </p>
        <h1 className="anim-fade-up anim-d1 mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          {hero.headline}
        </h1>
        <p className="anim-fade-up anim-d2 mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">
          {hero.lede}
        </p>
        <div className="anim-fade-up anim-d3 mt-9 flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="anim-fade-up anim-d3 mt-14 max-w-3xl rounded-2xl border border-line bg-card p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hero.verdicts.map((v) => (
              <div key={v.level} className="flex items-center gap-2.5">
                <span
                  className={`size-3 shrink-0 rounded-full ${levelColor[v.level]}`}
                  aria-hidden
                />
                <div className="leading-tight">
                  <div className="text-sm font-bold">{v.level}</div>
                  <div className="text-xs text-ink-muted">{v.meaning}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-line pt-4 text-sm text-ink-muted">
            {hero.verdictNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
