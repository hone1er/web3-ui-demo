import "../styles/globals.css";
import { Provider, NETWORKS } from "@web3-ui/hooks";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider network={NETWORKS.rinkeby}>
      <nav className="flex items-center shadow-sm bg-transparent p-6 h-16 w-full">
        <div className="flex justify-center items-center nav-wrap w-full">
          <Link href="/">
            <a className="text-4xl text-violet-700  w-full font-bold">
              Web3-UI
            </a>
          </Link>

          {/* <Link href="/">
          <a className="mr-4 text-purple-500">Home</a>
        </Link> */}
          <div className="flex justify-end items-end w-full">
            <Link href="">
              <a className="mr-4 text-violet-400 invisible">Basics</a>
            </Link>
            <Link href="">
              <a className="mr-4 text-violet-400 invisible">Advanced</a>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
