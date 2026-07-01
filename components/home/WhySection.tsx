import { Building2, Heart, Network, Scale } from "lucide-react";
import { whyCards } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

const iconMap = {
  network: Network,
  scale: Scale,
  heart: Heart,
  building: Building2,
};

const iconColors = [
  { bg: "bg-op-blauw/10", text: "text-op-blauw", hover: "group-hover:bg-op-blauw" },
  { bg: "bg-op-groen/10", text: "text-op-groen", hover: "group-hover:bg-op-groen" },
  { bg: "bg-op-blauw/10", text: "text-op-blauw", hover: "group-hover:bg-op-blauw" },
  { bg: "bg-op-groen/10", text: "text-op-groen", hover: "group-hover:bg-op-groen" },
];

export default function WhySection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold sm:text-4xl">
            Waarom OpenPerspectief?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-op-body/60">
            Wij helpen organisaties om netwerksamenwerking te laten werken — ook
            als het complex en weerbarstig is.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            const colors = iconColors[index];
            return (
              <FadeIn key={card.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-all duration-300 ${colors.hover} group-hover:text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-base font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-op-body/70">
                    {card.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
