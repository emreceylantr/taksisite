import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solitaksii.com"),
  title: "Soli Taksi | Premium Taksi ve Transfer",
  description:
    "Mersin şehir içi yolculuk, havalimanı transferi ve kurumsal ulaşım için planlı ve güvenilir taksi hizmeti.",
  openGraph: {
    title: "Soli Taksi | Premium Taksi ve Transfer",
    description:
      "Mersin şehir içi yolculuk, havalimanı transferi ve kurumsal ulaşım için planlı ve güvenilir taksi hizmeti.",
    url: "https://solitaksii.com",
    siteName: "Soli Taksi",
    images: [
      {
        url: "/taxi-hero.png",
        width: 1774,
        height: 887,
        alt: "Soli Taksi aracı şehir caddesinde",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soli Taksi | Premium Taksi ve Transfer",
    description:
      "Mersin şehir içi yolculuk, havalimanı transferi ve kurumsal ulaşım için planlı ve güvenilir taksi hizmeti.",
    images: ["/taxi-hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
