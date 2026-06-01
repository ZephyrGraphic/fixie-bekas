import "../styles.css";

export const metadata = {
  title: "Fixie MVNDV2 Aero/Geo Pursuit",
  description:
    "Landing page penjualan sepeda fixie MVNDV2 Aero/Geo Pursuit bekas dengan detail part, kondisi, harga, lokasi, dan kontak WhatsApp.",
  openGraph: {
    title: "Fixie MVNDV2 Aero/Geo Pursuit",
    description:
      "Fixie custom bekas siap cek barang di Perumahan Sakura Gardenia BLOK H21.",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fixie MVNDV2 Aero/Geo Pursuit",
    description:
      "Fixie custom bekas siap cek barang di Perumahan Sakura Gardenia BLOK H21.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
