import "../styles/globals.css";
import { Provider, NETWORKS } from "@web3-ui/hooks";

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={NETWORKS.rinkeby}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
