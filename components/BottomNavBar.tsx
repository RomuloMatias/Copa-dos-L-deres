

import React from 'react';
import { TrophyIcon, JerseyIcon, ShieldIcon } from './IconComponents';
// FIX: Changed import path for Screen type from '../App' to the centralized '../types' file to resolve the module not found error.
import { Screen } from '../types';

interface BottomNavBarProps {
  activeTab: Screen;
  onTabChange: (tab: Screen) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClass = 'text-primary';
  const inactiveClass = 'text-gray-500 hover:text-text-dark';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-4xl mx-auto flex justify-around">
        <NavItem
          label="Ranking"
          icon={<TrophyIcon className="w-6 h-6" />}
          isActive={activeTab === 'ranking'}
          onClick={() => onTabChange('ranking')}
        />
        <NavItem
          label="Vestiário"
          icon={<JerseyIcon className="w-6 h-6" />}
          isActive={activeTab === 'lockerRoom'}
          onClick={() => onTabChange('lockerRoom')}
        />
        <NavItem
          label="Admin"
          icon={<ShieldIcon className="w-6 h-6" />}
          isActive={activeTab === 'admin'}
          onClick={() => onTabChange('admin')}
        />
      </div>
    </nav>
  );
};

export default BottomNavBar;