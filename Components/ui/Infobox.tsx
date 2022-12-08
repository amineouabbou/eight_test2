import React from "react";

interface Iprops {
  title: string;
  icon: string;
}

const Infobox = ({ title, icon }: Iprops) => {
  return (
    <div className="flex items-center border-r-secondary border-r-[1px] py-[8px] px-[15px]">
      <span className="mr-[5px]">
        <img src={icon} alt="phone" />
      </span>
      <span className="tracking-[0.46px]">{title}</span>
    </div>
  );
};

export default Infobox;
