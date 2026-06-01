import Image from "next/image";
import {
  buildStory,
  buyerFits,
  conditionMinus,
  conditionPlus,
  dealFlow,
  features,
  gallery,
  heroStats,
  product,
  showcaseStats,
  specs,
  whatsappUrl,
} from "../data/product";

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="Navigasi utama">
        <a className="brand" href="#top" aria-label={product.brand}>
          <span className="brand-mark" aria-hidden="true" />
          {product.brand}
        </a>
        <nav className="nav-links" aria-label="Navigasi halaman">
          <a href="#story">Story</a>
          <a href="#spek">Spek</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src={product.images.hero}
            alt=""
            className="hero-image"
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1 id="hero-title">{product.title}</h1>
            <p className="hero-copy">{product.description}</p>
            <div className="hero-meta" aria-label="Ringkasan produk">
              {product.heroFacts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl}>
                Chat WhatsApp
              </a>
              <a className="button button-secondary" href="#spek">
                Cek Spek
              </a>
            </div>
          </div>
          <div className="hero-sticker" aria-hidden="true">
            <span>Bonus</span>
            <strong>Lampu set</strong>
          </div>
          <aside className="hero-dashboard" aria-label="Snapshot listing">
            <p className="dashboard-label">Listing snapshot</p>
            {heroStats.map(([label, value]) => (
              <div className="dashboard-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>
        </section>

        <section className="quick-strip" aria-label="Highlight singkat">
          {product.quickFacts.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </section>

        <section className="section story-section" id="story" aria-labelledby="story-title">
          <div className="story-layout">
            <div className="story-copy">
              <p className="eyebrow dark">Build story</p>
              <h2 id="story-title">Satu unit, satu narasi: custom, jujur, siap dicek.</h2>
              <p>
                Landing page ini diarahkan seperti pitch produk: calon pembeli langsung
                melihat unit asli, nilai jual, kondisi, harga, dan alur kontak tanpa
                harus menebak-nebak.
              </p>
            </div>
            <figure className="story-media">
              <Image
                src={gallery[1].image}
                alt={gallery[1].alt}
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <figcaption>Maroon frame, pink bar tape, blue hub.</figcaption>
            </figure>
          </div>
          <div className="story-card-grid">
            {buildStory.map((item) => (
              <article className="story-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="showcase-stats" aria-label="Angka penting produk">
            {showcaseStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-section" aria-labelledby="intro-title">
          <div className="section-heading">
            <p className="eyebrow dark">Kenapa worth it</p>
            <h2 id="intro-title">Build custom yang siap dipakai, bukan cuma manis di foto.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section fit-section" aria-labelledby="fit-title">
          <div className="section-heading">
            <p className="eyebrow dark">Target rider</p>
            <h2 id="fit-title">Biar audiens langsung paham: sepeda ini cocoknya buat siapa.</h2>
          </div>
          <div className="fit-grid">
            {buyerFits.map((fit) => (
              <article className="fit-card" key={fit.title}>
                <div className="fit-card-header">
                  <h3>{fit.title}</h3>
                  <strong>{fit.match}</strong>
                </div>
                <div className="fit-meter" aria-hidden="true">
                  <span style={{ width: fit.match }} />
                </div>
                <p>{fit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section spec-section" id="spek" aria-labelledby="spec-title">
          <div className="section-heading">
            <p className="eyebrow dark">Spek utama</p>
            <h2 id="spec-title">Detail part yang biasanya langsung ditanya.</h2>
          </div>
          <div className="spec-layout">
            <dl className="spec-list">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <aside className="deal-panel" aria-label="Ringkasan deal">
              <p className="tag">Fast check</p>
              <h3>Serius minat? Chat dulu, lanjut atur cek barang.</h3>
              <p>
                Nomor WhatsApp: {product.phone}. Lokasi cek barang di {product.location}.
              </p>
              <a className="button button-panel" href={whatsappUrl}>
                Tanya sepeda
              </a>
            </aside>
          </div>
        </section>

        <section className="condition-band" id="kondisi" aria-labelledby="condition-title">
          <div>
            <p className="eyebrow">Kondisi real</p>
            <h2 id="condition-title">Plus-minus ditulis terang biar deal-nya santai.</h2>
          </div>
          <p>
            Unit bekas pakai, masih layak diajak rolling. Bagian penting seperti
            frame, jari-jari, ban, dan rantai sudah dijelaskan supaya calon pembeli
            bisa cek dengan lebih cepat.
          </p>
        </section>

        <section className="section condition-details" aria-label="Detail kondisi sepeda">
          <div className="condition-grid">
            <article className="condition-card condition-good">
              <p className="condition-label">Kondisi plus</p>
              <ul>
                {conditionPlus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="condition-card condition-bad">
              <p className="condition-label">Minus jujur</p>
              <ul>
                {conditionMinus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="condition-card condition-bonus">
              <p className="condition-label">Bonus</p>
              <h3>Lampu depan &amp; belakang ikut.</h3>
              <p>Langsung siap dipakai pulang sore atau malam setelah cek barang.</p>
            </article>
          </div>
        </section>

        <section className="section flow-section" aria-labelledby="flow-title">
          <div className="section-heading">
            <p className="eyebrow">Deal flow</p>
            <h2 id="flow-title">Alur pembelian dibuat singkat, aman, dan enak dipresentasikan.</h2>
          </div>
          <ol className="flow-list">
            {dealFlow.map((item) => (
              <li className="flow-item" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section gallery-section" id="galeri" aria-labelledby="gallery-title">
          <div className="section-heading">
            <p className="eyebrow dark">Galeri asli</p>
            <h2 id="gallery-title">Foto real unit, dari full bike sampai detail cockpit.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className={item.featured ? "gallery-main" : undefined} key={item.caption}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  sizes={item.featured ? "(max-width: 900px) 100vw, 64vw" : "(max-width: 900px) 100vw, 28vw"}
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="final-cta" id="kontak" aria-labelledby="cta-title">
          <p className="eyebrow">Ready kalau kamu ready</p>
          <h2 id="cta-title">Gas cek barang di Sakura Gardenia BLOK H21.</h2>
          <p>
            Chat dulu ke WhatsApp {product.phone}, tanya detail yang belum jelas, lalu
            atur jadwal cek dan test ride.
          </p>
          <a className="button button-primary" href={whatsappUrl}>
            Chat WhatsApp
          </a>
        </section>
      </main>

      <a className="floating-cta" href={whatsappUrl}>
        Chat WhatsApp <span>{product.price}</span>
      </a>
    </>
  );
}
