import type { CSSProperties } from "react";

export type TemplateId =
  | "red"
  | "blue"
  | "green"
  | "labringue"
  | "yellow"
  | "orange"
  | "violet"
  | "monochrome";

export type TemplateTheme = {
  id: TemplateId;
  label: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  accentRgb: string;
  background: string;
  text: string;
};

export type TemplateVariantId = "impact" | "interactive" | "showcase";

export type TemplateVariant = {
  id: TemplateVariantId;
  label: string;
};

export const templateThemes: Record<TemplateId, TemplateTheme> = {
  red: {
    id: "red",
    label: "Red",
    accent: "#D9252A",
    accentStrong: "#E32D32",
    accentSoft: "#FF7A7E",
    accentRgb: "217 37 42",
    background: "#050505",
    text: "#FFFFFF",
  },
  blue: {
    id: "blue",
    label: "Blue",
    accent: "#2F6BFF",
    accentStrong: "#4A82FF",
    accentSoft: "#98B6FF",
    accentRgb: "47 107 255",
    background: "#04070F",
    text: "#F7FAFF",
  },
  green: {
    id: "green",
    label: "Green",
    accent: "#19B46B",
    accentStrong: "#23C77A",
    accentSoft: "#8EF0BF",
    accentRgb: "25 180 107",
    background: "#04100B",
    text: "#F4FFF8",
  },
  labringue: {
    id: "labringue",
    label: "Rose",
    accent: "#FF0091",
    accentStrong: "#F3A623",
    accentSoft: "#F5F1E8",
    accentRgb: "255 0 145",
    background: "#101218",
    text: "#F5F1E8",
  },
  yellow: {
    id: "yellow",
    label: "Yellow",
    accent: "#F5C400",
    accentStrong: "#FFD800",
    accentSoft: "#FFE97A",
    accentRgb: "245 196 0",
    background: "#0B0900",
    text: "#FFFEF0",
  },
  orange: {
    id: "orange",
    label: "Orange",
    accent: "#F05A28",
    accentStrong: "#FF6C3A",
    accentSoft: "#FFAE8D",
    accentRgb: "240 90 40",
    background: "#080606",
    text: "#FFF8F6",
  },
  violet: {
    id: "violet",
    label: "Violet",
    accent: "#7C3AED",
    accentStrong: "#8F4DFF",
    accentSoft: "#C8A9FF",
    accentRgb: "124 58 237",
    background: "#090511",
    text: "#FBF8FF",
  },
  monochrome: {
    id: "monochrome",
    label: "Noir et blanc",
    accent: "#FFFFFF",
    accentStrong: "#E5E5E5",
    accentSoft: "#B8B8B8",
    accentRgb: "255 255 255",
    background: "#050505",
    text: "#FFFFFF",
  },
};

export const defaultTemplateId: TemplateId = "red";
export const templateThemeOrder: TemplateId[] = [
  "red",
  "blue",
  "green",
  "labringue",
  "yellow",
  "orange",
  "violet",
  "monochrome",
];
export const templateVariants: Record<TemplateVariantId, TemplateVariant> = {
  impact: { id: "impact", label: "Impact" },
  interactive: { id: "interactive", label: "Interactif" },
  showcase: { id: "showcase", label: "Vitrine" },
};
export const defaultTemplateVariantId: TemplateVariantId = "impact";
export const templateVariantOrder: TemplateVariantId[] = [
  "impact",
  "interactive",
  "showcase",
];

const templateAliases: Record<string, TemplateId> = {
  midnight: "red",
  ember: "orange",
  sapphire: "blue",
  purple: "violet",
  blackwhite: "monochrome",
  "black-and-white": "monochrome",
  noirblanc: "monochrome",
  jaune: "yellow",
  gold: "yellow",
  bringue: "labringue",
  afro: "labringue",
};

export function getTemplateTheme(template?: string): TemplateTheme {
  if (!template) return templateThemes[defaultTemplateId];

  const normalizedTemplate = template.toLowerCase();
  const resolvedTemplate =
    templateThemes[normalizedTemplate as TemplateId] ??
    templateThemes[templateAliases[normalizedTemplate]];

  return resolvedTemplate ?? templateThemes[defaultTemplateId];
}

export function getTemplateStyle(theme: TemplateTheme): CSSProperties {
  return {
    "--pk-accent": theme.accent,
    "--pk-accent-strong": theme.accentStrong,
    "--pk-accent-soft": theme.accentSoft,
    "--pk-accent-rgb": theme.accentRgb,
    "--pk-bg": theme.background,
    "--pk-text": theme.text,
  } as CSSProperties;
}

export function getTemplateThemeEntries(): TemplateTheme[] {
  return templateThemeOrder.map((id) => templateThemes[id]);
}

export function getTemplateVariant(variant?: string): TemplateVariant {
  if (!variant) return templateVariants[defaultTemplateVariantId];

  const normalizedVariant = variant.toLowerCase();
  return (
    templateVariants[normalizedVariant as TemplateVariantId] ??
    templateVariants[defaultTemplateVariantId]
  );
}

export function getTemplateVariantEntries(): TemplateVariant[] {
  return templateVariantOrder.map((id) => templateVariants[id]);
}
