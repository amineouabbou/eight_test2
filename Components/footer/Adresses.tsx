import React from "react";
import Bloc from "./Bloc";

const Adresses = () => {
  return (
    <div>
      <Bloc
        title="Adresse GENÈVE "
        desc="Lorem ipsum <br> CH - 1205 GENÈVE<br> Tél : +41 20 600 00 00"
      />

      <Bloc
        title="Adresse LAUSANNE"
        desc="Lorem ipsum<br> CH - 1033 LAUSANNE<br> Tél : +41 20 600 00 00"
      />
    </div>
  );
};

export default Adresses;
