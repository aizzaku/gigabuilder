export type AppTag = "Metagame" | "Analytics" | "Trading" | "Automation" | "Tools";

export interface Builder {
  name: string;
  handle: string;
  twitterUrl: string;
}

export interface GigaApp {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  builders: Builder[];
  keyFeatures: string[];
  tags: AppTag[];
  status: "active" | "deprecated";
  launchUrl: string;
  screenshots: string[];
  logo: string;
}
