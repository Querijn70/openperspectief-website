import FadeIn from "@/components/FadeIn";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32"
      style={{ background: "linear-gradient(to bottom, #ffffff 0%, rgba(81,39,63,0.04) 60%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Titel */}
          <h2 className="font-heading text-4xl font-bold text-op-paars sm:text-5xl">
            Plan een afspraak
          </h2>

          {/* Beschrijving */}
          <p className="mt-6 text-lg leading-relaxed text-op-body/75">
            Ben jij geïnteresseerd in mijn expertise van complexe
            samenwerkingsvraagstukken? Stuur mij dan gerust een bericht zodat
            ik contact met je kan opnemen om samen te kijken naar jouw situatie
            en de mogelijkheden.
          </p>

          {/* Contactgegevens */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+31643950936"
              className="flex items-center gap-3 text-op-body/70 transition-colors hover:text-op-blauw"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-op-surface text-op-blauw">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </span>
              +31 643950936
            </a>
            <a
              href="mailto:info@openperspectief.nl"
              className="flex items-center gap-3 text-op-body/70 transition-colors hover:text-op-blauw"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-op-surface text-op-blauw">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              info@openperspectief.nl
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
