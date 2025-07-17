'use client';

import Header from "./components/Header";
import Main from "./components/Home/Main";
import { useState } from "react";

export default function Home() {
  const [showBookTable, setShowBookTable] = useState(false);

  return (
    <>
      <Header showBookTable={showBookTable} setShowBookTable={setShowBookTable} />

      {/* ✅ Wrap rest of page in a div with opacity/blur if modal is open */}
      <div
        className={`transition-all duration-300 ${
          showBookTable ? 'opacity-30 pointer-events-none ' : 'opacity-100'
        }`}
      >
        <Main />
      </div>
    </>
  );
}