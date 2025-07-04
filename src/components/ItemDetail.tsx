import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Item } from '../types';

interface ItemDetailProps {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ item, isOpen, onClose }) => {
  if (!item) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detail Item</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{item.nama}</span>
                <Badge variant="secondary">{item.kategori}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Deskripsi</h4>
                <p className="text-sm">{item.deskripsi}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">Harga</h4>
                  <p className="text-lg font-semibold text-green-600">
                    {formatCurrency(item.harga)}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">Stok</h4>
                  <Badge 
                    variant={item.stok > 0 ? "default" : "destructive"}
                    className="text-sm"
                  >
                    {item.stok} unit
                  </Badge>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-1">Tanggal Dibuat</h4>
                    <p>{formatDate(item.tanggalDibuat)}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-1">Terakhir Diperbarui</h4>
                    <p>{formatDate(item.tanggalDiperbarui)}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">ID Item</h4>
                <p className="text-xs font-mono bg-background px-2 py-1 rounded border">
                  {item.id}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 