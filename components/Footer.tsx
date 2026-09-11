function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-op-paars text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">

          {/* Kolom 1 — Contact */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider !text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-base text-white">
              <li>
                <a
                  href="tel:+31643950936"
                  className="text-white transition-colors hover:text-op-blauw"
                >
                  +31 643950936
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@openperspectief.nl"
                  className="text-white transition-colors hover:text-op-blauw"
                >
                  info@openperspectief.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 2 — Sociaal */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider !text-white">
              Volg ons
            </h3>
            <ul className="space-y-3 text-base text-white">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-op-blauw"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-op-blauw"
                >
                  <TwitterIcon className="h-4 w-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyrightbalk */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          Copyright © 2022 OpenPerspectief. Webdesign en fotografie door Evanne Welling.
        </p>
      </div>
    </footer>
  );
}
