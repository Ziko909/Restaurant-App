import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className='w-full bg-[#FCDEC2 mb-6' >
            <hr className='h-1 bg-[#ECCFAB] border-0'/>
            <div className='mx-auto p-5 flex flex-col gap-y-3 items-center'>
                <h1 className='mx-auto text-xl font-bold md:text-2xl '>Created By</h1>
                <div className="flex flex-col  items-center">
                    <div className='md:text-xl '>Ziko909</div>
                    <Image
                        src="/images/chef/chef1.png"
                        alt="Chef Image"
                        width={260}
                        height={260}
                        className="w-20 h-20 my-4 rounded-full  md:w-26 nd:h-26 object-contain"
                    />
                </div>
                <div className='flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-8'>
                    <div className='flex flex-col   md:justify-center md:gap-y-3 gap-y-2'>
                        <div className='flex gap-x-2 items-center'>
                            <Mail size={18} className='stroke-blue-500' ></Mail>
                            <span className='text-[14px]'>aabou.zakaria909@gmail.com </span>
                        </div>
                        <div className='flex  gap-x-2 items-center '>
                            <Phone size={18} className='stroke-green-500'  ></Phone>
                            <span className='text-[14px]'>aabou.zakaria909@gmail.com </span>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-center md:items-center '>
                        <a href="https://www.linkedin.com/in/zakaria-aabou/" className='bg-[#2563EB] p-2 rounded-sm' >
                        <Linkedin size={18} className="stroke-white md:w-6 md:h-6 " />
                        </a>
                        <a href="https://github.com/Ziko909" className='bg-black p-2 rounded-sm'>
                            <Github size={18} className="stroke-white md:w-6 md:h-6 "></Github>
                        </a>
                    </div> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;