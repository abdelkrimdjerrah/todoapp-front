"use client";
import Auth from "@/components/auth/Auth";
import Home from "@/components/home/Home";
import { selectUserData } from "@/redux/userSlice";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector(selectUserData);

  return <div className="select-none">{user ? <Home /> : <Auth />}</div>;
}
