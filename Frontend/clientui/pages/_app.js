import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/Store/Store";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#8bb0f7"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
