import Link from 'next/link'
import React from 'react'

const LeftTreading = () => {
  return (
    <div className='hidden lg:grid  h-[70vh] overflow-y-scroll w-[320px] sticky  top-[80px]' >
      <div className='flex flex-col items-start border-b-[0.2px] border-gray-700 pb-4 w-full '>
        <h2 className='transition text-[#ffa200] font-bold w-full '>BROWSE</h2>
        <Link href={"/"} className='transition font-bold  rounded-full my-2 border-[0.2px]  py-2 px-3 w-[96%] bg-[#212121] border-none'>
          Home
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full my-2'>
          Treading Songs
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full my-2'>
          Treading Albums
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full my-2'>
          Recently Supported
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full my-2'>
          Recently Added
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full my-2'>
          Account For You
        </Link>
      </div>
      <div className='flex flex-col items-center w-full border-b-[0.2px] border-gray-700 pb-4'>
        <h2 className='transition text-[#ffa200] w-full mt-4 font-bold '>CHARTS</h2>
        <Link href={"/"} className='transition font-bold rounded-full w-full my-2'>
          Top Songs
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full mb-2'>
          Top Albums
        </Link>
        <Link href={"/"} className='transition hover:text-[#ffa200] font-bold w-full '>
          Top Supported
        </Link>
        
      </div>
      <div className='py-4'>
        <h2 className='transition text-[#ffa200] font-bold pb-2 '>GENRES</h2>
        <div className='flex flex-wrap gap-2'>
        <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px]  rounded-full border-[#ffa200]'>
            <Link href={"/"} className=''>
            All Genres
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Afrosounds
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Hip-Hop/Rap
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Latin
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Caribbean
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Pop
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            R&B
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Gospel
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Electronic
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Rock
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Punjabi
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Country
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Instrumental
          </Link>
          </button>
          <button className='transition hover:border-[#ffa200] font-bold p-2 border-[1px] border-gray-700 rounded-full'>
            <Link href={"/"} className=''>
            Podcast
          </Link>
          </button>
        </div>
          
      </div>
    </div>
  )
}

export default LeftTreading