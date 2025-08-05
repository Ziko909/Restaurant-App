'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

interface MenubarProps {
  setShowBookTable: (show: boolean) => void;
}

const Menubar = ({ setShowBookTable }: MenubarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookTableClick = () => {
    setShowBookTable(true);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 transition-transform hover:scale-110 cursor-pointer"
      >
        <span className="block md:h-[3px] md:w-8 h-[2px] w-6 bg-black rounded transition-all duration-300" />
        <span className="block md:h-[3px] md:w-8 h-[2px] w-6 bg-black rounded transition-all duration-300" />
        <span className="block md:h-[3px] md:w-8 h-[2px] w-6 bg-black rounded transition-all duration-300" />
      </button>

      <div
        className={`fixed inset-0 bg-[#FCE4D6] z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-end items-center min-h-12 bg-[#FCE4D6]">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="transition-transform duration-150 hover:rotate-90 text-black text-xl mr-4 cursor-pointer"
          >
            <X height={27} width={27} className="md:w-[32px] md:h-[32px]" />
          </button>
        </div>

        <div className="w-full bg-[#FBD1B8] h-10" />

        <ul className="mt-6 space-y-6 text-center font-semibold">
          {['Home', 'About', 'Food Menu', 'Book table'].map((item) => (
            <li
              key={item}
              className="shadow-md py-2 border-y md:text-lg md:py-3 border-[#f2c4a4] hover:bg-[#faf2ed] transition-all duration-200 hover:scale-[1.01]"
            >
              {item === 'Book table' ? (
                <button onClick={handleBookTableClick} className='cursor-pointer'>{item}</button>
              ) : (
                <a href={`/${item.match("Home") ? "" : item === 'Food Menu' ? 'food-menu' : item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
