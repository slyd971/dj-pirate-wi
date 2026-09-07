"use client";

import Image from "next/image";
import { Globe2, MapPin } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

function ClubItem({
  item,
  iconOverrides,
}: {
  item: string;
  iconOverrides?: PressKitConfig["clubs"]["itemIconOverrides"];
}) {
  for (const [emoji, flag] of Object.entries(iconOverrides ?? {})) {
    if (item.startsWith(emoji)) {
      return (
        <span className="inline-flex items-center gap-1.5">
          <Image
            src={flag.src}
            alt={flag.alt}
            width={20}
            height={14}
            className="inline-block shrink-0 rounded-[2px] object-cover"
          />
          {item.slice(emoji.length)}
        </span>
      );
    }
  }
  return <>{item}</>;
}

type ClubsSectionProps = {
  clubs: PressKitConfig["clubs"];
  brands?: PressKitConfig["brands"];
};

const iconMap = {
  globe: Globe2,
  "map-pin": MapPin,
};

export function ClubsSection({ clubs, brands }: ClubsSectionProps) {
  const inlineBrandLogos =
    brands?.items
      .map((item) => (typeof item === "string" ? undefined : item))
      .filter((item): item is { name: string; logo: string; logoInvert?: boolean } =>
        Boolean(item?.logo)
      ) ?? [];

  return (
    <section
      id="clubs"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {clubs.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            {clubs.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
            {clubs.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {clubs.regions.map((region) => {
            const Icon = iconMap[region.icon];

            return (
              <div key={region.title}>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl">
                  <Icon className="h-5 w-5 text-[var(--pk-accent)] md:h-6 md:w-6" />
                  {region.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:gap-4 md:text-base">
                  {region.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 p-2.5 md:p-3"
                    >
                      <ClubItem
                        item={item}
                        iconOverrides={clubs.itemIconOverrides}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {inlineBrandLogos.length > 0 ? (
          <div className="mt-8 border-t border-white/10 pt-6 md:mt-12 md:pt-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {inlineBrandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex min-h-28 items-center justify-center rounded-lg border border-white/15 bg-black px-4 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)] md:min-h-32 md:px-5"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 w-full max-w-[88%] object-contain opacity-95 [filter:brightness(0)_invert(1)] md:max-h-20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {brands?.feedback ? (
          <div className="mt-8 border-t border-white/10 pt-6 md:mt-12 md:pt-10">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
                {brands.feedback.eyebrow}
              </div>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
                {brands.feedback.title}
              </h3>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
              {brands.feedback.items.map((item) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-4 md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-black uppercase leading-tight text-white">
                        {item.name}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/68">
                    “{item.quote}”
                  </p>
                </article>
              ))}
            </div>

            {brands.feedback.cta ? (
              <div className="mt-6 flex justify-center">
                <a
                  href={brands.feedback.cta.href}
                  target={brands.feedback.cta.external ? "_blank" : undefined}
                  rel={brands.feedback.cta.external ? "noreferrer" : undefined}
                  style={{ backgroundColor: "var(--pk-accent)" }}
                  className="inline-flex items-center rounded-full px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  {brands.feedback.cta.label}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
