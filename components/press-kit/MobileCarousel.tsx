"use client";

import { Children, useRef, useState, type ReactNode } from "react";

type MobileCarouselProps = {
  children: ReactNode;
  /** Classes for the scroll track; must stay a snap slider below md and may switch to a grid above. */
  className: string;
  label: string;
  onActiveChange?: (index: number) => void;
};

export function MobileCarousel({
  children,
  className,
  label,
  onActiveChange,
}: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = Children.toArray(children).length;

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    let nextIndex = 0;

    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
      nextIndex = items.length - 1;
    } else {
      const trackLeft =
        track.getBoundingClientRect().left +
        parseFloat(getComputedStyle(track).paddingLeft);
      let closest = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(item.getBoundingClientRect().left - trackLeft);
        if (distance < closest) {
          closest = distance;
          nextIndex = index;
        }
      });
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
      onActiveChange?.(nextIndex);
    }
  };

  const goTo = (index: number) => {
    const item = trackRef.current?.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <>
      <div ref={trackRef} onScroll={handleScroll} className={className}>
        {children}
      </div>

      {count > 1 && (
        <div
          role="group"
          aria-label={label}
          className="mt-4 flex justify-center gap-1 md:hidden"
        >
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${index + 1} / ${count}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className="p-1.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-5 bg-[var(--pk-accent)]"
                    : "w-1.5 bg-white/25"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
