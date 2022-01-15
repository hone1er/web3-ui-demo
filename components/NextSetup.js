import React from "react";

export default function NextSetup() {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen p-16 bg-slate-300 text-center">
      <h2
        className="text-lg sm:text-2xl md:text-4xl pt-4 pb-16 underline underline-offset-8 decoration-slate-400 text-center"
        id="gettingStarted"
      >
        Getting Started
      </h2>
      <p className="">
        To get started create your app with{" "}
        <span className="text-lg text-pink-600">`create-next-app`</span>
      </p>
      <br />
      <p>
        If you need more information you can follow the documentation here:{" "}
        <a
          className="text-blue-600"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          NextJS DOCS
        </a>{" "}
      </p>
      <br />
      <p className="text-xs">
        *this demo uses{" "}
        <code className="bg-slate-200 p-1">yarn create next-app</code>
      </p>
    </div>
  );
}
