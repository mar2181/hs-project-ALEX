import React from 'react';
import { Home, Compass, Zap, Users, Settings } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Compass, label: 'Roadmap', href: '#roadmap' },
    { icon: Zap, label: 'Services', href: '#services' },
    { icon: Users, label: 'Testimonials', href: '#testimonials' },
    { icon: Settings, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-20 md:justify-center md:gap-8">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 py-2 px-3 text-gray-400 hover:text-orange-500 transition group"
              >
                <Icon size={24} className="group-hover:scale-110 transition" />
                <span className="text-xs font-medium hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;