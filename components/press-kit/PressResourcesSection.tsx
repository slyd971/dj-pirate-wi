"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type PressResourcesSectionProps = {
  press: NonNullable<PressKitConfig["press"]>;
};

function CopyBioBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — no-op.
    }
  };

  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-5 md:rounded-[1.5rem] md:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent-soft)] md:text-[11px] md:tracking-[0.34em]">
          {label}
        </h3>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/82 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copié
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copier
            </>
          )}
        </button>
      </div>
      <p className="text-sm leading-6 text-white/68 md:text-[0.94rem] md:leading-7">
        {text}
      </p>
    </div>
  );
}

export function PressResourcesSection({ press }: PressResourcesSectionProps) {
  return (
    <section
      id="press"
      className="scroll-mt-24 bg-black px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {press.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase md:text-5xl">
            {press.title}
          </h2>
          {press.description ? (
            <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
              {press.description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {press.downloads.map((download) => (
            <a
              key={download.label}
              href={download.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-5 transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:bg-white/[0.05] md:rounded-[1.5rem] md:p-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pk-accent-rgb)/0.18)] text-[var(--pk-accent-soft)] md:h-14 md:w-14 md:rounded-2xl">
                <Download className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-black uppercase leading-tight text-white md:text-base">
                  {download.label}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  {download.format}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
          <CopyBioBlock label="Bio courte" text={press.bios.short} />
          <CopyBioBlock label="Bio longue" text={press.bios.long} />
        </div>
      </div>
    </section>
  );
}
