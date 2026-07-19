"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const BASE_SRC = "https://www.youtube.com/embed/eFNMWpMJEys";

const chapters = [
  {
    label: "Minuut 10 — Innovatieleercyclus toegelicht",
    intro:
      "Rosemarie licht de methode 'Innovatieleercyclus' toe die zij heeft ontwikkeld. Met de Innovatieleercyclus helpt zij gemeenten, provincies en het Rijk concrete stappen te zetten in de transitie naar integraal samenwerken aan maatschappelijke opgaven met behulp van digitale tweelingen.",
    src: `${BASE_SRC}?start=611`,
    accentColor: "#12acdf",
    activeBg: "rgba(18, 172, 223, 0.07)",
  },
  {
    label: "Minuut 13 — Ervaringen uit de praktijk",
    intro:
      "Deze video-opname laat mensen aan het woord die vanuit de eigen werkpraktijk hun ervaringen delen met de door Rosemarie ontwikkelde Innovatieleercyclus.",
    src: `${BASE_SRC}?start=767`,
    accentColor: "#179e9a",
    activeBg: "rgba(23, 158, 154, 0.07)",
  },
];

export default function VideoSection() {
  const [activeSrc, setActiveSrc] = useState(BASE_SRC);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-op-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn threshold={0.2}>
          <h2 className="mb-12 font-heading text-3xl font-bold text-op-paars sm:text-4xl">
            In de media
          </h2>

          {/* Video embed */}
          <div className="mx-auto max-w-[800px]">
            <div
              className="relative overflow-hidden rounded-xl shadow-lg"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                key={activeSrc}
                src={activeSrc}
                title="Rosemarie Mijlhoff in de media"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Timestamp-knoppen */}
          <div className="mx-auto mt-5 grid max-w-[800px] gap-4 sm:grid-cols-2">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.src}
                onClick={() => {
                  setActiveSrc(chapter.src);
                  setActiveIndex(i);
                }}
                className="group flex flex-col gap-2 rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderLeft: `3px solid ${chapter.accentColor}`,
                  backgroundColor:
                    activeIndex === i ? chapter.activeBg : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  <Play
                    className="h-4 w-4 shrink-0"
                    style={{ color: chapter.accentColor }}
                  />
                  <span className="font-heading text-sm font-semibold text-op-paars">
                    {chapter.label}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-op-body/60">
                  {chapter.intro}
                </p>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
