import Image from "next/image";
import React from "react";

interface Ipropos {
  sticky: boolean;
}

const Wishlistbox = ({ sticky }: Ipropos) => {
  return (
    <div
      className={`flex items-center text-secondary ${
        sticky
          ? "ml-[15px] grayscale"
          : "border-l-[1px] border-secondary px-[15px]"
      }`}
    >
      <a href="#">
        <Image src="/Icon ionic-ios-heart.png" width={15} height={14} alt="" />
      </a>
    </div>
  );
};

export default Wishlistbox;
