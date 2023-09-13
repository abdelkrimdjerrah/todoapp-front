"use client";
import { logoutUser } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "@/api/axios";
import { SignOut } from "phosphor-react";
import Todo from "./Todo";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      router.push("/");
      await axios.post(`/api/auth/logout`);
    } catch (err) {}
  };

  return (
    <div className="h-screen w-full flex flex-col gap-3 items-center justify-center">
      <div
        style={{
          position: "absolute",
          zIndex: -10,
          top: 0,
          width: "100vw",
          height: "40vh",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundImage: "url(background.jpg)",
        }}
      />

      <Todo />

      <div
        className="cursor-pointer flex gap-1  bottom-5 items-center text-[#FF5353] bg-[#FFEFEF] py-1 px-6 rounded-sm"
        onClick={handleLogout}
      >
        <p className="font-medium ">Log out</p>
        <SignOut size={23} />
      </div>
    </div>
  );
};

export default Home;
