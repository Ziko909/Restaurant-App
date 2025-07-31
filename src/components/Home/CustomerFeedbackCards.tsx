"use client";

import React from 'react';
import FeedbackCard from './FeedbackCard';

import { Feedback } from '../../types/Feedback';

const feedbacks: Feedback[] = [
    {
        imageSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
        imageAlt: 'John Smith',
        name: 'John Smith',
        description: 'Outstanding cuisine with exceptional presentation. The flavors were perfectly balanced and the service was impeccable.',
        date: '2024-06-10T14:30:00Z',
        rate: 5,
    },
    {
        imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
        imageAlt: 'Bob Smith',
        name: 'Bob Smith',
        description: 'Delightful atmosphere and delicious food. The staff was attentive and made our evening special. Definitely worth a visit!',
        date: '2024-06-10T13:55:00Z',
        rate: 4,
    },
    {
        imageSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
        imageAlt: 'Michael Lee',
        name: 'Michael Lee',
        description: 'Perfect venue for our celebration. Great food quality and wonderful ambiance that made our family dinner memorable.',
        date: '2024-06-10T12:00:00Z',
        rate: 5,
    },
    {
        imageSrc: 'https://randomuser.me/api/portraits/men/4.jpg',
        imageAlt: 'David Wilson',
        name: 'David Wilson',
        description: 'Perfect venue for our celebration. Great food quality and wonderful ambiance that made our family dinner memorable.',
        date: '2024-06-10T12:00:00Z',
        rate: 5,
    },
];
const CustomerFeedbackCards: React.FC = () => {
    return (
<div className="flex flex-col gap-y-4 mb-7 lg:items-center lg:gap-x-2 lg:flex-row lg:justify-between lg:flex-wrap">
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