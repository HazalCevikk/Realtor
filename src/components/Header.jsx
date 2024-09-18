"use client"
import Image from "next/image";
import React, { useContext } from "react";
import { SavedContext } from "../../context/forSavedContenxt";

export default function Header() {
    const { setIsOpen } = useContext(SavedContext)


  return (
    <div className="shadow-md py-4 px-8 flex justify-between items-center space-x-4 ">
      <p className="text-[#2E56B2] font-bold text-3xl"> Realtor</p>
      <div className="flex space-x-4 ">
        <>
          {/* <Link
            href={"/"}
            className="px-6 pt-2 hover:text-blue-500"
          >
           Sold Home
          </Link>
          <Link
            href={"/offers"}
            className="px-6 pt-2 hover:text-blue-500"
          >
            Save
          </Link> */}
          <div
             onClick={() => setIsOpen(true)}
          >
            <Image src={"/assets/user.png"} alt="user" width={50} height={50}/>
          </div>
        </>
      </div>
    </div>
  );
}
