import { Building2, Heart, Network, Scale } from "lucide-react";
import { whyCards } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

const iconMap = {
  network: Network,
  scale: Scale,
  heart: Heart,
  building: Building2,
};

const cardAccents = [
  { border: "border-op-blauw", iconBg: "bg-op-blauw/10", iconText: "text-op-blauw", iconHover: "group-hover:bg-op-blauw" },
  { border: "border-op-groen", iconBg: "bg-op-groen/10", iconText: "text-op-groen", iconHover: "group-hover:bg-op-groen" },
  { border: "border-op-blauw", iconBg: "bg-op-blauw/10", iconText: "text-op-blauw", iconHover: "group-hover:bg-op-blauw" },
  { border: "border-op-groen", iconBg: "bg-op-groen/10", iconText: "text-op-groen", iconHover: "group-hover:bg-op-groen" },
];

export default function WhySection() {
  return (
    <section
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-op-paars sm:text-4xl">
            Waarom OpenPerspectief?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base lg:text-lg leading-relaxed font-medium text-op-body/60">
            Organisaties helpen om netwerksamenwerking te laten werken — ook als het complex en weerbarstig is.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            const accent = cardAccents[index];
            return (
              <FadeIn key={card.title} delay={index * 100}>
                <div className={`group h-full rounded-xl border-t-[3px] bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-t-4 hover:shadow-xl ${accent.border}`}>
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${accent.iconBg} ${accent.iconText} transition-all duration-300 ${accent.iconHover} group-hover:text-white`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-heading text-base font-bold leading-snug text-op-paars">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-op-body/70">
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
