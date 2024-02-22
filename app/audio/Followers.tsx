import Link from 'next/link';
import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FaFacebookF,  FaInstagram, FaYoutube } from "react-icons/fa";

const Followers = () => {
  return (
    <div className='mt-[100px] lg:w-[300px] '>
      <div className=' pb-8 lg:border-b-[0.1px]  lg:border-gray-700 flex lg:flex-col items-center justify-between'>
        <div>
          <h2 className='flex items-center gap-2 font-bold text-[25px]'>King Perryy <IoMdCheckmark size={24} className='bg-[#ffa200] text-black p-1 mt-2 rounded-full'/></h2>
          <span className='text-[#999999] text-[20px] my-2 hover:text-[#ffa200] hover:underline cursor-pointer'>@kingperryy</span>
        </div>
        <button className='py-2 px-5 font-bold lg:text-[25px] md:text-[20px]  border-[3px] border-[#ffa200] flex items-center justify-start mt-2 md:w-[150px] rounded-full'>FOLLOW</button>
      </div>
      <div className=' md:py-8  lg:border-b-[0.1px] lg:border-gray-700 flex flex-col'>
        <h2 className='flex items-center gap-2 font-bold text-[25px] w-[70%]'>Top Supporters</h2>
        <div className='flex flex-wrap items-center gap-1 mt-4'>
          <img src='https://assets.audiomack.com/young-781/c2187b3c076e04343cb3be8c515332da8da2d72eda0b78785e8a6cbd8af37b93.jpeg?width=60' alt='young' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
          <img src='https://assets.audiomack.com/dg_dinero/df82947b5693f4a4306b879ede76fb881b7df51ce940de09a14922f7b6f33c82.jpeg?width=120' alt='dinero' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
          <img src='https://assets.audiomack.com/default-artist-image.png' alt='artist' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
          <img src='https://assets.audiomack.com/emmycruztmg_/d979f8c35eefb7326f28e14a805b71ae8e7201666c0dda86c9221143413ca9d9.jpeg?width=120' alt='emmy' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
          <img src='https://assets.audiomack.com/tallymiracle/892fa42b775962dd714d3ff70258e51a9ceeddf388ae3f9ee225588b0518f727.jpeg?width=120' alt='tally' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
          <img src='https://assets.audiomack.com/DJMajor/5343b715884c56a5adc14d49f7460efdb8c0744d682ca00138053372bf19afb7.jpeg?width=120' alt='major' className='w-[40px] h-[40px] rounded-full border-[0.1px] border-gray-700'/>
        </div>
      </div>
      <div className='mt-5 lg:py-8 lg:border-b-[0.1px] lg:border-gray-700 flex lg:flex-col gap-4'>
        <div className=''>
          <h2 className='font-bold md:text-[25px]'>128K</h2>
          <p className='text-[#ffa200]'>Follower</p>
        </div>
        <div className=''>
          <h2 className=' font-bold md:text-[25px]'>24.4M</h2>
          <p className='text-[#ffa200] '>Total Account Plays</p>
        </div>
        <div className=''>
          <h2 className=' font-bold md:text-[25px]'>140K</h2>
          <p className='text-[#ffa200]'>Monthly Listeners</p>
        </div>
      </div>
      <div className=' py-8 lg:border-b-[0.1px] lg:border-gray-700 flex flex-col'>
        <p className='font-bold'>Label: <span className='text-[#999999] font-medium cursor-pointer'>Continental Music</span></p>
        <p className='font-bold'>Genre: <span className='text-[#ffa200] font-medium cursor-pointer'>Afrosounds</span></p>
        <p className='font-bold'>Member Since: <span className='text-[#999999] font-medium cursor-pointer'>Feb 10, 2019</span></p>
      </div>
      <div className='flex items-center gap-4 md:mt-6'>
        <Link href='/' target='blank'>
        <TfiWorld size={20}/>
        </Link>
        <Link href='/' target='blank'>
        <FaXTwitter size={20}/>
        </Link>
        <Link href='/' target='blank'>
        <FaFacebookF size={20}/>
        </Link>
        <Link href='/' target='blank'>
        < FaInstagram size={20}/>
        </Link>
        <Link href='/' target='blank'>
        <FaYoutube size={20}/>
        </Link>
        <Link href='/' target='blank'>
        <FaTiktok size={20}/>
        </Link>
      </div>
    </div>
  )
}

export default Followers