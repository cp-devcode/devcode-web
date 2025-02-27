import React from 'react';
import { Moon } from 'lucide-react';

export function Logo() {
  return (
    <div className="logo-container flex items-center space-x-2">
      <div className="logo-icon relative">
        <Moon className="w-8 h-8 text-dark-accent animate-float" />
        <div className="logo-rings" />
      </div>
      <span className="text-xl font-bold bg-gradient-text animate-gradient">
        CP-Devcode
      </span>
    </div>
  );
}