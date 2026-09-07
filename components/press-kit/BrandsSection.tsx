import type { PressKitConfig } from "@/data/config";

type BrandItem = PressKitConfig["brands"]["items"][number];

type BrandsSectionProps = {
  brands: PressKitConfig["brands"];
};

function BrandCard({
  item,
  itemLabel,
  hideItemText,
  hideItemFrame,
}: {
  item: BrandItem;
  itemLabel: string;
  hideItemText?: boolean;
  hideItemFrame?: boolean;
}) {
  const name = typeof item === "string" ? item : item.name;
  const logo = typeof item === "string" ? undefined : item.logo;
  const logoInvert = typeof item === "string" ? false : item.logoInvert;
  const href = typeof item === "string" ? undefined : item.href;
  const cardClassName = hideItemFrame
    ? "group flex h-full flex-col justify-center"
    : "group flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.015] p-5 backdrop-blur-sm transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.12)] md:rounded-[1.4rem] md:p-6";

  const inner = (
    <div className={cardClassName}>
      {!hideItemText && (
        <div>
          <div className="text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
            {itemLabel}
          </div>
          <div className="mt-2 text-sm font-black uppercase leading-tight md:text-base">
            {name}
          </div>
        </div>
      )}
      {logo && (
        <div className={`flex flex-1 items-center justify-center ${hideItemText ? "py-0" : "py-6 md:py-8"}`}>
          <img
            src={logo}
            alt={name}
            className={`${hideItemText ? "max-h-72" : "max-h-48 md:max-h-64"} w-full object-contain${logoInvert ? " invert" : ""}`}
            loading="lazy"
          />
        </div>
      )}
      {!hideItemText && (
        <div className="h-px w-[65%] bg-[rgb(var(--pk-accent-rgb)/0.6)] transition group-hover:w-[80%]" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={name}>
        {inner}
      </a>
    );
  }
  return <div key={name}>{inner}</div>;
}

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section
      id="brands"
      className="relative scroll-mt-24 overflow-hidden bg-black px-4 py-10 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgb(var(--pk-accent-rgb)/0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgb(var(--pk-accent-rgb)/0.06),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-6 md:gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div>
            {brands.eyebrow && (
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.36em]">
                {brands.eyebrow}
              </div>
            )}

            <h2 className="max-w-2xl whitespace-pre-line text-3xl font-black uppercase leading-[1.02] tracking-tight md:text-4xl xl:text-[3.4rem]">
              {brands.title}
            </h2>
          </div>

          <div className="xl:pt-2">
            <p className="max-w-xl text-sm leading-6 text-white/70 md:text-lg md:leading-8">
              {brands.intro}
            </p>

            {brands.supportingText && (
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:mt-4 md:text-lg md:leading-8">
                {brands.supportingText}
              </p>
            )}
          </div>
        </div>

        {brands.categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-2.5">
            {brands.categories.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] text-white/55 md:px-4 md:text-[9px] md:tracking-[0.28em]"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <div className={`mt-6 grid items-stretch gap-4 md:mt-8 ${brands.fit ? "xl:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {brands.items.map((item) => {
              const key = typeof item === "string" ? item : item.name;
              return (
                <BrandCard
                  key={key}
                  item={item}
                  itemLabel={brands.itemLabel}
                  hideItemText={brands.hideItemText}
                  hideItemFrame={brands.hideItemFrame}
                />
              );
            })}
          </div>

          {brands.fit && (
            <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgb(var(--pk-accent-rgb)/0.12)_0%,rgba(255,255,255,0.02)_100%)] p-5 backdrop-blur-sm md:rounded-[1.4rem] md:p-6">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-xs md:tracking-[0.34em]">
                  {brands.fit.eyebrow}
                </div>

                <h3 className="mt-4 text-lg font-black uppercase leading-[1.2] md:mt-5 md:text-2xl">
                  {brands.fit.title}
                </h3>

                <div className="mt-4 space-y-3 text-sm leading-6 text-white/60 md:mt-5 md:space-y-4">
                  {brands.fit.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
