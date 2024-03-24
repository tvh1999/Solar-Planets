import React from "react";
import myJson from "../data.json" assert { type: "json" };
import { notFound } from "next/navigation";

export const extractDataFnc = React.cache(function (planetName) {
  const capitalizeName = `${planetName[0].toUpperCase()}${planetName.slice(1)}`;
  const responseData = myJson.find((value) => value.name === capitalizeName);
  if (!responseData) return notFound();
  return responseData;
});
