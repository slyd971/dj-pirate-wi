import type { PressKitConfig } from "@/data/config";

type AboutSectionProps = {
  about: PressKitConfig["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  const hasSignature = Boolean(about.signatureQuote);
  const hasSupportingText = Boolean(about.supportingText);
  const showTagsBeforeCopy = !hasSignature && !hasSupportingText;
  const tags = (
    <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
      {about.tags.map((tag) => (
        <div
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/60 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]"
        >
          {tag}
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-4 py-10 md:px-6 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgb(var(--pk-accent-rgb)/0.10),transparent_25%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.03),transparent_20%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-6 md:text-xs md:tracking-[0.35em]">
          {about.eyebrow}
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div className="relative">
            <div className="absolute left-0 top-2 h-full w-[2px] bg-[linear-gradient(to_bottom,var(--pk-accent),rgb(var(--pk-accent-rgb)/0.3),transparent)]" />

            <div className="pl-4 md:pl-6">
              <h2 className="whitespace-pre-line text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-6xl md:leading-[0.92]">
                {about.title}
              </h2>

              {showTagsBeforeCopy ? tags : null}

              {hasSignature ? (
                <div className="mt-7 md:mt-10">
                  {about.signatureLabel ? (
                    <div className="mb-2 text-[9px] uppercase tracking-[0.26em] text-white/30 md:mb-3 md:text-[10px] md:tracking-[0.35em]">
                      {about.signatureLabel}
                    </div>
                  ) : null}

                  <p className="text-lg font-semibold leading-[1.35] text-white sm:text-xl md:text-3xl md:leading-[1.4]">
                    "{about.signatureQuote}"
                  </p>

                  <div className="mt-3 h-px w-16 bg-[var(--pk-accent)] md:mt-4 md:w-20" />
                </div>
              ) : null}

              {hasSupportingText ? (
                <p className="mt-6 max-w-md text-sm leading-6 text-white/58 md:mt-8 md:text-lg md:leading-8">
                  {about.supportingText}
                </p>
              ) : null}

              {!showTagsBeforeCopy ? tags : null}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:rounded-[2rem] md:p-10">
            <div className="space-y-4 text-sm leading-6 text-white/72 md:space-y-6 md:text-lg md:leading-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
