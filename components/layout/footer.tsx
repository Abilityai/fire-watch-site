import { siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="py-12">
      <Container className="flex flex-col gap-6">
        <p className="max-w-3xl rounded-2xl border border-line bg-card-warm px-5 py-4 text-sm text-ink-muted">
          {siteConfig.footer.disclaimer}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.78rem] text-ink-faint">
          <span>{siteConfig.footer.attribution}</span>
          <span>
            © {new Date().getFullYear()} {siteConfig.footer.copyright}
          </span>
        </div>
      </Container>
    </footer>
  );
}
