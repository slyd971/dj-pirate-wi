"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X as CloseIcon } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type HeaderProps = {
  artist: PressKitConfig["artist"];
  navigation: PressKitConfig["navigation"];
  ui: PressKitConfig["ui"];
  homeHref?: string;
};

export function Header({ artist, navigation, ui, homeHref = "/" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const lastScrollY = useRef(0);
  const stageLabelParts = artist.stageLabel
    .split("•")
    .map((part) => part.trim())
    .filter(Boolean);
  const desktopStageLabelLines = [
    stageLabelParts.slice(0, 2).join(" • "),
    stageLabelParts.slice(2).join(" • "),
  ].filter(Boolean);
  const hasLogoImage = artist.logo.src.trim().length > 0;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) < 8) return;

      const shouldBeCompact = currentScrollY >= 20;

      setIsHeaderVisible(true);
      setIsHeaderCompact(shouldBeCompact);

      if (menuOpen) {
        setMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const mobileMenu = menuOpen && (
    <div className="absolute left-0 right-0 top-full z-[100] border-t border-white/10 bg-black lg:hidden">
      <nav className="flex flex-col items-end gap-2.5 px-4 py-3 text-right">
        {navigation.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:text-[var(--pk-accent)]"
          >
            {item.label}
          </a>
        ))}
        <a
          href={navigation.cta.href}
          onClick={() => setMenuOpen(false)}
          className="text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:text-[var(--pk-accent)]"
        >
          {navigation.cta.label}
        </a>
      </nav>
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1720px] items-center justify-between px-3 transition-all duration-300 sm:px-4 md:px-10 ${
          isHeaderCompact ? "h-[58px] md:h-[68px]" : "h-[58px] md:h-[80px]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <Link href={homeHref} className="-ml-2 shrink-0 md:-ml-4">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ${
                isHeaderCompact
                  ? "h-8 w-[128px] md:h-9 md:w-[152px]"
                  : "h-8 w-[128px] md:h-11 md:w-[172px]"
              }`}
            >
              {hasLogoImage ? (
                <img
                  src={artist.logo.src}
                  alt={artist.logo.alt}
                  className="w-auto max-w-none shrink-0 object-contain object-left"
                  style={{
                    height: `${artist.logo.scale ?? 175}%`,
                    filter: artist.logo.invert ? "invert(1)" : undefined,
                  }}
                />
              ) : (
                <div className="flex min-w-0 items-center leading-none text-white">
                  <span
                    className={`truncate font-black uppercase tracking-[0.08em] ${
                      isHeaderCompact
                        ? "text-[0.94rem] md:text-[1.05rem]"
                        : "text-[1rem] md:text-[1.12rem]"
                    }`}
                  >
                    {artist.name}
                  </span>
                </div>
              )}
            </div>
          </Link>

          <div className="hidden max-w-[240px] flex-col text-[10px] font-medium uppercase leading-[1.35] tracking-[0.26em] text-white/48 xl:flex">
            {desktopStageLabelLines.map((line) => (
              <span key={line} className="block whitespace-normal">
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6 xl:gap-8">
          <nav className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/76 lg:flex xl:gap-8">
            {navigation.items.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={navigation.cta.href}
            aria-label={`${navigation.cta.label} (menu compact)`}
            className={`inline-flex rounded-full bg-[var(--pk-accent)] font-semibold uppercase text-white transition-all duration-300 hover:bg-[var(--pk-accent-strong)] lg:hidden ${
              isHeaderCompact
                ? "px-2.5 py-2 text-[9px] tracking-[0.08em]"
                : "px-2.5 py-2 text-[9px] tracking-[0.08em] sm:px-4 sm:py-2.5 sm:text-[10px] sm:tracking-[0.2em]"
            }`}
          >
            {navigation.cta.label}
          </a>

          <a
            href={navigation.cta.href}
            className={`hidden rounded-full border border-[rgb(var(--pk-accent-rgb)/0.28)] bg-[var(--pk-accent)] font-semibold uppercase text-white shadow-[0_14px_36px_rgb(var(--pk-accent-rgb)/0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] lg:inline-flex ${
              isHeaderCompact
                ? "px-4.5 py-2 text-[10px] tracking-[0.18em]"
                : "px-6 py-2.5 text-[11px] tracking-[0.22em]"
            }`}
          >
            {navigation.cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:h-10 md:w-10 lg:hidden"
            aria-label={menuOpen ? ui.closeMenuLabel : ui.openMenuLabel}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
