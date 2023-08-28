import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="border-orange-100 border-b-[1px] py-4 px-8 flex justify-between space-x-4 ">
      <p className="text-[#FF725E] font-bold text-3xl"> The Hotel</p>
      <div className="flex space-x-4 ">
        <Link
          href={"/"}
          className="font-semibold px-6 pt-2 hover:text-[#B35042] text-[#FF725E] focus:text-[#B35042]"
        >
          Home
        </Link>
        <Link
          href={"/offers"}
          className="font-semibold px-6 pt-2 hover:text-[#B35042] text-[#FF725E] focus:text-[#B35042]"
        >
          Offers
        </Link>
        <Link
          href={"/profile"}
          className="font-semibold px-6 pt-2 hover:text-[#B35042] text-[#FF725E] focus:text-[#B35042]"
        >
          Profile
        </Link>
        <Link
          className="font-semibold px-6 pt-2 hover:text-[#B35042] text-[#FF725E] focus:text-[#B35042]"
          href={"/signin"}
        >
          Signin
        </Link>
      </div>
    </div>
  );
}
