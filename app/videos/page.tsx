import type { Metadata } from "next";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Header } from "@/components/press-kit/Header";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistHomeHref,
  getResolvedNavigation,
  hasVideoContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";

type VideosPageProps = {
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    font?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: VideosPageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return buildClientMetadata(client, "/videos", {
    title: `${client.name} Vidéos | Extraits live et médias`,
    description: client.pressKit.videos.description,
    image: client.heroImage,
    imageAlt: `Vidéos de ${client.name}`,
  });
}

export default async function VideosPage({ searchParams }: VideosPageProps) {
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
  const navigation = getResolvedNavigation(pressKitConfig);
  const homeHref = getArtistHomeHref(pressKitEntry.id);
  const hasVideos = hasVideoContent(pressKitConfig);
  const videosWithoutCta = {
    ...pressKitConfig.videos,
    cta: undefined,
  };

  return (
    <main
      data-client={client.slug}
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="min-h-screen bg-[var(--pk-bg)] text-[var(--pk-text)]"
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

      <div className="pt-16 md:pt-20">
        {hasVideos ? (
          <VideoSection videos={videosWithoutCta} headingLevel="h1" />
        ) : (
          <section className="px-4 py-24 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-xs uppercase tracking-[0.35em] text-[var(--pk-accent)]">
                Vidéos
              </div>
              <h1 className="mt-4 text-5xl font-black uppercase md:text-6xl">
                Aucune vidéo
              </h1>
              <p className="mt-4 max-w-2xl text-white/60">
                Aucun extrait vidéo n'est encore disponible pour cet artiste.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
