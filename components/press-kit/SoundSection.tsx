import type { PressKitConfig } from "@/data/config";

type SoundSectionProps = {
  sound: PressKitConfig["sound"];
};

export function SoundSection({ sound }: SoundSectionProps) {
  const hasEmbed = Boolean(sound.embedUrl);

  return (
    <section
      id="sound"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
              {sound.eyebrow}
            </div>

            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] md:mt-4 md:text-6xl md:leading-[0.92]">
              {sound.title}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-white/65 md:mt-8 md:space-y-5 md:text-base md:leading-7">
              {sound.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 md:mt-10">
              <a
                href={sound.cta.href}
                target={sound.cta.external ? "_blank" : undefined}
                rel={sound.cta.external ? "noreferrer" : undefined}
                className="rounded-full bg-[var(--pk-accent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:px-6 md:py-3 md:text-sm md:tracking-[0.22em]"
              >
                {sound.cta.label}
              </a>
            </div>
          </div>

          {hasEmbed ? (
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.2)] blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:rounded-[2rem] md:p-4">
                <iframe
                  title={sound.embedTitle}
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay; encrypted-media"
                  src={sound.embedUrl}
                  className="rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-6 backdrop-blur-sm md:rounded-[2rem] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--pk-accent-rgb)/0.22),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_18%)]" />
              <div className="relative">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-[11px]">
                  SoundCloud
                </div>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white md:text-4xl">
                  Ouvrir le lien audio
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/62 md:text-base md:leading-7">
                  Le player intégré n&apos;est pas disponible avec ce format de lien, mais l&apos;écoute reste accessible via SoundCloud.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
