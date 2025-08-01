'use client';

import React from 'react';
import Foodmenucards from './FoodMenuCards';
import Food from '../../types/Food';

const dummyFoods: Food[] = [
  {
    id: 1,
    imagePath: '/images/food menu/menu-8190047_1280.jpg',
    title: 'Fruit & Apple',
    description: 'Fresh apples and fruits packed with vitamins for a healthy meal.',
    price: '18.99',
  },
  {
    id: 2,
    imagePath: '/images/food menu/vecteezy_abundant-wooden-cutting-board-displaying-assorted-food-items_42680072.jpg',
    title: 'Cutting Board',
    description: 'Cheeses, meats, and fruits for a healthy meal.',
    price: '16.49',
  },
  {
    id: 3,
    imagePath: '/images/food menu/vecteezy_assorted-food-spread-on-a-table_45689851.jpg',
    title: 'Table Spread',
    description: 'Festive dishes and vibrant flavors for a healthy meal.',
    price: '17.99',
  },
  {
    id: 4,
    imagePath: '/images/food menu/vecteezy_fried-meat-with-fried-vegetables-and-orange-and-brandy-glass_45714767.jpg',
    title: 'Meat & Veggies',
    description: 'Fried meat and vegetables for a healthy meal.',
    price: '15.99',
  },
  {
    id: 5,
    imagePath: '/images/food menu/vecteezy_high-angle-view-the-dining-table-consists-of-pizza-fried_54710441.jpg',
    title: 'Pizza & Rolls',
    description: 'Classic pizza and crispy rolls for a healthy meal.',
    price: '14.99',
  },
  {
    id: 6,
    imagePath: '/images/food menu/vecteezy_kebab-with-french-fries-and-salad-on-a-plate-in-a-restaurant_51044967.JPG',
    title: 'Kebab & Fries',
    description: 'Kebabs with fries and salad for a healthy meal.',
    price: '13.99',
  },
  {
    id: 7,
    imagePath: '/images/food menu/vecteezy_n-a-white-ceramic-plate-on-brown_26372838.jpg',
    title: 'Ceramic Plate',
    description: 'Chef’s dish on a ceramic plate for a healthy meal.',
    price: '12.49',
  },
  {
    id: 8,
    imagePath: '/images/food menu/vecteezy_pinoy-type-lauriat_53847611.jpg',
    title: 'Pinoy Lauriat',
    description: 'Filipino lauriat with traditional dishes for a healthy meal.',
    price: '15.49',
  },
  {
    id: 9,
    imagePath: '/images/food menu/vecteezy_traditional-cod-recipe-prepared-in-the-classic-style_53612428.jpg',
    title: 'Cod Fillet',
    description: 'Classic cod fillet with fresh ingredients for a healthy meal.',
    price: '16.99',
  },
  {
    id: 10,
    imagePath: '/images/food menu/vecteezy_thai-appetizer-set-on-white-background_34555524.jpg',
    title: 'Thai Appetizer',
    description: 'Thai appetizers with vibrant flavors for a healthy meal.',
    price: '13.49',
  },
  {
    id: 11,
    imagePath: '/images/food menu/vecteezy_woman-hand-holding-pecel-ayam-or-penyet-ayam-is-fried_53820293.jpg',
    title: 'Pecel Ayam',
    description: 'Indonesian fried chicken with rice for a healthy meal.',
    price: '12.99',
  },
];





const FoodMenuList: React.FC = () => {
    return (
        <div className='w-[70%] md:w-[90%] mx-auto mb-10 rel</div>ative mt-6 lg:mt-12'>
            <div
                className="w-full p-4  
                                flex flex-col items-center gap-y-6 mb-10
                                md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-x-16 md:items-stretch
                             "
            >
                {dummyFoods.map((food) => (
                    <Foodmenucards
                        key={food.id}
                        imageUrl={food.imagePath}
                        titleImage={food.title}
                        width={320}
                        height={320}
                        title={food.title}
                        description={food.description}
                        showButton={true}
                        showPrice={true}
                        price={food.price}
                        containerStyles="
                        shadow-lg rounded-3xl 
                        w-[260px] h-[370px]               
                        md:w-[260px] md:h-[410px]       
                        lg:w-[300px] lg:h-[440px]      
                        justify-start transition-transform hover:scale-105 overflow-hidden
                      "
                      priceStyles="text-[#FE1B01]"
                        buttonTitle='Order Now'
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodMenuList;


