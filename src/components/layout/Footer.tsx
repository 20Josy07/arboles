import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-8 mt-12 border-t border-primary/20 bg-card">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Arboleda Interactiva. Todos los derechos reservados.</p>
        <p className="mt-2 text-sm">
          Una aplicación para explorar el fascinante mundo de las estructuras de datos de árbol.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
