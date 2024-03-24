import React from "react";
import Link from "next/link";
import { spartan } from "@/utilities/fonts";
import { ExternalLink } from "react-feather";

function PlanetDescription({ type, title, text, wikipediaSrc }) {
  return (
    <section
      className={`flex flex-col items-center mb-7 md:order-2 ${
        type === "geology" ? "mt-40" : ""
      } md:items-start lg:col-start-2 lg:col-end-3 lg:w-80 lg:mt-0`}
    >
      <h1 className="text-40 font-medium uppercase text-pure-white mb-4 lg:text-80">
        {title}
      </h1>
      <p
        className={`text-11 text-center text-grey mb-8 ${spartan.className} md:text-left lg:text-14`}
      >
        {text}
      </p>
      <span
        className={`flex text-12 text-deep-grey lg:text-14 ${spartan.className}`}
      >
        Source:
        <Link
          className="flex items-center underline gap-1 ml-1 text-grey"
          href={wikipediaSrc}
          target="_blank"
        >
          Wikipedia
          <ExternalLink size={12} stroke="currentColor" />
        </Link>
      </span>
    </section>
  );
}

export default PlanetDescription;
