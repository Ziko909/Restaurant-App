'use client';

import React from 'react';
import ItemCard from '../common/ItemCards';

const HomeItems: React.FC = () => {
    type FoodItem = {
        id: number;
        imagePath: string;
        title: string;
        description: string;
    };

    const dummyFoods: FoodItem[] = [
        {
            id: 1,
            imagePath: '/images/fish.png',
            title: 'Choripán Dish',
            description: 'A delicious Choripán dish featuring grilled sausage served on a crusty bread roll, topped with chimichurri sauce and fresh vegetables.'
        },
        {
            id: 2,
            imagePath: '/images/chicken1.png',
            title: 'Grilled Chicken',
            description: 'A healthy grilled chicken breast served with a side of fresh vegetables and a crisp salad, perfect for a balanced and delicious nutritious meal.'
        },
        {
            id: 3,
            imagePath: '/images/checkin.png',
            title: 'Grilled Chicken Salad',
            description: 'A refreshing grilled chicken salad made with mixed greens, cherry tomatoes, cucumbers, and a light lemon vinaigrette dressing.'
        },
        {
            id: 4,
            imagePath: '/images/home-item4.png',
            title: 'Nasi Plate',
            description: 'Traditional Indonesian rice plate served with flavorful accompaniments and authentic spices on a beautifully presented serving dish.'
        }
    ];

    return (
        <div className="mt-16 w-[90%] bg-[#FFFFFD] rounded-3xl flex flex-col items-center p-6 mx-auto mb-6 md:flex-row md:flex-wrap md:gap-x-4 md:justify-center lg:items-stretch gap-y-3 lg:mt-8">
            {dummyFoods.map((food: FoodItem, index: number) => {
                const isLast = index === dummyFoods.length - 1;
                const isOdd = dummyFoods.length % 2 !== 0;
                const shouldCenter = isOdd && isLast;

                return (
                    <div
                        key={food.id}
                        className={shouldCenter ? 'col-span-1 md:col-span-2 md:justify-self-center' : ''}
                    >
                        <ItemCard
                            imageUrl={food.imagePath}
                            titleImage={food.title}
                            width={320}
                            height={320}
                            title={food.title}
                            description={food.description}
                            buttonTitle="Order Now"
                            containerStyles="rounded-lg min-h-[400px] justify-between transition-transform hover:scale-105 max-w-[320px]"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default HomeItems;
