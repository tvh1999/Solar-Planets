import React from "react";
import { spartan } from "@/utilities/fonts";
import { PLANET_TABS_COLORS } from "@/utilities/selectPlanetColor";

function InfoNavItem({
  chosenCategory,
  activedCategory,
  itemSlug,
  fullCategory,
  category,
  planetName,
  index,
}) {
  return (
    <li
      style={{
        color: `${activedCategory === itemSlug ? "#FFFFFF" : "#38384F"}`,
        backgroundColor: `${
          activedCategory === itemSlug
            ? PLANET_TABS_COLORS[planetName]
            : "transparent"
        }`,
      }}
      className={`relative text-10 max-w-full px-6 py-5 tracking-widest 
  ${activedCategory === itemSlug ? "text-pure-white" : "text-deep-grey"}  
  md:w-full md:border-solid md:border md:border-deep-grey md:px-5 md:py-3 md:odd:my-4 ${
    activedCategory === itemSlug ? "#" : "md:bg-transparent"
  } lg:px-7 lg:py-3 lg:hover:bg-deep-grey lg:hover:cursor-pointer ${
        activedCategory === itemSlug ? "#" : "lg:bg-transparent"
      } ${spartan.className}`}
      onClick={() => chosenCategory(itemSlug)}
    >
      <span className="hidden md:inline md:text-grey md:mr-4 lg:mr-7 lg:text-12">{`0${
        index + 1
      }`}</span>
      <span className="uppercase md:hidden lg:text-12">{category}</span>
      <span className="hidden uppercase md:inline md:text-pure-white lg:text-12 lg:tracking-[2.57px] lg:font-bold">
        {fullCategory}
      </span>
      <div
        style={{
          backgroundColor: `${
            activedCategory === itemSlug
              ? PLANET_TABS_COLORS[planetName]
              : "#070724"
          }`,
        }}
        className={`absolute left-1/2 bottom-0 -translate-x-1/2 max-w-full w-2/3 min-h-1 md:hidden`}
      />
    </li>
  );
}

export default InfoNavItem;
