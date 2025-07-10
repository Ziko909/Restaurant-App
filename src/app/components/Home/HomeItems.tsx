import React from 'react';
import ItemCard from '../common/ItemCards';

const HomeItems: React.FC = () => {
    const dummyFoods: { id: number; imagePath: string; title: string; description: string; }[] = [
        {
            id: 1,
            imagePath: '/images/fish.png',
            title: 'Choripán Dish',
            description: 'A delicious Choripán dish featuring grilled sausage served on a crusty bread roll, topped with chimichurri sauce and fresh vegetables.'
        },
        {
            id: 2,
            imagePath: '/images/chicken1.png',
            title: 'Grilled Chicken with Vegetables',
            description: 'A healthy grilled chicken breast served with a side of fresh vegetables and a crisp salad, perfect for a balanced meal.'
        },
        {
            id: 3,
            imagePath: "/images/checkin.png",
            title: 'Grilled Chicken Salad',
            description: 'A refreshing grilled chicken salad made with mixed greens, cherry tomatoes, cucumbers, and a light lemon vinaigrette.'
        }
    ];

    return (
        <div className='mt-16 w-[90%] bg-[#FFFFFD] rounded-3xl flex flex-col items-center p-6 mx-auto space-y-3 mb-6 md:grid md:grid-cols-2 md:gap-y-3'>
            {dummyFoods.map((food: any, index: number) => {
            const isLast = index === dummyFoods.length - 1;
            const isOdd = dummyFoods.length % 2 !== 0;
            const shouldCenter = isOdd && isLast;

            return (
                <div
                key={food.id}
                className={shouldCenter ? 'md:col-span-2 md:justify-self-center' : ''}
                >
                <ItemCard
                    imageUrl={food.imagePath}
                    titleImage={food.title}
                    width={320}
                    height={320}
                    title={food.title}
                    description={food.description}
                    buttonTitle="Order Now"
                    containerStyles='max-w-[370px] '
                />
    </div>
  );
})}

        </div>
    );
};

export default HomeItems;