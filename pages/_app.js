import "../styles/globals.css";
import { Provider, NETWORKS } from "@web3-ui/hooks";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider network={NETWORKS.rinkeby}>
      <motion.nav
        className="flex h-16 w-full items-center bg-transparent p-6 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.25,
          duration: 0.5,
          ease: "backInOut",
          stiffness: 1,
        }}
      >
        <div className="nav-wrap flex w-full items-center justify-center">
          <Link href="/">
            <a className="w-full text-4xl  font-bold text-violet-700">
              Web3-UI
            </a>
          </Link>

          {/* <Link href="/">
          <a className="mr-4 text-purple-500">Home</a>
        </Link> */}
          <div className="flex w-full items-end justify-end">
            <Link href="">
              <a className="invisible mr-4 text-violet-400">Basics</a>
            </Link>
            <Link href="">
              <a className="invisible mr-4 text-violet-400">Advanced</a>
            </Link>
          </div>
        </div>
      </motion.nav>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
