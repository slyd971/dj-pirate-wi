import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

// Source : public/pirate/bio/PRESS KIT DJ PIRATE .pdf (2026).
const piratePressKit: PressKitConfig = {
  "metadata": {
    "title": "DJ Pirate | DJ & Beatmaker · Urban & House à Paris · Booking & press kit",
    "description": "DJ Pirate, DJ & Beatmaker basé à Paris. Univers Urban & House. Bio, références, galerie, live et booking."
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
    "stageLabel": "DJ & Beatmaker · Paris · International",
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
      },
      {
        "label": "Presse",
        "href": "#press"
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
      "eyebrow": "Deux univers. Une même énergie.",
      "title": "PIRATE",
      "accent": "DJ & BEATMAKER",
      "genreLine": "URBAN & HOUSE MUSIC",
      "description": "Du Hip-Hop, R&B et Trap aux sonorités House, Pirate navigue entre culture urbaine et musique électronique avec une signature pensée pour le dancefloor.",
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
      "eyebrow": "Deux univers. Une même énergie.",
      "title": "PIRATE",
      "accent": "DJ & BEATMAKER",
      "genreLine": "URBAN & HOUSE MUSIC",
      "description": "Du Hip-Hop, R&B et Trap aux sonorités House, Pirate navigue entre culture urbaine et musique électronique avec une signature pensée pour le dancefloor.",
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
      "eyebrow": "Deux univers. Une même énergie.",
      "title": "PIRATE",
      "accent": "DJ & BEATMAKER",
      "genreLine": "URBAN & HOUSE MUSIC",
      "description": "Du Hip-Hop, R&B et Trap aux sonorités House, Pirate navigue entre culture urbaine et musique électronique avec une signature pensée pour le dancefloor.",
      "layout": "showcase",
      "image": {
        "src": "/pirate/hero/pirate-hero-yellow-mobile.png",
        "alt": "DJ Pirate en veste bleue et lunettes de soleil",
        "badge": "DJ PIRATE",
        "caption": "Des Caraïbes aux scènes européennes",
        "position": "center 22%"
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
    "title": "DJ & Beatmaker,\nentre deux mondes.",
    "signatureLabel": "La signature Pirate",
    "signatureQuote": "Le groove avant le genre.",
    "supportingText": "DJ & Beatmaker. De la Martinique à Paris.",
    "tags": [
      "Urban",
      "Hip-Hop",
      "Trap",
      "R&B",
      "Old School",
      "Afro",
      "Shatta",
      "Bouyon",
      "Socca",
      "House",
      "Deep House",
      "Afro House",
      "Latin House",
      "Electro House"
    ],
    "paragraphs": [
      "Originaire de la Martinique, DJ Pirate grandit avec la musique. Du piano à la batterie, il développe son sens du rythme avant de se tourner vers le mixage. Son parcours prend son essor en Guadeloupe à partir de 2016.",
      "Dès 2017, il se produit en club dans un univers caribéen. En 2019, il rejoint la scène du festival All Day In. Son originalité et sa technique lui permettent de s’imposer auprès du public, notamment à Lyon où il joue régulièrement dans les soirées afro-caribéennes dès 2020.",
      "Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse, développant des sets qui oscillent entre Urban et House selon les lieux et les publics. Ses influences caribéennes (Shatta, Bouyon, Socca) viennent enrichir cette palette sans l’enfermer dans un genre.",
      "DJ & Beatmaker, il construit ses sets autour du groove et de la lecture du dancefloor. Il crée en 2025 l’émission Urban Session, disponible sur SoundCloud et YouTube, où il partage ses sets et ses productions aux côtés des talents qui l’inspirent."
    ]
  },
  "clubs": {
    "eyebrow": "02 / Références",
    "title": "De la Martinique aux\nscènes européennes.",
    "description": "Un parcours entre festivals, clubs et soirées afro-caribéennes, avec 10 ans d'expérience derrière les platines.",
    "regions": [
      {
        "title": "Festival & Caraïbes",
        "icon": "map-pin",
        "items": [
          "All Day In — Guadeloupe, 2019",
          "Tropical Toulouse Beach",
          "Yardland",
          "Martinique"
        ]
      },
      {
        "title": "Collaborations",
        "icon": "handshake",
        "items": [
          {
            "logo": "/pirate/brands/intersport-logo.svg",
            "alt": "Intersport"
          },
          {
            "logo": "/pirate/brands/adidas-logo.svg",
            "alt": "Adidas"
          }
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
    "title": "Urban Session,\nsets et productions.",
    "paragraphs": [
      "Créée en 2025 par DJ Pirate, Urban Session est l’espace où il partage ses sets et ses productions, entre Urban et House. Retrouvez-le sur SoundCloud."
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
    "description": "Découvrez DJ Pirate en live : Urban et House aux platines. Extrait vidéo et contact booking pour vos clubs, festivals et événements.",
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
    "eyebrow": "06 / Setup technique",
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
      }
    ]
  },
  "press": {
    "eyebrow": "07 / Ressources presse",
    "title": "Le kit presse\nde DJ Pirate.",
    "description": "Dossier de presse, visuels haute définition et logo, prêts à l'emploi pour les médias, festivals et organisateurs.",
    "downloads": [
      {
        "label": "Pack vidéos",
        "format": "Drive",
        "href": "#"
      },
      {
        "label": "Pack photos HD",
        "format": "Drive",
        "href": "#"
      },
      {
        "label": "Pack logo",
        "format": "Drive",
        "href": "#"
      }
    ],
    "bios": {
      "short": "DJ & Beatmaker originaire de la Martinique, Pirate développe depuis 2016 une identité entre Urban et House. Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse. Il anime aussi Urban Session, où il partage ses sets et productions.",
      "long": "Originaire de la Martinique, DJ Pirate grandit avec la musique. Du piano à la batterie, il développe son sens du rythme avant de se tourner vers le mixage. Son parcours prend son essor en Guadeloupe à partir de 2016. Dès 2017, il se produit en club dans un univers caribéen. En 2019, il rejoint la scène du festival All Day In. Son originalité et sa technique lui permettent de s’imposer auprès du public, notamment à Lyon où il joue régulièrement dans les soirées afro-caribéennes dès 2020. Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse, développant des sets qui oscillent entre Urban et House selon les lieux et les publics. Ses influences caribéennes (Shatta, Bouyon, Socca) viennent enrichir cette palette sans l’enfermer dans un genre. DJ & Beatmaker, il construit ses sets autour du groove et de la lecture du dancefloor. Il crée en 2025 l’émission Urban Session, disponible sur SoundCloud et YouTube, où il partage ses sets et ses productions aux côtés des talents qui l’inspirent."
    }
  },
  "contact": {
    "eyebrow": "08 / Booking",
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
    "description": "Découvrez les 17 photos de DJ Pirate, DJ & Beatmaker basé à Paris : portraits, moments live et visuels presse pour les médias et organisateurs.",
    "homepageTitle": "L’univers de DJ Pirate.",
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
    "availabilityText": "Paris · France & international",
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
  "tagline": "DJ & Beatmaker · Urban & House music",
  "city": "Paris",
  "country": "France",
  "category": "DJ & Beatmaker",
  "description": "DJ Pirate, DJ & Beatmaker basé à Paris. Univers Urban & House. Bio, références, galerie, live et booking.",
  "longBio": "Originaire de la Martinique, DJ Pirate grandit avec la musique. Du piano à la batterie, il développe son sens du rythme avant de se tourner vers le mixage. Son parcours prend son essor en Guadeloupe à partir de 2016. Dès 2017, il se produit en club dans un univers caribéen. En 2019, il rejoint la scène du festival All Day In. Son originalité et sa technique lui permettent de s’imposer auprès du public, notamment à Lyon où il joue régulièrement dans les soirées afro-caribéennes dès 2020. Basé à Paris, il s’est produit dans de nombreuses villes françaises, en Belgique et en Suisse, développant des sets qui oscillent entre Urban et House selon les lieux et les publics. Ses influences caribéennes (Shatta, Bouyon, Socca) viennent enrichir cette palette sans l’enfermer dans un genre. DJ & Beatmaker, il construit ses sets autour du groove et de la lecture du dancefloor. Il crée en 2025 l’émission Urban Session, disponible sur SoundCloud et YouTube, où il partage ses sets et ses productions aux côtés des talents qui l’inspirent.",
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
    "title": "DJ Pirate | DJ & Beatmaker · Urban & House à Paris · Booking & press kit",
    "description": "DJ Pirate, DJ & Beatmaker basé à Paris. Univers Urban & House. Bio, références, galerie, live et booking.",
    "ogImage": "/pirate/logo/pirate-logo-og.png",
    "favicon": "/pirate/favicon/favicon.ico"
  },
  "defaultTheme": "yellow",
  "defaultVariant": "impact"
},
pressKit: piratePressKit,
};
