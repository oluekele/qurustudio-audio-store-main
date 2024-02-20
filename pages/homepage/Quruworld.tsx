'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import QuruData from '@/data/QurustudioData';



const QuruWorld = () => {
  
  const quruData = QuruData;
  

  const [resultWorld, setResultWorld] = useState(0);


  
  const myTreading = (inputWorld:number, offsetWorld:number) => {
    setResultWorld(resultWorld + inputWorld)

    const containerWorld= document.getElementById("containerWorld")
    if(resultWorld.valueOf() <= -4){
      setResultWorld(0)
      
    }
    else if(resultWorld.valueOf() === 4 ){
      setResultWorld(0)
    }
    else if(resultWorld.valueOf() === 0 ){
      setResultWorld(-1)
    }
    console.log(resultWorld)
    if(containerWorld){
      containerWorld.style.translate = `${resultWorld * offsetWorld}px`
    }
    
  }
  


  
  return (
    <div className="overflow-x-hidden ">
      
      <div className='flex flex-col  gap-4 overflow-x-hidden mb-6 relative'>
        <div className='flex  items-center justify-between  w-[93%]'>
          <h2 className='lg:text-[16px] text-[12px]'>QURUSTUDIO WORLD</h2>
          <p className='text-[#ffa200] md:text-[14px] text-[12px]'>VIEW All</p>
        </div>
          < FaChevronLeft size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 left-5 opacity-0 hover:opacity-100' onClick={()=> myTreading(-1, 250)}/>
          < FaAngleRight size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 right-5  transition opacity-0 hover:opacity-100' onClick={()=> myTreading(+1, 250)}/>
        <div className='flex items-center gap-4 md:mt-4 overflow-x-hidden w-[2000px]' id='containerWorld'> 
          
          {
            quruData.map((list) =>(
              <>
                <div key={list.id} className='flex flex-col items-center justify-center md:w-[240px] w-[155px] relative group'>
                  <Link  href={list.href}>
                  <img src={list.src} alt={list.firstName} className='rounded-md'/>
                  </Link>
                  <div className='p-3 bg-[#ffa200] rounded-full absolute right-6 top-[60%] text-black hidden  transition group-hover:flex items-center justify-center cursor-pointer'>
                  <FaPlay size={24} /> 
                  
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

export default QuruWorld