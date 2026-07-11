import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import ProjectenSection from "@/components/expertise/ProjectenSection";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Expertise",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero title="Expertise" subtitle="Publicaties & Projecten" />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-op-paars sm:text-4xl">
              Publicaties
            </h2>
            <p className="mb-16 mt-6 max-w-3xl text-lg leading-relaxed font-medium text-op-body/75">
              Een overzicht van publicaties, artikelen en onderzoeken van
              Rosemarie Mijlhoff.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publications.map((pub, index) => {
              const isBlue = index % 2 === 0;
              return (
                <FadeIn key={pub.link} delay={(index % 3) * 80}>
                  <article className={`group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 ${isBlue ? "border-op-blauw" : "border-op-groen"}`}>

                    {/* Decoratief aanhalingsteken */}
                    <span
                      className="pointer-events-none absolute right-4 top-1 select-none font-heading text-8xl font-bold leading-none text-op-paars/[0.05]"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    <div className="flex flex-1 flex-col p-6">
                      {/* Datum badge */}
                      <time className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold tracking-widest ${isBlue ? "bg-op-blauw/10 text-op-blauw" : "bg-op-groen/10 text-op-groen"}`}>
                        {pub.date}
                      </time>

                      {/* Titel */}
                      <h3 className="mt-4 font-heading text-base font-bold leading-snug text-op-paars">
                        {pub.title}
                      </h3>

                      {/* Beschrijving */}
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-op-body/60">
                        {pub.description}
                      </p>

                      {/* Lees meer */}
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-op-blauw transition-all duration-200 hover:translate-x-1 hover:underline"
                      >
                        Lees meer
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectenSection />
    </>
  );
}
