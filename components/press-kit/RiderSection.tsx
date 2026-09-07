import type { PressKitConfig } from "@/data/config";

type RiderSectionProps = {
  rider: NonNullable<PressKitConfig["rider"]>;
};

export function RiderSection({ rider }: RiderSectionProps) {
  return (
    <section
      id="rider"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {rider.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase md:text-5xl">
            {rider.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {rider.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-5 md:rounded-[1.5rem] md:p-7"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--pk-accent)]" />
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent-soft)] md:text-[11px] md:tracking-[0.34em]">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-5 text-white/68 md:text-[0.94rem] md:leading-6"
                  >
                    <span className="mt-[0.42em] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.55)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
