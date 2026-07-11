import FadeIn from "@/components/FadeIn";
import { projects } from "@/lib/data";

const accentColors = ["border-op-blauw", "border-op-groen"];

export default function ProjectenSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sectietitel */}
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold text-op-paars sm:text-4xl">
            Projecten
          </h2>
        </FadeIn>

        {/* Projectkaarten */}
        <div className="mt-16 flex flex-col gap-6">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");
            const borderColor = accentColors[index % 2];

            return (
              <FadeIn key={index} delay={index * 80}>
                <article
                  className={`group relative overflow-hidden rounded-xl border-l-4 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${borderColor}`}
                >
                  {/* Decoratief nummer */}
                  <span
                    className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-heading text-8xl font-bold leading-none text-op-paars/10 sm:text-9xl"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  <div className="relative p-8 sm:p-10">

                    {/* Partner badge */}
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-op-groen">
                      Partner: {project.partner}
                    </p>

                    {/* Projecttitel */}
                    <h3 className="max-w-2xl font-heading text-xl font-bold leading-snug text-op-paars sm:text-2xl">
                      {project.title}
                    </h3>

                    {/* Beschrijving */}
                    <p className="mt-4 max-w-3xl leading-relaxed text-op-body/75">
                      {project.description}
                    </p>

                    {/* Bullets */}
                    {project.bullets && project.bullets.length > 0 && (
                      <ul className="mt-5 space-y-2">
                        {project.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-op-body/75">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-op-blauw"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
