'use client'
import React from 'react'
import Image from 'next/image';
import { Carousel } from "@material-tailwind/react";

export default function CarouselComp({ image }) {
    return (
        <Carousel
            className="rounded-lg w-full h-[600px] shadow-lg"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-[5%] left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
    
            {
                image ? image.map((item, index) => {
                    console.log('item', item)
                    return <Image src={item.href} alt={`item-${index}`} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit='cover'
                    style={{ width: '100%', height: '100%' }}    ></Image>
                }) : null
            }

        </Carousel>
    )
}
