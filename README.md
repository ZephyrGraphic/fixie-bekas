# Fixie MVNDV2 Landing Page

Landing page Next.js untuk listing sepeda fixie MVNDV2 Aero/Geo Pursuit.

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka `http://127.0.0.1:3000`.

## File Yang Sering Diedit

- `data/product.js`: harga, nomor WhatsApp, lokasi, spek, kondisi plus-minus, dan daftar foto.
- `styles.css`: tema warna, layout, spacing, dan responsive.
- `assets/`: foto sepeda yang dipakai di hero dan galeri.
- `public/og-image.jpg`: thumbnail saat link dibagikan ke WhatsApp/social media.
- `public/icon.png`: icon tab browser dan manifest.
- `app/layout.jsx`: metadata SEO dasar.
- `app/page.jsx`: struktur halaman.

## Maintenance Rutin

```bash
npm run optimize:images
npm run seo:assets
npm run check
npm audit --omit=dev
```

Catatan audit: jangan langsung menjalankan `npm audit fix --force` tanpa cek hasilnya, karena bisa mengganti versi Next/React secara agresif.

## Update Konten Listing

1. Ubah data produk di `data/product.js`.
2. Kalau mengganti foto, simpan file baru di `assets/`, update import dan daftar `gallery`.
3. Jalankan `npm run optimize:images` setelah menambah atau mengganti foto.
4. Jalankan `npm run seo:assets` untuk memperbarui thumbnail share dan icon.
5. Jalankan `npm run check` sebelum deploy.

## Dependency

Versi dependency dipin di `package.json` dan `.npmrc` memakai `save-exact=true` supaya install ulang tidak tiba-tiba memakai versi mayor terbaru.
