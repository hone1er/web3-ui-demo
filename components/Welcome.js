import React from "react";
import DownArrow from "./DownArrow";

export default function Welcome() {
  return (
    <div className="flex flex-col relative w-full min-h-screen h-full justify-center items-center bg-slate-100">
      <h1 className="text-lg sm:text-2xl md:text-4xl w-full text-center">
        Welcome the web3-UI demo w/ NextJS!
      </h1>
      <DownArrow href={"/#intro"} />
    </div>
  );
}
