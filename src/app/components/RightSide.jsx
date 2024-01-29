import React from 'react'
import Image from 'next/image'
import DesktopImage from '@/assets/images/illustration-sign-up-desktop.svg'

function RightSide() {
  return (
    <div className=' flex justify-center items-center md:h-full md:pr-4'>
        <Image src={DesktopImage} alt='desktop image' className='hidden md:block  md:h-[95%]  md:w-[90%]' priority={false}/>
    </div>
  )
}

export default RightSide