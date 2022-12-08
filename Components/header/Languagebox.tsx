import Image from "next/image";
import React, { useState } from "react";

const Languagebox = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu((prev) => !openMenu);
  };

  return (
    <div
      className="flex items-center text-secondary border-l-[1px] border-secondary px-[15px] cursor-pointer relative"
      onClick={handleMenuOpen}
    >
      <span className={`${openMenu ? "text-white" : ""}`}>EN</span>
      <span className="icone ml-[7px]">
        <Image
          width={11}
          height={7}
          src="/Iconmaterial-keyboard-arrow-down.svg"
          alt="drop icon"
        />
      </span>

      {openMenu && (
        <div className="sub absolute bg-white top-[100%] left-0 min-w-[110px] p-5">
          <ul>
            <li>
              <a href="#">Sub 1</a>
            </li>
            <li>
              <a href="#">Sub 2</a>
            </li>
            <li>
              <a href="#">Sub 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Languagebox;
