"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusSquare, Search, Trash2 } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';

const OperationControls: FC = () => {
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleInsert = () => {
    console.log('Attempting to insert value:', insertValue);
    // Actual tree insertion logic would go here
    setInsertValue(''); // Clear input after action
  };

  const handleDelete = () => {
    console.log('Attempting to delete value:', deleteValue);
    // Actual tree deletion logic would go here
    setDeleteValue(''); // Clear input after action
  };

  const handleSearch = () => {
    console.log('Attempting to search for value:', searchValue);
    // Actual tree search logic would go here
    setSearchValue(''); // Clear input after action
  };

  return (
    <div className="mt-4 p-4 border border-input rounded-lg bg-card shadow-sm">
      <h4 className="text-md font-semibold mb-3 text-primary">Operaciones Interactivas:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-end">
        <div className="space-y-1">
          <label htmlFor="insert-value" className="text-sm font-medium text-foreground/80">Insertar Valor:</label>
          <Input 
            id="insert-value" 
            type="number" 
            placeholder="Ej: 42" 
            className="w-full" 
            value={insertValue}
            onChange={(e) => setInsertValue(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={handleInsert} disabled={!insertValue}>
          <PlusSquare className="mr-2 h-4 w-4" /> Insertar
        </Button>
        
        <div className="space-y-1">
          <label htmlFor="delete-value" className="text-sm font-medium text-foreground/80">Eliminar Valor:</label>
          <Input 
            id="delete-value" 
            type="number" 
            placeholder="Ej: 15" 
            className="w-full" 
            value={deleteValue}
            onChange={(e) => setDeleteValue(e.target.value)}
          />
        </div>
         <Button variant="outline" onClick={handleDelete} disabled={!deleteValue}>
          <Trash2 className="mr-2 h-4 w-4" /> Eliminar
        </Button>

        <div className="space-y-1">
          <label htmlFor="search-value" className="text-sm font-medium text-foreground/80">Buscar Valor:</label>
          <Input 
            id="search-value" 
            type="number" 
            placeholder="Ej: 7" 
            className="w-full" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={handleSearch} disabled={!searchValue}>
          <Search className="mr-2 h-4 w-4" /> Buscar
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Nota: Los controles ahora registran acciones en la consola. La lógica completa del árbol no está implementada.
      </p>
    </div>
  );
};

export default OperationControls;
