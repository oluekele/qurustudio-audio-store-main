'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight, FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import Treading from '../../data/TreadingData';



const TreadingSong = () => {
  const treading = Treading;
  

  const [result, setResult] = useState(0);


  
  const myTreading = (input:number, offset:number) => {
    setResult(result + input)

    const container = document.getElementById("container")
    if(result.valueOf() <= -4){
      setResult(0)
      
    }
    else if(result.valueOf() === 4 ){
      setResult(0)
    }
    else if(result.valueOf() === 0 ){
      setResult(-1)
    }
    console.log(result)
   if(container){
    container.style.translate = `${result * offset}px`
   }
  }
  

  
  return (
    <div className="overflow-x-hidden ">
      
      <div className='flex flex-col  gap-4 overflow-x-hidden mb-6 relative'>
        <div className='flex  items-center justify-between w-[93%]'>
          <h2 className='md:text-[16px] text-[12px]'>TREADING SONGS</h2>
          <p className='text-[#ffa200] md:text-[14px] text-[10px]'>VIEW All</p>
        </div>
          < FaChevronLeft size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 left-5 opacity-0 hover:opacity-100' onClick={()=> myTreading(-1, 250)}
              
           />
          
          < FaAngleRight size={40} className='p-3 rounded-full bg-[#ffa200] text-black absolute top-[40%] cursor-pointer font-light z-10 right-5  transition opacity-0 hover:opacity-100' onClick={()=> myTreading(+1, 250)}/>
        <div className='flex items-center gap-4 md:mt-4 overflow-x-hidden w-[2000px]' id='container'> 
         
        {
          treading.map((item) =>(
            <>
            
              <div key={item.id} className='flex flex-col items-center justify-center md:w-[240px] w-[155px] relative group' >
                  <Link  href={item.href} className=''>
                  <img src={item.src} alt={item.firstName} className='rounded-md' />
                  
                  </Link>
                  <div className='p-2 bg-[#ffa200] rounded-full absolute right-6 top-[55%] text-black hidden  transition group-hover:flex items-center justify-center cursor-pointer'>
                  <FaPlay size={20} /> 
                  
                  </div>
                  
                  <h3 className='lg:text-[16px]  text-[14px]'>{item.firstName}</h3>
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

export default TreadingSong