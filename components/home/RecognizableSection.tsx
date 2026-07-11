import Image from "next/image";
import Accordion from "../Accordion";
import Button from "../Button";
import FadeIn from "@/components/FadeIn";
import { accordionItems } from "@/lib/data";

export default function RecognizableSection() {
  return (
    <section className="bg-op-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold sm:text-4xl">
            Herkenbaar?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base lg:text-lg leading-relaxed font-medium text-op-body/60">
            Veel organisaties lopen tegen dezelfde uitdagingen aan in
            netwerksamenwerking.
          </p>
        </FadeIn>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/herkenbaar_foto.jpg"
                alt="Herkenbaar — netwerksamenwerking in de praktijk"
                width={480}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <FadeIn delay={150}>
            <Accordion items={accordionItems} />
            <div className="mt-10">
              <Button href="#contact">MAAK AFSPRAAK</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
