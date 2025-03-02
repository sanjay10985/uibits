"use client";

import { HeroSection } from "./hero/hero-section";
import { CardGrid } from "./cards/grid";
import { ContributeSection } from "./contribute/contribute-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardGrid />
      <ContributeSection />
    </main>
  );
}
