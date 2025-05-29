
"use client"; 
// Added "use client" because we'll be using useState here for tree data

import { useState, type ReactNode } from 'react';
import TreeTypeSection from '@/components/sections/TreeTypeSection';
import TreeVisualizationPlaceholder from '@/components/interactive/TreeVisualizationPlaceholder';
import OperationControls from '@/components/interactive/OperationControls';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Binary, GitCommitVertical, GitFork, GitPullRequestArrow, RotateCcw, Scaling, Workflow } from 'lucide-react';
import Image from 'next/image';
import { useToast } from "@/hooks/use-toast";

// Basic tree data type placeholder
type TreeData = number[]; // For now, a simple array of numbers

export default function Home() {
  const { toast } = useToast();

  // State for each tree type
  const [bTreeData, setBTreeData] = useState<TreeData>([]);
  const [bPlusTreeData, setBPlusTreeData] = useState<TreeData>([]);
  const [avlTreeData, setAvlTreeData] = useState<TreeData>([]);
  const [redBlackTreeData, setRedBlackTreeData] = useState<TreeData>([]);

  // Generic handler creator
  const createTreeHandlers = (
    treeName: string, 
    setData: React.Dispatch<React.SetStateAction<TreeData>>
  ) => {
    const showToast = (operation: string, value: number) => {
      toast({
        title: `Árbol ${treeName}: Operación ${operation}`,
        description: `Valor: ${value}. (Lógica no implementada)`,
      });
      console.log(`Árbol ${treeName}: ${operation} ${value}`);
    };

    return {
      handleInsert: (value: number) => {
        showToast("Insertar", value);
        // Placeholder logic:
        // setData(prevData => [...prevData, value].sort((a, b) => a - b));
      },
      handleDelete: (value: number) => {
        showToast("Eliminar", value);
        // Placeholder logic:
        // setData(prevData => prevData.filter(item => item !== value));
      },
      handleSearch: (value: number) => {
        showToast("Buscar", value);
        // Placeholder logic:
        // const found = data.includes(value);
        // console.log(`Árbol ${treeName}: Valor ${value} ${found ? 'encontrado' : 'no encontrado'}`);
      },
    };
  };

  const bTreeHandlers = createTreeHandlers("B", setBTreeData);
  const bPlusTreeHandlers = createTreeHandlers("B+", setBPlusTreeData);
  const avlTreeHandlers = createTreeHandlers("AVL", setAvlTreeData);
  const redBlackTreeHandlers = createTreeHandlers("Rojo-Negro", setRedBlackTreeData);

  const bTreeInteractive = (
    <>
      <TreeVisualizationPlaceholder treeName="B" />
      <OperationControls 
        treeName="B"
        onInsert={bTreeHandlers.handleInsert}
        onDelete={bTreeHandlers.handleDelete}
        onSearch={bTreeHandlers.handleSearch}
      />
    </>
  );

  const bPlusTreeInteractive = (
    <>
      <TreeVisualizationPlaceholder treeName="B+" />
      <OperationControls
        treeName="B+"
        onInsert={bPlusTreeHandlers.handleInsert}
        onDelete={bPlusTreeHandlers.handleDelete}
        onSearch={bPlusTreeHandlers.handleSearch}
      />
    </>
  );

  const avlTreeInteractive = (
    <>
      <TreeVisualizationPlaceholder treeName="AVL" />
      <OperationControls
        treeName="AVL"
        onInsert={avlTreeHandlers.handleInsert}
        onDelete={avlTreeHandlers.handleDelete}
        onSearch={avlTreeHandlers.handleSearch}
      />
    </>
  );

  const redBlackTreeInteractive = (
    <>
      <TreeVisualizationPlaceholder treeName="Rojo-Negro" />
      <OperationControls
        treeName="Rojo-Negro"
        onInsert={redBlackTreeHandlers.handleInsert}
        onDelete={redBlackTreeHandlers.handleDelete}
        onSearch={redBlackTreeHandlers.handleSearch}
      />
    </>
  );

  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-card shadow-md rounded-lg">
        <h2 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Bienvenido a Arboleda Interactiva
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Una guía completa para entender las estructuras de datos de árbol más importantes: Árboles B, B+, AVL y Rojo-Negro. Explora sus definiciones, propiedades, aplicaciones y comparativas.
        </p>
      </section>

      <TreeTypeSection
        title="Árboles B"
        icon={GitFork}
        contentItems={[
          {
            heading: 'Definición y Propiedades',
            text: [
              'Un árbol B es un árbol de búsqueda auto-balanceado, generalización de un árbol binario de búsqueda, optimizado para sistemas que leen y escriben grandes bloques de datos.',
              'Todas las hojas están al mismo nivel.',
              'Cada nodo (excepto la raíz) debe tener entre m/2 y m hijos (donde m es el orden del árbol).',
              'La raíz tiene al menos 2 hijos (a menos que sea una hoja).',
              'Los nodos internos almacenan claves y punteros a hijos.',
            ],
          },
          {
            heading: 'Aplicaciones en Bases de Datos y Sistemas de Archivos',
            text: [
              'Indexación en bases de datos (ej. MySQL, PostgreSQL).',
              'Sistemas de archivos (ej. NTFS, HFS+).',
              'Permiten búsquedas, inserciones y eliminaciones eficientes en disco.',
            ],
          },
          {
            heading: 'Comparación con Árboles Binarios',
            text: [
              'Los árboles B tienen un factor de ramificación mucho mayor, lo que reduce la altura del árbol y el número de accesos a disco.',
              'Los árboles binarios son más adecuados para datos en memoria.',
            ],
          },
        ]}
        interactiveElement={bTreeInteractive}
      />

      <TreeTypeSection
        title="Árboles B+"
        icon={GitPullRequestArrow}
        contentItems={[
          {
            heading: 'Diferencias Clave con los Árboles B',
            text: [
              'En los árboles B+, todas las claves se almacenan en las hojas.',
              'Los nodos internos solo almacenan copias de las claves para guiar la búsqueda (actúan como índices).',
              'Las hojas están enlazadas secuencialmente (como una lista enlazada), lo que facilita los recorridos por rangos.',
            ],
          },
          {
            heading: 'Ventajas en Operaciones de Rango y Almacenamiento Secuencial',
            text: [
              'Excelente rendimiento para consultas de rango (ej. "buscar todos los empleados con salario entre X y Y").',
              'El almacenamiento secuencial de las hojas mejora la localidad de referencia y reduce los saltos de disco.',
            ],
          },
        ]}
        interactiveElement={bPlusTreeInteractive}
      />

      <TreeTypeSection
        title="Árboles AVL"
        icon={RotateCcw}
        contentItems={[
          {
            heading: 'Rotaciones Simples y Dobles',
            text: 'Los árboles AVL mantienen su balance mediante rotaciones. Si una inserción o eliminación causa un desequilibrio (factor de balance de un nodo es > 1 o < -1), se aplican rotaciones:',
            details: [
                'Rotación Simple Izquierda (LI)',
                'Rotación Simple Derecha (LD)',
                'Rotación Doble Izquierda-Derecha (LID)',
                'Rotación Doble Derecha-Izquierda (LDI)',
            ]
          },
          {
            heading: 'Costos de Mantenimiento del Balanceo',
            text: [
              'El balanceo estricto (factor de balance de -1, 0, o 1) garantiza una altura logarítmica (O(log N)).',
              'Las rotaciones pueden ser costosas, especialmente con inserciones/eliminaciones frecuentes.',
              'Cada operación de inserción/eliminación puede requerir O(log N) para rebalancear, pero en la práctica suele ser O(1) amortizado para rotaciones.',
            ],
          },
          {
            heading: 'Casos de Uso en Estructuras en Memoria',
            text: [
              'Útiles cuando las búsquedas son mucho más frecuentes que las inserciones/eliminaciones.',
              'Aplicaciones donde se requiere un rendimiento de búsqueda garantizado y predecible.',
              'Menos comunes en bases de datos de disco debido al costo de las rotaciones.',
            ],
          },
        ]}
        interactiveElement={avlTreeInteractive}
      />

      <TreeTypeSection
        title="Árboles Rojo-Negro"
        icon={GitCommitVertical}
        contentItems={[
          {
            heading: 'Reglas de Coloración y Balanceo',
            text: 'Los árboles Rojo-Negro se balancean mediante un conjunto de reglas y coloración de nodos (rojo o negro):',
            details: [
              'Cada nodo es rojo o negro.',
              'La raíz es siempre negra.',
              'Todo nodo hoja (NIL) es negro.',
              'Si un nodo es rojo, sus hijos deben ser negros.',
              'Todo camino simple desde un nodo dado hasta cualquiera de sus descendientes NIL contiene el mismo número de nodos negros (altura negra).',
            ]
          },
          {
            heading: 'Comparación con AVL: Eficiencia vs. Complejidad',
            text: [
              'Los árboles Rojo-Negro son menos estrictamente balanceados que los AVL (altura puede ser hasta 2*log(N+1)).',
              'Esto resulta en menos rotaciones en promedio durante inserciones/eliminaciones, haciéndolos más rápidos para estas operaciones.',
              'Las búsquedas pueden ser ligeramente más lentas que en AVL en el peor caso, pero O(log N) sigue garantizado.',
              'La implementación de árboles Rojo-Negro suele ser más compleja.',
            ],
          },
          {
            heading: 'Uso en Bibliotecas Estándar',
            text: [
              'Comúnmente usados en implementaciones de mapas y conjuntos ordenados.',
              'Ejemplos: TreeMap en Java, std::map y std::set en C++.',
            ],
          },
        ]}
        interactiveElement={redBlackTreeInteractive}
      />
      
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-primary flex items-center gap-2">
            <Scaling className="w-8 h-8" /> Comparativa General y Complejidades
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-2">Comparativa de Complejidades</h3>
            <p className="text-foreground/80 mb-4">
              La siguiente tabla muestra las complejidades de tiempo promedio y peor caso para operaciones comunes en los diferentes tipos de árboles (N es el número de elementos en el árbol, m es el orden del árbol B/B+).
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Complejidades de operaciones en árboles.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Operación</TableHead>
                    <TableHead>Árbol B</TableHead>
                    <TableHead>Árbol B+</TableHead>
                    <TableHead>Árbol AVL</TableHead>
                    <TableHead>Árbol Rojo-Negro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Búsqueda</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Inserción</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Eliminación</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                    <TableCell>O(log N)</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Búsqueda por Rango</TableCell>
                    <TableCell>O(log N + k)</TableCell>
                    <TableCell>O(log N + k)</TableCell>
                    <TableCell>O(log N + k)</TableCell>
                    <TableCell>O(log N + k)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
             <p className="text-xs text-muted-foreground mt-2">* k es el número de elementos en el rango.</p>
             <p className="text-foreground/80 mt-4">
                Aunque las complejidades asintóticas son similares (O(log N)), las constantes ocultas y el rendimiento práctico varían significativamente.
                Los árboles B y B+ minimizan accesos a disco, mientras que AVL y Rojo-Negro son para estructuras en memoria.
                AVL es más estrictamente balanceado, ofreciendo búsquedas más rápidas en el peor caso, pero inserciones/eliminaciones más lentas por más rotaciones.
                Rojo-Negro ofrece un buen compromiso, con inserciones/eliminaciones más rápidas que AVL y búsquedas eficientes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-2">Cuándo Usar Cada Tipo de Árbol</h3>
             <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li><strong>Árboles B:</strong> Ideal para bases de datos y sistemas de archivos donde los datos residen en disco. Optimizados para minimizar I/O.</li>
                <li><strong>Árboles B+:</strong> Similar a los árboles B, pero aún mejor para búsquedas por rango y escaneos secuenciales debido a los punteros en las hojas. Preferidos en la mayoría de las bases de datos modernas para índices.</li>
                <li><strong>Árboles AVL:</strong> Cuando las búsquedas son muy frecuentes y las modificaciones (inserciones/eliminaciones) son raras. Adecuados para estructuras en memoria donde se necesita un balanceo estricto y tiempos de búsqueda predecibles.</li>
                <li><strong>Árboles Rojo-Negro:</strong> Un buen balance entre rendimiento de búsqueda y modificación. Más rápidos para inserciones/eliminaciones que los AVL debido a un balanceo menos estricto. Comunes en bibliotecas estándar para mapas y conjuntos en memoria.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-primary flex items-center gap-2">
            <Workflow className="w-8 h-8" /> Estudio de Caso / Simulación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Imaginemos un sistema de gestión de una gran biblioteca. Necesitamos almacenar información sobre millones de libros y permitir búsquedas rápidas por título, autor o ISBN.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-card-foreground/5">
                <h4 className="font-semibold text-lg text-primary mb-2">Escenario 1: Base de Datos de Libros (Disco)</h4>
                <p className="text-sm text-foreground/75 mb-2">
                    Si los datos de los libros (índices) residen en disco, un <strong>Árbol B+</strong> sería la elección ideal.
                </p>
                <Image src="https://placehold.co/600x400.png" alt="Database Server" width={600} height={400} className="rounded-md shadow-sm object-cover" data-ai-hint="database server" />
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/75 mt-3">
                    <li>Minimiza los accesos a disco gracias a su alto factor de ramificación.</li>
                    <li>Las búsquedas por ISBN (exactas) o por rangos de títulos son muy eficientes.</li>
                    <li>Las hojas enlazadas permiten recorrer libros ordenados alfabéticamente fácilmente.</li>
                </ul>
            </div>
            <div className="p-4 border rounded-lg bg-card-foreground/5">
                <h4 className="font-semibold text-lg text-primary mb-2">Escenario 2: Caché de Libros Recientes (Memoria)</h4>
                <p className="text-sm text-foreground/75 mb-2">
                    Para una caché en memoria de los libros más accedidos recientemente, donde las búsquedas deben ser extremadamente rápidas y las actualizaciones son menos frecuentes, un <strong>Árbol AVL</strong> podría ser considerado.
                </p>
                 <Image src="https://placehold.co/600x400.png" alt="Memory Cache" width={600} height={400} className="rounded-md shadow-sm object-cover" data-ai-hint="memory cache" />
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/75 mt-3">
                    <li>Garantiza búsquedas en O(log N) con un factor de balanceo estricto.</li>
                    <li>Si la caché no cambia muy a menudo, el costo de las rotaciones es aceptable.</li>
                    <li>Alternativamente, un <strong>Árbol Rojo-Negro</strong> también sería una excelente opción, ofreciendo un mejor rendimiento en inserciones si la caché se actualiza con más frecuencia.</li>
                </ul>
            </div>
          </div>
           <p className="text-xs text-muted-foreground mt-4">
            Esta es una simplificación. La elección real dependería de benchmarks específicos y requisitos detallados del sistema.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-primary flex items-center gap-2">
            <Binary className="w-8 h-8" /> Implementación y Rendimiento (B+ vs AVL)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Una tarea común en el análisis de estructuras de datos es comparar el rendimiento práctico. Se podría implementar un Árbol B+ y un Árbol AVL para realizar operaciones masivas de búsqueda e inserción y medir tiempos.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            <strong>Expectativas teóricas:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-foreground/75 my-2 leading-relaxed">
            <li><strong>Inserciones Masivas:</strong> Se esperaría que el Árbol B+ (si se simula acceso a disco o bloques) o el Árbol Rojo-Negro (para memoria) superen al Árbol AVL debido a menos rotaciones.</li>
            <li><strong>Búsquedas Masivas:</strong> El Árbol AVL podría tener una ligera ventaja en búsquedas puras en memoria debido a su balanceo más estricto, pero el Rojo-Negro sería muy competitivo. El Árbol B+ destacaría si las búsquedas involucran rangos o acceso secuencial.</li>
          </ul>
          <p className="text-muted-foreground text-sm mt-4">
            (Esta sección es conceptual. La implementación y benchmarking real requerirían un entorno de desarrollo y pruebas específico.)
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
