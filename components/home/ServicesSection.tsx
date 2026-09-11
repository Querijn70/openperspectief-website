import { services } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

const cardAccents = [
  "border-op-blauw",
  "border-op-groen",
  "border-op-blauw",
  "border-op-groen",
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-op-paars sm:text-4xl">
            Diensten
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base lg:text-lg leading-relaxed font-medium text-op-body/60">
            Van procesbegeleding tot simulaties — altijd gericht op duurzame
            resultaten.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <div className={`group h-full rounded-xl border-t-[3px] bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-t-4 hover:shadow-xl ${cardAccents[index]}`}>
                <h3 className="mb-3 font-heading text-base font-bold leading-snug text-op-paars">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-op-body/70">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
