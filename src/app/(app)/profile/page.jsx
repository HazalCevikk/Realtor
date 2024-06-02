"use client"
import React from "react";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";

export default function page() {


const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return { user, handleSignOut };
};
  const { user, handleSignOut } = useAuth();

  return <div className="p-8" onClick={handleSignOut} >{user ? user.displayName : "null" } - Sign Out</div>;
}
