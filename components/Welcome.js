import React from "react";
import DownArrow from "./DownArrow";
import { motion } from "framer-motion";
export default function Welcome() {
  return (
    <div className="welcome flex flex-col relative w-full min-h-max max justify-center items-center bg-slate-300">
      <motion.h1
        className="text-3xl sm:text-4xl w-full text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, easings: "easeIn" }}
      >
        Welcome to the{" "}
      </motion.h1>
      <motion.span
        className="text-violet-700 font-extrabold text-6xl sm:text-8xl uppercase"
        initial={{
          scale: 0,
          rotateX: 90,
          y: -75,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          rotateX: 360,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "backInOut",
          stiffness: 1,
        }}
      >
        web3-ui
      </motion.span>{" "}
      <div className="flex items-baseline">
        <motion.h1
          className="text-3xl md:text-4xl w-full text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          demo
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          /w
        </motion.span>
      </div>
      <motion.span
        className="uppercase text-amber-500"
        initial={{ rotateX: 90 }}
        animate={{
          rotateX: 0,
        }}
        transition={{
          delay: 1.2,
          ease: "backInOut",
          stiffness: 1,
        }}
      >
        Nextjs!
      </motion.span>
      <DownArrow href={"/#intro"} />
    </div>
  );
}
