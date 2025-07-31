'use client'

import React from 'react';
import ItemCard from '../common/ItemCards';
import Food from '../../types/Food';

const PopularFoods: React.FC = () => {
    const dummyFoods: Food[] = [
        {
            id: 1,
            imagePath: '/images/fish.png',
            title: 'Choripán Dish',
            description: 'A delicious Choripán dish featuring grilled sausage served on a crusty bread roll, topped with chimichurri sauce and fresh vegetables and herbs.',
            price: '12.99'
        },
        {
            id: 2,
            imagePath: '/images/chicken1.png',
            title: 'Grilled Chicken',
            description: 'A delicious Grilled Chicken with Vegetables featuring grilled chicken breast served on a bed of fresh vegetables, topped with herbs and seasoning.',
            price: '15.49'
        },
        {
            id: 3,
            imagePath: '/images/checkin.png',
            title: 'Ghicken',
            description: 'A delicious Grilled Chicken Salad featuring tender grilled chicken served on a bed of mixed greens, topped with fresh vegetables and light dressing.',
            price: '10.99'
        },
        {
            id: 4,
            imagePath: '/images/home-item4.png',
            title: 'Nasi Plate',
            description: 'A delicious Nasi Plate featuring traditional Indonesian rice served on a beautiful plate, topped with authentic spices and flavorful accompaniments.',
            price: '12.99'
        }
    ];

    return (
        <div className="w-[70%] md:w-[90%] mx-auto mb-10 relative">
            <div className="w-full p-4 flex flex-col items-center gap-y-6 mb-10 md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-x-16 md:items-stretch">
                {dummyFoods.map((food: Food) => (
                    <ItemCard
                        key={food.id}
                        imageUrl={food.imagePath}
                        titleImage={food.title}
                        width={320}
                        height={320}
                        title={food.title}
                        description={food.description}
                        showButton={false}
                        showPrice={true}
                        price={food.price}
                        containerStyles="bg-[#fcf8f5] shadow-lg rounded-lg min-h-[400px] justify-between transition-transform hover:scale-105 max-w-[260px]"
                        priceStyles="text-[#FE1B01]"
                    />
                ))}
            </div>
            <div className="hidden md:block bg-[#FFD5B2] absolute top-[10%] left-0 right-0 -bottom-8 -z-2"></div>
        </div>
    );
};

export default PopularFoods;
