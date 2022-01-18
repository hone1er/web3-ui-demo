import { motion } from "framer-motion";
import DownArrow from "./DownArrow";
import React from "react";
import Image from "next/image";
import gitIcon from "../images/github-logo.png";

export default function Intro() {
  return (
    <motion.div
      className="flex flex-col relative justify-center items-center bg-slate-200 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      id="intro"
    >
      <p className="p-16 text-lg w-4/5 text-center leading-8">
        This website is designed to walk you through the use of the{" "}
        <span className="text-violet-700 uppercase">web3-ui </span>
        package. We will be using the{" "}
        <code className="bg-slate-300 p-2 my-4">Components</code> and{" "}
        <code className="bg-slate-300 p-2 my-4">Hooks</code> packages but there
        is also a <code className="bg-slate-300 p-2 my-4">Core</code> package
        with a more opinionated implementation
      </p>
      <p className="flex flex-col md:flex-row items-center justify-center p-16 text-lg w-4/5 text-center leading-8">
        This is an open-source project. Check out the code and contribute:
        <a
          className="mx-4"
          href="https://github.com/Developer-DAO/web3-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={gitIcon} height={75} width={75} />
        </a>
      </p>
      <DownArrow href={"/#nextjs"} />
    </motion.div>
  );
}
