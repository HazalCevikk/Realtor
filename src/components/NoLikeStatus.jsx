import React from 'react'
import Image from 'next/image'

export default function NoLikeStatus() {
  return (
    <div className='flex flex-col  justify-center items-center w-full h-full py-24'>       
         <Image src={"/assets/feeling-sorry.svg"} alt="deneme" width={500} height={500} />
         <p className='text-xl text-blue-gray-700 font-thin'> Your favorite list cannot be displayed because there are no ads that you have liked before.</p>
    </div>
  )
}
