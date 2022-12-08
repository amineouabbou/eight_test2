import React from "react";

const BlocLinks = ({ data }: any) => {
  return (
    <div className="mb-[40px] last:mb-0">
      <ul className="leading-[28px]">
        {data.map((item: any) => (
          <li key={item.id}>
            <a className="hover:text-secondary" href="#">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlocLinks;
