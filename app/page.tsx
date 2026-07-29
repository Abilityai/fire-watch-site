import { Hero } from "@/components/home/hero";
import { Crisis } from "@/components/home/crisis";
import { Report } from "@/components/home/report";
import { Sources } from "@/components/home/sources";
import { Method } from "@/components/home/method";
import { Flow } from "@/components/home/flow";

export default function Home() {
  return (
    <>
      <Hero />
      <Crisis />
      <Report />
      <Sources />
      <Method />
      <Flow />
    </>
  );
}
