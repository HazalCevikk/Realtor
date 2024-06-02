"use client"
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import RightSide from "@/components/RightSide";
import { SavedContext } from "../../../context/forSavedContenxt";
import { useContext } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
const {isOpen} = useContext(SavedContext)

  return (
    <>
      <Header />
      {isOpen && <RightSide></RightSide>}
      <main>{children}</main> 
        
    </>
  );
}
