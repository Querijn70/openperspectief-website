"use client";

import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const fieldClass =
    "w-full border-0 border-b-2 border-gray-200 bg-gray-50/80 px-0 py-3 text-base text-op-body transition-all duration-200 placeholder:text-op-body/30 focus:border-op-blauw focus:bg-white focus:outline-none";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-op-body/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label htmlFor="naam" className={labelClass}>Naam</label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          className={fieldClass}
          placeholder="Uw naam"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>E-mailadres</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={fieldClass}
          placeholder="uw@email.nl"
        />
      </div>

      <div>
        <label htmlFor="bericht" className={labelClass}>Bericht</label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          className={`${fieldClass} resize-none`}
          placeholder="Uw bericht..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-op-blauw px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-x-0.5 hover:shadow-lg active:translate-x-0 sm:w-auto"
        >
          Verstuur bericht
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
