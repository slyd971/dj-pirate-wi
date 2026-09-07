"use client";

import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import type { PressKitConfig } from "@/data/config";

type VideoSectionProps = {
  videos: PressKitConfig["videos"];
  maxItems?: number;
  headingLevel?: "h1" | "h2";
};

function getVideoAspectClass(video: PressKitConfig["videos"]["items"][number]) {
  return video.source === "youtube" || video.aspect === "landscape"
    ? "aspect-video"
    : "aspect-[9/16]";
}

function getVideoObjectClass(video: PressKitConfig["videos"]["items"][number]) {
  return video.aspect === "landscape" ? "object-contain" : "object-cover";
}

export function VideoSection({ videos, maxItems, headingLevel: Heading = "h2" }: VideoSectionProps) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const previewInitializedRefs = useRef<Record<string, boolean>>({});
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [currentTimes, setCurrentTimes] = useState<Record<string, number>>({});
  const [durations, setDurations] = useState<Record<string, number>>({});
  const displayedVideos =
    typeof maxItems === "number" ? videos.items.slice(0, maxItems) : videos.items;

  const pauseOtherVideos = (currentVideoId: string) => {
    Object.entries(videoRefs.current).forEach(([videoId, element]) => {
      if (videoId !== currentVideoId && element && !element.paused) {
        element.pause();
      }
    });
  };

  const handlePlay = (videoId: string) => {
    pauseOtherVideos(videoId);
    setActiveVideoId(videoId);
  };

  const handlePause = (videoId: string) => {
    if (activeVideoId === videoId) {
      setActiveVideoId(null);
    }
  };

  const toggleVideo = async (videoId: string) => {
    const video = videoRefs.current[videoId];

    if (!video) return;

    if (!video.paused) {
      video.pause();
      setActiveVideoId(null);
      return;
    }

    pauseOtherVideos(videoId);

    try {
      await video.play();
      setActiveVideoId(videoId);
    } catch {
      setActiveVideoId(null);
    }
  };

  const initializePreviewFrame = (videoId: string, hasPoster: boolean) => {
    if (hasPoster || previewInitializedRefs.current[videoId]) return;

    const video = videoRefs.current[videoId];
    if (!video) return;

    previewInitializedRefs.current[videoId] = true;

    const targetTime =
      Number.isFinite(video.duration) && video.duration > 0
        ? Math.min(0.05, video.duration / 2)
        : 0.05;

    try {
      video.currentTime = targetTime;
    } catch {
      previewInitializedRefs.current[videoId] = false;
    }
  };

  const formatTime = (value: number) => {
    if (!Number.isFinite(value) || value < 0) return "0:00";
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleTimeUpdate = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    setCurrentTimes((previous) => ({
      ...previous,
      [videoId]: video.currentTime,
    }));
  };

  const handleLoadedMetadata = (videoId: string, hasPoster: boolean) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    setDurations((previous) => ({
      ...previous,
      [videoId]: video.duration,
    }));

    initializePreviewFrame(videoId, hasPoster);
  };

  const handleSeek = (videoId: string, value: number) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    video.currentTime = value;
    setCurrentTimes((previous) => ({
      ...previous,
      [videoId]: value,
    }));
  };

  return (
    <section
      id="videos"
      className="relative scroll-mt-24 overflow-hidden bg-[#080808] px-4 py-8 md:px-6 md:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgb(var(--pk-accent-rgb)/0.12),transparent_24%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.04),transparent_22%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end md:gap-5">
          <div className="max-w-3xl">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.35em]">
              {videos.eyebrow}
            </div>
            <Heading className="text-3xl font-black uppercase leading-[0.95] md:text-6xl">
              {videos.title}
            </Heading>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
              {videos.description}
            </p>
          </div>

          {videos.cta ? (
            <a
              href={videos.cta.href}
              target={videos.cta.external ? "_blank" : undefined}
              rel={videos.cta.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-sm md:tracking-[0.28em]"
            >
              {videos.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
          {displayedVideos.map((video) => {
            const hasPoster = Boolean(video.poster);
            const aspectClass = getVideoAspectClass(video);
            const objectClass = getVideoObjectClass(video);

            return (
              <article
                key={video.id}
                className="group mx-auto flex h-full w-full max-w-[22rem] flex-col overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 backdrop-blur-sm transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.14)] md:max-w-none md:rounded-[1.7rem]"
              >
                <div className={`relative ${aspectClass} bg-black`}>
                  {video.source === "youtube" ? (
                    <>
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                      <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md md:left-4 md:top-4 md:text-[10px]">
                        {video.title}
                      </div>
                    </>
                  ) : (
                    <>
                      {activeVideoId !== video.id && hasPoster && (
                        <img
                          src={video.poster}
                          alt={video.title}
                          className={`absolute inset-0 z-0 h-full w-full ${objectClass}`}
                        />
                      )}

                      <video
                        ref={(element) => {
                          videoRefs.current[video.id] = element;
                        }}
                        className={`pointer-events-none h-full w-full ${objectClass} ${
                          activeVideoId === video.id || !hasPoster
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        src={video.src}
                        controls={false}
                        preload={hasPoster ? "metadata" : "auto"}
                        playsInline
                        onPlay={() => handlePlay(video.id)}
                        onPause={() => handlePause(video.id)}
                        onEnded={() => setActiveVideoId(null)}
                        onTimeUpdate={() => handleTimeUpdate(video.id)}
                        onLoadedMetadata={() =>
                          handleLoadedMetadata(video.id, hasPoster)
                        }
                      />

                      {activeVideoId !== video.id && (
                        <button
                          type="button"
                          onClick={() => void toggleVideo(video.id)}
                          aria-label={`Play ${video.title}`}
                          className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition hover:bg-black/20"
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:scale-105 hover:border-white/30 hover:bg-[var(--pk-accent)] md:h-16 md:w-16">
                            <Play className="ml-0.5 h-6 w-6 fill-current md:h-7 md:w-7" />
                          </span>
                        </button>
                      )}

                      <div
                        className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/75 to-transparent px-3 pb-3 pt-12 transition-opacity duration-300 md:px-4 md:pb-4 ${
                          activeVideoId === video.id
                            ? "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                            : "opacity-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => void toggleVideo(video.id)}
                            aria-label={
                              activeVideoId === video.id
                                ? `Pause ${video.title}`
                                : `Play ${video.title}`
                            }
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-white/25 hover:bg-[var(--pk-accent)]"
                          >
                            {activeVideoId === video.id ? (
                              <Pause className="h-4 w-4 fill-current" />
                            ) : (
                              <Play className="ml-0.5 h-4 w-4 fill-current" />
                            )}
                          </button>

                          <input
                            type="range"
                            min={0}
                            max={durations[video.id] || 0}
                            step={0.1}
                            value={Math.min(
                              currentTimes[video.id] || 0,
                              durations[video.id] || 0
                            )}
                            onChange={(event) =>
                              handleSeek(video.id, Number(event.target.value))
                            }
                            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-[var(--pk-accent)]"
                          />

                          <div className="min-w-[72px] text-right text-[10px] font-semibold tabular-nums text-white/72 md:text-[11px]">
                            {formatTime(currentTimes[video.id] || 0)} /{" "}
                            {formatTime(durations[video.id] || 0)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
