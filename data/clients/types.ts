import type { GalleryImage, PressKitConfig } from "@/data/config";
import type { TemplateId, TemplateVariantId } from "@/data/templates";

export type ClientSocials = {
  instagram?: string;
  soundCloud?: string;
  tikTok?: string;
  spotify?: string;
  website?: string;
  facebook?: string;
  twitch?: string;
};

export type ClientContact = {
  email: string;
  phone?: string;
  city?: string;
  country?: string;
};

export type ClientService = {
  title: string;
  description: string;
};

export type ClientTestimonial = {
  quote: string;
  author: string;
  role?: string;
};

export type ClientSeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonical?: string;
  favicon?: string;
};

export type ClientConfig = {
  slug: string;
  slugAliases?: string[];
  domain?: string;
  vercelSubdomain: string;
  domainAliases?: string[];
  name: string;
  tagline: string;
  city: string;
  country: string;
  category: string;
  description: string;
  longBio: string;
  heroImage: string;
  gallery: GalleryImage[];
  socials: ClientSocials;
  contact: ClientContact;
  services: ClientService[];
  testimonials: ClientTestimonial[];
  bookingEmail: string;
  seo: ClientSeoConfig;
  defaultTheme: TemplateId;
  defaultVariant: TemplateVariantId;
  pressKit: PressKitConfig;
  hideFromSwitcher?: boolean;
  languageSwitch?: {
    label: string;
    href: string;
    active?: boolean;
    clientSlug?: string;
  }[];
};
