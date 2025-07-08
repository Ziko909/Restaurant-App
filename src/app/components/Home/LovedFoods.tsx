import LovedFoodsCards from "./LovedFoodCards";

const LovedFoods: React.FC = () => {
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
        <div className='w-[85%] flex  flex-col py-1 mx-auto  mb-2'>
            {dummyFoods.map((food: any) => (
            <LovedFoodsCards
            key={food.id} 
            imageUrl={food.imagePath} 
            titleImage={food.title} 
            width={320} 
            height={320}
            title={food.title} 
            description={food.description} 
            buttonTitle="Order Now" 
            />
            ))}
        </div>
    );
};

export default LovedFoods;