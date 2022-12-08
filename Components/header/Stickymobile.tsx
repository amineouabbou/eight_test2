import React from "react";
import { motion } from "framer-motion";
import { GLOBAL_EASING } from "../utils/const";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Userbox from "./Userbox";
import Wishlistbox from "./Wishlistbox";
import Image from "next/image";

const Stickymobile = () => {
  return (
    <motion.div
      initial={{ top: "-100%" }}
      animate={{ top: 0 }}
      exit={{ top: "-100%" }}
      transition={{
        default: { ease: GLOBAL_EASING, duration: 0.8 },
      }}
      className="fixed top-0 w-full bg-white border-b-[4px] border-secondary"
    >
      <div className="container mx-auto py-[20px]">
        <div className="flex items-center">
          <Logo sticky={true} />

          <div className="grow flex justify-center">
            <Navlinks sticky={true} />
          </div>

          <div className="right-side flex items-center">
            <div className="search-small mr-[7px] grayscale-0">
              <a href="#">
                <span>
                  <Image
                    width="14"
                    height="14"
                    src="/Icon_awesome-search.png"
                    alt="drop icon"
                  />
                </span>
              </a>
            </div>
            <Userbox sticky={true} />
            <Wishlistbox sticky={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stickymobile;
