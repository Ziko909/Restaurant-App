"use client";

import React from 'react';
import FeedbackCard from './FeedbackCard';


const feedbacks: {
    imageSrc: string;
    imageAlt: string;
    name: string;
    description: string;
    date: string; // ISO string with date and hour
    rate: number;
}[] = [
    {
        imageSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
        imageAlt: 'Alice Johnson',
        name: 'Alice Johnson',
        description: 'Amazing food and great service! Highly recommend.',
        date: '2024-06-10T14:30:00Z',
        rate: 5,
    },
    {
        imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
        imageAlt: 'Bob Smith',
        name: 'Bob Smith',
        description: 'A wonderful dining experience. Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner Will come again! The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner. The ambiance was perfect for our family dinner.',
        date: '2024-06-10T13:55:00Z',
        rate: 4,
    },
    {
        imageSrc: 'https://randomuser.me/api/portraits/women/3.jpg',
        imageAlt: 'Cathy Lee',
        name: 'Cathy Lee',
        description: 'The ambiance was perfect for our family dinner.',
        date: '2024-06-10T12:00:00Z',
        rate: 5,
    },
];
const CustomerFeedbackCards: React.FC = () => {
    return (
<div className="flex flex-col gap-y-4 mb-7 lg:items-center lg:gap-x-8l">
    {feedbacks.map((feedback, idx) => (
        <FeedbackCard
            key={idx}
            imageSrc={feedback.imageSrc}
            imageAlt={feedback.imageAlt}
            name={feedback.name}
            description={feedback.description}
            date={feedback.date}
            rate={feedback.rate}
        />
    ))}
</div>

    );
};

export default CustomerFeedbackCards;