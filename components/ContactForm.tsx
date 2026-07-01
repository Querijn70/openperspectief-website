"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="naam" className="mb-1 block text-sm font-medium text-op-body">
          Naam
        </label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-op-body transition-colors focus:border-op-blauw focus:outline-none focus:ring-2 focus:ring-op-blauw/20"
          placeholder="Uw naam"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-op-body">
          E-mailadres
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-op-body transition-colors focus:border-op-blauw focus:outline-none focus:ring-2 focus:ring-op-blauw/20"
          placeholder="uw@email.nl"
        />
      </div>
      <div>
        <label htmlFor="bericht" className="mb-1 block text-sm font-medium text-op-body">
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-op-body transition-colors focus:border-op-blauw focus:outline-none focus:ring-2 focus:ring-op-blauw/20"
          placeholder="Uw bericht..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-op-blauw px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-op-blauw-dark sm:w-auto"
      >
        Verstuur bericht
      </button>
    </form>
  );
}
