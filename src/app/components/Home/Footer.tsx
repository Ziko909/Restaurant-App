import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className='w-full bg-[#FCDEC2' >
            <hr className='h-1 bg-[#ECCFAB] border-0'/>
            <div className='mx-auto p-5 flex flex-col gap-y-3 items-center'>
                <h1 className='mx-auto text-xl font-bold'>Created By</h1>
                <div className="flex flex-col  items-center">
                    <div>Ziko909</div>
                    <Image
                        src="/images/chef/chef1.png"
                        alt="Chef Image"
                        width={55}
                        height={55}
                        className="my-4 rounded-full shadow-lg"
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-x-2 items-center'>
                        <Mail size={18} className='stroke-blue-500' ></Mail>
                        <span className='text-[14px]'>aabou.zakaria909@gmail.com </span>
                    </div>
                    <div className='flex  gap-x-2 items-center mb-3'>
                        <Phone size={18} className='stroke-green-500'  ></Phone>
                        <span className='text-[14px]'>aabou.zakaria909@gmail.com </span>
                    </div>
                    <div className='flex gap-x-4 justify-center'>
                        <a href="https://www.linkedin.com/in/zakaria-aabou/" className='bg-[#2563EB] p-2 rounded-sm' >
                        <Linkedin size={18} className="stroke-white " />
                        </a>
                        <a href="https://github.com/Ziko909" className='bg-black p-2 rounded-sm'>
                            <Github size={18} className="stroke-white "></Github>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;