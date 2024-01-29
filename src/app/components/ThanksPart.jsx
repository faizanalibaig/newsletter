import React from 'react'
import SuccessIcon from "@/assets/images/icon-success.svg"

import Image from 'next/image'

function ThanksPart({thanks, setThanks, userEmail}) {

  return (
    <div className='flex flex-col justify-center w-screen h-full md:w-[400px] md:h-[400px] bg-white p-10  gap-5 md:rounded-[10px]'>
       <Image src={SuccessIcon} alt='tick icon' className='w-10 h-10' priority={false}/>
       <h1 className='font-semibold text-3xl'>Thanks For Subscribing!</h1>
       <p className='text-gray-600'>A confirmation email has been sent to {userEmail}. Please open it and click the button inside to confirm your subscription.</p>
       <button  onClick={()=> setThanks(false)}
       className='bg-blue-950 text-white w-full h-12 text-lg rounded-[10px] 
       '>Dismiss Message</button>
    </div>
  )
}

export default ThanksPart