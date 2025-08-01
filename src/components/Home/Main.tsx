'use client'

import Image from 'next/image';
import React from 'react';
import HomeItems from './HomeItems';
import LovedFoods from './LovedFoods';
import PopularFoods from './PopularFoods';
import Reviews from './Reviews';
import Footer from './Footer';

const Main: React.FC = () => {
  return (
    <main>
      <section className="mt-8 w-[90%] mx-auto flex flex-col justify-between items-start space-y-6 lg:flex-row-reverse lg:justify-between lg:items-center lg:mb-5 lg:mt-16">
        <div className="lg:w-[45%] lg:flex lg:justify-center self-center animate-spin" style={{ animationDuration: '10s' }}>
          <Image
            src="/images/home-plat.png"
            alt="Delicious plat"
            width={700}
            height={700}
            className="mx-auto lg:mx-0 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-[70vw] h-[70vw] max-w-[280px] max-h-[280px] md:max-w-[340px] md:max-h-[340px] lg:w-[32vw] lg:h-[32vw] lg:max-w-[520px] lg:max-h-[520px]"
          />
        </div>

        <div className="lg:w-[50%] flex flex-col justify-between items-start space-y-6 lg:-mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Enjoy <span className="border-b-4 border-[#D0AC5F] text-[#E14526]">Delicious <br /> Food</span> in Your <br /> Healthy Life
          </h1>

            <p className="text-base md:text-lg lg:text-xl text-black">
              Savor every bite with our chef-curated menu, featuring wholesome ingredients and vibrant flavors. Whether you&apos;re craving a hearty breakfast, a light lunch, or a decadent dinner, our dishes are designed to nourish your body and delight your senses. Experience the perfect blend of taste and health in every meal.
            </p>
            <button className="py-3 px-12 md:py-4 md:px-16 text-lg md:text-xl lg:text-2xl bg-[#FB4C0A] rounded-lg text-white font-bold shadow-[0_8px_12px_#FB4C0A] hover:scale-105 transition-transform">
                <span className="flex items-center justify-center animate-wiggle-2">
                Book a Table
                </span>
            </button>
        </div>
      </section>

      <section>
        <HomeItems />
      </section>

      <section className="mt-8 w-[90%] mx-auto flex flex-col justify-between items-start space-y-6 lg:flex-row-reverse lg:justify-end lg:items-center lg:mb-8 lg:mt-22">
        <Image
          src="/images/home-item4.png"
          alt="Delicious plat"
          width={2000}
          height={2000}
          className="mx-auto lg:mx-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-[70vw] h-[70vw] max-w-[280px] max-h-[280px] md:max-w-[340px] md:max-h-[340px] lg:w-[32vw] lg:h-[32vw] lg:max-w-[430px] rounded-full lg:max-h-[430px] animate-spin"
          style={{ animationDuration: '12s' }}
        />
        <section>
          <h1 className="mb-3 text-center text-2xl md:text-4xl lg:text-5xl font-bold">
            Why People Choose Us ?
          </h1>
          <LovedFoods />
        </section>
      </section>

      <section>
        <h1 className="mb-3 text-center text-2xl font-bold md:text-4xl lg:text-5xl">Our Popular Food Items</h1>
        <div className="w-[85%] mx-auto mb-8 lg:mb-16">
          <p className="text-center text-[12px] text-black md:text-[16px] lg:text-xl">
            Explore our most loved dishes that have won the hearts of food enthusiasts. From savory appetizers to delightful desserts, each item is crafted with care and packed with flavors that will leave you craving for more.
          </p>
        </div>
        <PopularFoods />
      </section>

      <Image
        src="/images/chef/chef1.png"
        alt="Chef Image"
        width={310}
        height={310}
        className="mx-auto md:w-[380px] md:h-[380px] mb-16 mt-16 md:mt-20"
      />

      <Reviews />
      <Footer />
    </main>
  );
};

export default Main;
