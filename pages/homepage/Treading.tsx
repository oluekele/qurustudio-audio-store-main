import React from 'react'
import LeftTreading from './LeftTreading'
import RightTreading from './RightTreading'

const Treading = () => {
  return (
    <div className='mb-10  flex  gap-6  lg:pl-10' >
      <div className='' >
        <LeftTreading />
      </div>
      <div className='overflow-x-hidden '>
        <RightTreading />
      </div>
    </div>
  )
}

export default Treading