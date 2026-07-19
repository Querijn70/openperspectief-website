import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import FadeIn from "@/components/FadeIn";
import { milestones } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persoonlijk",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero title="Persoonlijk" subtitle="Achtergrond & Ervaring" />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/rosemarie.jpg"
                  alt="Rosemarie Mijlhoff"
                  width={480}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Rosemarie Mijlhoff
              </h2>
              <h3 className="mt-8 font-heading text-lg font-semibold text-op-groen">
                Persoonlijk
              </h3>
              <div className="mt-4 space-y-5 text-base lg:text-lg leading-relaxed text-op-body/75">
                <p>
                  Wat mij drijft is de verscheidenheid van mensen en organisaties
                  en de mogelijkheden die dit biedt. Ik ben onder de indruk van
                  de verschillende manieren waarop wij ons mensen uiten, onze
                  uiteenlopende drijfveren, de creativiteit en inventiviteit
                  waarmee we tot nieuwe dingen komen. Ik onderschrijf volledig de
                  uitdrukking dat mensen de kern zijn van het succes van een
                  organisatie en een netwerksamenwerking, zij vormen die immers
                  samen.
                </p>
                <p>
                  De kern van mijn aanpak is het behalen van resultaten door te
                  verbinden. Het gaat dan om het verbinden van collectieve en
                  individuele belangen, waarden en ambities. Daarin ligt de
                  sleutel voor het onderling opbouwen van vertrouwen, het
                  stimuleren van openheid en wederkerigheid, en het omgaan met de
                  altijd aanwezige continu veranderende asymmetrie en spanningen.
                  Daarmee zorgt ik ervoor dat de gezamenlijke ambitie sneller,
                  maar vooral duurzaam en op een prettige manier gerealiseerd
                  worden.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-op-surface py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-12 text-center font-heading text-3xl font-bold sm:text-4xl">
              Mijlpalen
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Timeline items={milestones} />
          </FadeIn>
        </div>
      </section>

      {/* Video-sectie */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* TODO: Vervang deze placeholder door de echte video URL */}
            {/* Gebruik bijvoorbeeld: <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="absolute inset-0 h-full w-full" allowFullScreen /> */}
            <div
              className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video"
              style={{ backgroundColor: "#51273f" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                  <Play className="h-10 w-10 translate-x-0.5 text-white" fill="white" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-op-body/40">
              Promotievideo volgt binnenkort
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
