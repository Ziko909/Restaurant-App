import React from 'react';
import ChefCards from './ChefCards';

const dummyChefs: {
    id: number;
    imagePath: string;
    name: string;
    description: string;
}[] = [
    {
        id: 1,
        imagePath: '/images/chef/chef1.png',
        name: 'Chef Mario Rossi',
        description: 'Expert in traditional Italian dishes with a modern twist, bringing authentic flavors to your table.',
    },
    {
        id: 2,
        imagePath: '/images/chef/chef1.png',
        name: 'Chef Ana López',
        description: 'Passionate about Latin American flavors, specializing in grilled meats and vibrant sauces.',
    },
    {
        id: 3,
        imagePath: '/images/chef/chef1.png',
        name: 'Chef John Smith',
        description: 'Focused on healthy, balanced meals using fresh ingredients and creative recipes.',
    },
];

const ChefCardsList: React.FC = () => {
    return (
        <div className='w-[70%]  md:w-[90%]  mx-auto mb-10 relative'>
            <div className="w-full p-4  
                flex flex-col items-center gap-y-6 mb-10
                md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-x-16 md:items-stretch
               ">            {dummyChefs.map((chef) => (
                <ChefCards
                    key={chef.id}
                    imageUrl={chef.imagePath}
                    name={chef.name}
                    description={chef.description} titleImage={'Chef'}  
                    containerStyles='bg-[#fcf8f5] shadow-lg  rounded-lg min-h-[320px] justify-start transition-transform hover:scale-105 max-w-[260px] border-3 border-[#E5C7AF]'
                    />
            ))}
         </div>
        </div>
    );
};

export default ChefCardsList;