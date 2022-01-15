import React from "react";

export default function Intro() {
  return (
    <div className="flex justify-center items-center bg-slate-200 min-h-screen">
      <p className="p-16 text-lg w-4/5 text-center leading-8">
        This website is designed to walk you through the use of the Web3-UI
        package. We will be using the{" "}
        <code className="bg-slate-300 p-2 my-4">Components</code> and{" "}
        <code className="bg-slate-300 p-2 my-4">Hooks</code> packages but there
        is also a <code className="bg-slate-300 p-2 my-4">Core</code> package
        with a more opinionated implementation
      </p>
    </div>
  );
}
