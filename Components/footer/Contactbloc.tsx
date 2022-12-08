import React from "react";
import Button from "../ui/Button";
import Socials from "./Socials";

const Contactbloc = () => {
  return (
    <div className="flex flex-col items-center grow ">
      <div>
        <Button title="CONTACTEZ-NOUS" />
      </div>
      <Socials />
    </div>
  );
};

export default Contactbloc;
