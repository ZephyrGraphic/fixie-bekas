const siteUrl = "https://fixie-bekas.vercel.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tentang-proyek`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
