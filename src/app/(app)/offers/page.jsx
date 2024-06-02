"use client";
import React, {useContext, useEffect, useState} from "react";
import { SavedContext } from "../../../../context/forSavedContenxt";
import useSWR from "swr";
import { realtor_api } from "../../../../services/hotels_api";
import Image from "next/image";
import NoLikeStatus from "@/components/NoLikeStatus";


export default function page() {
  const {savedCards, setSavedCards} = useContext(SavedContext)
  const [newSavedData, setNewSavedData] = useState()

  const { data: apiData, error } = useSWR(
    "dataFetching",
    () => realtor_api.forSale().then((res) => res?.data?.home_search?.results)
  );

  useEffect(()=> {
    if(savedCards.length > 0 && apiData){     
      const data = apiData.filter((item) => savedCards.includes(item.property_id))
      setNewSavedData(data)
        }
  },[savedCards, apiData])

  const handleCardClick = (propertyId) => {
    // Kartın herhangi bir yerine tıklanıldığında "offers" sayfasına yönlendirme işlemi
    window.location.href = `/offers/${propertyId}`;
  };


  const toggleSavedCard = (propertyId) => {
    // Kartın içindeki kalp simgesine tıklanıldığında
    // seçilen kartlar listesine eklenir veya çıkarılır
    if (savedCards.includes(propertyId)) {
      setSavedCards(savedCards.filter((id) => id !== propertyId));
    } else {
      setSavedCards([...savedCards, propertyId]);
    }
  };

  return <div className="p-8 gap-4 w-full h-auto flex flex-rows flex-wrap">
  {!error &&
    newSavedData &&
    newSavedData?.map((item) => (
      <div
      key={item.property_id}
      className="rounded-md bg-white shadow-md w-[27rem] h-[30rem] z-50 flex relative object-contain flex-col font-light text-md"
      onClick={() => handleCardClick(item.property_id)} // Kartın herhangi bir yerine tıklanıldığında işlemi tetikle
    >
        <div className="bg-gray-100 py-2 px-4 rounded-t-md">
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
              <button
              className="bg-white p-3 rounded-full border-[1px] border-gray-800 absolute bottom-3 right-3 z-50"
              onClick={(e) => {
                e.stopPropagation(); // Kartın herhangi bir yerine tıklanıldığında üst kartın tıklanmasını engelle
                toggleSavedCard(item.property_id);
              }}
            >
               {savedCards?.includes(item.property_id) ? (
                <Image
                  src={"/assets/selectedHeart.png"}
                  alt="selected heart"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src={"/assets/heart.png"}
                  alt="heart"
                  width={18}
                  height={18}
                />
              )}
            </button>
          </div>
          <div className="p-4">
            <div className='flex space-x-2 items-center'>
              <p className='w-3 h-3 bg-green-500 rounded-full'></p>
              <p className='text-sm '>{item?.status.replaceAll("_", " ")}</p>
            </div>

            <p className="text-2xl font-bold">$ {item?.list_price.toLocaleString("en-US")}</p>
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
            <p>{item?.location?.address?.line}, {item?.location?.address?.state} {item?.location?.address?.postal_code}</p>
          </div>
        </div>
      </div>
    ))}
    {!newSavedData && <NoLikeStatus></NoLikeStatus>}
</div>
}
