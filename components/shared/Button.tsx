import { useState } from "react";
import Loader from "./Loader";

interface BtnProps {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
  widthFull?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  outlined?: boolean;
}

export default function Button({
  widthFull,
  loading,
  disabled,
  color,
  onClick,
  className,
  children,
}: BtnProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const width = widthFull ? "w-full flex-1" : "";

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={loading || disabled}
      onClick={onClick}
      className={
        width +
        className +
        " text-sm w-fit font-medium bg-[#7B3DFF] text-white  relative py-3 px-10 rounded-md duration-200 disabled:opacity-60 disabled:cursor-not-allowed "
      }
      style={{
        color: isHover ? "white" : color,
        borderColor: color,
        backgroundColor: isHover ? color : "",
      }}
    >
      {children}
      <div className=" absolute top-[30%] right-[5%] ">
        {loading ? <Loader /> : null}
      </div>
    </button>
  );
}
