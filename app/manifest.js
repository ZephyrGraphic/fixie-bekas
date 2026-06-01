export default function manifest() {
  return {
    name: "Kai Fixie - Fixie MVNDV2 Aero/Geo Pursuit Bekas",
    short_name: "Kai Fixie",
    description:
      "Kai Fixie adalah landing page penjualan fixie MVNDV2 Aero/Geo Pursuit bekas dengan foto asli, spek, kondisi, dan kontak WhatsApp.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b0d10",
    theme_color: "#7f1d2f",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
