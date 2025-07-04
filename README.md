# BYD Indonesia - Admin Panel 🚗⚡

Admin panel terpisah untuk mengelola konten website BYD Indonesia.

## 🌟 Fitur Utama

- **🔐 Authentication System** - Login dengan username/password
- **📊 Dashboard** - Overview statistik dan quick actions
- **🧭 Navbar Editor** - Edit logo, menu, dan tombol CTA
- **🎨 Hero Slider Editor** - Kelola slide gambar dan konten
- **📱 Responsive Design** - Mobile-friendly interface
- **🔒 Protected Routes** - Semua halaman admin dilindungi auth

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Admin panel akan berjalan di: **http://localhost:3001**

### 3. Login Credentials
```
Username: admin
Password: admin123
```

## 📁 Struktur Project

```
bydnew-admin/
├── src/
│   ├── components/          # Komponen UI
│   ├── contexts/           # React Context (Auth)
│   ├── pages/              # Halaman admin
│   ├── types/              # TypeScript types
│   └── App.tsx             # Main app
├── public/                 # Static assets
└── package.json
```

## 🔗 Integrasi dengan Website Utama

Admin panel ini **terpisah total** dari website utama:

- **Website Utama**: `http://localhost:3000` (di folder `bydnew-main`)
- **Admin Panel**: `http://localhost:3001` (di folder `bydnew-admin`)

## 🛠️ Technology Stack

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Fitur CMS

### ✅ Yang Sudah Ready:
- Login/Authentication
- Dashboard dengan statistik
- Navbar Editor (logo, menu, CTA)
- Hero Slider Editor (slides, konten)

### 🔧 Coming Soon:
- Product Editor
- Dealer Editor  
- News Editor
- Settings Panel
- Media Manager

## 🎯 Cara Menggunakan

1. **Login** - Masuk dengan credentials admin
2. **Dashboard** - Lihat overview dan quick actions
3. **Edit Navbar** - Klik "Edit Navbar" untuk mengubah navigasi
4. **Edit Hero** - Klik "Hero Slider" untuk mengelola slides
5. **Preview** - Gunakan tombol "Lihat Website" untuk melihat hasil

## 🔒 Security Features

- Protected routes dengan authentication
- Session management dengan localStorage
- Role-based access control
- Auto-logout pada session expired

---

**Developed with ❤️ for BYD Indonesia**
