import "../styles/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout route={router.route}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
