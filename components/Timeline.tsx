import type { Milestone } from "@/lib/data";

type TimelineProps = {
  items: Milestone[];
};

export default function Timeline({ items }: TimelineProps) {
  if (items.length === 0) {
    return (
      <p className="font-tagline italic text-op-body/60">
        [Tijdlijn wordt later toegevoegd]
      </p>
    );
  }

  return (
    <div className="relative">
      {/* Verbindende lijn */}
      <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />

      <ol className="space-y-10">
        {items.map((item, index) => (
          <li key={`${item.year}-${index}`} className="relative flex gap-6">
            {/* Bolletje */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-op-paars shadow-sm" />

            {/* Inhoud */}
            <div className="pb-2 pt-1">
              <span className="font-heading text-sm font-bold text-op-blauw">
                {item.year}
              </span>
              <h3 className="mt-1 font-heading text-base font-bold text-op-paars">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-op-body/70">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
