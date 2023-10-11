import { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect }from "react";
import { themeChange } from "theme-change";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false)
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
