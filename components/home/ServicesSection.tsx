import { services } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold sm:text-4xl">
            Diensten
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base lg:text-lg leading-relaxed font-medium text-op-body/60">
            Van procesbegeleding tot simulaties — altijd gericht op duurzame
            resultaten.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 h-1 w-10 rounded-full bg-op-blauw transition-all duration-300 group-hover:w-16" />
                <h3 className="mb-3 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed text-op-body/70">
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
