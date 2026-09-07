import type { Metadata } from "next";
import { AboutSection } from "@/components/press-kit/AboutSection";
import { BrandsSection } from "@/components/press-kit/BrandsSection";
import { ClubsSection } from "@/components/press-kit/ClubsSection";
import { ContactSection } from "@/components/press-kit/ContactSection";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { GalleryPreviewSection } from "@/components/press-kit/GalleryPreviewSection";
import { Header } from "@/components/press-kit/Header";
import { HeroSection } from "@/components/press-kit/HeroSection";
import { HighlightsSection } from "@/components/press-kit/HighlightsSection";
import { RiderSection } from "@/components/press-kit/RiderSection";
import { SoundSection } from "@/components/press-kit/SoundSection";
import { SpotifySection } from "@/components/press-kit/SpotifySection";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { VisionSection } from "@/components/press-kit/VisionSection";
import { YoutubeSection } from "@/components/press-kit/YoutubeSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getResolvedNavigation,
  hasBrandsContent,
  hasGalleryContent,
  hasHighlightsContent,
  hasRiderContent,
  hasSoundContent,
  hasSpotifyContent,
  hasVisionContent,
  hasVideoContent,
  hasYoutubeContent,
} from "@/data/press-kits";
import { getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { getTemplateStyle, getTemplateTheme, getTemplateVariant } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";

type HomeProps = {
  params?: Promise<{
    locale?: string;
  }>;
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    variant?: string;
    font?: string;
  }>;
};

function getLocalizedClient(client: ClientConfig, locale?: string) {
  const normalizedLocale = locale?.toUpperCase();

  if (
    !normalizedLocale ||
    client.languageSwitch?.some((item) => {
      return item.active && item.label.toUpperCase() === normalizedLocale;
    })
  ) {
    return client;
  }

  const localizedSwitch = client.languageSwitch?.find((item) => {
    return item.label.toUpperCase() === normalizedLocale;
  });
  const localizedSlug =
    localizedSwitch?.clientSlug ??
    (localizedSwitch?.href
      ? new URL(localizedSwitch.href, "https://presskit.local").searchParams.get("client")
      : null);

  return getClientBySlug(localizedSlug) ?? client;
}

export async function generateMetadata({
  params,
  searchParams,
}: HomeProps): Promise<Metadata> {
  const resolvedParams = params ? await params : undefined;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = getLocalizedClient(
    await getRequiredRequestClient(getRequestedClientSlug(resolvedSearchParams)),
    resolvedParams?.locale
  );
  const metadataPath = resolvedParams?.locale?.toLowerCase() === "en" ? "/en" : "/";

  return buildClientMetadata(client, metadataPath);
}

export default async function Home({ params, searchParams }: HomeProps) {
  const resolvedParams = params ? await params : undefined;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = getLocalizedClient(
    await getRequiredRequestClient(getRequestedClientSlug(resolvedSearchParams)),
    resolvedParams?.locale
  );
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const variant = getTemplateVariant(
    resolvedSearchParams?.variant ?? pressKitEntry.defaultVariant
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(pressKitConfig);
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const videosHref = hasVideoContent(pressKitConfig)
    ? getArtistVideosHref(pressKitEntry.id)
    : "";
  const homeHref =
    client.languageSwitch?.find((item) => item.active)?.href ??
    getArtistHomeHref(pressKitEntry.id);
  const inlineBrandsBelowClubs =
    hasBrandsContent(pressKitConfig) && pressKitConfig.brands.inlineBelowClubs;

  return (
    <main
      data-client={client.slug}
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="relative overflow-x-hidden bg-[var(--pk-bg)] text-[var(--pk-text)] selection:bg-[var(--pk-accent)] selection:text-white"
    >
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeVariantId={variant.id}
          activeFontPresetId={fontPreset.id}
        />
      )}
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      <HeroSection
        heroVariants={pressKitConfig.heroVariants}
        heroSocials={pressKitConfig.heroSocials}
        socialsPosition={pressKitConfig.heroSocialsPosition}
        variant={variant.id}
        logo={pressKitConfig.artist.logo.showInHero !== false ? pressKitConfig.artist.logo : undefined}
      />
      <AboutSection about={pressKitConfig.about} />
      <ClubsSection
        clubs={pressKitConfig.clubs}
        brands={inlineBrandsBelowClubs ? pressKitConfig.brands : undefined}
      />
      {hasHighlightsContent(pressKitConfig) && pressKitConfig.highlights && (
        <HighlightsSection highlights={pressKitConfig.highlights} />
      )}
      {hasGalleryContent(pressKitConfig) && (
        <GalleryPreviewSection
          gallery={pressKitConfig.gallery}
          galleryHref={galleryHref}
        />
      )}
      {hasVideoContent(pressKitConfig) && (
        <VideoSection videos={pressKitConfig.videos} maxItems={3} />
      )}
      {hasYoutubeContent(pressKitConfig) && pressKitConfig.youtube && (
        <YoutubeSection youtube={pressKitConfig.youtube} />
      )}
      {hasVisionContent(pressKitConfig) && pressKitConfig.vision && (
        <VisionSection vision={pressKitConfig.vision} />
      )}
      {hasSoundContent(pressKitConfig) && (
        <SoundSection sound={pressKitConfig.sound} />
      )}
      {hasSpotifyContent(pressKitConfig) && (
        <SpotifySection spotify={pressKitConfig.spotify} />
      )}
      {hasBrandsContent(pressKitConfig) && !inlineBrandsBelowClubs && (
        <BrandsSection brands={pressKitConfig.brands} />
      )}
      {hasRiderContent(pressKitConfig) && pressKitConfig.rider && (
        <RiderSection rider={pressKitConfig.rider} />
      )}
      <ContactSection contact={pressKitConfig.contact} />
      <Footer
        client={client}
        navigation={navigation}
        homeHref={homeHref}
        galleryHref={galleryHref}
        videosHref={videosHref}
      />
    </main>
  );
}
