import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Header } from "@/components/press-kit/Header";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistHomeHref,
  getResolvedNavigation,
  hasGalleryContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata, buildGalleryJsonLd } from "@/lib/seo";

type GalleryPageProps = {
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    font?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: GalleryPageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return buildClientMetadata(client, "/gallery", {
    title: `${client.name} Galerie | Photos presse et médias`,
    description: client.pressKit.gallery.description,
    image: client.gallery[0]?.src ?? client.seo.ogImage,
    keywords: [
      `${client.slug} galerie`,
      "photos presse DJ",
      "kit média artiste",
      "visuels presse",
      `galerie DJ ${client.city}`,
    ],
    imageAlt: client.gallery[0]?.alt ?? `Visuel galerie de ${client.name}`,
  });
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const hasGallery = hasGalleryContent(pressKitConfig);
  const navigation = getResolvedNavigation(pressKitConfig);
  const homeHref = getArtistHomeHref(pressKitEntry.id);
  const galleryJsonLd = buildGalleryJsonLd(client);

  return (
    <main
      data-client={client.slug}
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="bg-[var(--pk-bg)] px-6 py-24 text-[var(--pk-text)]"
    >
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeFontPresetId={fontPreset.id}
        />
      )}
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--pk-accent)]">
            {pressKitConfig.gallery.eyebrow}
          </div>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-6xl">
            {pressKitConfig.gallery.title}
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            {hasGallery
              ? pressKitConfig.gallery.description
              : "Aucun visuel de galerie n'est encore disponible pour cet artiste."}
          </p>
        </div>

        {hasGallery ? (
          <GalleryClient
            images={pressKitConfig.gallery.images.filter((img) => !img.previewOnly)}
            viewLabel={pressKitConfig.ui.galleryViewLabel}
            downloadLabel={pressKitConfig.ui.galleryDownloadLabel}
            closeLabel={pressKitConfig.ui.galleryCloseLabel}
            previousLabel={pressKitConfig.ui.galleryPreviousLabel}
            nextLabel={pressKitConfig.ui.galleryNextLabel}
          />
        ) : null}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
    </main>
  );
}
