import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateItemData, Item } from '../types';

const itemSchema = z.object({
  nama: z.string().min(1, 'Nama tidak boleh kosong').max(100, 'Nama terlalu panjang'),
  deskripsi: z.string().min(1, 'Deskripsi tidak boleh kosong').max(500, 'Deskripsi terlalu panjang'),
  harga: z.number().min(0, 'Harga harus lebih dari 0'),
  kategori: z.string().min(1, 'Kategori tidak boleh kosong').max(50, 'Kategori terlalu panjang'),
  stok: z.number().min(0, 'Stok tidak boleh negatif'),
});

interface ItemFormProps {
  item?: Item;
  onSubmit: (data: CreateItemData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const ItemForm: React.FC<ItemFormProps> = ({ 
  item, 
  onSubmit, 
  onCancel, 
  isLoading = false 
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateItemData>({
    resolver: zodResolver(itemSchema),
    defaultValues: item ? {
      nama: item.nama,
      deskripsi: item.deskripsi,
      harga: item.harga,
      kategori: item.kategori,
      stok: item.stok,
    } : {
      nama: '',
      deskripsi: '',
      harga: 0,
      kategori: '',
      stok: 0,
    },
  });

  const handleFormSubmit = (data: CreateItemData) => {
    onSubmit(data);
    if (!item) {
      reset(); // Reset form hanya jika sedang membuat item baru
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {item ? 'Edit Item' : 'Tambah Item Baru'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama Item</Label>
            <Input
              id="nama"
              {...register('nama')}
              placeholder="Masukkan nama item"
              className={errors.nama ? 'border-red-500' : ''}
            />
            {errors.nama && (
              <p className="text-sm text-red-500">{errors.nama.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deskripsi">Deskripsi</Label>
            <Textarea
              id="deskripsi"
              {...register('deskripsi')}
              placeholder="Masukkan deskripsi item"
              className={errors.deskripsi ? 'border-red-500' : ''}
              rows={3}
            />
            {errors.deskripsi && (
              <p className="text-sm text-red-500">{errors.deskripsi.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="harga">Harga</Label>
              <Input
                id="harga"
                type="number"
                step="0.01"
                {...register('harga', { valueAsNumber: true })}
                placeholder="0"
                className={errors.harga ? 'border-red-500' : ''}
              />
              {errors.harga && (
                <p className="text-sm text-red-500">{errors.harga.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="stok">Stok</Label>
              <Input
                id="stok"
                type="number"
                {...register('stok', { valueAsNumber: true })}
                placeholder="0"
                className={errors.stok ? 'border-red-500' : ''}
              />
              {errors.stok && (
                <p className="text-sm text-red-500">{errors.stok.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="kategori">Kategori</Label>
            <Input
              id="kategori"
              {...register('kategori')}
              placeholder="Masukkan kategori"
              className={errors.kategori ? 'border-red-500' : ''}
            />
            {errors.kategori && (
              <p className="text-sm text-red-500">{errors.kategori.message}</p>
            )}
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              disabled={isLoading}
            >
              Batal
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? 'Menyimpan...' : (item ? 'Perbarui' : 'Simpan')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}; 