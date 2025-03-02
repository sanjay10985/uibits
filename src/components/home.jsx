"use client";

import { HeroSection } from "./hero/hero-section";
import { CardGrid } from "./cards/grid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardGrid />
    </main>
  );
}
