"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { auth } from "@/firebase"; 


export default function page() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      
   createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((auth)=> {
        updateProfile(auth.user, {displayName: name})
      });
      toast.success("Sign up was successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // navigate("/");
    } catch (error) {
      toast.error("Something went wrong with the registration", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }



  return (
    <div className="bg-gray-100 w-full h-[93.2vh] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg flex justify-between w-[70%] h-[80%] relative shadow-md ">
        <div className="w-1/2 relative">
          <Image src={"/assets/city.svg"} layout="fill" alt="signin"></Image>
        </div>
        <div className="w-1/2 p-16">
          <p className="font-bold text-5xl mb-16 text-[#2E56B2]">Sign Up</p>
          <form onSubmit={onSubmit}>
            <div>
              <Image
                src={"/assets/profile-user.svg"}
                width={16}
                height={16}
                alt="profile-user"
                className="relative top-[1.7rem] left-2"
              ></Image>
              <input
                type="text"
                className="border-b-[1px] border-gray-500 py-4 px-8 h-[40px] w-full outline-none bg-white"
                placeholder="Your Name"
                id="name"
                value={name}
                onChange={onChange}
              ></input>
            </div>
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
                id="email"
                value={email}
                onChange={onChange}
              ></input>
            </div>
            <div className="relative w-auto h-auto mt-4">
              <Image
                src={"/assets/safe-lock.svg"}
                width={18}
                height={18}
                alt="safe-lock"
                className="absolute top-[0.70rem] left-2"
              ></Image>
              <Image
                src={visible ? "/assets/eye.svg" : "/assets/eye-closed.svg"}
                width={18}
                height={18}
                alt="safe-lock"
                className="absolute top-[0.75rem] right-4"
                onClick={() => setVisible(!visible)}
              ></Image>
              <input
                type={visible ? "text" : "password"}
                className="border-b-[1px] border-gray-500 py-4 px-8 h-[40px] w-full outline-none bg-white"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              ></input>
            </div>

            <div className="flex justify-between my-8">
              <p>
                Have an account?{" "}
                <Link
                  className="text-[#2E56B2] cursor-pointer"
                  href={"/signin"}
                  type="submit"
                >
                  Log in
                </Link>
              </p>
              <Link
                className="text-[#2E56B2] cursor-pointer"
                href={"/forgot-password"}
              >
                Forgot password
              </Link>
            </div>
            <button className="font-semibold rounded-sm text-white bg-[#2E56B2] px-6 py-2 hover:text-white-400 hover:bg-[#A4BCFF] focus:bg-[#A4BCFF]">
              Sign up
            </button>
          </form>
          <div className="w-full flex items-center my-8">
            <p className="w-full border-b-[1px] border-gray-300"></p>
            <p className="text-[#2E56B2] mx-4">OR</p>
            <p className="w-full border-b-[1px] border-gray-300"></p>
          </div>
          <div>
            <button className="bg-[#2E56B2] hover:bg-[#A4BCFF] rounded-sm font-semibold text-white w-full px-6 py-2 flex items-center justify-center space-x-4">
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
