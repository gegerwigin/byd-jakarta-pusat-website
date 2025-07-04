import { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ItemForm } from '../components/ItemForm';
import { ItemTable } from '../components/ItemTable';
import { ItemDetail } from '../components/ItemDetail';
import { Item, CreateItemData } from '../types';
import { 
  getAllItems, 
  createItem, 
  updateItem, 
  deleteItem, 
  searchItems 
} from '../services/itemService';
import { generateSampleData } from '../utils/sampleData';

export default function CrudPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Load data saat komponen mount
  useEffect(() => {
    // Generate sample data jika belum ada
    generateSampleData();
    loadItems();
  }, []);

  // Filter items berdasarkan search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredItems(items);
    } else {
      const results = searchItems(searchQuery);
      setFilteredItems(results);
    }
  }, [searchQuery, items]);

  const loadItems = () => {
    try {
      const allItems = getAllItems();
      setItems(allItems);
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal memuat data item",
        variant: "destructive",
      });
    }
  };

  const handleCreateItem = async (data: CreateItemData) => {
    setIsLoading(true);
    try {
      const newItem = createItem(data);
      setItems(prev => [newItem, ...prev]);
      setIsFormOpen(false);
      setEditingItem(null);
      toast({
        title: "Berhasil",
        description: "Item baru berhasil ditambahkan",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menambahkan item baru",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateItem = async (data: CreateItemData) => {
    if (!editingItem) return;
    
    setIsLoading(true);
    try {
      const updatedItem = updateItem({ ...data, id: editingItem.id });
      if (updatedItem) {
        setItems(prev => prev.map(item => 
          item.id === updatedItem.id ? updatedItem : item
        ));
        setIsFormOpen(false);
        setEditingItem(null);
        toast({
          title: "Berhasil",
          description: "Item berhasil diperbarui",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal memperbarui item",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      const success = deleteItem(id);
      if (success) {
        setItems(prev => prev.filter(item => item.id !== id));
        toast({
          title: "Berhasil",
          description: "Item berhasil dihapus",
        });
      } else {
        toast({
          title: "Error",
          description: "Item tidak ditemukan",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menghapus item",
        variant: "destructive",
      });
    }
  };

  const handleEditItem = (item: Item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleViewItem = (item: Item) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setIsFormOpen(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manajemen Item</h1>
            <p className="text-muted-foreground">
              Kelola data item dengan operasi Create, Read, Update, dan Delete
            </p>
          </div>
          <Button onClick={handleAddNew} className="w-fit">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Item
          </Button>
        </div>

        {/* Search Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Cari item berdasarkan nama, kategori, atau deskripsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{items.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Item Tersedia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {items.filter(item => item.stok > 0).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stok Habis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {items.filter(item => item.stok === 0).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Item</CardTitle>
          </CardHeader>
          <CardContent>
            <ItemTable
              items={filteredItems}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
              onView={handleViewItem}
              isLoading={isLoading}
            />
          </CardContent>
        </Card>
      </div>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingItem ? 'Edit Item' : 'Tambah Item Baru'}
            </DialogTitle>
          </DialogHeader>
          <ItemForm
            item={editingItem || undefined}
            onSubmit={editingItem ? handleUpdateItem : handleCreateItem}
            onCancel={handleFormCancel}
            isLoading={isLoading}
          />
        </DialogContent>
      </Dialog>

      {/* Detail Dialog */}
      <ItemDetail
        item={selectedItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
} 