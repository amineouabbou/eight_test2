import React from "react";

import { MENU_DATA } from "../utils/const";
import Ctabtn from "./Ctabtn";
import Navlinks from "./Navlinks";

const Nav = () => {
  return (
    <nav className="ml-auto flex items-center">
      <Navlinks sticky={false} />
      <Ctabtn />
    </nav>
  );
};

export default Nav;
