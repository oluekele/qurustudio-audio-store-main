'use client'
import { IoMdCheckmark } from "react-icons/io";
import React, { useState } from 'react'
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdOutlineRepeat } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import Image from "next/image";
import Waveform from '../../public/assets/wave2.png.png'
import { FaRegRegistered } from "react-icons/fa";

const AudioPlayer = () => {

  const [isActive, setIsActive] = useState(false)

  

  return (
    <div className='lg:my-10 mt-5'>
      <div className='lg:flex items-center mx-auto gap-6'>
        <img src='https://assets.audiomack.com/kingperryy/b9f6ce5a80cd156f1b9a8570f7cd77194d6addf4e2d867e57cda42497f0be62a.png?width=300' alt='king'  className='lg:w-[200px] lg:h-[200px] mb-2'/>
        <div className='flex flex-col '>
          <h2 className='font-medium md:text-[20px]'>King Perryy featuring Marioo, Joshua Baraka and Savara</h2>
          <h2 className='font-bold md:text-[22px]'>Denge 3.0</h2>
          <p className='font-bold md:text-[18px]'>Feat. <span className='text-[#ffa200] cursor-pointer'>Marioo, Joshua Baraka, Savara</span></p>
          <p className='font-bold md:text-[16px]'>Album:  <span className=' cursor-pointer'>Denge 6.0</span></p>
          <p className='font-bold flex gap-1 md:text-[16px] text-[12px]'>Release Date: <span className=' cursor-pointer'>February 21, 2024 by </span><span className='text-[#ffa200] cursor-pointer flex items-center gap-1 '>King Perry <IoMdCheckmark size={15} className='bg-[#ffa200] text-black p-1 rounded-full mt-1'/></span></p>
          <Link href='/' className="py-1 px-4 my-2 font-bold bg-[#212121] shadow-md text-[14px] w-[150px] rounded-[6px]">#Afrosounds</Link>
          <div className="flex items-center gap-6">
            <div className="font-bold hover:text-[#ffa200]">
              <FaRegHeart size={25}/>
              <p>Like</p>
            </div>
            <div className="font-bold ">
              <RiPlayListAddLine size={25} className="hover:text-[#ffa200]"/>
              <p className="text-[#999999]">Playlist</p>
            </div>
            <div className="font-bold hover:text-[#ffa200]">
              <MdOutlineRepeat size={25} className="hover:text-[#ffa200]"/>
              <p className="text-[#999999]">ReUp</p>
            </div>
            <div className="font-bold  ">
              <div className="relative mb-6 text-[#999999]">
                <CgProfile size={22} className="absolute cursor-pointer left-[30px] "/>
                <CgProfile size={22} className="absolute cursor-pointer left-[15px]"/>
                <CgProfile size={22} className="absolute cursor-pointer "/>
              </div>
              <p className="text-[#999999]">Service</p>
            </div>
            <div className="font-bold hover:text-[#ffa200]">
              <HiDotsHorizontal size={25}/>
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4 relative mt-6">
      <div >
          { !isActive? <IoPlaySharp size={60} className="border-[3px] border-[#fff] p-3 rounded-full cursor-pointer" onClick={()=>{
            setIsActive(!isActive); console.log('clicked')}}/>:
          <IoPauseSharp size={60} className="border-[3px] border-[#fff] p-3 rounded-full cursor-pointer" onClick={()=>{
            setIsActive(!isActive)
          }}/>
          }
         
        </div>
        <div className="flex items-center w-[80%] gap-2 relative">
          <span className="font-bold absolute text-[20px] select-none">0:00</span>
          <Image src={Waveform} alt='waveform' width={0} height={0} className="h-[70px] "/>
          <span className="font-bold absolute right-0 text-[20px] select-none">4:25</span>
          
        </div>
       
      </div>
      <div className="md:mt-6 ">
        <p className='font-bold  md:text-[20px] flex items-center gap-1'>Release Date: <span className='text-[#999999] cursor-pointer'>February 22, 2024</span> <FaRegRegistered  size={15}/></p>
        <p className="text-[#999999] font-light md:text-[20px] ">℗ 2024 Def Jam Recordings, a division of UMG Recordings, Inc.</p>
      </div>
      <div className="flex  gap-8 mt-4">
        <div>
          <p className="text-[#ffa200] font-bold md:text-[20px]">Total Plays</p>
          <h2 className="font-bold md:text-[30px] text-[25px]">110K</h2>
        </div>
        <div>
          <p className="text-[#ffa200] font-bold md:text-[20px]">Likes</p>
          <h2 className="font-bold md:text-[30px] text-[25px]">2.78K</h2>
        </div>
        <div>
          <p className="text-[#ffa200] font-bold md:text-[20px]">Re-Ups</p>
          <h2 className="font-bold md:text-[30px] text-[25px]">100k</h2>
        </div>
        <div>
          <p className="text-[#ffa200] font-bold md:text-[20px]">Playlist Adds</p>
          <h2 className="font-bold md:text-[30px] text-[25px]">409</h2>
        </div>
      </div>
      <div className="mt-[30px]">
        <h2 className="md:text-[30px] font-bold">MORE FROM <span className='text-[#ffa200]'>ADEKUNLE GOLD</span></h2>
        <div className="flex md:gap-8 gap-4 mt-4 lg:w-[80%] items-start">
          <div className="flex flex-col justify-center">
            <img src="https://assets.audiomack.com/adekunlegold/bda2844f2882650e36a740692431441fd9822cdec022dfa3b1f27d838bc85f98.jpeg?width=600" alt="detail" className="rounded-md"/>
            <h3 className="text-[10px] md:text-[18px]">Adekunle Gold, Simi</h3>
            <h2 className="font-bold text-center text-[13px] md:text-[18px]"><span className="hover:text-[#ffa200]">Look What You Made Me Do</span>...</h2>
          </div>
          <div className="flex flex-col items-start  justify-center">
            <img src="https://assets.audiomack.com/adekunlegold/bda2844f2882650e36a740692431441fd9822cdec022dfa3b1f27d838bc85f98.jpeg?width=600" alt="detail" className="rounded-md"/>
            <h3 className=" text-[10px] md:text-[18px]">Adekunle Gold, Simi</h3>
            <h2 className="font-bold text-center"><span className="hover:text-[#ffa200] text-[13px] md:text-[18px]">Party No Dey Stop</span>...</h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <img src="https://assets.audiomack.com/adekunlegold/bda2844f2882650e36a740692431441fd9822cdec022dfa3b1f27d838bc85f98.jpeg?width=600" alt="detail" className="rounded-md"/>
            <h3 className=" text-[10px] md:text-[18px]">Adekunle Gold, Simi</h3>
            <h2 className="font-bold text-center"><span className="hover:text-[#ffa200] text-[13px] md:text-[18px] text-center">Normally</span>...</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer