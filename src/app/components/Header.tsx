'use client';

import Image from 'next/image';
import Menubar from './common/Menubar';
import NavBar from './common/NavBar';

const Header = () => {
    return (
        <header >
            <div className=' w-[90%] flex justify-between items-center mx-auto lg:justify-start'>
                <div className="text-md text-[#070000] -mt-[8px] flex items-center lg:-mt-3">
                    <Image className="w-16 h-16 md:w-18 md:h-18 lg:w-24 lg:h-24" src="/pizza-icon.png" alt="Description of image" width={260} height={260} />
                    <h1 className='md:text-xl lg:text-2xl'>Restaurant</h1>
                </div>
                <Menubar/>
                <NavBar/>
            </div>
            <div className='h-[2px] md:h-[5px] bg-[#EED5B7] -mt-2'></div>
        </header>
    )
}

export default Header;