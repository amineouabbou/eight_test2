import React from "react";

interface Ipropos {
  title: string;
  desc: string;
}

const Bloc = ({ title, desc }: Ipropos) => {
  return (
    <div className="mb-[40px] last:mb-0">
      <div className="font-bold text-secondary mb-[14px] leading-normal">
        {title}
      </div>
      <div
        className="leading-[25px]"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
};

export default Bloc;
