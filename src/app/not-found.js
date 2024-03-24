import React from "react";
import { Frown } from "react-feather";

function NotFound() {
  return (
    <div className="flex justify-center items-center max-w-full w-full min-h-full mt-52">
      <div className="text-pure-white text-center">
        <h2 className="text-50 uppercase">
          Your planet couldn't be found. Sorry about that!
        </h2>
        <p className="flex justify-center gap-4">
          Could not find requested resource planet <Frown />
        </p>
      </div>
    </div>
  );
}

export default NotFound;
