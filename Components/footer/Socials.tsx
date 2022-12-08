import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div>
      <ul className="flex items-center mt-[34px]">
        <li className="mx-[10px]">
          <a href="#">
            <Image width={12} height={23} src="/FB_BEIGE.png" alt="facebook" />
          </a>
        </li>
        <li className="mx-[10px]">
          <a href="#">
            <Image
              width={24}
              height={20}
              src="/Twitter_BEIGE.png"
              alt="twitter"
            />
          </a>
        </li>
        <li className="mx-[10px]">
          <a href="#">
            <Image width={24} height={24} src="/Insta_BEIGE.png" alt="insta" />
          </a>
        </li>
        <li className="mx-[10px]">
          <a href="#">
            <Image
              width={28}
              height={24}
              src="/Youtube_Fin_Beige.png"
              alt="youtube"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
