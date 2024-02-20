import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Banner from '../../public/assets/banner.png'

const Platform = () => {
  return (
    <div className='flex items-center md:mt-[100px] mt-[130px] mb-10  lg:w-[95%] w-[90%] h-[270px] border-[0.5px] border-gray-400 rounded-md bg-[#212121] overflow-hidden mx-auto  relative'>
      <div className='w-[1550px] h-[270px] object-cover md:ml-[-100px] lg:ml-[-50px] ml-[-600px]' id='plat'>
      <Image src={Banner} alt='platform' className="w-full h-full md:pl-[-30px] "/>
      </div>
      <div className="flex flex-col items-center lg:w-[50%] justify-center py-10 absolute w-[95%] mx-auto lg:left-[45%] text-[18px]">
        <p className='font-bold lg:text-[30px] text-[20px] w-[90%] mx-auto text-center'>The music platform <span className="text-[#ffa200]">empowering artists.</span></p>
        <p className='w-[90%] text-center text-[14px] my-5'>Qurustudio is an artist-first music platform that helps musicians <span className="text-gray-400">reach and engage fans across the world.</span></p>
        <button className='bg-[#ffa200] py-2 px-6 rounded-[16px] text-black font-medium text-[14px] md:text-[16px]'>
          <Link href={"#"}>
            Upload your music for free
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Platform