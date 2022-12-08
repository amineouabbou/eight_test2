import React from "react";
import BlocLinks from "./BlocLinks";
import Logof from "./Logof";
import { FOOTER_LINKS_1 } from "../utils/const";
import Contactbloc from "./Contactbloc";
import Adresses from "./Adresses";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-[30px]">
        <div className="container mx-auto flex">
          <div className="col-left mr-[135px] flex items-center">
            <Logof />
          </div>

          <div className="col-right grow flex items-center">
            <Adresses />

            <Contactbloc />

            <div className="asas">
              <BlocLinks data={FOOTER_LINKS_1} />
              <BlocLinks data={FOOTER_LINKS_1} />
            </div>
          </div>
        </div>
      </footer>

      <Copyright />
    </>
  );
};

export default Footer;
