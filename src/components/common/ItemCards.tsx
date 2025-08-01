'use client';
import Image from "next/image";
import React from "react";
import { ItemCardProps } from "../../types/ItemCardProps";

const ItemCard: React.FC<ItemCardProps> = (props) => {
  return (
    <div
      className={`flex flex-col items-center text-center space-y-4 p-6 ${
        props.containerStyles || ""
      }`}
    >
      <Image
        src={props.imageUrl}
        alt={props.titleImage}
        width={700}
        height={700}
        className="mx-auto flex justify-center w-35 h-35 lg:w-[180px] lg:h-[180px] object-cover"
      />
      <div>
        <h1
          className={`text-xl lg:text-2xl -mt-2 mb-2 font-bold text-black ${
            props.headingStyles || ""
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`text-center text-sm lg:text-base text-black ${
            props.descriptionStyles || ""
          }`}
        >
          {props.description}
        </p>
      </div>
      {props.showButton !== false && (
        <button
          className={`bg-[#FB4C0A] py-2 px-10 md:px-12 md:py-3 lg:py-3 lg:px-15 rounded-lg text-white font-bold shadow-[0_8px_12px_#FB4C0A] transition-transform hover:scale-110 ${
            props.buttonStyles || ""
          }`}
        >
          <span className="flex items-center justify-center animate-wiggle-2">
            {props.buttonTitle}
          </span>
        </button>
      )}
      {props.showPrice && props.price && (
        <p
          className={`text-center text-lg lg:text-xl font-semibold ${
            props.priceStyles || ""
          }`}
        >
          ${props.price}
        </p>
      )}
    </div>
  );
};

export default ItemCard;
