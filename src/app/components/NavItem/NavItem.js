import React from "react";
import { spartan } from "@/utilities/fonts";
import { ChevronRight } from "react-feather";
import Link from "next/link";

function NavItem({ closeNavFnc, href, color, hoverBorderColor, text }) {
  return (
    <li
      className={`flex flex-col items-center lg:min-h-20 ${spartan.className}`}
    >
      <Link
        href={href}
        className={`max-w-full w-full flex justify-between items-center text-grey px-6 py-5 md:px-4 lg:border-t-4 lg:border-solid lg:border-t-dark-grey lg:px-0 lg:min-h-20 ${hoverBorderColor} lg:hover:text-pure-white`}
        onClick={() => closeNavFnc()}
      >
        <div className="flex items-center gap-6">
          <div
            className={`max-w-full w-5 min-h-5 border-[#979797] ${color} rounded-full md:hidden`}
          />
          <h3 className="relative top-[1px]  uppercase text-15 tracking-wide lg:text-11">
            {text}
          </h3>
        </div>
        <button className="text-deep-grey md:hidden">
          <ChevronRight stroke="currentColor" size={11} />
        </button>
      </Link>
      <div className="max-w-full w-[85%] min-h-[1px] bg-deep-grey md:hidden" />
    </li>
  );
}

export default NavItem;
