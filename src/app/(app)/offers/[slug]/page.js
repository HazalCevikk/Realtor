'use client'
import React from 'react'
import useSWR from 'swr'
import { realtor_api } from '../../../../../services/hotels_api'
import CarouselComp from '@/components/Carousel'
import EmailAgent from '@/components/EmailAgent'
import Image from 'next/image'
import OpenStreetMap from '@/components/OpenStreetMap'
import MyDisclosure from '@/components/Disclosure'
import HomeCardComponent from '@/components/HomeCardComponent'

export default function Page({ params }) {
  const { data, isLoading } = useSWR(['dataFetching', params.slug], () => realtor_api.propertyDetails(params.slug))


    return <>
    
    <div className='flex flex-col items-center justify-center w-full px-64 py-8'>
    {data && <>
      <div className='flex w-full'>
        <div className='w-[70%]'>
          <CarouselComp image={data?.data?.photos}></CarouselComp>
        </div>
        <div className='w-[30%] h-full px-4'>
          <EmailAgent />
        </div>
      </div>
      <div className='w-full flex flex-col space-y-4 my-4'>
        <div className='flex space-x-2 items-center'> <p className='w-3 h-3 bg-green-500 rounded-full'></p>
          <p className='text-gray-500 '>{data?.data?.status.replaceAll('_', ' ')}</p>
        </div>
        <p className='font-bold text-2xl'>$ {data?.data?.list_price}</p>
        <p className=''>{data?.data.location.address.line}, {data?.data.location.address.street_name}, {data?.data.location.address.state} {data?.data.location.address.postal_code}</p>
        <div className='flex space-x-2 items-center'>
          <Image src={'/assets/img/home-icon.png'} width={30} height={30} alt='home'></Image>
          <div><p>{(data?.data.description?.type).replaceAll('_', ' ')}</p>
            <p className='text-gray-500 text-sm font-thin'>property type</p></div>
        </div>
      </div>
      <div className='float-left w-full flex flex-col space-y-4'>
        <MyDisclosure data={data} />
        <OpenStreetMap lat={data?.data.location.address.coordinate.lat} lon={data?.data.location.address.coordinate.lon}></OpenStreetMap>
      </div>
   

    </>}

  </div>
     <div className='flex flex-col w-full space-y-2 border-t-[1px] border-gray-200 py-4 px-64'>
     <p className='text-xl font-bold'>Similar Homes</p>
     <HomeCardComponent propertyID={params.slug}></HomeCardComponent>
   </div>
   </>
}
