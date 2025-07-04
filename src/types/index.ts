export interface Item {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  stok: number;
  tanggalDibuat: string;
  tanggalDiperbarui: string;
}

export interface CreateItemData {
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  stok: number;
}

export interface UpdateItemData extends Partial<CreateItemData> {
  id: string;
} 