import Image from 'next/image';
import React from 'react';
import { ItemCardProps } from '../../types/ItemCardProps';

// filepath: /home/some-one/Desktop/next/restaurant-app2/src/app/components/Home/LovedFoodCards.tsx

const LovedFoodsCards: React.FC<ItemCardProps> = (props) => {
    return (
<div className="flex flex-row items-start text-center space-x-4 px-4 py-4 lg:space-x-6 lg:px-6 lg:py-6">
  <Image
    src={props.imageUrl}
    alt={props.titleImage}
    width={260}
    height={260}
    className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover mt-1"
  />
  <div className="mt-2 flex flex-col py-2 space-y-1 text-left">
    <h1 className="text-base font-bold text-black md:text-xl lg:text-2xl">
      {props.title}
    </h1>
    <p className="text-xs md:text-sm lg:text-base text-black">
      {props.description}
    </p>
  </div>
</div>


    );
};

export default LovedFoodsCards;
