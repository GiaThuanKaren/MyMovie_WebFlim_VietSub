import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import store from "../Redux/Store/Store";
import { deepmerge } from "@mui/utils";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider, createTheme, Paper } from "@mui/material";
import MainLayOut from "../Layouts/MainLayOut";
function MyApp({ Component, pageProps }) {
  // const { IsLightTheme } = useSelector((state) => state);

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
        <MainLayOut>
          <Paper>
            <Component {...pageProps} />
          </Paper>
        </MainLayOut>
      </Provider>
    </>
  );
}

export default MyApp;
