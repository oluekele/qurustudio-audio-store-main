import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const Original = () => {
  return (
    <div className='flex flex-col  absolute top-[50px] rounded-md  bg-[#212121] p-3 gap-2 text-[15px] z-10 left-[60%]'>
    <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
      Quru World
    </Link>
      <Link href={"/"} className='transition hover:text-[#ffa200] font-bold py-2 flex gap-6'>
      Artist Guide
      <GoLinkExternal size={24}/>
    </Link>
    <Link href={"/"} className='transition hover:text-[#ffa200] font-bold flex gap-6'>
      Quru Studio
      <GoLinkExternal size={24}/>
    </Link>
    
  </div>
  )
}

export default Original