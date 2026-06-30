# Lapakly

Lapakly adalah rebuild SaaS toko-link untuk seller kecil. Fokusnya bukan cuma link bio, tapi workspace jualan: katalog, order inbox, live mobile preview, customer list, dan admin master.

## Stack

- React + Vite
- Firebase Auth
- Firestore Database
- Firebase Storage
- Cloudinary untuk upload gambar
- Firestore Security Rules
- Deploy dari GitHub ke Ryaze Portal, pilih framework `React JS`

## Jalankan Lokal

```bash
npm install
npm run dev
```

Kalau env Firebase belum diisi, app tetap jalan dalam demo mode.

## Env

Buat file `.env` dari `.env.example`:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
```

Di Vite, env frontend harus diawali `VITE_` dan dibaca memakai `import.meta.env`.

## Deploy ke Ryaze Portal

1. Push folder ini ke GitHub.
2. Buka Ryaze Portal.
3. Pilih `Deploy Proyek Baru`.
4. Masukkan URL repository GitHub.
5. Branch: `main`.
6. Nama project: contoh `lapakly`.
7. Framework: `React JS`.
8. Isi environment variable Firebase di menu env Ryaze.
9. Deploy.

## Cloudinary

Ambil `cloud_name` dari dashboard Cloudinary. Buat unsigned upload preset dari menu `Upload` > `Upload presets`, lalu isi env:

```env
VITE_CLOUDINARY_CLOUD_NAME=dxq06iq2r
VITE_CLOUDINARY_UPLOAD_PRESET=nama_preset_unsigned
```

Jangan masukkan `API Secret` ke frontend.

## Firebase Yang Perlu Dibuat

Aktifkan:

- Authentication: Email/Password
- Firestore Database
- Firebase Storage

Deploy rules:

```bash
firebase deploy --only firestore:rules,firestore:indexes,storage
```

## Koleksi Firestore

- `users`: profil akun, role, plan, status.
- `stores`: profil toko seller.
- `products`: katalog produk.
- `orders`: order buyer.
- `customers`: data pelanggan seller.
- `premiumRequests`: request upgrade.
- `appSettings`: maintenance, allow register, harga premium.
- `auditLogs`: catatan aksi penting.

## Catatan Keamanan

- Jangan commit `.env`.
- Jangan pernah taruh service account atau private key di frontend.
- Role, plan, dan status tidak boleh diubah user biasa.
- Upload gambar dibatasi Storage Rules.
- Query dashboard wajib pakai limit/pagination.
- Logic admin penting tetap harus dikunci di rules atau backend, bukan sekadar sembunyi tombol.
