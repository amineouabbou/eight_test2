import Image from "next/image";
import React from "react";

interface Ipropos {
  sticky: boolean;
}

const Userbox = ({ sticky }: Ipropos) => {
  return (
    <div
      className={`flex items-center text-secondary ${
        sticky ? "" : "border-l-[1px] border-secondary px-[15px]"
      } cursor-pointer`}
    >
      <span className={`icone ml-[7px] ${sticky ? "grayscale" : ""}`}>
        <Image src="/Icon awesome-user-alt.png" width={12} height={14} alt="" />
      </span>
      <span className={`icone ml-[7px] ${sticky ? "invert" : ""}`}>
        <Image
          width={11}
          height={7}
          src="/Icon material-keyboard-arrow-down.svg"
          alt="drop icon"
        />
      </span>
    </div>
  );
};

export default Userbox;
