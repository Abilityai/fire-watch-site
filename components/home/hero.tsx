import Image from "next/image";
import Link from "next/link";
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
  const { profile } = hero;
  return (
    <section className="border-b border-line py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,480px)]">
          <div>
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
          </div>

          <figure className="anim-fade-up anim-d2">
            <Link
              href="/example-report"
              className="relative block overflow-hidden rounded-2xl border border-line-strong"
            >
              <Image
                src={profile.image.src}
                width={profile.image.width}
                height={profile.image.height}
                alt={profile.image.alt}
                className="w-full"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
              <span
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${profile.pin.x}%`, top: `${profile.pin.y}%` }}
                aria-hidden
              >
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-ember/40" />
                <span className="relative block size-3 rounded-full border-2 border-white bg-ember shadow" />
              </span>
              <span className="absolute inset-x-3 bottom-3 block rounded-xl border border-line bg-card/95 p-4 shadow-lg backdrop-blur-sm">
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                  {profile.stamp}
                </span>
                <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-bold">{profile.location}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-card-warm px-2.5 py-0.5 text-xs font-bold">
                    <span
                      className={`size-2 rounded-full ${levelColor[profile.level]}`}
                    />
                    {profile.levelLabel}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {profile.composite}
                  </span>
                </span>
                <span className="mt-2 block space-y-1">
                  {profile.facts.map((f) => (
                    <span
                      key={f}
                      className="block text-[0.78rem] leading-snug text-ink-muted"
                    >
                      {f}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
            <figcaption className="mt-2 font-mono text-[0.72rem] text-ink-faint">
              {profile.caption}
            </figcaption>
          </figure>
        </div>

        <div className="anim-fade-up anim-d3 mt-12 rounded-2xl border border-line bg-card p-6">
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
