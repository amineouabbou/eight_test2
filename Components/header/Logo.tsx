import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Ipropos {
  sticky: boolean;
}

const Logo = ({ sticky }: Ipropos) => {
  const generateLogo = () => {
    let url = "";
    if (sticky) {
      url = "/LOGO_EIGHT-Black-bt-pink-removebg-preview.png";
    } else {
      url = "/LOGO_EIGHT-White-bt-pink.png";
    }
    return url;
  };

  return (
    <div className="logo-box">
      <Link href="/">
        <Image src={generateLogo()} width={187} height={44} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
