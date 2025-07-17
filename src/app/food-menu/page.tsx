'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Home/Footer';
import FoodMenuHome from '../components/FoodMenu/FoodMenuHome';

const FoodMenu: React.FC = () => {
    const [showBookTable, setShowBookTable] = useState(false);

    return (
        <>
            <Header showBookTable={showBookTable} setShowBookTable={setShowBookTable} />

            {/* ✅ Apply visual dimming when modal is active */}
            <div
                className={`transition-all duration-300 ${
                    showBookTable ? 'opacity-30  pointer-events-none' : 'opacity-100'
                }`}
            >
                <FoodMenuHome />
                <Footer />
            </div>
        </>
    );
};

export default FoodMenu;
