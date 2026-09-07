import Link from "next/link";
import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

type FooterProps = {
  client: ClientConfig;
  navigation: PressKitConfig["navigation"];
  homeHref: string;
  galleryHref: string;
  videosHref?: string;
};

function getSocialLinks(client: ClientConfig) {
  return [
    { label: "Instagram", href: client.socials.instagram },
    { label: "TikTok", href: client.socials.tikTok },
    { label: "SoundCloud", href: client.socials.soundCloud },
    { label: "YouTube", href: client.socials.website },
    { label: "Spotify", href: client.socials.spotify },
    { label: "Facebook", href: client.socials.facebook },
    { label: "Twitch", href: client.socials.twitch },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));
}

function getLanguageFlag(label: string) {
  const normalizedLabel = label.trim().toUpperCase();

  if (normalizedLabel === "FR") return "🇫🇷";
  if (normalizedLabel === "EN") return "🇬🇧";

  return "🌐";
}

export function Footer({
  client,
  navigation,
  homeHref,
  galleryHref,
  videosHref,
}: FooterProps) {
  const socialLinks = getSocialLinks(client);
  const hasBookingEmail = Boolean(client.bookingEmail);
  const footerLabels = client.pressKit.footer;
  const logo = client.pressKit.artist.logo;
  const languageSwitch = client.languageSwitch?.filter((item) => item.href);
  const availabilityText =
    footerLabels?.availabilityText ??
    "Disponible pour clubs, festivals, événements privés et formats institutionnels.";

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-7 text-white md:px-6 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 md:grid-cols-[1.25fr_0.85fr_0.85fr_1fr] md:gap-10">
        <div className="col-span-2 sm:col-span-1">
          <Link
            href={homeHref}
            className="inline-flex text-xl font-black uppercase tracking-[0.16em] text-white md:text-2xl md:tracking-[0.18em]"
          >
            {logo?.src ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-[11rem] object-contain object-left md:h-16 md:max-w-[13rem]"
                style={logo.invert ? { filter: "invert(1)" } : undefined}
              />
            ) : (
              client.name
            )}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/58 sm:max-w-none">
            {client.tagline}. {availabilityText}
          </p>
          <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
            {client.city} · {client.country}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--pk-accent)] md:tracking-[0.24em]">
            {footerLabels?.navigationLabel ?? "Navigation"}
          </div>
          <div className="mt-3 grid gap-2 text-sm text-white/68">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Link href={galleryHref} className="transition hover:text-white">
              {footerLabels?.fullGalleryLabel ?? "Galerie complète"}
            </Link>
            {videosHref && (
              <Link href={videosHref} className="transition hover:text-white">
                {footerLabels?.allVideosLabel ?? "Toutes les vidéos"}
              </Link>
            )}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--pk-accent)] md:tracking-[0.24em]">
            {footerLabels?.socialLabel ?? "Réseaux"}
          </div>
          <div className="mt-3 grid gap-2 text-sm text-white/68">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--pk-accent)] md:tracking-[0.24em]">
            {footerLabels?.bookingLabel ?? "Booking"}
          </div>
          <div className="mt-3 grid gap-2 text-sm text-white/68">
            {hasBookingEmail ? (
              <a
                href={`mailto:${client.bookingEmail}`}
                className="break-all transition hover:text-white"
              >
                {client.bookingEmail}
              </a>
            ) : null}
            {client.contact.phone ? (
              <a
                href={`tel:${client.contact.phone.replace(/[^\d+]/g, "")}`}
                className="transition hover:text-white"
              >
                {client.contact.phone}
              </a>
            ) : null}
            {!hasBookingEmail && !client.contact.phone && client.socials.instagram ? (
              <a
                href={client.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>
            ) : null}
          </div>
          {languageSwitch?.length ? (
            <div className="mt-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--pk-accent)] md:tracking-[0.24em]">
                {footerLabels?.languageLabel ?? "Langue"}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {languageSwitch.map((item) => (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={[
                      "inline-flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.16em] transition",
                      item.active
                        ? "border-[rgb(var(--pk-accent-rgb)/0.6)] bg-[rgb(var(--pk-accent-rgb)/0.16)] text-white"
                        : "border-white/10 bg-white/[0.03] text-white/62 hover:border-white/20 hover:bg-white/[0.07] hover:text-white",
                    ].join(" ")}
                  >
                    <span aria-hidden="true" className="text-base leading-none">
                      {getLanguageFlag(item.label)}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/30">
            © {new Date().getFullYear()} {client.name} Press Kit
          </div>
          <a
            href="https://presskit.fr"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-[10px] uppercase tracking-[0.18em] text-white/30 transition hover:text-white/60"
          >
            Powered by Presskit.Fr
          </a>
        </div>
      </div>
    </footer>
  );
}
