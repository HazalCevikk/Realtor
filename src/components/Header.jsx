import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="shadow-md py-4 px-8 flex justify-between space-x-4 ">
      <p className="text-[#2E56B2] font-bold text-3xl"> Realtor</p>
      <div className="flex space-x-4 ">
        <>
          <Link
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
          </Link>
          <Link
            href={"/profile"}
            className="px-6 pt-2 hover:text-blue-500"
          >
            Profile
          </Link>
        </>
      </div>
    </div>
  );
}
