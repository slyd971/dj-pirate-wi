import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

// Source : public/pirate/bio/PRESS KIT DJ PIRATE .pdf (2026).
const piratePressKit: PressKitConfig = {
  "metadata": {
    "title": "DJ Pirate | DJ & voix off à Paris · Booking & press kit",
    "description": "DJ Pirate, DJ et voix off basé à Paris. Hip-Hop, R&B, Trap, House et musiques caribéennes. Bio, références, galerie, live et booking."
  },
  "ui": {
    "openMenuLabel": "Ouvrir le menu",
    "closeMenuLabel": "Fermer le menu",
    "galleryViewLabel": "Voir",
    "galleryDownloadLabel": "Télécharger",
    "galleryCloseLabel": "Fermer la galerie",
    "galleryPreviousLabel": "Image précédente",
    "galleryNextLabel": "Image suivante"
  },
  "artist": {
    "name": "DJ PIRATE",
    "stageLabel": "DJ & voix off · Paris · International",
    "logo": {
      "src": "/pirate/logo/pirate-logo.webp",
      "alt": "DJ Pirate",
      "showInHero": false
    }
  },
  "navigation": {
    "items": [
      {
        "label": "Bio",
        "href": "#about"
      },
      {
        "label": "Références",
        "href": "#clubs"
      },
      {
        "label": "Galerie",
        "href": "#gallery"
      },
      {
        "label": "Live",
        "href": "#videos"
      },
      {
        "label": "Setup",
        "href": "#rider"
      }
    ],
    "cta": {
      "label": "Booking",
      "href": "#contact",
      "variant": "primary"
    }
  },
  "heroSocials": [
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/djpirate_wi/",
      "icon": "instagram",
      "iconOnly": true
    },
    {
      "label": "YouTube · DJPIRATE",
      "href": "https://www.youtube.com/results?search_query=DJPIRATE+URBAN+SESSION",
      "icon": "youtube",
      "iconOnly": true
    },
    {
      "label": "SoundCloud",
      "href": "https://soundcloud.com/djpirate-13",
      "icon": "soundcloud",
      "iconOnly": true
    },
    {
      "label": "TikTok",
      "href": "https://www.tiktok.com/@djpirate97",
      "icon": "tiktok",
      "iconOnly": true
    }
  ],
  "heroSocialsPosition": "before-stats",
  "heroVariants": {
    "impact": {
      "eyebrow": "",
      "title": "PIRATE",
      "accent": "DJ & VOIX OFF",
      "description": "La culture urbaine. L’énergie caribéenne. Derrière les platines depuis 2016, une signature entre Hip-Hop, R&B, Trap, House et musiques caribéennes.",
      "layout": "impact",
      "image": {
        "src": "/pirate/hero/pirate-hero-yellow.png",
        "alt": "DJ Pirate en veste bleue et lunettes de soleil",
        "badge": "DJ PIRATE",
        "caption": "Des Caraïbes aux scènes européennes",
        "position": "center 57%"
      },
      "ctas": [
        {
          "label": "Booker DJ Pirate",
          "href": "#contact",
          "variant": "primary"
        },
        {
          "label": "Voir le live",
          "href": "#videos",
          "variant": "secondary"
        }
      ],
      "stats": [
        {
          "value": "15K",
          "label": "Réseaux sociaux"
        },
        {
          "value": "24K",
          "label": "Audience médias / mois"
        },
        {
          "value": "52K",
          "label": "Visites médias / mois"
        },
        {
          "value": "1,4M",
          "label": "Audience SoundCloud"
        }
      ]
    },
    "interactive": {
      "eyebrow": "",
      "title": "PIRATE",
      "accent": "DJ & VOIX OFF",
      "description": "La culture urbaine. L’énergie caribéenne. Derrière les platines depuis 2016, une signature entre Hip-Hop, R&B, Trap, House et musiques caribéennes.",
      "layout": "interactive",
      "image": {
        "src": "/pirate/hero/pirate-hero-yellow.png",
        "alt": "DJ Pirate en veste bleue et lunettes de soleil",
        "badge": "DJ PIRATE",
        "caption": "Des Caraïbes aux scènes européennes",
        "position": "center 57%"
      },
      "ctas": [
        {
          "label": "Booker DJ Pirate",
          "href": "#contact",
          "variant": "primary"
        },
        {
          "label": "Voir le live",
          "href": "#videos",
          "variant": "secondary"
        }
      ],
      "stats": [
        {
          "value": "15K",
          "label": "Réseaux sociaux"
        },
        {
          "value": "24K",
          "label": "Audience médias / mois"
        },
        {
          "value": "52K",
          "label": "Visites médias / mois"
        },
        {
          "value": "1,4M",
          "label": "Audience SoundCloud"
        }
      ]
    },
    "showcase": {
      "eyebrow": "",
      "title": "PIRATE",
      "accent": "DJ & VOIX OFF",
      "description": "La culture urbaine. L’énergie caribéenne. Derrière les platines depuis 2016, une signature entre Hip-Hop, R&B, Trap, House et musiques caribéennes.",
      "layout": "showcase",
      "image": {
        "src": "/pirate/hero/pirate-hero-yellow.png",
        "alt": "DJ Pirate en veste bleue et lunettes de soleil",
        "badge": "DJ PIRATE",
        "caption": "Des Caraïbes aux scènes européennes",
        "position": "center 57%"
      },
      "ctas": [
        {
          "label": "Booker DJ Pirate",
          "href": "#contact",
          "variant": "primary"
        },
        {
          "label": "Voir le live",
          "href": "#videos",
          "variant": "secondary"
        }
      ],
      "stats": [
        {
          "value": "15K",
          "label": "Réseaux sociaux"
        },
        {
          "value": "24K",
          "label": "Audience médias / mois"
        },
        {
          "value": "52K",
          "label": "Visites médias / mois"
        },
        {
          "value": "1,4M",
          "label": "Audience SoundCloud"
        }
      ]
    }
  },
  "about": {
    "eyebrow": "01 / Biographie",
    "title": "Racines caribéennes.\nCulture urbaine.",
    "signatureLabel": "La signature Pirate",
    "signatureQuote": "Hip-Hop, R&B, Trap et énergie caribéenne.",
    "supportingText": "DJ, speaker et voix off. De la Martinique à Paris.",
    "tags": [
      "Hip-Hop",
      "Old School",
      "R&B",
      "Trap US & FR",
      "House",
      "Caribbean music"
    ],
    "paragraphs": [
      "Originaire de la Martinique, DJ Pirate grandit avec la musique. Du piano à la batterie, il développe son sens du rythme avant de se tourner vers le mixage. Son parcours prend son essor en Guadeloupe à partir de 2016.",
      "Dès 2017, il se produit en club dans un univers caribéen. En 2019, il rejoint la scène du festival All Day In. Son originalité, sa technique et ses qualités de speaker lui permettent de s’imposer auprès du public, notamment à Lyon où il joue régulièrement dans les soirées afro-caribéennes dès 2020.",
      "Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse, avec une identité qui relie musiques urbaines et influences caribéennes.",
      "Spécialiste du Hip-Hop, du Old School, du R&B et de la Trap US et française, il crée en 2025 l’émission Urban Session. Disponible sur SoundCloud et YouTube, elle met en lumière la culture et les talents de la scène urbaine."
    ]
  },
  "clubs": {
    "eyebrow": "02 / Références",
    "title": "De la Martinique aux\nscènes européennes.",
    "description": "Un parcours entre festivals, clubs et soirées afro-caribéennes.",
    "regions": [
      {
        "title": "Festival & Caraïbes",
        "icon": "map-pin",
        "items": [
          "All Day In — 2019",
          "Guadeloupe",
          "Martinique"
        ]
      },
      {
        "title": "France",
        "icon": "map-pin",
        "items": [
          "Paris",
          "Lyon",
          "Annecy",
          "Bordeaux",
          "Toulouse",
          "Rennes",
          "Saint-Brieuc",
          "Limoges",
          "Le Mans",
          "Tours"
        ]
      },
      {
        "title": "International",
        "icon": "globe",
        "items": [
          "Belgique",
          "Suisse"
        ]
      }
    ]
  },
  "sound": {
    "eyebrow": "05 / Urban Session",
    "title": "La culture urbaine\nprend la parole.",
    "paragraphs": [
      "Créée en 2025 par DJ Pirate, Urban Session met en lumière la culture et les talents de la scène urbaine. Retrouvez ses sélections et son univers sur SoundCloud."
    ],
    "cta": {
      "label": "Écouter sur SoundCloud",
      "href": "https://soundcloud.com/djpirate-13",
      "external": true
    },
    "embedTitle": "DJ Pirate sur SoundCloud",
    "embedUrl": "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djpirate-13&color=%23F5C400&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
  },
  "videos": {
    "eyebrow": "04 / Live",
    "title": "Pirate en action.",
    "description": "Découvrez DJ Pirate en live : énergie caribéenne, Hip-Hop et R&B aux platines. Extrait vidéo et contact booking pour vos clubs, festivals et événements.",
    "items": [
      {
        "id": "pirate-live",
        "title": "DJ Pirate · Live",
        "description": "Aux platines, au plus près de l’ambiance.",
        "src": "/pirate/videos/pirate-live.mp4",
        "poster": "/pirate/videos/pirate-live-poster.jpg",
        "aspect": "portrait"
      }
    ]
  },
  "spotify": {
    "eyebrow": "",
    "title": "",
    "description": "",
    "playlists": [],
    "badgeLabel": ""
  },
  "brands": {
    "eyebrow": "",
    "title": "",
    "intro": "",
    "supportingText": "",
    "categories": [],
    "itemLabel": "",
    "items": []
  },
  "rider": {
    "eyebrow": "06 / Rider technique",
    "title": "Le setup\nde DJ Pirate.",
    "groups": [
      {
        "title": "Table / contrôleur",
        "items": [
          "Pioneer DDJ-REV5",
          "OU table de mixage Pioneer DJM-S11, DJM-S7 ou DJM-S9"
        ]
      },
      {
        "title": "Platines",
        "items": [
          "Pioneer CDJ-2000 ou CDJ-3000"
        ]
      },
      {
        "title": "Accessoires",
        "items": [
          "Micro HF",
          "Support ordinateur"
        ]
      },
      {
        "title": "Transport",
        "items": [
          "1 ou 2 billets aller-retour SNCF en 1re classe depuis Paris, modifiables et remboursables.",
          "Réservation électronique, bagage cabine inclus et Fast Track si disponible.",
          "Horaires et e-billets transmis 5 jours avant le show ; transport et modifications nécessaires pris en charge par le promoteur."
        ]
      },
      {
        "title": "Hébergement",
        "items": [
          "1 chambre double dans un hôtel à proximité directe du lieu du show.",
          "Petit-déjeuner inclus et accès à une salle de sport."
        ]
      }
    ]
  },
  "contact": {
    "eyebrow": "07 / Booking",
    "title": "La prochaine date\ncommence ici.",
    "description": "Clubs, festivals et événements : contactez DJ Pirate pour les disponibilités et les conditions de booking.",
    "methods": [
      {
        "label": "Email",
        "value": "dj.pirate.wolidey@gmail.com",
        "href": "mailto:dj.pirate.wolidey@gmail.com",
        "icon": "mail"
      },
      {
        "label": "Téléphone",
        "value": "+33 6 28 03 12 13",
        "href": "tel:+33628031213",
        "icon": "phone"
      },
      {
        "label": "Instagram",
        "value": "@djpirate_wi",
        "href": "https://www.instagram.com/djpirate_wi/",
        "icon": "instagram",
        "external": true
      }
    ]
  },
  "gallery": {
    "eyebrow": "03 / Galerie",
    "title": "DJ Pirate en images",
    "description": "Découvrez les 17 photos de DJ Pirate, DJ et voix off basé à Paris : portraits, moments live et visuels presse pour les médias et organisateurs.",
    "homepageTitle": "L’univers de dj Pirate.",
    "homepageCtaLabel": "Voir les 17 photos",
    "images": [
      {
        "src": "/pirate/gallery/pirate-gallery-12.jpg",
        "alt": "DJ Pirate — photo presse 12",
        "position": "center 35%",
        "size": "md:col-span-2"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-2.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 02",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-3.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 03",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-4.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 04",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-5.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 05",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-6.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 06",
        "position": "center 35%",
        "size": "md:col-span-2"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-7.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 07",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-8.webp",
        "hideFromPreview": true,
        "alt": "DJ Pirate — photo presse 08",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-9.webp",
        "alt": "DJ Pirate — photo presse 09",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-10.webp",
        "alt": "DJ Pirate — photo presse 10",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-11.webp",
        "alt": "DJ Pirate — photo presse 11",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-1.webp",
        "alt": "DJ Pirate — photo presse 01",
        "position": "center 35%",
        "size": "md:col-span-2"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-13.webp",
        "alt": "DJ Pirate — photo presse 13",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-14.webp",
        "alt": "DJ Pirate — photo presse 14",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-15.webp",
        "alt": "DJ Pirate — photo presse 15",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-16.webp",
        "alt": "DJ Pirate — photo presse 16",
        "position": "center 35%"
      },
      {
        "src": "/pirate/gallery/optimized/pirate-gallery-17.webp",
        "alt": "DJ Pirate — photo presse 17",
        "position": "center 35%"
      }
    ]
  },
  "footer": {
    "availabilityText": "DJ & voix off · Paris · France & international",
    "navigationLabel": "Navigation",
    "socialLabel": "Réseaux",
    "bookingLabel": "Booking",
    "fullGalleryLabel": "Galerie complète",
    "allVideosLabel": "Toutes les vidéos"
  }
};

export const djPirateClient: ClientConfig = {
...{
  "slug": "dj-pirate",
  "slugAliases": [
    "pirate"
  ],
  "domain": "dj-pirate.presskit.fr",
  "vercelSubdomain": "dj-pirate-wi.vercel.app",
  "name": "DJ PIRATE",
  "tagline": "DJ & voix off · Culture urbaine, énergie caribéenne",
  "city": "Paris",
  "country": "France",
  "category": "DJ & voix off",
  "description": "DJ Pirate, DJ et voix off basé à Paris. Hip-Hop, R&B, Trap, House et musiques caribéennes. Bio, références, galerie, live et booking.",
  "longBio": "Originaire de la Martinique, DJ Pirate grandit avec la musique. Du piano à la batterie, il développe son sens du rythme avant de se tourner vers le mixage. Son parcours prend son essor en Guadeloupe à partir de 2016. Dès 2017, il se produit en club dans un univers caribéen. En 2019, il rejoint la scène du festival All Day In. Son originalité, sa technique et ses qualités de speaker lui permettent de s’imposer auprès du public, notamment à Lyon où il joue régulièrement dans les soirées afro-caribéennes dès 2020. Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse, avec une identité qui relie musiques urbaines et influences caribéennes. Spécialiste du Hip-Hop, du Old School, du R&B et de la Trap US et française, il crée en 2025 l’émission Urban Session. Disponible sur SoundCloud et YouTube, elle met en lumière la culture et les talents de la scène urbaine.",
  "heroImage": "/pirate/hero/pirate-hero-yellow.png",
  "gallery": [
    {
      "src": "/pirate/gallery/pirate-gallery-12.jpg",
      "alt": "DJ Pirate — photo presse 12",
      "position": "center 35%",
      "size": "md:col-span-2"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-2.webp",
      "alt": "DJ Pirate — photo presse 02",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-3.webp",
      "alt": "DJ Pirate — photo presse 03",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-4.webp",
      "alt": "DJ Pirate — photo presse 04",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-5.webp",
      "alt": "DJ Pirate — photo presse 05",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-6.webp",
      "alt": "DJ Pirate — photo presse 06",
      "position": "center 35%",
      "size": "md:col-span-2"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-7.webp",
      "alt": "DJ Pirate — photo presse 07",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-8.webp",
      "alt": "DJ Pirate — photo presse 08",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-9.webp",
      "alt": "DJ Pirate — photo presse 09",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-10.webp",
      "alt": "DJ Pirate — photo presse 10",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-11.webp",
      "alt": "DJ Pirate — photo presse 11",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-1.webp",
      "alt": "DJ Pirate — photo presse 01",
      "position": "center 35%",
      "size": "md:col-span-2"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-13.webp",
      "alt": "DJ Pirate — photo presse 13",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-14.webp",
      "alt": "DJ Pirate — photo presse 14",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-15.webp",
      "alt": "DJ Pirate — photo presse 15",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-16.webp",
      "alt": "DJ Pirate — photo presse 16",
      "position": "center 35%"
    },
    {
      "src": "/pirate/gallery/optimized/pirate-gallery-17.webp",
      "alt": "DJ Pirate — photo presse 17",
      "position": "center 35%"
    }
  ],
  "socials": {
    "instagram": "https://www.instagram.com/djpirate_wi/",
    "soundCloud": "https://soundcloud.com/djpirate-13",
    "tikTok": "https://www.tiktok.com/@djpirate97"
  },
  "contact": {
    "email": "dj.pirate.wolidey@gmail.com",
    "phone": "+33 6 28 03 12 13",
    "city": "Paris",
    "country": "France"
  },
  "services": [],
  "testimonials": [],
  "bookingEmail": "dj.pirate.wolidey@gmail.com",
  "seo": {
    "title": "DJ Pirate | DJ & voix off à Paris · Booking & press kit",
    "description": "DJ Pirate, DJ et voix off basé à Paris. Hip-Hop, R&B, Trap, House et musiques caribéennes. Bio, références, galerie, live et booking.",
    "keywords": [
      "DJ Pirate",
      "DJ Paris",
      "DJ Martinique",
      "Urban Session",
      "DJ voix off",
      "booking DJ Pirate"
    ],
    "ogImage": "/pirate/logo/pirate-logo-og.png"
  },
  "defaultTheme": "yellow",
  "defaultVariant": "impact"
},
pressKit: piratePressKit,
};
