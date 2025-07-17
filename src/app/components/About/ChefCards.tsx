import React from "react";
import Image from "next/image";

interface ChefCardProps {
    imageUrl: string;
    titleImage: string;
    name: string;
    description: string;
    containerStyles?: string;
    headingStyles?: string;
    descriptionStyles?: string;
    buttonStyles?: string;
    buttonTitle?: string;
    showButton?: boolean;
    showPrice?: boolean;
    price?: number | string;
    priceStyles?: string;
}

const ChefCards: React.FC<ChefCardProps> = (props) => {
    return (
<div className={`flex flex-col items-center text-center gap-y-6 p-6 ${props.containerStyles || ''}`}>
        <Image
            src={props.imageUrl}
            alt={props.titleImage}
            width={200}
            height={260}
            className="mx-auto flex justify-center w-35 h-35 lg:w-[180px] lg:h-[180px] object-cover rounded-full"
        />
        <div>
            <h1 className={`text-xl lg:text-2xl -mt-2 mb-2 font-bold text-black ${props.headingStyles || ''}`}>
            {props.name}
            </h1>
            <p className={`text-center text-sm lg:text-base text-black ${props.descriptionStyles || ''}`}>
            {props.description}
            </p>
        </div>
        </div>
    );
};

export default ChefCards;