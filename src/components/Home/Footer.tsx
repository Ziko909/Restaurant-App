'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FCDEC2] mb-6 lg:mb-1">
      <hr className="h-1 bg-[#ECCFAB] border-0" />
      <div className="mx-auto p-5 flex flex-col gap-y-3 items-center lg:flex-row lg:justify-center lg:gap-x-24">
        <div className="flex flex-col gap-y-3 items-center">
          <h1 className="mx-auto text-xl font-bold md:text-2xl lg:text-4xl">Created By</h1>
          <div className="flex flex-col items-center">
            <div className="md:text-xl lg:text-2xl">Ziko909</div>
            <Image
              src="/images/creator/zakaria-aabou1.png"
              alt="Chef Image"
              width={720}
              height={720}
              className="w-24 h-24 my-4 rounded-full md:w-26 md:h-26 object-cover lg:w-30 lg:h-30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-8">
          <div className="flex flex-col justify-center gap-y-2 md:gap-y-3 lg:gap-y-4">
            <div className="flex gap-x-2 items-center">
              <Mail className="stroke-blue-500 w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" />
              <span className="text-[14px] lg:text-[16px]">aabou.zakaria909@gmail.com</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Phone className="stroke-green-500 w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" />
              <span className="text-[14px] lg:text-[16px]">+212 684-128398</span>
            </div>
          </div>
          <div className="flex gap-x-4 justify-center md:items-center">
            <a
              href="https://www.linkedin.com/in/zakaria-aabou/"
              className="bg-[#2563EB] p-2 lg:p-3 rounded-sm"
            >
              <Linkedin className="stroke-white w-[18px] h-[18px] lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://github.com/Ziko909"
              className="bg-black p-2 lg:p-3 rounded-sm"
            >
              <Github className="stroke-white w-[18px] h-[18px] lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
