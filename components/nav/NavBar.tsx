'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdUpload } from "react-icons/md";
import { GiCrossedAirFlows } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Google from '../../public/assets/Google_Icons.webp'
import Mac from '../../public/assets/mac.png'
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';
import { RiFacebookFill } from "react-icons/ri";
import Discover from './Discover';
import Original from './Original';


const NavBar = () => {

  const [searchNav, setSearchNav] = useState(false);
  const [signInNav, setSignInNav] = useState(false);

  const [isDiscoverVisible, setDiscoverVisible] = useState(false);
  const handleMouseEnter = () => {
    setDiscoverVisible((isDiscoverVisible) => !isDiscoverVisible);
  };


  const handleMouseLeave = () => {
    setDiscoverVisible(false);
  };

  const [isOriginalVisible, setOriginalVisible] = useState(false);
  const handleMouseEnter2 = () => {
    setOriginalVisible((isOriginalVisible) => !isOriginalVisible);
  };


  const handleMouseLeave2 = () => {
    setOriginalVisible(false);
  };

  return (
    <div className='md:border-b-[0.1px] border-slate-500 w-[100%] px-4 py-4 overflow-hidden flex-col items-center fixed z-50 gap-6 bg-black'>
      <div className='flex items-center justify-between mx-auto'>
        <div className='flex items-center gap-3'>
          <Link href={"/"} className='font-medium text-[16] border-r-[0.1px] pr-3 border-slate-800 flex gap-1'>
            <GiCrossedAirFlows size={20} className='text-[#ffa200]'/>
            qurustudio
          </Link>
          <Link href={"/"} className='text-[14px] w-[80px] '>
            Get Plus
            <span className='text-[#ffa200]'>+</span>
          </Link>
        </div>
        <div className='hidden md:flex items-center gap-4 p-2 rounded-[20px] bg-[#222222]  border-[0.3px] w-[40%] lg:w-[350px]' id='searchInput'>
          <IoSearchOutline  size={20} className='text-[#ffa200]'/>
          <input type='text' placeholder='Search for artists, songs, albums!' className='border-none outline-none w-full bg-transparent text-white'/>
        </div>
        <div className='hidden lg:flex items-center gap-4 text-[15px] '>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold ' >
              DISCOVER
            </Link>
            {isDiscoverVisible && <Discover />}
          </div>
          
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold '>
            PLAYLIST
          </Link>
          <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold' >
              ORIGINALS
              
            </Link>
            {isOriginalVisible && <Original />}
          </div>
        </div>
        <div className='hidden md:flex items-center lg:gap-4 '>
          <div className='flex items-center w-[250px] gap-2 md:text-[16px] lg:text-[18px]'>
          <Link href={"/"} className='border-r-[0.1px] border-[#ffa2006e] pr-2 transition hover:text-[#ffa200] font-bold'>
            Create an Account
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            Sign in
          </Link>
          </div>
          <div className='hidden md:flex items-center gap-4 px-3 py-1 rounded-[20px] bg-[#222222]  border-[0.3px] transition hover:bg-[#222222ad] hover:border-slate-500 text-[15px]'>
          <Link href={"/"} className='flex items-center gap-2'>
            <MdUpload size={20} className='text-[#ffa200]'/>
            UPLOAD
          </Link>
          </div>
        </div>
        <div className='flex items-center md:hidden gap-6'>
          <Link href={"/"} className='flex items-center gap-2' onClick={() => setSearchNav(!searchNav)}>
            <IoSearchOutline  size={25} />
          </Link>
          <div className={searchNav ? 'fixed left-0 w-[100%] top-3 z-50 bg-[#0d0d0d] px-4': 'fixed left-[-100%] w-[90%] z-30 bg-[#0d0d0d]'}>
          <AiOutlineClose size={25} onClick={()=> setSearchNav(!searchNav)} className='absolute right-[80px] top-2 cursor-pointer text-white'/>
          <div className='flex items-center justify-between mx-auto'>
          <Link href={"/"} className='font-medium text-[16] border-r-[0.1px] pr-3 border-slate-800 flex gap-1'>
            <GiCrossedAirFlows size={20} className='text-[#ffa200]'/></Link>

            <div className='flex items-center gap-4 px-2 py-1 rounded-[20px] -ml-20 bg-[#222222]  border-[0.3px] w-[60%] ' >
              <IoSearchOutline  size={20} className='text-[#ffa200]'/>
              <input type='text' placeholder='Search for artists, songs, albums!' className='border-none outline-none w-full bg-transparent text-white'/>
            </div>
              <Link href={"#"} className='flex items-center gap-2'>
              
              </Link>
            </div>
          </div>
          <Link href={"#"} className='flex items-center gap-2 z-50' onClick={() => setSignInNav(!signInNav)}>
            <CgProfile size={25} />
          </Link>

          <div className={signInNav ? 'fixed left-0 w-[100%] h-[100%] top-0 z-50 bg-[#0d0d0d] px-4': 'fixed left-[-100%] w-[100%] z-30 bg-[#0d0d0d]'}>
            <AiOutlineClose size={25} onClick={()=> setSignInNav(!signInNav)} className='absolute right-[30px] top-4 cursor-pointer text-white'/>
            <div className="flex flex-col items-center justify-center max-w-[650px] w-[80%] md:[70%] mx-auto pt-[50px] pb-[30px] md:pb-[80px] text-slate-50 gap-4 ">
              <GiCrossedAirFlows size={20} className='text-[#ffa200]'/>
              <div>
                <h2>SIGN UP OR LOGIN TO QURUSTUDIO</h2>
              </div>
              <div className='flex items-center gap-4 text-[15px] py-6 '>
                <Link href={"/"} className='transition hover:text-[#ffa200] rounded-full p-4 w-[60px] h-[60px] bg-[#4285f4] hover:bg-[#4286f4ce]'>
                  <Image src={Google} alt='Google' width={40} height={20} className='rounded-full p-1 bg-white'/>
                </Link>
                <Link href={"/"} className='transition  rounded-full p-4 w-[60px] h-[60px] bg-[#4267b2] hover:bg-[#4267b2ce]'>
                <RiFacebookFill size={30} />
                </Link>
                <Link href={"/"} className='transition hover:text-[#ffa200] rounded-full p-4 w-[60px] h-[60px] bg-white hover:bg-[#ffffffd0]'>
                <Image src={Mac} alt='mac' width={60} height={60}/>
                </Link>
              </div>
              <div className="flex flex-col w-full border-t-[0.2px] border-gray-400 py-4" >
                <label>Email</label>
                <input type='text' name='email' placeholder='Enter your email' className="p-2 border-none outline-none rounded-md w-full mt-2 bg-[#222222]" />
              </div>
              <Link href={"/"} className='bg-[#ffa200] font-bold py-3 px-6 text-black rounded-full '>
                Continue
              </Link>
              <div className='flex items-center justify-center gap-2'>
                <p className='text-center'>By signing into qurustudio you agree to our <Link href={"/"} className='text-[#ffa200] mx-2 '>
                  Terms of Service 
                </Link>
                 and 
                <Link href={"/"} className='text-[#ffa200]  mx-2'>
                  Privacy Policy.
                </Link>
                </p>
                
                
              </div>
                <Link href={"/"} className='text-[#ffa200] '>
                  Having trouble signing in?
                </Link>
              <div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <div className='flex md:hidden items-center justify-center md:gap-4 gap-2 md:text-[15px] text-[12px]  mt-6'>
          <Link href={"/"} className='transition hover:border-gray-300 font-bold border-[0.5px] py-1 px-3 rounded-[16px] border-slate-500 '
            id="background-color">
            Discover
          </Link>
          <Link href={"/"} className='transition hover:border-gray-300 font-bold border-[1px] py-1 px-3 rounded-[16px] border-gray-500 '>
            Playlist
          </Link>
          <Link href={"/"} className='transition hover:border-gray-300 font-bold border-[1px] py-1 px-3 rounded-[16px] border-gray-500 '>
            Originals
          </Link>
          <Link href={"/"} className='transition hover:border-gray-300 font-bold border-[1px] py-1 px-3 rounded-[16px] border-gray-500 '>
            Upload
          </Link>
        </div>
    </div>
  )
}

export default NavBar