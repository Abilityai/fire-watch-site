import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-5 py-32">
      <p className="eyebrow">
        <b>404</b> Not found
      </p>
      <h1 className="text-4xl font-bold tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="rounded-full bg-ember px-6 py-3 font-semibold text-white transition-colors hover:bg-ember-deep"
      >
        Back to Fire Watch
      </Link>
    </Container>
  );
}
