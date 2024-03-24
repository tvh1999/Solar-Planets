"use client";
import React from "react";
import { Menu } from "react-feather";
import NavList from "../NavList/NavList";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const closeNavFnc = () => setIsNavOpen(false);
  return (
    <header className="fixed z-20 max-w-full top-0 right-0 left-0 bg-dark-grey">
      <div className="flex justify-between items-center sm:hidden px-6 py-4 border-b border-solid border-deep-grey md:block md:pt-8 md:pb-2 md:px-0 lg:flex lg:justify-between lg:min-h-20 lg:py-0 lg:px-8">
        <h1 className="max-w-full uppercase text-pure-white text-28 md:text-center md:mb-[19px] lg:text-left lg:m-0">
          the planets
        </h1>
        <div className="hidden md:block lg:flex lg:items-center lg:min-h-20 ">
          <NavList />
        </div>
        <button
          className={`sm:hidden ${
            isNavOpen ? "text-deep-grey" : "text-pure-white"
          }`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Menu stroke="currentColor" />
        </button>
      </div>
      {isNavOpen && <NavList closeNavFnc={closeNavFnc} />}
    </header>
  );
}

export default Header;
