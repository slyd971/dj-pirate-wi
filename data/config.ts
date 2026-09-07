export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  iconOnly?: boolean;
  icon:
    | "instagram"
    | "tiktok"
    | "youtube"
    | "spotify"
    | "soundcloud"
    | "apple-music"
    | "facebook";
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon:
    | "mail"
    | "phone"
    | "instagram"
    | "music"
    | "tiktok"
    | "youtube"
    | "whatsapp";
  external?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  size?: string;
  position?: string;
  previewScale?: number;
  previewOffsetY?: string;
  previewOnly?: boolean;
  hideFromPreview?: boolean;
};

export type SpotifyPlaylist = {
  id: string;
  title: string;
  embedUrl: string;
};

export type VideoItemBase = {
  id: string;
  title: string;
  description: string;
  poster?: string;
  aspect?: "portrait" | "landscape";
};

export type LocalVideoItem = VideoItemBase & {
  source?: "local";
  src: string;
};

export type YoutubeVideoItem = VideoItemBase & {
  source: "youtube";
  embedUrl: string;
};

export type VideoItem = LocalVideoItem | YoutubeVideoItem;

export type PressKitConfig = {
  metadata: {
    title: string;
    description: string;
  };
  ui: {
    openMenuLabel: string;
    closeMenuLabel: string;
    galleryViewLabel: string;
    galleryDownloadLabel: string;
    galleryCloseLabel: string;
    galleryPreviousLabel: string;
    galleryNextLabel: string;
  };
  artist: {
    name: string;
    stageLabel: string;
    logo: {
      src: string;
      alt: string;
      scale?: number;
      invert?: boolean;
      showInHero?: boolean;
    };
  };
  navigation: {
    items: NavItem[];
    cta: CtaLink;
  };
  heroSocials?: SocialLink[];
  heroSocialsPosition?: "after-stats" | "before-stats";
  heroVariants: Record<
    "impact" | "interactive" | "showcase",
    {
      eyebrow: string;
      title: string;
      accent: string;
      description: string;
      layout: "impact" | "interactive" | "showcase";
      image: {
        src: string;
        alt: string;
        badge: string;
        caption: string;
        position?: string;
      };
      ctas: CtaLink[];
      stats: StatItem[];
      proofline?: string;
      mediaCard?: {
        label: string;
        title: string;
        subtitle: string;
        imageSrc: string;
        imageAlt: string;
        href: string;
      };
      footerNote?: string;
    }
  >;
  about: {
    eyebrow: string;
    title: string;
    signatureLabel: string;
    signatureQuote: string;
    supportingText: string;
    tags: string[];
    paragraphs: string[];
  };
  clubs: {
    eyebrow: string;
    title: string;
    description: string;
    itemIconOverrides?: Record<string, { src: string; alt: string }>;
    regions: Array<{
      title: string;
      icon: "map-pin" | "globe";
      items: string[];
    }>;
  };
  highlights?: {
    eyebrow: string;
    title: string;
    intro?: string;
    items: Array<{
      title: string;
      venue: string;
      description?: string;
      images?: Array<{
        src: string;
        alt: string;
      }>;
    }>;
  };
  sound: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: CtaLink;
    embedTitle: string;
    embedUrl: string;
  };
  videos: {
    eyebrow: string;
    title: string;
    description: string;
    items: VideoItem[];
    cta?: CtaLink;
  };
  youtube?: {
    eyebrow: string;
    title: string;
    description: string;
    items: YoutubeVideoItem[];
    cta: CtaLink;
  };
  vision?: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    stats?: StatItem[];
    video?: {
      src: string;
      title: string;
      poster?: string;
    };
    media?: Array<{
      src: string;
      alt: string;
      label?: string;
    }>;
    embed?: {
      title: string;
      src: string;
      height?: number;
    };
    cta?: CtaLink;
  };
  spotify: {
    eyebrow: string;
    title: string;
    description: string;
    playlists: SpotifyPlaylist[];
    badgeLabel: string;
    useThemeColor?: boolean;
  };
  brands: {
    eyebrow: string;
    title: string;
    intro: string;
    supportingText: string;
    categories: string[];
    itemLabel: string;
    hideItemText?: boolean;
    hideItemFrame?: boolean;
    inlineBelowClubs?: boolean;
    items: Array<{ name: string; logo?: string; logoInvert?: boolean; href?: string } | string>;
    feedback?: {
      eyebrow: string;
      title: string;
      items: Array<{
        name: string;
        role: string;
        quote: string;
        image: string;
      }>;
      cta?: CtaLink;
    };
    fit?: {
      eyebrow: string;
      title: string;
      points: string[];
    };
  };
  rider?: {
    eyebrow: string;
    title: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    methods: ContactMethod[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    homepageTitle: string;
    homepageCtaLabel: string;
    images: GalleryImage[];
  };
  footer?: {
    availabilityText?: string;
    navigationLabel?: string;
    socialLabel?: string;
    bookingLabel?: string;
    languageLabel?: string;
    fullGalleryLabel?: string;
    allVideosLabel?: string;
  };
};

export type ClientIntakeConfig = {
  source: "google-form";
  googleAppsScript: {
    projectDirectory: string;
    scriptFile: string;
    manifestFile: string;
    form: {
      title: string;
      description: string;
      confirmationMessage: string;
      collectEmail: boolean;
      isQuiz: boolean;
    };
  };
  importWorkflow: {
    command: string;
    latestResponseDefault: boolean;
    outputFiles: string[];
  };
};

export const clientIntakeConfig: ClientIntakeConfig = {
  source: "google-form",
  googleAppsScript: {
    projectDirectory: "dj-onboarding-form",
    scriptFile: "dj-onboarding-form/Code.gs",
    manifestFile: "dj-onboarding-form/appsscript.json",
    form: {
      title: "Onboarding - DJ / Press Kit",
      description:
        "Ce formulaire nous aide a recuperer les bonnes informations pour creer ton site / press kit DJ. Merci de repondre simplement, avec des infos concretes et faciles a exploiter.",
      confirmationMessage: "Merci, tes reponses ont bien ete envoyees.",
      collectEmail: true,
      isQuiz: false,
    },
  },
  importWorkflow: {
    command: 'npm run import:client-form -- "/path/to/export.xlsx"',
    latestResponseDefault: true,
    outputFiles: [
      "data/client-intake.json",
      "CLIENT_INTAKE.md",
      "data/config.ts",
    ],
  },
};
