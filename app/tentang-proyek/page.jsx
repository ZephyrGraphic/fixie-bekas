import Image from "next/image";
import { gallery, product, seoReadiness, seoWins } from "../../data/product";

export const metadata = {
  title: "Tentang Proyek Kai Fixie",
  description:
    "Halaman penjelasan proyek Kai Fixie untuk presentasi tugas: tujuan website, target pengguna, fitur utama, teknologi, dan optimasi SEO/performa.",
  alternates: {
    canonical: "/tentang-proyek",
  },
};

const projectGoals = [
  {
    title: "Membuat listing lebih meyakinkan",
    description:
      "Website ini mengubah informasi sepeda bekas yang biasanya tersebar menjadi satu landing page yang runtut, visual, dan mudah dipahami.",
  },
  {
    title: "Mempercepat keputusan calon pembeli",
    description:
      "Harga, lokasi, spek, kondisi plus-minus, foto asli, dan alur cek barang ditampilkan jelas agar calon pembeli tidak perlu menebak.",
  },
  {
    title: "Menjadi studi kasus web modern",
    description:
      "Selain menjual produk, proyek ini menunjukkan penerapan responsive design, SEO, optimized images, structured data, dan deploy workflow.",
  },
];

const audiences = [
  "Calon pembeli sepeda fixie bekas yang butuh informasi cepat dan transparan.",
  "Starter fixie yang ingin melihat spek, kondisi, dan harga dalam format yang mudah dibaca.",
  "Audiens presentasi atau dosen yang menilai konsep, implementasi, dan value proyek web.",
];

const mainFeatures = [
  "Hero full-bleed dengan foto asli unit sepeda.",
  "Ringkasan harga, net price, lokasi, dan spek penting.",
  "Build story dan target rider untuk memperjelas positioning produk.",
  "Spek lengkap, kondisi plus, minus jujur, bonus, dan galeri foto.",
  "Deal flow yang menjelaskan alur chat, cek barang, test ride, dan deal.",
  "CTA WhatsApp langsung dengan pesan siap kirim.",
];

const techStack = [
  ["Framework", "Next.js 16 App Router"],
  ["UI", "React 19"],
  ["Styling", "Global CSS custom"],
  ["Images", "next/image + Sharp"],
  ["SEO", "Metadata API, Open Graph, Twitter Card, JSON-LD"],
  ["Deploy", "Vercel"],
];

const optimizations = [
  "Foto asli dikompres dengan script Sharp agar lebih ringan untuk mobile.",
  "Hero dan galeri memakai next/image untuk responsive image delivery.",
  "Metadata SEO diarahkan ke domain production fixie-bekas.vercel.app.",
  "Thumbnail Open Graph 1200x630 dibuat khusus untuk preview WhatsApp/social media.",
  "Sitemap, robots.txt, manifest, favicon, dan file verifikasi Google Search Console sudah tersedia.",
  "Structured data WebSite dan Product membantu crawler memahami konteks Kai Fixie.",
];

export default function TentangProyek() {
  return (
    <main className="project-page">
      <section className="project-hero" aria-labelledby="project-page-title">
        <div className="project-hero-copy">
          <p className="eyebrow">Halaman presentasi</p>
          <h1 id="project-page-title">Tentang Proyek Kai Fixie</h1>
          <p>
            Kai Fixie adalah landing page untuk menjual sepeda fixie bekas MVNDV2
            Aero/Geo Pursuit dengan pendekatan visual, transparan, SEO-ready, dan
            siap dipresentasikan sebagai tugas web.
          </p>
        </div>
        <figure className="project-hero-media">
          <Image
            src={gallery[0].image}
            alt="Sepeda fixie MVNDV2 Aero/Geo Pursuit yang menjadi objek proyek Kai Fixie"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <figcaption>{product.seoTitle}</figcaption>
        </figure>
      </section>

      <section className="project-page-section" aria-labelledby="goal-title">
        <div className="project-page-heading">
          <p className="eyebrow dark">Tujuan website</p>
          <h2 id="goal-title">Dari listing biasa menjadi pengalaman jualan yang rapi.</h2>
        </div>
        <div className="project-info-grid">
          {projectGoals.map((item) => (
            <article className="project-info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-page-section project-split-section" aria-labelledby="audience-title">
        <div className="project-page-heading">
          <p className="eyebrow dark">Target pengguna</p>
          <h2 id="audience-title">Website ini dibuat untuk pembeli, bukan sekadar pajangan.</h2>
        </div>
        <ul className="project-list">
          {audiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="project-page-section" aria-labelledby="features-title">
        <div className="project-page-heading">
          <p className="eyebrow dark">Fitur utama</p>
          <h2 id="features-title">Elemen yang membuat halaman ini siap jual dan siap presentasi.</h2>
        </div>
        <div className="project-feature-list">
          {mainFeatures.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="project-page-section tech-section" aria-labelledby="tech-title">
        <div className="project-page-heading">
          <p className="eyebrow">Teknologi</p>
          <h2 id="tech-title">Stack dibuat ringan, maintainable, dan deploy-ready.</h2>
        </div>
        <dl className="tech-list">
          {techStack.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="project-page-section" aria-labelledby="seo-title">
        <div className="project-page-heading">
          <p className="eyebrow dark">SEO & performa</p>
          <h2 id="seo-title">Optimasi dilakukan dari aset, metadata, sampai structured data.</h2>
        </div>
        <div className="seo-page-layout">
          <aside className="seo-score-card">
            <p className="eyebrow">SEO readiness</p>
            <strong>{seoReadiness.score}</strong>
            <h3>{seoReadiness.keyword}</h3>
            <p>{seoReadiness.note}</p>
          </aside>
          <div className="optimization-list">
            {optimizations.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="seo-win-grid">
          {seoWins.map((item) => (
            <article className="seo-win-card" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
