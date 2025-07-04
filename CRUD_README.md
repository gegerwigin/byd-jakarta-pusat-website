# Sistem CRUD - Manajemen Item

Sistem CRUD (Create, Read, Update, Delete) yang lengkap untuk mengelola data item dengan antarmuka yang modern dan responsif.

## 🚀 Fitur

### ✨ Operasi CRUD Lengkap
- **Create**: Tambah item baru dengan validasi form
- **Read**: Tampilkan daftar item dalam tabel yang terurut
- **Update**: Edit item yang sudah ada
- **Delete**: Hapus item dengan konfirmasi

### 🔍 Fitur Pencarian & Filter
- Pencarian real-time berdasarkan nama, kategori, atau deskripsi
- Sorting kolom dengan klik header tabel
- Filter data yang responsif

### 📊 Dashboard & Statistik
- Total item yang tersedia
- Jumlah item dengan stok tersedia
- Jumlah item dengan stok habis
- Antarmuka yang informatif

### 💾 Penyimpanan Data
- Menggunakan localStorage untuk demo
- Data persisten di browser
- Auto-generate sample data untuk testing

## 🛠️ Teknologi

- **Frontend**: React 18 + TypeScript
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Struktur File

```
src/
├── types/
│   └── index.ts              # Interface TypeScript
├── services/
│   └── itemService.ts        # Service untuk operasi CRUD
├── components/
│   ├── ItemForm.tsx          # Form untuk create/update item
│   ├── ItemTable.tsx         # Tabel untuk menampilkan data
│   └── ItemDetail.tsx        # Modal detail item
├── pages/
│   └── CrudPage.tsx          # Halaman utama CRUD
└── utils/
    └── sampleData.ts         # Generator data sample
```

## 🎯 Interface Data

```typescript
interface Item {
  id: string;                 // ID unik
  nama: string;               // Nama item
  deskripsi: string;          // Deskripsi item
  harga: number;              // Harga dalam rupiah
  kategori: string;           // Kategori item
  stok: number;               // Jumlah stok
  tanggalDibuat: string;      // Timestamp created
  tanggalDiperbarui: string;  // Timestamp updated
}
```

## 🚀 Cara Penggunaan

### 1. Akses Halaman CRUD
- Klik menu "CRUD" di navigasi header
- Atau akses langsung `/crud`

### 2. Menambah Item Baru
- Klik tombol "Tambah Item"
- Isi form dengan data yang valid
- Klik "Simpan" untuk menyimpan

### 3. Mencari Item
- Gunakan kotak pencarian di bagian atas
- Ketik nama, kategori, atau deskripsi item
- Hasil akan difilter secara real-time

### 4. Mengurutkan Data
- Klik header kolom untuk mengurutkan
- Klik lagi untuk membalik urutan (asc/desc)

### 5. Melihat Detail Item
- Klik ikon mata (👁️) pada kolom aksi
- Modal detail akan menampilkan informasi lengkap

### 6. Mengedit Item
- Klik ikon edit (✏️) pada kolom aksi
- Form edit akan terbuka dengan data pre-filled
- Ubah data dan klik "Perbarui"

### 7. Menghapus Item
- Klik ikon hapus (🗑️) pada kolom aksi
- Konfirmasi penghapusan pada dialog
- Item akan dihapus dari database

## 🎨 Fitur UI/UX

### 📱 Responsive Design
- Tampilan optimal di desktop, tablet, dan mobile
- Tabel yang dapat discroll pada layar kecil
- Form yang adaptif

### 🎭 Antarmuka Modern
- Design menggunakan shadcn/ui components
- Animasi dan transisi yang smooth
- Color scheme yang konsisten

### ⚡ Performance
- Pencarian real-time tanpa lag
- Lazy loading untuk performa optimal
- State management yang efisien

### 🔒 Validasi Form
- Validasi client-side dengan Zod schema
- Error messages yang informatif
- Input sanitization

## 📊 Sample Data

Sistem otomatis generate 10 item sample meliputi:
- Laptop Gaming ASUS ROG
- iPhone 14 Pro
- Samsung Smart TV 55"
- Kursi Gaming Secretlab
- Mechanical Keyboard RGB
- Headset Gaming Wireless
- Monitor 4K 27"
- SSD External 1TB
- Webcam 4K Logitech
- Mouse Gaming Wireless

## 🛡️ Error Handling

- Try-catch untuk semua operasi
- Toast notifications untuk feedback
- Graceful fallback untuk error state
- Validation error display

## 🔄 State Management

- Local state dengan React hooks
- Optimistic updates untuk UX yang smooth
- Proper loading states
- Error state handling

## 🎯 Future Enhancements

- [ ] Export data ke CSV/Excel
- [ ] Import data dari file
- [ ] Bulk operations (delete multiple)
- [ ] Advanced filtering options
- [ ] Image upload untuk item
- [ ] Categories management
- [ ] Audit trail/history log
- [ ] Real-time sync dengan database
- [ ] User authentication
- [ ] Role-based permissions

## 📈 Statistik Fitur

- ✅ 4 operasi CRUD lengkap
- ✅ Real-time search
- ✅ Column sorting
- ✅ Responsive table
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Sample data generation
- ✅ Modern UI components
- ✅ TypeScript support 