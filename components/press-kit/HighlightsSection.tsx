import Image from "next/image";
import type { PressKitConfig } from "@/data/config";

type HighlightsSectionProps = {
  highlights: NonNullable<PressKitConfig["highlights"]>;
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section
      id="highlights"
      className="scroll-mt-24 bg-[#070707] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {highlights.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase leading-tight md:text-5xl">
            {highlights.title}
          </h2>
          {highlights.intro ? (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62 md:text-base md:leading-7">
              {highlights.intro}
            </p>
          ) : null}
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          {highlights.items.map((item, index) => (
            <article
              key={`${item.title}-${item.venue}`}
              className="group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.025] transition hover:border-[rgb(var(--pk-accent-rgb)/0.45)] hover:bg-white/[0.04]"
            >
              {item.images && item.images.length > 0 ? (
                <div
                  className={
                    item.images.length > 1
                      ? "grid aspect-[16/7] grid-cols-2 gap-1 overflow-hidden"
                      : "aspect-[16/7] overflow-hidden"
                  }
                >
                  {item.images.slice(0, 2).map((image) => (
                    <div key={image.src} className="relative min-h-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="p-5 md:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent)] md:text-[11px] md:tracking-[0.32em]">
                      2025 / {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--pk-accent)] shadow-[0_0_24px_rgb(var(--pk-accent-rgb)/0.65)]" />
                </div>

                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/46">
                  {item.venue}
                </div>
                {item.description ? (
                  <p className="mt-4 text-sm leading-6 text-white/64 md:text-[0.95rem] md:leading-7">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
