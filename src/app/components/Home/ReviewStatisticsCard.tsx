import React from 'react';

interface ReviewStatisticsCardProps {
    title: string;
    subtitle: string;
    containerStyle?: string;
    titleStyle?: string;
    subtitleStyle?: string;
}

const ReviewStatisticsCard: React.FC<ReviewStatisticsCardProps> = ({ title, subtitle, containerStyle, titleStyle, subtitleStyle }) => {
    return (
        <div className={`bg-[#FCF8F5] rounded-lg flex flex-col justify-between items-center py-6 gap-y-2 ${containerStyle || ''}`}>
            <h1 className={titleStyle}>{title}</h1>
            <h3 className={subtitleStyle}>{subtitle}</h3>
        </div>
    );
};

export default ReviewStatisticsCard;