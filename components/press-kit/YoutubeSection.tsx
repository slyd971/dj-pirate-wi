"use client";

import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type YoutubeSectionProps = {
  youtube: NonNullable<PressKitConfig["youtube"]>;
};

export function YoutubeSection({ youtube }: YoutubeSectionProps) {
  const gridClass =
    youtube.items.length === 1
      ? "mx-auto grid max-w-5xl gap-4"
      : youtube.items.length === 2
        ? "grid gap-5 lg:grid-cols-2 lg:gap-6"
        : "grid gap-4 md:grid-cols-3 md:gap-5";

  return (
    <section
      id="youtube"
      className="relative scroll-mt-24 overflow-hidden bg-black px-4 py-10 md:px-6 md:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.12),transparent_28%),radial-gradient(circle_at_80%_90%,rgb(var(--pk-accent-rgb)/0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end md:gap-5">
          <div className="max-w-3xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.35em]">
              {youtube.eyebrow}
            </div>
            <h2 className="whitespace-pre-line text-3xl font-black uppercase leading-[0.95] md:text-6xl">
              {youtube.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
              {youtube.description}
            </p>
          </div>

          <a
            href={youtube.cta.href}
            target={youtube.cta.external ? "_blank" : undefined}
            rel={youtube.cta.external ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-sm md:tracking-[0.28em]"
          >
            {youtube.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className={gridClass}>
          {youtube.items.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] md:rounded-[1.5rem]"
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent)]">
                  {video.title}
                </div>
                {video.description ? (
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {video.description}
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
