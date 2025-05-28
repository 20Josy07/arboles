import { Binary } from 'lucide-react';
import type { FC } from 'react';

interface TreeVisualizationPlaceholderProps {
  treeName: string;
}

const TreeVisualizationPlaceholder: FC<TreeVisualizationPlaceholderProps> = ({ treeName }) => {
  return (
    <div className="min-h-[300px] w-full border-2 border-dashed border-input rounded-lg bg-muted/50 flex flex-col items-center justify-center p-6 my-4 shadow-inner">
      <Binary className="w-16 h-16 text-muted-foreground mb-4" />
      <p className="text-muted-foreground text-lg font-medium">
        Visualización Interactiva del Árbol {treeName}
      </p>
      <p className="text-muted-foreground text-sm mt-1">
        (Aquí se mostrará la visualización del árbol)
      </p>
    </div>
  );
};

export default TreeVisualizationPlaceholder;
