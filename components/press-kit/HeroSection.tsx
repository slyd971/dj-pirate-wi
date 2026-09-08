"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Disc3, Instagram, Music2, Play, Youtube } from "lucide-react";
import type { PressKitConfig } from "@/data/config";
import type { TemplateVariantId } from "@/data/templates";

type HeroSectionProps = {
  heroVariants: PressKitConfig["heroVariants"];
  heroSocials?: PressKitConfig["heroSocials"];
  variant: TemplateVariantId;
  mobileVariant?: TemplateVariantId;
  socialsPosition?: PressKitConfig["heroSocialsPosition"];
  logo?: PressKitConfig["artist"]["logo"];
};

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v13.17a2.81 2.81 0 1 1-2.81-2.81c.31 0 .61.05.9.15V9.36a5.93 5.93 0 0 0-.9-.07A5.93 5.93 0 1 0 15.82 15V8.33a7.9 7.9 0 0 0 4.64 1.5V6.69h-.87Z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 10.4c2.8-1 5.8-.85 8.4.45"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.7 13c2.2-.65 4.45-.5 6.4.45"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.4 15.45c1.55-.4 3.1-.28 4.4.36"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M10.73 8.72a4.53 4.53 0 0 1 8.46 2.27A3.1 3.1 0 0 1 19 17.2H8.15a2.65 2.65 0 0 1-.42-5.26 3.83 3.83 0 0 1 3-3.22Z" />
      <rect x="3" y="10.35" width="1.3" height="6.85" rx=".65" />
      <rect x="5.1" y="9.45" width="1.3" height="7.75" rx=".65" />
      <rect x="7.2" y="8.7" width="1.3" height="8.5" rx=".65" />
    </svg>
  );
}

function AppleMusicIcon({ className }: { className?: string }) {
  return <Music2 className={className} aria-hidden="true" />;
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14.2 8.3V6.8c0-.72.48-.89.82-.89h2.08V2.18L14.24 2.17c-3.18 0-3.9 2.38-3.9 3.9V8.3H7.9v3.84h2.44V22h3.86v-9.86h3.26l.43-3.84H14.2Z" />
    </svg>
  );
}

const socialIconMap = {
  instagram: Instagram,
  tiktok: TikTokIcon,
  youtube: Youtube,
  spotify: SpotifyIcon,
  soundcloud: SoundCloudIcon,
  "apple-music": AppleMusicIcon,
  facebook: FacebookIcon,
};

const socialColorClassMap = {
  instagram:
    "border-[#E4405F]/40 bg-[linear-gradient(135deg,#F58529_0%,#DD2A7B_55%,#8134AF_100%)] text-white",
  tiktok: "border-white/20 bg-black text-white",
  youtube: "border-[#FF0000]/40 bg-[#FF0000] text-white",
  spotify:
    "border-[rgb(var(--pk-accent-rgb)/0.4)] bg-[var(--pk-accent)] text-white",
  soundcloud: "border-[#FF5500]/40 bg-[#FF5500] text-white",
  "apple-music": "border-[#FA243C]/40 bg-[#FA243C] text-white",
  facebook: "border-[#1877F2]/40 bg-[#1877F2] text-white",
} as const;

const heroReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroContainerReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroImageReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

function getHeroStatGridClass(
  layout: TemplateVariantId,
  statCount: number
) {
  if (layout === "interactive") {
    return statCount <= 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-2";
  }

  if (layout === "showcase") {
    return statCount <= 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4";
  }

  return statCount <= 3
    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
    : "grid-cols-2 lg:grid-cols-4";
}

function getHeroStatValueClass(value: string) {
  const isLongValue = value.trim().length >= 12;

  return isLongValue
    ? "max-w-full text-[1.02rem] font-black uppercase leading-[0.98] text-[var(--pk-accent)] md:text-[1.12rem] xl:text-[1.22rem]"
    : "max-w-[11ch] text-[1.45rem] font-black uppercase leading-[0.92] text-[var(--pk-accent)] md:text-[1.72rem] md:leading-[0.92] xl:text-[1.92rem]";
}

function getHeroStatCardClass(value: string) {
  const isLongValue = value.trim().length >= 12;

  return isLongValue
    ? "rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-3 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 hover:border-white/16 hover:bg-white/[0.05] md:min-h-[7.2rem] md:rounded-[1.45rem] md:px-4 md:py-3.5"
    : "rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-3 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 hover:border-white/16 hover:bg-white/[0.05] md:min-h-[7.2rem] md:rounded-[1.45rem] md:px-4 md:py-3.5";
}

function getHeroAccentSizeClass(accent: string) {
  const len = accent.trim().length;
  if (len >= 16) return "text-[1.05rem] sm:text-[1.35rem] md:text-[1.95rem] xl:text-[2.45rem]";
  return "";
}

function getHeroStatLabelClass(label: string) {
  const isLongLabel = label.trim().length >= 16;

  return isLongLabel
    ? "mt-2 text-[9px] uppercase leading-[1.18] tracking-[0.08em] text-white/48 md:mt-2.5 md:min-h-[2.1rem] md:text-[10px] md:leading-[1.12] md:tracking-[0.12em]"
    : "mt-2 text-[9px] uppercase leading-[1.2] tracking-[0.12em] text-white/48 md:mt-2.5 md:min-h-[2.1rem] md:text-[11px] md:leading-[1.12] md:tracking-[0.14em]";
}

function HeroVariantBody({
  heroVariants,
  heroSocials = [],
  socialsPosition = "after-stats",
  variant,
  logo,
  idOverride,
  compactMobile = false,
}: HeroSectionProps & { idOverride?: string; compactMobile?: boolean }) {
  const hero = heroVariants[variant];
  const hasHeroImage = Boolean(hero.image.src);
  const hasEyebrow = Boolean(hero.eyebrow.trim());
  const hasStats = hero.stats.length > 0;
  const statGridClass = getHeroStatGridClass(variant, hero.stats.length);

  const heroFallback = (
    <div className="relative flex h-[48svh] w-full items-end overflow-hidden rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] md:h-[76svh] md:rounded-[1.4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--pk-accent-rgb)/0.35),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.52)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-xs md:tracking-[0.3em]">
          {hero.image.badge}
        </div>
        <div className="mt-3 max-w-xs text-2xl font-black uppercase leading-tight text-white md:max-w-md md:text-4xl">
          {hero.image.caption}
        </div>
      </div>
    </div>
  );

  const socialLinks = heroSocials.length > 0 && (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-2.5 lg:mx-auto lg:w-fit">
      {heroSocials.map((social) => {
        const Icon = socialIconMap[social.icon];

        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`group flex ${socialsPosition === "before-stats" && !social.iconOnly ? "gap-2 px-4" : "w-9 md:w-10"} h-9 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:brightness-110 md:h-10 ${socialColorClassMap[social.icon]}`}
          >
            <Icon
              className="h-4 w-4 transition group-hover:scale-105 md:h-[18px] md:w-[18px]"
            />
            {socialsPosition === "before-stats" && !social.iconOnly && <span className="text-xs font-semibold">{social.label}</span>}
          </a>
        );
      })}
    </div>
  );

  const proofline = hero.proofline ? (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/42 md:mt-5 md:gap-x-4 md:text-[11px] md:tracking-[0.24em]">
      {hero.proofline}
    </div>
  ) : null;

  if (hero.layout === "interactive") {
    return (
      <section
        id={idOverride}
        className="relative scroll-mt-24 overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0">
          {hasHeroImage ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-full w-full object-cover"
              style={{ height: "100%", objectPosition: hero.image.position ?? "center" }}
            />
          ) : (
            <div className="h-full w-full bg-[var(--pk-bg)]" />
          )}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--pk-accent-rgb)/0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_50%_100%,rgb(var(--pk-accent-rgb)/0.12),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--pk-bg)] via-black/35 to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 py-10 md:min-h-[82svh] md:px-6 md:py-12 lg:min-h-[78svh] lg:justify-start lg:pt-16 lg:pb-8">
          <div className="w-full max-w-3xl">
            {hasEyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
                <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
                {hero.eyebrow}
              </div>
            )}

            <h1 className="mt-5 text-[2.8rem] font-black uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl xl:text-[7.2rem]">
              {hero.title}
              <span className="mt-2 block text-[var(--pk-accent)] md:mt-3">{hero.accent}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/78 md:mt-7 md:text-xl md:leading-8">
              {hero.description}
            </p>
          </div>

          {socialsPosition === "before-stats" && socialLinks}

          {(hero.mediaCard || hasStats) && (
          <div className="mt-6 grid gap-5 lg:mt-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            {hero.mediaCard && (
              <a
                href={hero.mediaCard.href}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left backdrop-blur-sm transition duration-300 hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.14)] md:rounded-[2rem]"
              >
                <img
                  src={hero.mediaCard.imageSrc}
                  alt={hero.mediaCard.imageAlt}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[300px] lg:h-[300px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[var(--pk-accent)] text-white shadow-2xl shadow-black/40 transition duration-300 group-hover:scale-105 group-hover:bg-[var(--pk-accent-strong)] md:h-20 md:w-20">
                    <Play className="ml-0.5 h-6 w-6 fill-current md:h-7 md:w-7" />
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm md:left-5 md:top-5 md:text-[10px]">
                  {hero.mediaCard.label}
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 md:inset-x-5 md:bottom-5">
                  <div>
                    <div className="text-lg font-black uppercase leading-tight text-white md:text-2xl">
                      {hero.mediaCard.title}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60 md:text-xs md:tracking-[0.24em]">
                      {hero.mediaCard.subtitle}
                    </div>
                  </div>
                </div>
              </a>
            )}

            {hasStats && (
              <div className={`grid gap-3 md:gap-4 ${statGridClass}`}>
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`${getHeroStatCardClass(stat.value)} flex flex-col items-center text-center`}
                  >
                    <div className={getHeroStatValueClass(stat.value)}>
                      {stat.value}
                    </div>
                    <div className={getHeroStatLabelClass(stat.label)}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          )}

          {socialsPosition !== "before-stats" && socialLinks}
        </div>
      </section>
    );
  }

  if (hero.layout === "showcase") {
    return (
      <section
        id={idOverride}
        className="relative scroll-mt-24 overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0">
          {hasHeroImage ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-full w-full object-cover"
              style={{ height: "100%", objectPosition: hero.image.position ?? "center" }}
            />
          ) : (
            <div className="h-full w-full bg-[var(--pk-bg)]" />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--pk-accent-rgb)/0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgb(var(--pk-accent-rgb)/0.12),transparent_32%)]" />
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--pk-bg)] via-black/30 to-black/20" />
        </div>

        <div
          className={`relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center px-4 py-10 md:min-h-[84svh] md:px-6 md:py-12 lg:min-h-[82svh] lg:justify-start lg:pt-20 lg:pb-10 ${
            compactMobile ? "items-center justify-end pb-14 text-center md:items-stretch md:justify-start md:pb-10 md:text-left" : ""
          }`}
        >
          <div className={`w-full max-w-3xl ${compactMobile ? "flex flex-col items-center md:block" : ""}`}>
            {hasEyebrow && !compactMobile && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
                <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
                {hero.eyebrow}
              </div>
            )}

            <h1 className="mt-5 text-[2.9rem] font-black uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl xl:text-[7.4rem]">
              {hero.title}
              <span className="mt-2 block text-[var(--pk-accent)] md:mt-3">{hero.accent}</span>
            </h1>

            {hero.genreLine && !compactMobile && (
              <div className="mt-2 text-lg font-black uppercase leading-[1.05] tracking-[0.01em] text-white/92 sm:text-xl md:mt-3 md:text-3xl xl:text-4xl">
                {hero.genreLine}
              </div>
            )}

            {!compactMobile && (
              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/78 md:mt-7 md:text-xl md:leading-8">
                {hero.description}
              </p>
            )}

            <div className={`mt-7 flex flex-wrap gap-2.5 md:mt-9 md:gap-3 ${compactMobile ? "justify-center md:justify-start" : ""}`}>
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "rounded-full bg-[var(--pk-accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                      : "rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10 md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>

            {hero.footerNote && !compactMobile && (
              <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/50 md:mt-12 md:text-[11px] md:tracking-[0.28em]">
                <span className="h-px w-10 bg-white/20 md:w-14" />
                {hero.footerNote}
              </div>
            )}
          </div>

          {socialsPosition === "before-stats" && socialLinks}
          {hasStats && (
            <div className={`mt-8 grid gap-3 md:mt-10 md:gap-4 ${statGridClass}`}>
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`${getHeroStatCardClass(stat.value)} flex flex-col items-center text-center`}
                >
                  <div className={getHeroStatValueClass(stat.value)}>
                    {stat.value}
                  </div>
                  <div className={getHeroStatLabelClass(stat.label)}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {socialsPosition !== "before-stats" && socialLinks}
        </div>
      </section>
    );
  }

  return (
    <section id={idOverride} className="relative scroll-mt-24 overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgb(var(--pk-accent-rgb)/0.22),transparent_24%),radial-gradient(circle_at_82%_8%,rgb(var(--pk-accent-rgb)/0.08),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.035),transparent_30%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--pk-bg)]/15 via-transparent to-[var(--pk-bg)]" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 pb-8 md:px-6 md:pb-12"
        variants={heroContainerReveal}
        initial={false}
        animate="visible"
      >
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.86fr)] lg:gap-10">
          <motion.div className="order-1 relative z-10" variants={heroContainerReveal}>
            {hasEyebrow && (
              <motion.div
                variants={heroReveal}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/68 backdrop-blur-sm md:mb-5 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]"
              >
                <Disc3 className="h-3 w-3 text-[var(--pk-accent)] md:h-3.5 md:w-3.5" />
                {hero.eyebrow}
              </motion.div>
            )}

            {logo?.src ? (
              <motion.div variants={heroReveal} className="mb-4 md:mb-6">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain object-left md:h-28 xl:h-36"
                  style={logo.invert ? { filter: "invert(1)" } : undefined}
                />
              </motion.div>
            ) : null}

            <motion.h1
              variants={heroReveal}
              className="max-w-4xl text-[2.55rem] font-black uppercase leading-[0.9] tracking-[-0.03em] sm:text-5xl md:text-7xl xl:text-[6.9rem]"
            >
              {logo?.src ? null : hero.title}
              <span className={`mt-2 block text-[var(--pk-accent)] md:mt-3 ${getHeroAccentSizeClass(hero.accent)}`}>{hero.accent}</span>
            </motion.h1>

            {hero.genreLine && (
              <motion.div
                variants={heroReveal}
                className="mt-2 text-lg font-black uppercase leading-[1.05] tracking-[0.01em] text-white/92 sm:text-xl md:mt-3 md:text-3xl xl:text-4xl"
              >
                {hero.genreLine}
              </motion.div>
            )}

            <motion.p
              variants={heroReveal}
              className="mt-5 max-w-[40rem] text-[0.96rem] leading-6 text-white/76 md:mt-6 md:text-[1.12rem] md:leading-8"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={heroReveal}
              className="mt-6 grid grid-cols-2 items-center gap-3 md:mt-7 md:flex md:flex-wrap"
            >
              {hero.ctas.map((cta) =>
                cta.href.startsWith("/") ? (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "primary"
                        ? "inline-flex min-w-0 items-center justify-center rounded-full bg-[var(--pk-accent)] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgb(var(--pk-accent-rgb)/0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:text-[11px] md:tracking-[0.22em]"
                        : "inline-flex min-w-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white/82 transition hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/[0.08] hover:text-white md:px-5 md:text-[11px] md:tracking-[0.18em]"
                    }
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.href}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noreferrer" : undefined}
                    className={
                      cta.variant === "primary"
                        ? "inline-flex min-w-0 items-center justify-center rounded-full bg-[var(--pk-accent)] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgb(var(--pk-accent-rgb)/0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-7 md:text-[11px] md:tracking-[0.22em]"
                        : "inline-flex min-w-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white/82 transition hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/[0.08] hover:text-white md:px-5 md:text-[11px] md:tracking-[0.18em]"
                    }
                  >
                    {cta.label}
                  </a>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="pk-hero-visual order-2 relative lg:justify-self-end"
            variants={heroImageReveal}
          >
            <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.15)] blur-3xl md:-left-6 md:h-36 md:w-36" />
            <div className="absolute -right-4 bottom-6 h-28 w-28 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.08)] blur-3xl md:h-36 md:w-36" />

            <div className="relative overflow-hidden rounded-[1.45rem] border border-white/8 bg-white/[0.03] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-sm md:max-w-[34rem] md:rounded-[1.9rem] md:p-2.5">
              {hasHeroImage ? (
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="pk-hero-portrait h-[42svh] w-full rounded-[1.2rem] object-cover md:h-[66svh] md:rounded-[1.5rem]"
                  style={{ objectPosition: hero.image.position ?? "center 22%" }}
                />
              ) : (
                heroFallback
              )}

              <div className="absolute inset-0 rounded-[1.45rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_10%,rgba(0,0,0,0.18)_54%,rgba(0,0,0,0.58)_100%)] md:rounded-[1.9rem]" />
              <div className="absolute inset-0 rounded-[1.45rem] ring-1 ring-[rgb(var(--pk-accent-rgb)/0.08)] md:rounded-[1.9rem]" />

              {(hero.image.badge || hero.image.caption) && (
                <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/10 bg-black/38 p-4 backdrop-blur-md md:inset-x-6 md:bottom-6 md:rounded-[1.3rem] md:p-4.5">
                  {hero.image.badge && (
                    <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-[10px] md:tracking-[0.3em]">
                      {hero.image.badge}
                    </div>
                  )}
                  {hero.image.caption && (
                    <div className="mt-1.5 text-[1.15rem] font-black uppercase leading-[0.95] text-white md:text-[1.85rem]">
                      {hero.image.caption}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {socialsPosition === "before-stats" && socialLinks}
        {hasStats && (
          <motion.div
            variants={heroReveal}
            className={`mt-5 grid gap-2.5 md:mt-7 md:gap-3 ${statGridClass}`}
          >
            {hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${getHeroStatCardClass(stat.value)} pk-hero-stat-card flex flex-col items-center justify-center text-center`}
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <div className={getHeroStatValueClass(stat.value)}>{stat.value}</div>
                <div className={getHeroStatLabelClass(stat.label)}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {proofline ? <motion.div variants={heroReveal}>{proofline}</motion.div> : null}
        {socialsPosition !== "before-stats" && socialLinks ? <motion.div variants={heroReveal}>{socialLinks}</motion.div> : null}
      </motion.div>
    </section>
  );
}

export function HeroSection({ mobileVariant, variant, ...rest }: HeroSectionProps) {
  if (mobileVariant && mobileVariant !== variant) {
    return (
      <div id="home">
        <div className="md:hidden">
          <HeroVariantBody {...rest} variant={mobileVariant} compactMobile />
        </div>
        <div className="hidden md:block">
          <HeroVariantBody {...rest} variant={variant} />
        </div>
      </div>
    );
  }

  return <HeroVariantBody {...rest} variant={variant} idOverride="home" />;
}
