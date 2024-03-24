import React from "react";

function ScientificNumbersItem({ slug, value }) {
  return (
    <li className="max-w-full flex justify-between items-center px-6 py-2 border border-solid border-deep-grey md:block md:w-1/4 md:py-4">
      <h4 className="text-8 uppercase tracking-[0.73px] text-grey md:text-14 lg:tracking-[1px]">
        {slug}
      </h4>
      <span className="text-20 text-pure-white uppercase md:text-24 lg:text-40">
        {value}
      </span>
    </li>
  );
}

export default ScientificNumbersItem;
