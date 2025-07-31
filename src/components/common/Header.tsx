"use client";

import Image from "next/image";
import Menubar from "./Menubar";
import NavBar from "./NavBar";
import BookTableDialog from "./BookTableDialog";

interface HeaderProps {
  showBookTable: boolean;
  setShowBookTable: (show: boolean) => void;
}

const Header = ({ showBookTable, setShowBookTable }: HeaderProps) => {
  return (
    <header>
      <div className="w-[90%] flex justify-between items-center mx-auto lg:justify-start py-2 md:py-4 lg:py-6">
        <div className="text-md text-[#070000] flex items-center">
          <Image
            className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
            src="/images/logo.png"
            alt="Restaurant Logo"
            width={720}
            height={720}
          />
          <h1 className="ml-2 text-lg md:text-xl lg:text-2xl">Restaurant</h1>
        </div>
        <Menubar setShowBookTable={setShowBookTable} />
        <NavBar setShowBookTable={setShowBookTable} />
        <BookTableDialog
          show={showBookTable}
          setShowBookTable={setShowBookTable}
        />
      </div>
      <div className="h-[2px] md:h-[5px] bg-[#EED5B7] lg:-mt-4"></div>
    </header>
  );
};

export default Header;
