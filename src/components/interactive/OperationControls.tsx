
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusSquare, Search, Trash2 } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';

interface OperationControlsProps {
  treeName: string;
  onInsert: (value: number) => void;
  onDelete: (value: number) => void;
  onSearch: (value: number) => void;
  // Placeholder for any tree-specific options, e.g., order for B-Tree
  // treeSpecificOptions?: React.ReactNode; 
}

const OperationControls: FC<OperationControlsProps> = ({ treeName, onInsert, onDelete, onSearch }) => {
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleInsert = () => {
    const numValue = parseInt(insertValue, 10);
    if (!isNaN(numValue)) {
      onInsert(numValue);
      setInsertValue(''); 
    } else {
      console.warn('Invalid input for insert:', insertValue);
      // Optionally, show a toast or error message to the user
    }
  };

  const handleDelete = () => {
    const numValue = parseInt(deleteValue, 10);
    if (!isNaN(numValue)) {
      onDelete(numValue);
      setDeleteValue('');
    } else {
      console.warn('Invalid input for delete:', deleteValue);
    }
  };

  const handleSearch = () => {
    const numValue = parseInt(searchValue, 10);
    if (!isNaN(numValue)) {
      onSearch(numValue);
      setSearchValue(''); 
    } else {
      console.warn('Invalid input for search:', searchValue);
    }
  };

  return (
    <div className="mt-4 p-4 border border-input rounded-lg bg-card shadow-sm">
      <h4 className="text-md font-semibold mb-3 text-primary">Operaciones para Árbol {treeName}:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
        
        <div className="space-y-2">
          <Label htmlFor={`insert-value-${treeName}`} className="text-sm font-medium text-foreground/80">Insertar Valor:</Label>
          <div className="flex gap-2">
            <Input 
              id={`insert-value-${treeName}`}
              type="number" 
              placeholder="Ej: 42" 
              className="w-full" 
              value={insertValue}
              onChange={(e) => setInsertValue(e.target.value)}
              aria-label={`Insertar valor en Árbol ${treeName}`}
            />
            <Button variant="outline" onClick={handleInsert} disabled={!insertValue} aria-label={`Confirmar inserción en Árbol ${treeName}`}>
              <PlusSquare className="mr-0 sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">Insertar</span>
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor={`delete-value-${treeName}`} className="text-sm font-medium text-foreground/80">Eliminar Valor:</Label>
          <div className="flex gap-2">
            <Input 
              id={`delete-value-${treeName}`}
              type="number" 
              placeholder="Ej: 15" 
              className="w-full" 
              value={deleteValue}
              onChange={(e) => setDeleteValue(e.target.value)}
              aria-label={`Eliminar valor de Árbol ${treeName}`}
            />
            <Button variant="outline" onClick={handleDelete} disabled={!deleteValue} aria-label={`Confirmar eliminación de Árbol ${treeName}`}>
              <Trash2 className="mr-0 sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">Eliminar</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`search-value-${treeName}`} className="text-sm font-medium text-foreground/80">Buscar Valor:</Label>
          <div className="flex gap-2">
            <Input 
              id={`search-value-${treeName}`}
              type="number" 
              placeholder="Ej: 7" 
              className="w-full" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label={`Buscar valor en Árbol ${treeName}`}
            />
            <Button variant="outline" onClick={handleSearch} disabled={!searchValue} aria-label={`Confirmar búsqueda en Árbol ${treeName}`}>
              <Search className="mr-0 sm:mr-2 h-4 w-4" /> <span className="hidden sm:inline">Buscar</span>
            </Button>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Nota: La lógica completa del árbol aún no está implementada. Las acciones se registran en la consola.
      </p>
    </div>
  );
};

export default OperationControls;
