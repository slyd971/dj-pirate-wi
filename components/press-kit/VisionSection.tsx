"use client";

import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type VisionSectionProps = {
  vision: NonNullable<PressKitConfig["vision"]>;
};

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section
      id="vision"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] px-4 py-10 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(var(--pk-accent-rgb)/0.18),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
        <div className="flex min-h-full flex-col">
          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.36em]">
              {vision.eyebrow}
            </div>
            <h2 className="max-w-2xl whitespace-pre-line text-3xl font-black uppercase leading-[1.02] md:text-5xl xl:text-[4rem]">
              {vision.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/74 md:text-xl md:leading-9">
              {vision.intro}
            </p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58 md:text-base md:leading-7">
              {vision.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {vision.stats?.length ? (
            <div className="mt-5 grid grid-cols-3 gap-2.5 md:mt-6 md:gap-3">
              {vision.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="border border-white/10 bg-white/[0.025] px-3 py-4 md:px-4 md:py-5"
                >
                  <div className="text-xl font-black uppercase leading-none text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45 md:text-[9px] md:tracking-[0.26em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {vision.cta ? (
            <a
              href={vision.cta.href}
              target={vision.cta.external ? "_blank" : undefined}
              rel={vision.cta.external ? "noreferrer" : undefined}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--pk-accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:opacity-80 md:px-5 md:py-3"
            >
              {vision.cta.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>

        <div className="relative min-h-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-3 shadow-2xl shadow-black/30 md:rounded-[1.6rem] md:p-5">
          {vision.video ? (
            <div className="relative flex items-center justify-center">
              <video
                className="aspect-[9/16] max-h-[76vh] min-h-[420px] w-full max-w-[360px] rounded-[1rem] bg-black object-cover md:min-h-[560px] md:rounded-[1.25rem]"
                src={vision.video.src}
                poster={vision.video.poster}
                controls
                preload="metadata"
                playsInline
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-4 pb-12 pt-4 md:px-5 md:pt-5">
                <div className="inline-flex rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-md md:text-[10px]">
                  {vision.video.title}
                </div>
              </div>
            </div>
          ) : null}

          {vision.media?.length ? (
            <div className="mt-3 grid grid-cols-3 gap-2 md:mt-4 md:gap-3">
              {vision.media.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-black"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {item.label ? (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-2 pt-8 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/82">
                      {item.label}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {vision.embed ? (
            <div className="mt-3 overflow-hidden rounded-xl border border-[rgb(var(--pk-accent-rgb)/0.24)] bg-[linear-gradient(135deg,rgb(var(--pk-accent-rgb)/0.2),rgba(255,255,255,0.055))] p-2 shadow-[0_18px_48px_rgb(var(--pk-accent-rgb)/0.12)] md:mt-4 md:p-3">
              <iframe
                title={vision.embed.title}
                width="100%"
                height={vision.embed.height ?? 300}
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src={vision.embed.src}
                className="block rounded-lg bg-[rgb(var(--pk-accent-rgb)/0.12)]"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
