'use client';

import React from 'react';
import Image from 'next/image';
import { renderStars } from '../../lib/StartsComponent';
import { formatDistanceToNow } from 'date-fns';
import { Share2 } from 'lucide-react';
import { FeedbackCardProps } from '../../types/FeedbackCardProps';

const FeedbackCard: React.FC<FeedbackCardProps> = ({
    imageSrc,
    imageAlt,
    name,
    description,
    date,
    rate,
}) => {
    return (
        <div className="bg-white rounded-xl p-3 flex gap-x-4 items-start hover:shadow-lg hover:border-1 hover:border-blue-200 lg:w-[48%]">
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                width={55} 
                height={55} 
                className="rounded-full shadow-lg md:w-14 md:h-14"
            />
            <div className="flex flex-col gap-y-2 justify-between flex-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold md:text-xl">{name}</h1>
                    <div>{renderStars(rate)}</div>
                </div>
                <p className="text-sm md:text-[15px]">{description}</p>
                <div className="flex justify-between">
                    <p className="text-[12px] md:text-[13px]">
                        {formatDistanceToNow(new Date(date), { addSuffix: true })}
                    </p>
                    <button 
                        onClick={() => console.log()} 
                        className="flex gap-x-2 items-center cursor-pointer group"
                    >
                        <Share2 
                            size={14} 
                            className="stroke-current group-hover:stroke-green-400 md:w-4 md:h-4" 
                        />
                        <span className="text-[14px] group-hover:text-green-400 md:text-[15px]">
                            Share
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;