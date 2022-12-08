import { useEffect, useState } from "react";

const useSticky = (number: number) => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset >= number) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [number]);

  return sticky;
};

export default useSticky;
