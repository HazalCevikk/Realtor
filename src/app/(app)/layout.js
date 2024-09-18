"use client";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import RightSide from "@/components/RightSide";
import { SavedContext } from "../../../context/forSavedContenxt";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase"; 
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { isOpen } = useContext(SavedContext);
  const router = useRouter();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!isLoading && !user && router.pathname !== "/signin") {
      router.replace("/signin");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Header />
      {isOpen && <RightSide />}
      <main>{children}</main>
    </>
  );
}

