import React from "react";

interface Iprops {
  title: string;
}

const Button = ({ title }: Iprops) => {
  return (
    <div>
      <a
        className="border-[2px] border-secondary flex items-center justify-center h-[38px] px-[35px] font-bold hover:bg-secondary hover:text-black"
        href="#"
      >
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Button;
