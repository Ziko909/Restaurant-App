import React from 'react';
import ReviewStatisticsCard from './ReviewStatisticsCard';


const ReviewStatisticsCards: React.FC = () => {
    return (
      <div className="flex flex-col gap-y-4 mb-7 lg:flex-row lg:justify-center lg:gap-x-12 lg:p-8 lg:mb-8">
        <ReviewStatisticsCard
          title="4.8"
          subtitle="Average Feedback"
          titleStyle="text-xl font-bold text-[#2563EB] md:text-2xl lg:text-3xl"
          subtitleStyle="text-black text-[15px] md:text-[17px] lg:text-lg"
          containerStyle="lg:w-[350px] lg:h-[180px] lg:flex lg:flex-col lg:justify-center lg:p-6"
        />
        <ReviewStatisticsCard
          title="120+"
          subtitle="Dishes Served Daily"
          titleStyle="text-xl font-bold text-[#16A34A] md:text-2xl lg:text-3xl"
          subtitleStyle="text-black text-[15px] md:text-[17px] lg:text-lg"
          containerStyle="lg:w-[350px] lg:h-[180px] lg:flex lg:flex-col lg:justify-center lg:p-6"
        />
        <ReviewStatisticsCard
          title="95%"
          subtitle="Customer Satisfaction"
          titleStyle="text-xl font-bold text-[#9333EA] md:text-2xl lg:text-3xl"
          subtitleStyle="text-black text-[15px] md:text-[17px] lg:text-lg"
          containerStyle="lg:w-[350px] lg:h-[180px] lg:flex lg:flex-col lg:justify-center lg:p-6"
        />
      </div>
    );
  };
  

export default ReviewStatisticsCards;