"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type GalleryPreviewSectionProps = {
  gallery: PressKitConfig["gallery"];
  galleryHref: string;
};

export function GalleryPreviewSection({
  gallery,
  galleryHref,
}: GalleryPreviewSectionProps) {
  const regularImages = gallery.images
    .filter((img) => !img.previewOnly && !img.hideFromPreview)
    .slice(0, 3);
  const previewImages = [...regularImages, ...gallery.images.filter((img) => img.previewOnly)];

  return (
    <section
      id="gallery"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end md:gap-5">
        <div>
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.35em]">
            {gallery.title}
          </div>
          <h2 className="text-3xl font-black uppercase leading-[0.95] md:text-6xl">
            {gallery.homepageTitle}
          </h2>
        </div>

        <Link
          href={galleryHref}
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-sm md:tracking-[0.28em]"
        >
          {gallery.homepageCtaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
        {previewImages.map((image, index) => (
          <Link
            key={image.src}
            href={galleryHref}
            className={`${image.size ?? (index === 0 ? "md:col-span-2 md:row-span-2" : "")} group relative block overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 md:rounded-[2rem]`}
          >
            <div
              className="absolute inset-0 transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${encodeURI(image.src)})`,
                backgroundSize: image.previewScale
                  ? `${image.previewScale * 100}%`
                  : "cover",
                backgroundPosition:
                  image.position ?? `center ${image.previewOffsetY ?? "50%"}`,
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </Link>
        ))}
      </div>
    </section>
  );
}
