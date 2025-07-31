'use client';
import React from 'react';
import ChefCards from './ChefCards';
import { Chef } from '../../types/Chef';

const dummyChefs: Chef[] = [
    {
        id: 1,
        imagePath: '/images/chef/chef1.png',
        name: 'Chef Mario Rossi',
        description: 'Expert in traditional Italian dishes with a modern twist, bringing authentic flavors to your table.',
    },
    {
        id: 2,
        imagePath: '/images/chef/chef2.png',
        name: 'Chef Carlos López',
        description: 'Passionate about Latin American flavors, specializing in grilled meats and vibrant sauces.',
    },
    {
        id: 3,
        imagePath: '/images/chef/chef3.png',
        name: 'Chef David Chen',
        description: 'Innovative Asian fusion specialist, blending traditional methods with contemporary presentation.',
    },
    {
        id: 4,
        imagePath: '/images/chef/chef4.png',
        name: 'Chef David ',
        description: 'Master of French culinary artistry, creating refined dishes with classical techniques and elegance.',
    },
];

const ChefCardsList: React.FC = () => {
    return (
        <div className='w-[95%] max-w-[1300px] mx-auto mb-10'>
            <div className="w-full p-4  
                flex flex-col items-center gap-y-6 mb-10
                md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-x-12 md:items-stretch
            ">
                {dummyChefs.map((chef) => (
                    <ChefCards
                        key={chef.id}
                        imageUrl={chef.imagePath}
                        name={chef.name}
                        description={chef.description}
                        titleImage={'Chef'}
                        containerStyles='bg-[#fcf8f5] shadow-lg rounded-xl transition-transform hover:scale-105 border-3 border-[#E5C7AF] w-[280px] h-[360px] md:w-[260px] md:h-[350px] lg:w-[280px] lg:h-[380px] flex flex-col justify-start'
                    />
                ))}
            </div>
        </div>
    );
};

export default ChefCardsList;
