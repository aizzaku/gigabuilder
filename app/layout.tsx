import type { Metadata } from "next";
import "./globals.css";

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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
