"use client";
import React from "react";
import InfoNavItem from "../InfoNavItem/InfoNavItem";

const CATEGORIES = [
  { slug: "overview", category: "overview", fullCategory: "overview" },
  {
    slug: "structure",
    category: "structure",
    fullCategory: "internal structure",
  },
  { slug: "geology", category: "surface", fullCategory: "surface geology" },
];

function InfoCategories({ activedCategory, chosenCategory, planetName }) {
  const id = React.useId();
  const categoriesList = CATEGORIES.map((item, index) => (
    <InfoNavItem
      key={`${id}-${item.slug}`}
      activedCategory={activedCategory}
      chosenCategory={chosenCategory}
      itemSlug={item.slug}
      index={index}
      planetName={planetName}
      fullCategory={item.fullCategory}
      category={item.category}
    />
  ));
  return (
    <ul
      className={`max-w-full w-full flex justify-around border-b border-solid border-deep-grey md:order-3 md:border-none md:block ${
        activedCategory === "geology" ? "md:mt-48" : "md:mt-10"
      } lg:min-h-full lg:m-0 lg:mb-20 lg:w-80`}
    >
      {categoriesList}
    </ul>
  );
}

export default InfoCategories;
