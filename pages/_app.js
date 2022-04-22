import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>ClassiAlly - Classified Ads Website Template</title>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />

        <link rel="stylesheet" type="text/css" href="fonts/line-icons.css" />

        <link rel="stylesheet" type="text/css" href="css/slicknav.css" />

        <link rel="stylesheet" type="text/css" href="css/animate.css" />

        <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />

        <link rel="stylesheet" type="text/css" href="css/main.css" />

        <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
