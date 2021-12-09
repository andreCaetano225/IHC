import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Accessibility } from "../components/Accessibility";
import { Navbar } from "../components/Navbar";
import { NavbarMobile } from "../components/NavbarMobile";
import { Finaly } from "../components/Finaly";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Accessibility />
      <Navbar />
      {/* <NavbarMobile/> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
