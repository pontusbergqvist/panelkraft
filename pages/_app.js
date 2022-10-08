import { useRouter } from "next/router";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout route={router.route}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
