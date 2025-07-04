import { Item, CreateItemData, UpdateItemData } from '../types';

const STORAGE_KEY = 'crud_items';

// Fungsi helper untuk generate ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Fungsi helper untuk mendapatkan timestamp saat ini
const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Mendapatkan semua item dari localStorage
export const getAllItems = (): Item[] => {
  try {
    const items = localStorage.getItem(STORAGE_KEY);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error('Error parsing items from localStorage:', error);
    return [];
  }
};

// Menyimpan array item ke localStorage
const saveItems = (items: Item[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Error saving items to localStorage:', error);
  }
};

// Membuat item baru
export const createItem = (data: CreateItemData): Item => {
  const newItem: Item = {
    id: generateId(),
    ...data,
    tanggalDibuat: getCurrentTimestamp(),
    tanggalDiperbarui: getCurrentTimestamp(),
  };

  const items = getAllItems();
  items.push(newItem);
  saveItems(items);
  
  return newItem;
};

// Mendapatkan item berdasarkan ID
export const getItemById = (id: string): Item | undefined => {
  const items = getAllItems();
  return items.find(item => item.id === id);
};

// Memperbarui item
export const updateItem = (data: UpdateItemData): Item | null => {
  const items = getAllItems();
  const index = items.findIndex(item => item.id === data.id);
  
  if (index === -1) {
    return null;
  }

  const updatedItem: Item = {
    ...items[index],
    ...data,
    tanggalDiperbarui: getCurrentTimestamp(),
  };

  items[index] = updatedItem;
  saveItems(items);
  
  return updatedItem;
};

// Menghapus item
export const deleteItem = (id: string): boolean => {
  const items = getAllItems();
  const filteredItems = items.filter(item => item.id !== id);
  
  if (filteredItems.length === items.length) {
    return false; // Item tidak ditemukan
  }
  
  saveItems(filteredItems);
  return true;
};

// Mencari item berdasarkan nama atau kategori
export const searchItems = (query: string): Item[] => {
  const items = getAllItems();
  const lowerQuery = query.toLowerCase();
  
  return items.filter(item => 
    item.nama.toLowerCase().includes(lowerQuery) ||
    item.kategori.toLowerCase().includes(lowerQuery) ||
    item.deskripsi.toLowerCase().includes(lowerQuery)
  );
};

// Mengurutkan item berdasarkan field tertentu
export const sortItems = (items: Item[], field: keyof Item, direction: 'asc' | 'desc' = 'asc'): Item[] => {
  return [...items].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}; 