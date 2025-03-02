"use client";

import { CardItem } from "./item";
import { componentService } from "@/services/component-service";
import { useEffect, useState } from "react";

export function CardGrid() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchComponentsData = async () => {
      const data = await componentService.fetchComponents();
      setComponents(data);
    };
    fetchComponentsData();
  }, []);

  return (
    <section className="py-8" role="region" aria-label="Component Grid">
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
          role="list"
        >
          {components.map((component) => (
            <CardItem key={component.id} {...component} />
          ))}
        </div>
      </div>
    </section>
  );
}
