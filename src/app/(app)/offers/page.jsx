"use client";
import React from "react";
import useSWR from "swr";
import { realtor_api } from "../../../../services/hotels_api";
import Image from "next/image"
import Link from 'next/link'

export default function page() {
  const { data, isLoading } = useSWR("dataFetching", () =>
    realtor_api.forSale().then((res) => res?.data?.home_search?.results)
  );



  console.log("data", data)
  return <div className="p-8 gap-4 w-full h-auto flex flex-rows flex-wrap">
    {!isLoading &&
      data &&
      data?.map((item) => (
        <Link
          href={`/offers/${item.property_id}`}
          className="rounded-md bg-white shadow-md w-[27rem] h-[30rem] z-50 flex relative object-contain flex-col font-light text-md"
        >
          <div className="bg-blue-100 py-2 px-4 rounded-md">
            <p className="text-xs">
              <span>Presented by:</span>{" "}
              {item?.branding && item?.branding[0]?.name}
            </p>
            <p className="text-xs">
              Brokered by:{" "}
              <span className="font-semibold">{item?.products?.brand_name}</span>
            </p>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-3/4 relative ">
              {item.primary_photo ? <Image
                src={`${item?.primary_photo?.href}`}
                alt="deneme"
                fill={true}
                layout="fill"
                priority
              ></Image> : <Image
                src='/assets/no-image.png'
                alt="deneme"
                fill={true}
                layout="fill"
                priority
              ></Image>}

            </div>
            <div className="p-4">
              <p>{item?.status}</p>
              <p className="text-2xl font-bold">$ {item?.list_price}</p>
              <div className="flex flex-row space-x-4 items-center font-light ">
                <p>
                  <span className="font-bold">{item?.description?.beds}</span>{" "}
                  bed
                </p>
                <p>
                  <span className="font-bold">
                    {item?.description?.baths}
                  </span>{" "}
                  baths
                </p>
                <p>
                  <span className="font-bold">{item?.description?.sqft}</span>{" "}
                  sqft lot
                </p>
              </div>
              <p>4716 St Charles PL Los Angeles, CA 90019</p>
            </div>
          </div>
        </Link>
      ))}
  </div>
}
