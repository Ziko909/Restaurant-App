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
            <section className='mt-8 w-[90%] mx-auto flex flex-col justify-between items-start space-y-6'>
                <Image
                    src="/images/home-plat.png" 
                    alt="Delicious plat"
                    width={260}
                    height={260}
                    className="mx-auto md:w-[320px]  md:h-[320px] rounded-full shadow-[0_1px_10px_rgba(0,0,0,1)]"
                    />             
                    <h1 className="text-4xl font-bold md:text-5xl text-black">
                        Enjoy <span className='border-b-3 border-[#D0AC5F] text-[#E14526]'>Delicious <br/> Food</span> in Your <br/> Healthy Life
                    </h1>
                    <p className="text-left  text-sm md:text-lg text-black">
                        Discover a variety of healthy and delicious meals crafted with fresh ingredients to nourish your body and delight your taste buds. Let us help you embrace a healthier lifestyle without compromising on flavor.
                    </p>
                    <button className='md:py-3 md:px-14 text-lg bg-[#FB4C0A] py-2 px-10 rounded-lg text-white font-bold shadow-[0_8px_12px_#FB4C0A] transition-transform hover:scale-110 md:mt-3'>
                        Book a Table
                    </button>
            </section>
            <section>
                <HomeItems>
                </HomeItems>
            </section>
                <Image
                    src="/images/slamon.png" 
                    alt="Delicious plat"
                    width={260}
                    height={260}
                    className="mx-auto md:w-[320px]  md:h-[320px] mb-16 mt-16 rounded-full shadow-[0_1px_10px_rgba(0,0,0,1)]"
                    />
                <section>
                    <h1 className=' mb-3 text-center text-2xl md:text-4xl font-bold'>Why People Choose Us ?</h1>
                    <LovedFoods>
                        
                    </LovedFoods>
                </section>
                <section>                    
                    <h1 className=' mb-3 text-center text-2xl font-bold md:text-4xl'>Our Popular Food Items</h1>
                    <div className='w-[85%] mx-auto mb-8'>                   
                         <p className="text-center text-[12px] text-black md:text-[16px]">
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
                    className="mx-auto md:w-[380px]  md:h-[380px] mb-16 mt-16 md:mt-20"
                    />
                 <Reviews></Reviews>
                 <Footer></Footer>
        </main>
    );
};

export default Main;