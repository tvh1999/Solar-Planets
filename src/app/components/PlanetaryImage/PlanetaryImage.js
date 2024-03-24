import React from "react";
import Image from "next/image";

function PlanetaryImage({ imageSrcs, activedCategory, planetName }) {
  const { planet, internal, geology } = imageSrcs;

  if (activedCategory === "overview") {
    return (
      <Image
        className="md:col-span-full md:w-44 py-20 m-auto md:order-1 lg:col-auto lg:row-start-1 lg:row-end-3 lg:w-96"
        src={planet}
        width={154}
        height={154}
        alt={`Planet image of ${planetName}`}
        priority={true}
      />
    );
  }

  if (activedCategory === "structure") {
    return (
      <Image
        className="md:col-span-full md:w-44 py-20 m-auto md:order-1 lg:col-auto lg:row-start-1 lg:row-end-3 lg:w-96"
        src={internal}
        width={154}
        height={154}
        alt={`Internal image of ${planetName}`}
        priority={true}
      />
    );
  }

  if (activedCategory === "geology") {
    return (
      <section className="md:col-span-full flex relative justify-center items-center pt-20 md:order-1  lg:col-auto lg:row-start-1 lg:row-end-3 lg:pt-0">
        <Image
          className="md:w-44 lg:w-96"
          src={planet}
          width={154}
          height={154}
          alt={`Planet image of ${planetName}`}
          priority={true}
        />
        <Image
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 md:order-1 md:-bottom-24 w-auto h-auto lg:bottom-7 lg:w-32"
          src={geology}
          width={70}
          height={70}
          alt={`Geology image of ${planetName}`}
          loading="lazy"
        />
      </section>
    );
  }
}

export default PlanetaryImage;
