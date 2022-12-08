import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logof = () => {
  return (
    <div className="logo-box">
      <Link href="/">
        <Image
          src="/LOGO_EIGHT-White-bt-pink.png"
          width={337}
          height={79}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logof;
