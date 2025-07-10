'use client';

import Image from 'next/image';
import Menubar from './common/Menubar';

const Header = () => {
    return (
        <header >
            <div className=' w-[90%] flex justify-between items-center mx-auto'>
                <div className="text-md text-[#070000] -mt-[8px] flex items-center">
                    <Image className="" src="/pizza-icon.png" alt="Description of image" width={58} height={58} />
                    <h1 className='md:text-xl'>Restaurant</h1>
                </div>
                <Menubar/>
            </div>
            <div className='h-[2px] md:h-[5px] bg-[#EED5B7]'></div>
        </header>
    )
}

export default Header;