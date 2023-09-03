import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="border-orange-100 border-b-[1px] py-4 px-8 flex justify-between space-x-4 ">
      <p className="text-[#2E56B2] font-bold text-3xl"> Realtor</p>
      <div className="flex space-x-4 ">
        <>
          <Link
            href={"/"}
            className="font-semibold px-6 pt-2 hover:text-[#A4BCFF] text-[#2E56B2]"
          >
            Home
          </Link>
          <Link
            href={"/offers"}
            className="font-semibold px-6 pt-2 hover:text-[#A4BCFF] text-[#2E56B2]"
          >
            Offers
          </Link>
          <Link
            href={"/profile"}
            className="font-semibold px-6 pt-2 hover:text-[#A4BCFF] text-[#2E56B2]"
          >
            Profile
          </Link>
          <Link
            className="font-semibold px-6 pt-2 hover:text-[#A4BCFF] text-[#2E56B2]"
            href={"/signin"}
          >
            Signin
          </Link>
        </>
      </div>
    </div>
  );
}
