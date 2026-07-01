import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Expertise",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero title="Expertise" />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-16 max-w-3xl text-lg leading-relaxed text-op-body/75">
              Een overzicht van publicaties, artikelen en onderzoeken van
              Rosemarie Mijlhoff.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((pub, index) => (
              <FadeIn key={pub.link} delay={(index % 2) * 100}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <time className="text-sm font-bold text-op-groen">
                    {pub.date}
                  </time>
                  <h2 className="mt-3 font-heading text-lg font-semibold leading-snug">
                    {pub.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-op-body/70">
                    {pub.description}
                  </p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-op-blauw transition-colors hover:text-op-blauw-dark"
                  >
                    Lees meer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
