import "../styles.css";

const siteUrl = "https://fixie-bekas.vercel.app";
const title = "Kai Fixie | Fixie MVNDV2 Aero/Geo Pursuit Bekas";
const description =
  "Kai Fixie menjual fixie MVNDV2 Aero/Geo Pursuit bekas: frame custom FIXFIX, wheelset platinum, ban 700x25c, bonus lampu, titik cek barang Cisaat Sukabumi.";

export const viewport = {
  themeColor: "#7f1d2f",
  colorScheme: "dark light",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kai Fixie",
  title: {
    default: title,
    template: "%s | Kai Fixie",
  },
  description,
  keywords: [
    "Kai Fixie",
    "Kai Fixie bekas",
    "Kai Fixie MVNDV2",
    "fixie bekas",
    "sepeda fixie bekas",
    "fixie MVNDV2",
    "fixie aero geo pursuit",
    "sepeda fixie Jakarta",
    "fixie custom FIXFIX",
    "wheelset platinum",
  ],
  authors: [{ name: "Kai Fixie" }],
  creator: "Kai Fixie",
  publisher: "Kai Fixie",
  category: "marketplace",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kai Fixie",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kai Fixie menjual fixie MVNDV2 Aero/Geo Pursuit bekas warna maroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
