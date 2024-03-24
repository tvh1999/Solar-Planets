import React from "react";
import { extractDataFnc } from "@/utilities/extractData";
import PageContent from "@/app/components/PageContent/PageContent";
import ScientificNumbersList from "@/app/components/ScientificNumbersList/ScientificNumbersList";

export const generateMetadata = function ({ params }) {
  return {
    title: `${params.planetInfo[0].toUpperCase()}${params.planetInfo.slice(1)}`,
    description: `Information about planet ${params.planetInfo}`,
  };
};

function DisplayPlanetInfos({ params }) {
  const data = extractDataFnc(params.planetInfo);
  const scientificNumbersArray = [
    { key: crypto.randomUUID(), slug: "rotation time", value: data.rotation },
    {
      key: crypto.randomUUID(),
      slug: "revolution time",
      value: data.revolution,
    },
    { key: crypto.randomUUID(), slug: "radius", value: data.radius },
    { key: crypto.randomUUID(), slug: "average temp", value: data.temperature },
  ];
  return (
    <>
      <PageContent data={data} planetName={params.planetInfo}>
        <ScientificNumbersList
          scientificNumbersArray={scientificNumbersArray}
        />
      </PageContent>
    </>
  );
}

export default DisplayPlanetInfos;
