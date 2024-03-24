"use client";
import React from "react";
import InfoCategories from "../InfoCategories/InfoCategories";
import PlanetaryImage from "../PlanetaryImage/PlanetaryImage";
import PlanetDescription from "../PlanetDescription/PlanetDescription";

function PageContent({ data, planetName, children }) {
  const [activedCategory, setActivedCategory] = React.useState("overview");
  const chosenCategory = function (category) {
    return setActivedCategory(category);
  };
  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-laptopColGrid">
      <InfoCategories
        activedCategory={activedCategory}
        chosenCategory={chosenCategory}
        planetName={planetName}
      />
      <React.Suspense>
        <PlanetaryImage
          imageSrcs={data?.images}
          activedCategory={activedCategory}
          planetName={planetName}
        />
      </React.Suspense>
      <PlanetDescription
        type={activedCategory}
        title={planetName}
        text={data[activedCategory].content}
        wikipediaSrc={data[activedCategory].source}
      />
      {children}
    </div>
  );
}

export default PageContent;
