"use client";

import Image from "next/image";
import React from "react";
import { ItemCardProps } from "../../types/ItemCardProps";

const Foodmenucards: React.FC<ItemCardProps> = (props) => {
  return (
    <div
      className={`flex flex-col items-center text-center gap-y-6 border-2 border-gray-400 bg-white ${
        props.containerStyles || ""
      }`}
    >
      <div className="w-full h-[140px] md:h-[160px] lg:h-[190px] relative">
        <Image
          src={props.imageUrl}
          alt={props.titleImage}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 w-full justify-between">
        <h1
          className={`text-xl lg:text-2xl font-bold text-black ${
            props.headingStyles || ""
          }`}
        >
          {props.title}
        </h1>
        
        <p
          className={`mx-2 text-center text-sm lg:text-base text-black ${
            props.descriptionStyles || ""
          }`}
        >
          {props.description}
        </p>
        
        {props.showPrice && props.price && (
          <p
            className={`text-center text-lg lg:text-xl font-semibold self-end mr-4 ${
              props.priceStyles || ""
            }`}
          >
            ${props.price}
          </p>
        )}
        
        {props.showButton !== false && (
          <button
            className={`bg-[#FB4C0A] mb-4 lg:mb-4 py-2 px-6 md:px-12 md:py-3 lg:py-3 lg:px-13 rounded-lg text-white font-bold shadow-[0_8px_12px_#FB4C0A] transition-transform hover:scale-110 self-center cursor-pointer ${
              props.buttonStyles || ""
            }`}
          >
            <span className="flex items-center justify-center animate-wiggle-2">
              {props.buttonTitle}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Foodmenucards;
