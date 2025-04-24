import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const AllSystemsGoAnime = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-5 w-5">
        <CheckCircleIcon className="h-5 w-5 text-green-500 animate-pulse" />
      </span>
      <span className="text-sm font-medium text-green-700">All systems go</span>
    </div>
  );
};

export default AllSystemsGoAnime;
