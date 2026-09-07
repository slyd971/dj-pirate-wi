import type { PressKitConfig } from "@/data/config";

type SpotifySectionProps = {
  spotify: PressKitConfig["spotify"];
};

export function SpotifySection({ spotify }: SpotifySectionProps) {
  const iframeStyle = spotify.useThemeColor
    ? { filter: "hue-rotate(81deg) saturate(1.35)" }
    : undefined;

  return (
    <section
      id="spotify"
      className="relative scroll-mt-24 overflow-hidden bg-black px-4 pb-8 pt-10 md:px-6 md:pb-16 md:pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(var(--pk-accent-rgb)/0.09),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_22%),radial-gradient(circle_at_50%_100%,rgb(var(--pk-accent-rgb)/0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 md:gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.4em]">
              {spotify.eyebrow}
            </div>

            <h2 className="max-w-3xl text-[2rem] font-black uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
              {spotify.title}
            </h2>
          </div>

          <div className="max-w-xl lg:pt-2">
            <p className="text-sm leading-6 text-white/60 md:text-lg md:leading-8">
              {spotify.description}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:mt-10 md:gap-6 xl:grid-cols-3">
          {spotify.playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d_0%,#050505_100%)] p-2.5 transition duration-300 hover:border-[rgb(var(--pk-accent-rgb)/0.3)] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.08)] md:rounded-[1.7rem] md:p-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--pk-accent-rgb)/0.08),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative mb-2 flex items-center justify-between gap-2 md:mb-3 md:gap-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/62 md:text-[11px] md:tracking-[0.28em]">
                  {playlist.title}
                </p>

                <div className="shrink-0 rounded-full border border-[rgb(var(--pk-accent-rgb)/0.35)] bg-[rgb(var(--pk-accent-rgb)/0.1)] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--pk-accent)] md:px-3 md:text-[9px] md:tracking-[0.22em]">
                  {spotify.badgeLabel}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1rem] border border-white/10 bg-black md:rounded-[1.2rem]">
                <iframe
                  title={playlist.title}
                  src={playlist.embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block h-[152px] w-full md:h-[352px]"
                  style={iframeStyle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
