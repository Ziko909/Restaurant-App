import React from 'react';
import FoodMenuList from './FoodMenuList';


const FoodMenuHome: React.FC = () => {
    return (
        <div className='mt-6 lg:mt-12'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mx-auto text-center ">
            Food Menu
        </h1> 
        <FoodMenuList />      
   </div>
    );
};

export default FoodMenuHome;