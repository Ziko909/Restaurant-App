import React from 'react';
import ReviewStatisticsCard from './ReviewStatisticsCard';


const ReviewStatisticsCards: React.FC = () => {
    return (
        <div className="flex  flex-col gap-y-4 mb-7">
            <ReviewStatisticsCard title="4.8" subtitle="Average Feedback" titleStyle='text-xl font-bold text-[#2563EB] md:text-2xl ' subtitleStyle='text-black text-[15px] md:text-[17px]'/>
            <ReviewStatisticsCard title="120+" subtitle="Dishes Served Daily" titleStyle='text-xl font-bold text-[#16A34A] md:text-2xl ' subtitleStyle='text-black text-[15px] md:text-[17px]' />
            <ReviewStatisticsCard title="95%" subtitle="Customer Satisfaction" titleStyle='text-xl font-bold text-[#9333EA] md:text-2xl' subtitleStyle='text-black text-[15px] md:text-[17px]' />
        </div>
    );
};

export default ReviewStatisticsCards;