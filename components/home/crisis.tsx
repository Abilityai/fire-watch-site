import Image from "next/image";
import { home } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Crisis() {
  const { crisis } = home;
  const [region, ...zooms] = crisis.images;
  return (
    <Section id="now" className="bg-card-warm/50">
      <Container>
        <p className="eyebrow">
          <b>●</b> {crisis.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {crisis.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{crisis.lede}</p>

        <figure className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src={region.src}
              width={region.width}
              height={region.height}
              alt={region.alt}
              className="w-full"
              sizes="(min-width: 1152px) 1088px, 100vw"
              priority={false}
            />
          </div>
          <figcaption className="mt-2 font-mono text-[0.72rem] text-ink-faint">
            {region.caption}
          </figcaption>
        </figure>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {zooms.map((img) => (
            <figure key={img.src}>
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  className="w-full"
                  sizes="(min-width: 1152px) 532px, 100vw"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[0.72rem] text-ink-faint">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-4 font-mono text-[0.72rem] text-ink-faint">
          {crisis.attribution}
        </p>

        <p className="mt-8 max-w-2xl rounded-2xl border border-ember/30 bg-ember-soft px-6 py-5 text-[1.02rem] font-medium text-ember-deep">
          {crisis.kicker}
        </p>
      </Container>
    </Section>
  );
}
