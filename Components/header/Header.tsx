import React, { useState, lazy, Suspense, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import useSticky from "../hooks/useSticky";
import Loader from "../Loader";
import Topbar from "./Topbar";
import Logo from "./Logo";
import Nav from "./Nav";

const Stickmenu = lazy(() => import("./Stickymobile"));

const Header = () => {
  const isSticky = useSticky(90);

  return (
    <>
      <header className="bg-black text-white border-b-[4px] border-secondary">
        <Topbar />
        <div className="container mx-auto py-[25px]">
          <div className="flex items-center">
            <Logo sticky={false} />
            <Nav />
          </div>
        </div>
      </header>

      <Suspense fallback={<Loader />}>
        <AnimatePresence>{isSticky && <Stickmenu />}</AnimatePresence>
      </Suspense>
    </>
  );
};

export default Header;
