import { getClients, getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import type { ClientSlug } from "@/data/clients";
import type { PressKitConfig } from "@/data/config";
import type { TemplateId, TemplateVariantId } from "@/data/templates";

export type ArtistId = ClientSlug;

export type PressKitEntry = {
  id: ArtistId;
  label: string;
  config: PressKitConfig;
  defaultTheme: TemplateId;
  defaultVariant: TemplateVariantId;
};

const pressKitEntries = new Map<ArtistId, PressKitEntry>(
  getClients().map((client) => [
    client.slug as ArtistId,
    {
      id: client.slug as ArtistId,
      label: client.name,
      config: client.pressKit,
      defaultTheme: client.defaultTheme,
      defaultVariant: client.defaultVariant,
    },
  ])
);

export function getPressKitEntries(): PressKitEntry[] {
  return getClients()
    .filter((client) => !client.hideFromSwitcher)
    .map((client) => {
      const entry = pressKitEntries.get(client.slug as ArtistId);

      if (!entry) {
        throw new Error(`Client "${client.slug}" is missing from press kit entries.`);
      }

      return entry;
    });
}

const sectionHrefMap = {
  about: "#about",
  clubs: "#clubs",
  highlights: "#highlights",
  gallery: "#gallery",
  videos: "#videos",
  youtube: "#youtube",
  sound: "#sound",
  vision: "#vision",
  spotify: "#spotify",
  brands: "#brands",
  rider: "#rider",
  contact: "#contact",
};

export function getPressKitEntry(artist?: string): PressKitEntry {
  const resolvedClient = getClientBySlug(artist ?? null) ?? getClients()[0];
  const entry = pressKitEntries.get(resolvedClient.slug as ArtistId);

  if (!entry) {
    throw new Error(`Client "${resolvedClient.slug}" is missing from press kit entries.`);
  }

  return entry;
}

export function createPressKitEntry(client: ClientConfig): PressKitEntry {
  return {
    id: client.slug as ArtistId,
    label: client.name,
    config: client.pressKit,
    defaultTheme: client.defaultTheme,
    defaultVariant: client.defaultVariant,
  };
}

export function getArtistGalleryHref(artistId: ArtistId): string {
  return artistId === getClients()[0].slug ? "/gallery" : `/gallery?client=${artistId}`;
}

export function getArtistHomeHref(artistId: ArtistId): string {
  return artistId === getClients()[0].slug ? "/" : `/?client=${artistId}`;
}

export function getArtistVideosHref(artistId: ArtistId): string {
  return artistId === getClients()[0].slug ? "/videos" : `/videos?client=${artistId}`;
}

export function hasGalleryContent(config: PressKitConfig): boolean {
  return config.gallery.images.length > 0;
}

export function hasVideoContent(config: PressKitConfig): boolean {
  return config.videos.items.length > 0;
}

export function hasYoutubeContent(config: PressKitConfig): boolean {
  return Boolean(config.youtube && config.youtube.items.length > 0);
}

export function hasSoundContent(config: PressKitConfig): boolean {
  return Boolean(config.sound.embedUrl || config.sound.cta.href);
}

export function hasSpotifyContent(config: PressKitConfig): boolean {
  return config.spotify.playlists.length > 0;
}

export function hasVisionContent(config: PressKitConfig): boolean {
  return Boolean(config.vision);
}

export function hasBrandsContent(config: PressKitConfig): boolean {
  return config.brands.items.length > 0;
}

export function hasRiderContent(config: PressKitConfig): boolean {
  return Boolean(config.rider && config.rider.groups.length > 0);
}

export function hasHighlightsContent(config: PressKitConfig): boolean {
  return Boolean(config.highlights && config.highlights.items.length > 0);
}

export function getResolvedNavigation(
  config: PressKitConfig
): PressKitConfig["navigation"] {
  const visibleSections = new Set<string>([
    sectionHrefMap.about,
    sectionHrefMap.clubs,
    sectionHrefMap.contact,
  ]);

  if (hasGalleryContent(config)) visibleSections.add(sectionHrefMap.gallery);
  if (hasHighlightsContent(config)) visibleSections.add(sectionHrefMap.highlights);
  if (hasVideoContent(config)) visibleSections.add(sectionHrefMap.videos);
  if (hasYoutubeContent(config)) visibleSections.add(sectionHrefMap.youtube);
  if (hasSoundContent(config)) visibleSections.add(sectionHrefMap.sound);
  if (hasVisionContent(config)) visibleSections.add(sectionHrefMap.vision);
  if (hasSpotifyContent(config)) visibleSections.add(sectionHrefMap.spotify);
  if (hasBrandsContent(config)) visibleSections.add(sectionHrefMap.brands);
  if (hasRiderContent(config)) visibleSections.add(sectionHrefMap.rider);

  return {
    ...config.navigation,
    items: config.navigation.items.filter((item) => visibleSections.has(item.href)),
  };
}
