'use client'

import React from 'react';
import ReviewStatisticsCards from './ReviewStatisticsCards';
import CustomerFeedbackCards from './CustomerFeedbackCards';

const Reviews: React.FC = () => {
    return (
        <article className="w-[90%] mx-auto mb-8">
            <h1 className="text-2xl md:text-4xl text-center font-bold text-black mb-3 lg:text-5xl">
                Customer <span className="text-[#E14526]">Feedback</span>
            </h1>
            <p className="text-center md:text-md text-sm md:text-[16px] text-black mb-7 lg:text-xl">
                See what our customers are saying about their dining experience with us.
            </p>
            <ReviewStatisticsCards />
            <CustomerFeedbackCards />
        </article>
    );
};

export default Reviews;