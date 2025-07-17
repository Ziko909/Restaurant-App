'use client';

import React from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Food Menu', href: '/food-menu' },
    { name: 'Book table', href: '/book-table' },
];

interface MenubarProps {
  setShowBookTable: (show: boolean) => void;
}

const NavBar: React.FC<MenubarProps> = ({ setShowBookTable }) => (
    <nav className='hidden lg:block lg:mx-auto'>
        <ul className='lg:flex gap-x-8'>
            {navItems.map(item => (
            <li
            key={item.name}
            className="py-2  md:text-lg md:py-3  transition-all duration-200 hover:scale-[1.01] lg:text-2xl"
          >
            {item.name === 'Book table' ? (
              <button 
                className='' 
                onClick={() => setShowBookTable(true)}
              >
                {item.name}
              </button>
            ) : (
              <Link className='' href={item.href}>{item.name}</Link>
            )}
          </li>
            ))}
        </ul>
    </nav>
);

export default NavBar;