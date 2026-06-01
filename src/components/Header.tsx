import React from 'react';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          acquisition<span className="text-orange-600">.com</span>
        </div>
        
        <Button className="bg-orange-600 hover:bg-orange-700 text-white h-10 sm:h-10 px-3 sm:px-6 text-xs sm:text-sm rounded-full sm:rounded-lg flex items-center gap-1 sm:gap-2">
          <Calendar size={16} />
          <span className="hidden sm:inline">Book Appointment</span>
          <span className="sm:hidden">Book</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;