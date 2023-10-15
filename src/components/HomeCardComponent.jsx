
import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { realtor_api } from '../../services/hotels_api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';

import  "../../styles/Home.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function HomeCardComponent({ propertyID }) {
    const { data, isLoading } = useSWR(['similardatafething', propertyID], () => realtor_api.similarHomes(propertyID).then(((res) => { return res?.data })))
  const router = useRouter()
    return (
        <div className='w-full h-auto'>
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
        
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    data?.map((item) => (
                        <SwiperSlide key={item.property_id} onClick={() => router.push(`/offers/${item.property_id}`)}>
                            <div className='rounded-lg shadow-lg flex flex-col w-[250px] h-[350px] mb-[3rem]'>
                                <div className='w-full h-1/2 rounded-lg'>
                                    <Image src={item?.primary_photo?.href}
                                        alt='deneme'
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        objectFit='cover'
                                        style={{ width: '100%', height: '100%', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />
                                </div>
                                <div className='flex flex-col space-y-2 p-2'>
                                    <div className='flex space-x-2 items-center'>
                                        <p className='w-3 h-3 bg-green-500 rounded-full'></p>
                                        <p className='text-sm '>For sale</p>
                                    </div>
                                    <p className='font-bold text-2xl'>$ {item?.list_price}</p>
                                    <div className='flex items-center space-x-2'>
                                        <p><span className='font-bold'>{item?.description?.beds}</span> bed</p>
                                        <p><span className='font-bold'>{item?.description?.baths}</span> bath</p>
                                    </div>
                                    <p className='text-sm'>{item?.location?.address?.line}, {item?.location?.address?.street_name}, {item?.location?.address?.state} {item?.location?.address?.postal_code}</p>
                                </div>

                            </div>
                        </SwiperSlide>))
                } </Swiper>
        </div>
    )
}
