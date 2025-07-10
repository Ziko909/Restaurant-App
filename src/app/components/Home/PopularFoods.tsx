import React from 'react';
import ItemCard from '../common/ItemCards';

const PopularFoods: React.FC = () => {
    const dummyFoods: { id: number; imagePath: string; title: string; description: string; price: number }[] = [
        {
            id: 1,
            imagePath: '/images/fish.png',
            title: 'Choripán Dish',
            description: 'A delicious Choripán dish featuring grilled sausage served on a crusty bread roll, topped with chimichurri sauce and fresh vegetables.',
            price: 12.99
        },
        {
            id: 2,
            imagePath: '/images/chicken1.png',
            title: 'Grilled Chicken with Vegetables',
            description: 'A healthy grilled chicken breast served with a side of fresh vegetables and a crisp salad, perfect for a balanced meal.',
            price: 15.49
        },
        {
            id: 3,
            imagePath: "/images/checkin.png",
            title: 'Grilled Chicken Salad',
            description: 'A refreshing grilled chicken salad made with mixed greens, cherry tomatoes, cucumbers, and a light lemon vinaigrette.',
            price: 10.99
        }
    ];
    return (
        <div className='w-[70%]  md:w-[90%]  mx-auto mb-10 relative'>
            <div className="w-full p-4  
                flex flex-col items-center gap-y-6 mb-10
                md:flex-row md:flex-wrap md:justify-center md:gap-8
               ">

                        {dummyFoods.map((food: any) => (
                        <ItemCard
                        key={food.id} 
                        imageUrl={food.imagePath} 
                        titleImage={food.title} 
                        width={320} bg-red-400
                        height={320}
                        title={food.title} 
                        description={food.description} 
                        showButton={false}
                        showPrice={true}
                        price={food.price}
                        containerStyles='bg-[#fcf8f5] shadow-lg  rounded-lg min-h-[400px] justify-between transition-transform hover:scale-105 max-w-[260px]'
                        priceStyles='text-[#FE1B01]'
                        />
                        ))}
            </div>
            <div className='hidden md:block bg-[#FFD5B2] absolute top-[10%] left-0 right-0 -bottom-8 -z-2 '>

            </div>
        </div>
    );
};

export default PopularFoods;