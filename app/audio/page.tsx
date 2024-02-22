import Image from 'next/image'
import React from 'react'
import Followers from './Followers'
import AudioPlayer from './AudioPlayer'


const Audio = () => {
  return (
    <div className='md:mt-[73px] mt-[100px] mb-10 flex flex-col w-[100%] min-h-screen mx-auto overflow-hidden' >
      <div className=' md:h-[350px] h-[250px] object-cover relative'>
        <img src='https://assets.audiomack.com/kingperryy/b7139ecd561754749a37e3f7d9a7404e8dae5d042db5430032c092f0ef3e435e.jpeg?width=1440' alt='profile bg'  className='w-full h-full object-cover '/>
        <img src='https://assets.audiomack.com/kingperryy/3f9da003e1d491a12f38633b5e453ec4bc0563f90d07bf029665e4858afbcc08.jpeg?width=200' alt='profile' className='lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] rounded-full absolute md:left-10 left-5 lg:top-[70%] top-[80%]'/>
      </div>
      <div className='lg:w-[95%] w-[90%] lg:flex  gap-12 mx-auto'>
        <div >
          <Followers />
        </div>
        <div >
          <AudioPlayer />
          
        </div>

      </div>
    </div>
  )
}

export default Audio