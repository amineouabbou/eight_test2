import Image from "next/image";
import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-col border-l-[1px] border-secondary px-[15px] relative min-w-[220px]">
      <div className="searchicon absolute top-0 bottom-0 my-auto h-[20px] w-[20px] right-[15px] flex justify-end items-center">
        <span className="icone ml-[7px]">
          <Image
            width={14}
            height={14}
            src="/Icon_awesome-search.png"
            alt="drop icon"
          />
        </span>
      </div>
      <form className="flex flex-col h-full">
        <input
          type="text"
          placeholder="Rechercher…"
          className="bg-transparent text-white text-[14px] h-full"
        />
      </form>
    </div>
  );
};

export default Searchbar;
