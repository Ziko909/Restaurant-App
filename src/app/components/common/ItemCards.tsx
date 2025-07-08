
import Image from 'next/image';
import React from 'react';
import { ItemCardProps } from '../../types/ItemCardProps';


const ItemCard: React.FC<ItemCardProps> = (props) => {
  return (
  <div className={`flex flex-col items-center text-center space-y-4 p-6 ${props.containerStyles || ''}`}>
    <Image
    src={props.imageUrl}
    alt={props.titleImage}
    width={200}
    height={260}
    className="mx-auto flex justify-center w-35 h-35 object-cover rounded-full "
    />
      <div>
        <h1 className={`text-xl -mt-2 mb-2 font-bold text-black ${props.headingStyles || ''}`}>{props.title}</h1>
        <p className={`text-center text-sm text-black ${props.descriptionStyles || ''}`}>{props.description}</p>
      </div>
      {props.showButton !== false && (
        <button className={`bg-[#FB4C0A] py-2 px-10 rounded-lg text-white font-bold shadow-[0_8px_12px_#FB4C0A] transition-transform hover:scale-110 ${props.buttonStyles || ''}`}>
          {props.buttonTitle}
        </button>
      )}
      {props.showPrice && props.price && (
        <p className={`text-center text-lg  font-semibold  ${props.priceStyles || ''}`}>${props.price}</p>
      )}
    </div>
  );
};

export default ItemCard;
