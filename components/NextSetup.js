import { motion } from "framer-motion";
import React from "react";
import DownArrow from "./DownArrow";

export default function NextSetup() {
  return (
    <div
      className="flex relative justify-center items-center flex-col w-full min-h-screen p-16 bg-slate-500 text-center"
      id="nextjs"
    >
      <h2
        className="text-lg sm:text-2xl md:text-4xl pt-4 pb-16 decoration-slate-400 text-center"
        id="gettingStarted"
      >
        Getting Started
        <motion.div
          className="bg-violet-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { width: "100%" },
            hidden: { width: 0, height: "2px" },
          }}
          transition={{ delay: 0.5 }}
        ></motion.div>
      </h2>
      <p>
        To get started create your app with{" "}
        <span className="text-lg text-violet-700">`create-next-app`</span>
      </p>
      <br />
      <p>
        If you need more information you can follow the documentation here:{" "}
        <a
          className="text-amber-500"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          NextJS DOCS
        </a>{" "}
      </p>
      <br />
      <p className="text-xs">
        *this demo uses{" "}
        <code className="bg-slate-200 p-1">yarn create next-app</code>
      </p>
      <DownArrow href={"/#web3libraries"} />
    </div>
  );
}
