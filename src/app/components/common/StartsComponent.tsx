import { Star, StarHalf, StarOff } from 'lucide-react';
import React from 'react';


export const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} size={14} className="text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
        stars.push(<StarHalf key="half" size={14} className="text-yellow-400 fill-yellow-400" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<StarOff key={`empty-${i}`} size={14} className="text-yellow-400" />);
    }

    return <div className="flex gap-x-1">{stars}</div>;
};
