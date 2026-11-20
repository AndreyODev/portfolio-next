import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Deliveries } from "@/components/sections/Deliveries";
import { Hero } from "@/components/sections/Hero";
import { Stack } from "@/components/sections/Stack";
import { allura } from "@/lib/fonts";

/** Página inicial: só compõe as seções. A lógica de cada uma fica em components/sections. */
export default function HomePage() {
  return (
    <div className={`${allura.variable} contents`}>
      <Hero />
      <Deliveries />
      <About />
      <Stack />
      <Contact />
    </div>
  );
}
