"use client";
import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function page() {
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <div className="bg-gray-100 w-full h-[93.2vh] flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg flex justify-between w-[70%] h-[80%] relative shadow-md ">
          <div className="w-1/2 relative">
            <Image
              src={"/assets/sign-in.svg"}
              layout="fill"
              alt="signin"
            ></Image>
          </div>
          <div className="w-1/2 p-16">
            <p className="font-bold text-5xl mb-16 text-[#FF725E]">
              Forgot Password
            </p>
            <div className="relative w-auto h-auto mt-4">
              <Image
                src={"/assets/mail-logo.svg"}
                width={18}
                height={18}
                alt="safe-lock"
                className="absolute top-[0.70rem] left-2"
              ></Image>
              <input
                type={"email"}
                className="border-b-[1px] border-gray-500 py-4 px-8 h-[40px] w-full outline-none bg-white"
                placeholder="Your e-mail"
              ></input>
            </div>
            <div className="flex justify-between my-8">
              <p>
                Don't have an account?{" "}
                <Link
                  className="text-[#FF725E] cursor-pointer"
                  href={"/sign-up"}
                >
                  Register
                </Link>
              </p>
              <Link className="text-[#FF725E] cursor-pointer" href={"/signin"}>
                Sign in instead
              </Link>
            </div>
            <button className="font-semibold rounded-sm text-white bg-[#FF725E] px-6 py-2 hover:text-white-400 hover:bg-[#B35042] focus:bg-[#B35042]">
              Send reset e-mail
            </button>
            <div className="w-full flex items-center my-8">
              <p className="w-full border-b-[1px] border-gray-300"></p>
              <p className="text-[#FF725E] mx-4">OR</p>
              <p className="w-full border-b-[1px] border-gray-300"></p>
            </div>
            <div>
              <button className="bg-[#FF725E] hover:bg-[#B35042] rounded-sm font-semibold text-white w-full px-6 py-2 flex items-center justify-center space-x-4">
                <Image
                  src={"/assets/google-logo.svg"}
                  width={32}
                  height={32}
                ></Image>
                <p>CONTINUE WİTH GOOGLE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
