'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

import Albums from '@/data/AlbumsData';
import Image from 'next/image';


const AlbumsList = () => {
  
  const albums = Albums;

  const [almusic, setAlmusic] = useState(0);


  
  const myAlbums = (newInput:number, offset: number) => {
    setAlmusic(almusic + newInput)

    const containerAlbums = document.getElementById("containerAlbums")
    if(almusic.valueOf() <= -4){
      setAlmusic(0)
      
    }
    else if(almusic.valueOf() === 4 ){
      setAlmusic(0)
    }
    else if(almusic.valueOf() === 0 ){
      setAlmusic(-1)
    }
    console.log(almusic)
    if(containerAlbums){
    containerAlbums.style.translate = `${almusic * offset}px`
    }
  }
  


  
  return (
    <div className="overflow-x-hidden">
      
      <div className='flex flex-col  gap-4 overflow-x-hidden mb-6 relative'>
        <div className='flex  items-center justify-between w-[93%]'>
          <h2 className='lg:text-[16px] text-[12px]'>TREADING ALBUMS</h2>
          <p className='text-[#ffa200] md:text-[14px] text-[10px]'>VIEW All</p>
        </div>
          < FaChevronLeft size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 left-5 opacity-0 hover:opacity-100' onClick={()=> myAlbums(-1, 250)}/>
          < FaAngleRight size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 right-5  transition opacity-0 hover:opacity-100' onClick={()=> myAlbums(+1, 250)}/>
        <div className='flex items-center gap-4 md:mt-4 overflow-x-hidden w-[2000px]' id='containerAlbums'> 
          
          {
            albums.map((list) =>(
              <>
                <div key={list.id} className='flex flex-col items-center justify-center md:w-[240px] w-[155px] relative group'>
                  <Link  href="/audio">
                  <img src={list.src} alt={list.firstName} width={240} height={240} className='rounded-md'/>
                  </Link>
                  <div className='p-2 md:p-3 bg-[#ffa200] rounded-full absolute right-6 top-[45%] md:top-[55%] text-black hidden  transition group-hover:flex items-center justify-center cursor-pointer'>
                  <FaPlay size={20} /> 
                  
                  </div>
                  
                  <h3 className='lg:text-[18px]  text-[14px]'>{list.firstName}</h3>
                  <h3 className='lg:text-[25px] md:text-[20px] text-[18px]'>{list.lastName}</h3>
                </div>
              </>
            ))
          }
          
        </div>
      </div>
      
    
    </div>
  )
}

export default AlbumsList