'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

import Playlist from '@/data/Playlist';



const QuruPlaylist = () => {
  
  const playlist = Playlist;
  

  const [resultPlay, setResultPlay] = useState(0);


  
  const myTreading = (inputPlay:number, offsetPlay:number) => {
    setResultPlay(resultPlay + inputPlay)

    const containerPlay = document.getElementById("containerPlay")
    if(resultPlay.valueOf() <= -4){
      setResultPlay(0)
      
    }
    else if(resultPlay.valueOf() === 4 ){
      setResultPlay(0)
    }
    else if(resultPlay.valueOf() === 0 ){
      setResultPlay(-1)
    }
    console.log(resultPlay)
    if(containerPlay){
      containerPlay.style.translate = `${resultPlay * offsetPlay}px`
    }
  }
  


  
  return (
    <div className="overflow-x-hidden ">
      
      
      <div className='flex flex-col  gap-4 overflow-x-hidden mb-6 relative'>
        <div className='flex  items-center justify-between   w-[93%]'>
          <h2 className='md:text-[16px] text-[12px]'>TOP QURUSTUDIO PLAYLIST</h2>
          <p className='text-[#ffa200] md:text-[14px] text-[10px]'>VIEW All</p>
        </div>
        
          < FaChevronLeft size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 left-5 opacity-0 hover:opacity-100' onClick={()=> myTreading(-1, 250)}/>
          < FaAngleRight size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 right-5 transition opacity-0 hover:opacity-100' onClick={()=> myTreading(+1, 250)}/>
        <div className='flex items-center gap-4 md:mt-4 overflow-x-hidden w-[2000px]' id='containerPlay'> 
          {
            playlist.map((item) =>(
              <>
                <div key={item.id} className='flex flex-col items-center justify-center md:w-[240px] w-[155px] relative group'>
                  <Link  href={item.href}>
                  <img src={item.src} alt={item.firstName} className='rounded-md'/>
                  </Link>
                  <div className='p-2 md:p-3 bg-[#ffa200] rounded-full absolute right-6 md:top-[55%] top-[45%] text-black hidden  transition group-hover:flex items-center justify-center cursor-pointer'>
                  <FaPlay size={20} /> 
                  
                  </div>
                  
                  <h3 className='md:text-[18px]  text-[14px]'>{item.firstName}</h3>
                  <h3 className='lg:text-[25px] md:text-[20px] text-[18px]'>{item.lastName}</h3>
                </div>
              </>
            ))
          }
          
        </div>
      </div>
      
    
    </div>
  )
}

export default QuruPlaylist