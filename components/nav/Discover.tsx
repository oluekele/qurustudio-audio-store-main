import Link from 'next/link'
import React from 'react'

const Discover = () => {
  return (
    <div className='flex flex-col  absolute top-[50px] left-[46.5%] rounded-md  bg-[#212121] p-3 gap-2 text-[15px] z-10'>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
              Treading Songs
            </Link>
              <Link href={"/"} className='transition hover:text-[#ffa200] font-bold py-2'>
              Treading Albums
            </Link>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
              Top Songs
            </Link>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold py-2'>
              Top Albums
            </Link>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
                Recently Added
            </Link>
            <Link href={"/"} className='transition hover:text-[#ffa200] font-bold py-2'>
              Accounts For You
            </Link>
          </div>
  )
}

export default Discover