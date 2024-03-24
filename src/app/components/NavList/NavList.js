"use client";
import React from "react";
import NavItem from "../NavItem/NavItem";
// import myJson from "../../data.json" assert { type: "json" };
import myJson from "../../../data.json" assert { type: "json" };

const PLANET_TABS_NAV = [
  {
    slug: "mercury",
    color: "bg-[#DEF4FC]",
    hoverBorderColor: "lg:hover:border-t-[#DEF4FC]",
    href: "/planets/mercury",
  },
  {
    slug: "venus",
    color: "bg-[#F7CC7F]",
    hoverBorderColor: "lg:hover:border-t-[#F7CC7F]",
    href: "/planets/venus",
  },
  {
    slug: "earth",
    color: "bg-[#545BFE]",
    hoverBorderColor: "lg:hover:border-t-[#545BFE]",
    href: "/planets/earth",
  },
  {
    slug: "mars",
    color: "bg-[#FF6A45]",
    hoverBorderColor: "lg:hover:border-t-[#FF6A45]",
    href: "/planets/mars",
  },
  {
    slug: "jupiter",
    color: "bg-[#ECAD7A]",
    hoverBorderColor: "lg:hover:border-[#ECAD7A]",
    href: "/planets/jupiter",
  },
  {
    slug: "saturn",
    color: "bg-[#FCCB6B]",
    hoverBorderColor: "lg:hover:border-[#FCCB6B]",
    href: "/planets/saturn",
  },
  {
    slug: "uranus",
    color: "bg-[#65F0D5]",
    hoverBorderColor: "lg:hover:border-[#65F0D5]",
    href: "/planets/uranus",
  },
  {
    slug: "neptune",
    color: "bg-[#497EFA]",
    hoverBorderColor: "lg:hover:border-[#497EFA]",
    href: "/planets/neptune",
  },
];

function NavList({ closeNavFnc }) {
  const itemNavList = PLANET_TABS_NAV.map((planet) => (
    <NavItem
      key={planet.slug}
      href={planet.href}
      color={planet.color}
      hoverBorderColor={planet.hoverBorderColor}
      text={planet.slug}
      closeNavFnc={closeNavFnc}
    />
  ));
  return (
    <nav className="bg-dark-grey sm:hidden md:flex md:justify-center md:items-center lg:min-h-20">
      <ul className="max-w-full w-full md:flex md:px-12 lg:min-h-20 lg:items-center lg:gap-x-8">
        {itemNavList}
      </ul>
    </nav>
  );
}

export default NavList;
