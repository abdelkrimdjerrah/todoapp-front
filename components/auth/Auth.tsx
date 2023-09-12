'use client';
import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext, AuthContextType } from "@/context/authContext";
import Image from "next/image";


const Auth = () => {
  const [authType, setAuthType] = useState<AuthContextType["authType"]>("login");

  const contextValue: AuthContextType = {
    authType: authType,
    setAuthType: setAuthType,
  };

  return (
    <AuthContext.Provider value={contextValue}>
        <div style={{position:'absolute', zIndex:-10, top:0, width:'100vw', height:'40vh', objectFit:'contain', backgroundSize:'cover', backgroundImage:'url(background.jpg)'}} />
        {authType === "login" ? <Login /> : <Signup />}
    </AuthContext.Provider>
  );
};

export default Auth;