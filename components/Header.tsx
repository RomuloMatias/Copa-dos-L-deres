import React from 'react';
import { HexagonIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-blue text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <HexagonIcon className="w-8 h-8 text-secondary-yellow" />
            <span className="font-display text-2xl tracking-wider text-white">
              Copa dos Líderes
            </span>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
                <p className="font-semibold text-white">Isabella Rossi</p>
                <p className="text-sm text-secondary-yellow opacity-80">Técnico</p>
            </div>
            <img 
              src="https://i.pravatar.cc/150?img=25" 
              alt="Avatar do usuário" 
              className="w-10 h-10 rounded-full border-2 border-secondary-yellow"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;