'use client'
import React from 'react';
import SuccessIcon from '@/assets/images/icon-success.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import RightSide from './RightSide';
import ThanksPart from './ThanksPart';
import MobileImage from '@/assets/images/illustration-sign-up-mobile.svg'


const Product = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more',
];

function LeftSide() {
  const [thanks, setThanks] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
     setUserEmail(data.email)   
    if (!errors.email) {
      setThanks(true);
    }
  };
  
  

  return (
    <>
      {thanks ? (
        <ThanksPart thanks={thanks} setThanks={setThanks} userEmail={userEmail}/>
      ) : (
        <div className={`bg-white flex flex-col w-screen h-screen md:flex-row md:w-[880px] md:h-[550px] md:rounded-[12px]`}>
           
        <Image src={MobileImage} alt='mobile image' className='block md:hidden w-full h-[40%]' priority={false}/>
          <div className=' px-[20px] md:w-[60%] flex flex-col gap-4 py-[70px] md:px-[40px]'>
            <h1 className='font-bold text-4xl'>Stay updated!</h1>
            <p className='text-lg text-gray-600'>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className='flex flex-col gap-2 py-4'>
              {Product.map((value, index) => (
                <div key={index} className='flex  items-start md:items-center gap-4'>
                  <Image key={index} src={SuccessIcon} alt='tick icon' className='w-4 h-4 md:w-6 md:h-6' priority={false}/>
                  <p className='text-xm'>{value}</p>
                </div>
              ))}
            </div>
            <section className='flex flex-col gap-2'>
              <h6 className='font-semibold text-lg'>Email address</h6>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
              <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: /^\S+@\S+$/i, 
                  })}
                  placeholder='email@company.com'
                  className='border border-gray-300 w-full h-12 rounded-[8px] px-4'
                />
                {errors.email && <span>{errors.email.message}</span>}
                <input
                  type='submit'
                  value='Subscribe to monthly newsletter'
                  className='text-center bg-blue-950 text-white w-full py-3 h-12 rounded-[8px] hover:bg-orange-400'
                />
              </form>
            </section>
          </div>
          <div className=' md:[40%]'>
            <RightSide />
          </div>
        </div>
      )}
    </>
  );
}

export default LeftSide;
