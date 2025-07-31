'use client';

import React from 'react';
import Image from 'next/image';
import ChefCardsList from './ChefCardsList';

const AboutMain: React.FC = () => {
    return (
        <>
            <section className="mt-8 w-[90%] mx-auto flex flex-col 
                justify-between items-start gap-6
                lg:flex-row-reverse lg:justify-between lg:items-center  mb-8 md:mb-10 lg:mb-13 lg:mt-16">
                <div className="lg:w-[45%] flex justify-center self-center">
                    <Image
                        src="/images/logo.png"
                        alt="Delicious plat"
                        width={720}
                        height={720}
                        className="mx-auto rounded-full 
                            w-[70vw] h-[70vw] max-w-[280px] max-h-[280px]
                            md:max-w-[340px] md:max-h-[340px]
                            lg:w-[32vw] lg:h-[32vw] lg:max-w-[520px] lg:max-h-[520px]"
                    />
                </div>
                <div className="lg:w-[50%] flex flex-col justify-between items-start gap-6 lg:-mt-12 ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  text-[#E14526]">
                        About Us
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-black">
                        Welcome to our restaurant, where passion for food meets a commitment to health and quality. Our story is rooted in a love for fresh ingredients, creative recipes, and exceptional service. We believe in bringing people together over delicious meals, crafted by our talented chefs. Join us and experience the warmth, flavor, and care that define our culinary journey.
                        <br /><br />
                        Since our founding, we have dedicated ourselves to sourcing the finest local produce and creating dishes that celebrate both tradition and innovation. Our team is driven by a desire to delight every guest, whether you’re enjoying a quiet dinner or celebrating a special occasion. From our inviting atmosphere to our carefully curated menu, every detail is designed to make you feel at home. We invite you to savor the flavors, share memorable moments, and become part of our restaurant family.
                    </p>
                </div>
            </section>
            <section className="w-[90%] mx-auto flex flex-col gap-y-4 md:gap-y-6">
                 <h1 className="text-2xl md:text-4xl font-bold mx-auto lg:mb-6">Our Golden Chefs</h1>
                 <ChefCardsList />
            </section>
            <section>
            <div className="w-[80%] flex flex-col justify-between items-start gap-y-6 mx-auto mb-12 -mt-10 nd:-mt-8 lg:mt-0" >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#E14526] mx-auto">
                    Our Story
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-black">
                    Our journey began with a simple idea: to create a place where people could enjoy fresh, flavorful food in a welcoming atmosphere. Over the years, we have grown into a vibrant restaurant that celebrates both tradition and innovation. Our chefs craft each dish with care, using locally sourced ingredients and creative recipes that reflect our passion for quality.
                    <br /><br />
                    From our humble beginnings, we faced challenges and triumphs that shaped our identity. The early days were filled with experimentation, late nights, and a relentless pursuit of excellence. We listened to our guests, learned from every experience, and gradually built a loyal community that shares our love for great food.
                    <br /><br />
                    As our team grew, so did our vision. We expanded our menu to include new flavors inspired by global cuisines, while staying true to our roots in local traditions. Our commitment to sustainability led us to partner with nearby farms and producers, ensuring that every ingredient tells a story of care and connection.
                    <br /><br />
                    Today, our restaurant is more than just a place to eat—it’s a gathering spot for friends, families, and neighbors. We host events, celebrate milestones, and support causes that matter to our community. Every plate served is a testament to the dedication of our chefs, the warmth of our staff, and the trust of our guests.
                    <br /><br />
                    We are proud to be part of our community, bringing people together over memorable meals and special occasions. Every detail, from our inviting space to our curated menu, is designed to make you feel at home. Thank you for being part of our story—we look forward to sharing many more delicious moments with you.
                </p>
            </div>
            </section>
        </>
    );
};

export default AboutMain;
