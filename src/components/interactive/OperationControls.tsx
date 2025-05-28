import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusSquare, Search, Trash2 } from 'lucide-react';
import type { FC } from 'react';

const OperationControls: FC = () => {
  return (
    <div className="mt-4 p-4 border border-input rounded-lg bg-card shadow-sm">
      <h4 className="text-md font-semibold mb-3 text-primary">Operaciones Interactivas:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-end">
        <div className="space-y-1">
          <label htmlFor="insert-value" className="text-sm font-medium text-foreground/80">Insertar Valor:</label>
          <Input id="insert-value" type="number" placeholder="Ej: 42" className="w-full" />
        </div>
        <Button variant="outline">
          <PlusSquare className="mr-2 h-4 w-4" /> Insertar
        </Button>
        <div className="space-y-1">
          <label htmlFor="delete-value" className="text-sm font-medium text-foreground/80">Eliminar Valor:</label>
          <Input id="delete-value" type="number" placeholder="Ej: 15" className="w-full" />
        </div>
         <Button variant="outline" >
          <Trash2 className="mr-2 h-4 w-4" /> Eliminar
        </Button>
        <div className="space-y-1">
          <label htmlFor="search-value" className="text-sm font-medium text-foreground/80">Buscar Valor:</label>
          <Input id="search-value" type="number" placeholder="Ej: 7" className="w-full" />
        </div>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" /> Buscar
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Nota: Los controles son ilustrativos. La lógica de operación no está implementada.
      </p>
    </div>
  );
};

export default OperationControls;
