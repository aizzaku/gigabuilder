import type { Metadata } from "next";
import { Sora, DM_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Gigabuilder — Community Apps for Gigaverse",
  description:
    "Discover tools, trackers, and meta-games built by the Gigaverse community. Explore the ecosystem.",
  metadataBase: new URL("https://builder.gigaversehub.com"),
  openGraph: {
    title: "Gigabuilder — Community Apps for Gigaverse",
    description:
      "Discover tools, trackers, and meta-games built by the Gigaverse community.",
    url: "https://builder.gigaversehub.com",
    siteName: "Gigabuilder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigabuilder — Community Apps for Gigaverse",
    description:
      "Discover tools, trackers, and meta-games built by the Gigaverse community.",
    site: "@playgigaverse",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${fragmentMono.variable}`}>
      <head />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
