import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  
  const getTitle = (route) => {
    if (route === '/') {
      return "Hem";
    } else if (route === '/om-oss') {
      return "Om oss";
    } else if (route.includes("/referenser")) {
      return "Referenser"
    } else {
      return "";
    }
  }

  return (
    <>
      <Head>
        <title>{`Panelkraft.nu - ${getTitle(router.route)}`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
