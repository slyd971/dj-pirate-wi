import type { Metadata } from "next";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { Header } from "@/components/press-kit/Header";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getResolvedNavigation,
  hasVideoContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";

type MentionsLegalesPageProps = {
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    font?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: MentionsLegalesPageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return {
    title: `Mentions légales | ${client.name}`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-6 first:border-t-0 first:pt-0 md:py-8">
      <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[var(--pk-accent)] md:text-base">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-white/70 md:text-[0.95rem] md:leading-7">
        {children}
      </div>
    </section>
  );
}

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[rgb(var(--pk-accent-rgb)/0.16)] px-1.5 py-0.5 text-[var(--pk-accent-soft)]">
      TODO : {children}
    </span>
  );
}

export default async function MentionsLegalesPage({
  searchParams,
}: MentionsLegalesPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(pressKitEntry.defaultTheme);
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(pressKitConfig);
  const homeHref = getArtistHomeHref(pressKitEntry.id);
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const videosHref = hasVideoContent(pressKitConfig)
    ? getArtistVideosHref(pressKitEntry.id)
    : undefined;

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

      <div className="px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            Informations légales
          </div>
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
            Mentions légales
          </h1>

          <div className="mt-8 md:mt-10">
            <Section title="Éditeur du site">
              <p>
                Site édité par <Todo>nom ou raison sociale de l'éditeur</Todo>,{" "}
                <Todo>statut juridique (entreprise individuelle, société...)</Todo>
                {", "}
                <Todo>numéro SIRET</Todo>, dont le siège est situé{" "}
                <Todo>adresse complète de l'éditeur</Todo>.
              </p>
            </Section>

            <Section title="Hébergeur">
              <p>
                Le site est hébergé par Vercel Inc., <Todo>adresse complète de Vercel Inc.</Todo>.
              </p>
            </Section>

            <Section title="Directeur de la publication">
              <p>
                <Todo>nom du directeur de la publication</Todo>
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Pour toute question relative au site ou à son contenu :{" "}
                <a
                  href={`mailto:${client.bookingEmail}`}
                  className="text-[var(--pk-accent)] underline underline-offset-4"
                >
                  {client.bookingEmail}
                </a>
                .
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus présents sur ce site (textes, photographies,
                visuels, logo, mise en page) est protégé au titre du droit d'auteur.
                Toute reproduction, représentation ou diffusion, totale ou partielle,
                sans autorisation préalable est interdite, à l'exception des usages
                de presse (visuels du dossier de presse) pour lesquels ce site a été
                conçu.
              </p>
            </Section>

            <Section title="Données personnelles">
              <p>
                Ce site ne comporte aucun formulaire de collecte de données et
                n'utilise aucun cookie de mesure d'audience ou de suivi. Les seules
                données traitées sont celles générées techniquement par l'hébergeur
                (journaux de connexion standard) dans le cadre du fonctionnement du
                service. Pour toute demande relative à vos données personnelles,
                contactez l'adresse indiquée ci-dessus.
              </p>
            </Section>
          </div>
        </div>
      </div>

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
