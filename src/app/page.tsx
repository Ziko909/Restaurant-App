"use client";

import { useState } from "react";
import Header from "../components/common/Header";
import Main from "../components/Home/Main";

export default function Home() {
  const [showBookTable, setShowBookTable] = useState(false);

  return (
    <>
      <Header
        showBookTable={showBookTable}
        setShowBookTable={setShowBookTable}
      />

      <div
        className={`transition-all duration-300 ${
          showBookTable ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <Main />
      </div>
    </>
  );
}
