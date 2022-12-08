import React from "react";
import Infobox from "../ui/Infobox";
import Languagebox from "./Languagebox";
import Searchbar from "./Searchbar";
import Userbox from "./Userbox";
import Wishlistbox from "./Wishlistbox";

const Topbar = () => {
  return (
    <div className="border-b-[1px] border-secondary text-[13px]">
      <div className="">
        <div className="flex">
          <div className="left-side flex items-center">
            <Infobox icon="/Tel_bBEIGE.png" title="+41 22 320 11 77" />
            <Infobox
              icon="/PICTO_Enveloppe_Beige.png"
              title="info@eight-idcom"
            />
          </div>

          <div className="right-side ml-auto flex font-medium">
            <Searchbar />
            <Languagebox />
            <Userbox sticky={false} />
            <Wishlistbox sticky={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
