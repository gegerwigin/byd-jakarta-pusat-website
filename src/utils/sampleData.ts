import { createItem, getAllItems } from '../services/itemService';

export const generateSampleData = () => {
  // Cek apakah sudah ada data
  const existingItems = getAllItems();
  if (existingItems.length > 0) {
    console.log('Sample data sudah ada');
    return;
  }

  const sampleItems = [
    {
      nama: 'Laptop Gaming ASUS ROG',
      deskripsi: 'Laptop gaming dengan performa tinggi, RAM 16GB, RTX 3060, SSD 512GB',
      harga: 18500000,
      kategori: 'Elektronik',
      stok: 15
    },
    {
      nama: 'iPhone 14 Pro',
      deskripsi: 'Smartphone flagship Apple dengan kamera Pro dan chip A16 Bionic',
      harga: 18999000,
      kategori: 'Smartphone',
      stok: 8
    },
    {
      nama: 'Samsung Smart TV 55"',
      deskripsi: 'Smart TV 4K dengan teknologi QLED dan sistem operasi Tizen',
      harga: 12500000,
      kategori: 'Elektronik',
      stok: 5
    },
    {
      nama: 'Kursi Gaming Secretlab',
      deskripsi: 'Kursi gaming ergonomis dengan bantalan memory foam dan lumbar support',
      harga: 6500000,
      kategori: 'Furniture',
      stok: 12
    },
    {
      nama: 'Mechanical Keyboard RGB',
      deskripsi: 'Keyboard mekanik dengan switch Cherry MX Blue dan backlighting RGB',
      harga: 1250000,
      kategori: 'Aksesoris',
      stok: 25
    },
    {
      nama: 'Headset Gaming Wireless',
      deskripsi: 'Headset gaming wireless dengan surround sound 7.1 dan mikrofon noise-cancelling',
      harga: 2800000,
      kategori: 'Aksesoris',
      stok: 0
    },
    {
      nama: 'Monitor 4K 27"',
      deskripsi: 'Monitor 4K IPS dengan refresh rate 144Hz untuk gaming dan productivity',
      harga: 8500000,
      kategori: 'Elektronik',
      stok: 7
    },
    {
      nama: 'SSD External 1TB',
      deskripsi: 'SSD eksternal portable dengan koneksi USB-C dan kecepatan transfer tinggi',
      harga: 2100000,
      kategori: 'Storage',
      stok: 18
    },
    {
      nama: 'Webcam 4K Logitech',
      deskripsi: 'Webcam 4K dengan autofocus dan mikrofon stereo untuk video conference',
      harga: 3200000,
      kategori: 'Aksesoris',
      stok: 9
    },
    {
      nama: 'Mouse Gaming Wireless',
      deskripsi: 'Mouse gaming wireless dengan sensor 25K DPI dan baterai 70 jam',
      harga: 1850000,
      kategori: 'Aksesoris',
      stok: 0
    }
  ];

  sampleItems.forEach(item => {
    createItem(item);
  });

  console.log(`${sampleItems.length} sample items berhasil ditambahkan`);
}; 