import React from "react";
import ScientificNumbersItem from "../ScientificNumbersItem/ScientificNumbersItem";

function ScientificNumbersList({ scientificNumbersArray }) {
  const renderData = scientificNumbersArray.map(({ key, slug, value }) => (
    <ScientificNumbersItem key={key} slug={slug} value={value} />
  ));
  return (
    <ul className="flex flex-col gap-2 md:col-start-1 md:col-end-3 md:order-4 md:flex-row lg:gap-x-8">
      {renderData}
    </ul>
  );
}

export default ScientificNumbersList;
