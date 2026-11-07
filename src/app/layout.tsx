import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/origin";

const serif = localFont({
  src: [
    { path: "../../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2", style: "normal", weight: "300 700" },
    { path: "../../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-italic.woff2", style: "italic", weight: "300 700" },
  ],
  fallback: ["Cormorant Garamond Variable", "Georgia"], adjustFontFallback: false, variable: "--font-editorial",
});
const sans = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  weight: "200 800", fallback: ["Manrope Variable", "Arial"], adjustFontFallback: false, variable: "--font-body",
});
export const metadata: Metadata = {
  title: site.title, description: site.description,
  ...(siteUrl && { metadataBase: siteUrl, alternates: { canonical: siteUrl.href } }),
  openGraph: { title: site.title, description: site.description, locale: "cs_CZ", type: "website",
    ...(siteUrl && { url: siteUrl, images: [{ url: new URL("images/social-preview.webp", siteUrl), width: 1200, height: 630, alt: site.name }] }),
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="cs" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>;
}

