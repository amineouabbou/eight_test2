import React from "react";
import { MENU_DATA } from "../utils/const";

interface Ipropos {
  sticky: boolean;
}

const Navlinks = ({ sticky }: Ipropos) => {
  return (
    <div>
      <ul className="flex items-center">
        {MENU_DATA.map((item) => {
          return (
            <li key={item.id} className="mx-[14px]">
              <a
                className={`font-semibold tracking-normal text-purple-50  ${
                  sticky
                    ? "text-[#E0C2A6] hover:text-black"
                    : "hover:text-secondary"
                }`}
                href="#"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
