import { GitFork } from 'lucide-react';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-primary/20 shadow-sm bg-background sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GitFork className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold text-primary tracking-tight">
            Arboles
          </h1>
        </div>
        {/* Navigation links can be added here if needed */}
      </div>
    </header>
  );
};

export default Header;
