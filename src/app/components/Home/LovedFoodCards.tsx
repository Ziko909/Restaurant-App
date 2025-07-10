import Image from 'next/image';
import React from 'react';
import { ItemCardProps } from '../../types/ItemCardProps';

// filepath: /home/some-one/Desktop/next/restaurant-app2/src/app/components/Home/LovedFoodCards.tsx

const LovedFoodsCards: React.FC<ItemCardProps> = (props) => {
    return (
        <div className={` flex flex-row items-start text-center space-x-3 px-2 py-4`}>
            <Image
                src={props.imageUrl}
                alt={props.titleImage}
                width={260}
                height={260}
                className=" md:w-26 md:h-26 flex mt-1 justify-center w-13 h-13 object-cover "
            />
            <div className='  mt-2 flex  flex-col  py-2 space-y-1 text-left'>
                <h1 className="text-sm -mt-2 font-bold text-black md:text-xl">{props.title}</h1>
                <p className=" md:text-sm text-[10px] text-black">{props.description}</p>
            </div>
        </div>
    );
};

export default LovedFoodsCards;
