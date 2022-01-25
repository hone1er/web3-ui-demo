import { motion } from "framer-motion";
import DownArrow from "./DownArrow";
import React from "react";
import Image from "next/image";
import gitIcon from "../images/github-logo.png";

export default function Intro() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-slate-400"
      id="intro"
    >
      <motion.div
        className="relative flex min-h-screen flex-col items-center justify-center bg-slate-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <p className="w-4/5 p-16 text-center text-lg leading-8">
          This website is designed to walk you through the use of the{" "}
          <motion.span
            className="inline-block font-bold uppercase text-violet-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { rotateX: 90 },
              visible: { rotateX: 0 },
            }}
            transition={{
              delay: 0.5,
              duratoin: 0.5,
            }}
          >
            web3-ui
          </motion.span>
          {"  "}package. We will be using the{" "}
          <code className="my-4 bg-slate-300 p-2">Components</code> and{" "}
          <code className="my-4 bg-slate-300 p-2">Hooks</code> packages but
          there is also a <code className="my-4 bg-slate-300 p-2">Core</code>{" "}
          package with a more opinionated implementation
        </p>
        <p className="flex w-4/5 flex-col items-center justify-center p-16 text-center text-lg leading-8 md:flex-row">
          This is an open-source project. Check out the code and contribute:
          <motion.a
            className="mx-4"
            href="https://github.com/Developer-DAO/web3-ui"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { rotateY: 90 },
              visible: { rotateY: 0 },
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <Image src={gitIcon} height={75} width={75} />
          </motion.a>
        </p>
        <DownArrow href={"/#nextjs"} />
      </motion.div>
    </div>
  );
}
