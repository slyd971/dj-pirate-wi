"use client";

import { ChevronUp, LayoutTemplate, Palette, Type, UserRound } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  getFontPresetEntries,
  type FontPreset,
  type FontPresetId,
} from "@/data/font-presets";
import { clientIntakeConfig } from "@/data/config";
import { getPressKitEntries, type ArtistId } from "@/data/press-kits";
import {
  getTemplateThemeEntries,
  getTemplateVariantEntries,
  type TemplateId,
  type TemplateTheme,
  type TemplateVariant,
  type TemplateVariantId,
} from "@/data/templates";

type DevControlPanelProps = {
  activeClientId: ArtistId;
  activeThemeId: TemplateId;
  activeFontPresetId: FontPresetId;
  activeVariantId?: TemplateVariantId;
};

function SectionButton({
  label,
  isActive,
  onClick,
  accent,
  sampleStyle,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  accent?: string;
  sampleStyle?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1.5 text-left transition ${
        isActive
          ? "border-white/30 bg-white/12 text-white"
          : "border-white/10 bg-white/5 text-white/78 hover:border-white/20 hover:bg-white/8 hover:text-white"
      }`}
      aria-pressed={isActive}
    >
      <div className="flex items-center gap-2">
        {accent ? (
          <span
            className="h-3 w-3 shrink-0 rounded-full border border-white/15"
            style={{ backgroundColor: accent }}
          />
        ) : null}
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.16em]"
          style={sampleStyle}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

export function DevControlPanel({
  activeClientId,
  activeThemeId,
  activeFontPresetId,
  activeVariantId,
}: DevControlPanelProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const artists = getPressKitEntries();
  const themes = getTemplateThemeEntries();
  const variants = getTemplateVariantEntries();
  const fontPresets = getFontPresetEntries();
  const [isOpen, setIsOpen] = useState(false);

  const activeTheme =
    themes.find((theme) => theme.id === activeThemeId) ?? themes[0];
  const activeVariant = activeVariantId
    ? variants.find((variant) => variant.id === activeVariantId) ?? variants[0]
    : undefined;
  const activeFontPreset =
    fontPresets.find((fontPreset) => fontPreset.id === activeFontPresetId) ??
    fontPresets[0];

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateFont = (fontPresetId: FontPresetId) => {
    const nextFontPreset =
      fontPresets.find((fontPreset) => fontPreset.id === fontPresetId) ??
      fontPresets[0];

    document.documentElement.style.setProperty(
      "--pk-font-body",
      nextFontPreset.bodyFamily
    );
    document.documentElement.style.setProperty(
      "--pk-font-display",
      nextFontPreset.displayFamily
    );

    updateParam("font", fontPresetId);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] w-[min(92vw,300px)] md:bottom-6 md:right-6">
      <div className="rounded-[1.2rem] border border-white/10 bg-black/78 p-2.5 shadow-2xl shadow-black/35 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-white/20 hover:bg-white/8"
          aria-expanded={isOpen}
          aria-controls="dev-control-panel"
        >
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              Sélecteur local
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
              <span>{activeVariant?.label ?? "Galerie"}</span>
              <span className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full border border-white/15"
                  style={{ backgroundColor: activeTheme.accent }}
                />
                {activeTheme.label}
              </span>
              <span style={{ fontFamily: activeFontPreset.displayFamily }}>
                {activeFontPreset.label}
              </span>
            </div>
          </div>

          <ChevronUp
            className={`h-4 w-4 text-white/65 transition ${isOpen ? "rotate-0" : "rotate-180"}`}
          />
        </button>

        {isOpen && (
          <div id="dev-control-panel" className="mt-2 grid gap-1">
            {activeVariant ? (
              <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                <div className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                  <UserRound className="h-3.5 w-3.5 text-white/75" />
                  Artiste
                </div>
                <div className="flex flex-wrap gap-1">
                  {artists.map((artist) => (
                    <SectionButton
                      key={artist.id}
                      label={artist.label}
                      isActive={artist.id === activeClientId}
                      onClick={() => updateParam("client", artist.id)}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {activeVariant ? (
              <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                <div className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                  <LayoutTemplate className="h-3.5 w-3.5 text-white/75" />
                  Modèle
                </div>
                <div className="flex flex-wrap gap-1">
                  {variants.map((variant: TemplateVariant) => (
                    <SectionButton
                      key={variant.id}
                      label={variant.label}
                      isActive={variant.id === activeVariantId}
                      onClick={() => updateParam("variant", variant.id)}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <div className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                <Palette className="h-3.5 w-3.5 text-white/75" />
                Couleur
              </div>
              <div className="flex flex-wrap gap-1">
                {themes.map((theme: TemplateTheme) => (
                  <SectionButton
                    key={theme.id}
                    label={theme.label}
                    accent={theme.accent}
                    isActive={theme.id === activeThemeId}
                    onClick={() => updateParam("template", theme.id)}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <div className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                <Type className="h-3.5 w-3.5 text-white/75" />
                Police
              </div>
              <div className="flex flex-wrap gap-1">
                {fontPresets.map((fontPreset: FontPreset) => (
                  <SectionButton
                    key={fontPreset.id}
                    label={fontPreset.label}
                    isActive={fontPreset.id === activeFontPresetId}
                    onClick={() => updateFont(fontPreset.id)}
                    sampleStyle={{ fontFamily: fontPreset.displayFamily }}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                Formulaire
              </div>
              <div className="grid gap-1 text-[11px] text-white/72">
                <div>
                  Source du formulaire: {clientIntakeConfig.googleAppsScript.projectDirectory}
                </div>
                <div className="break-all font-mono text-[10px] text-white/60">
                  {clientIntakeConfig.importWorkflow.command}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
