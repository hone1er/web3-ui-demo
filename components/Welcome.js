import React from "react";
import DownArrow from "./DownArrow";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="flex flex-col relative w-full min-h-max h-screen justify-center items-center bg-slate-100">
      <motion.h1
        className="text-lg sm:text-3xl md:text-4xl w-full text-center "
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          rotateX: 360,
          rotateZ: 360,
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "backInOut",
          stiffness: 1,
        }}
      >
        Welcome the{" "}
        <span className="text-violet-700 font-bold text-4xl md:text-6xl lg:text-8xl uppercase">
          web3-ui
        </span>{" "}
        demo w/ <span className="uppercase text-amber-500">Nextjs</span>!
      </motion.h1>
      <DownArrow href={"/#intro"} />
    </div>
  );
}
