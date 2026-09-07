"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import type { GalleryImage } from "@/data/config";

type GalleryClientProps = {
  images: GalleryImage[];
  viewLabel: string;
  downloadLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
};

export function GalleryClient({
  images,
  viewLabel,
  downloadLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: GalleryClientProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img
              loading="lazy"
              decoding="async"
              src={image.src}
              alt={image.alt}
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              style={
                image.position ? { objectPosition: image.position } : undefined
              }
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />

            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/80 opacity-0 group-hover:opacity-100">
              {viewLabel}
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-white"
            aria-label={closeLabel}
          >
            <X />
          </button>

          <button
            type="button"
            onClick={() =>
              setActive(active === 0 ? images.length - 1 : active - 1)
            }
            className="absolute left-6 text-white"
            aria-label={previousLabel}
          >
            <ChevronLeft />
          </button>

          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-full object-contain"
          />

          <button
            type="button"
            onClick={() =>
              setActive(active === images.length - 1 ? 0 : active + 1)
            }
            className="absolute right-6 text-white"
            aria-label={nextLabel}
          >
            <ChevronRight />
          </button>

          <a
            href={images[active].src}
            download
            className="absolute bottom-6 flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            {downloadLabel}
          </a>
        </div>
      )}
    </>
  );
}
