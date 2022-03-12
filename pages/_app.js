import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travellers UK | Visit Turkey | Go Turkey</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.travellersuk.com/" />
        <meta
          name="description"
          content="Explore a range of vacation rentals in Turkey, including private villas, apartments, condos and more, available for online booking. Choose from dozens, the ideal accommodation for families, groups and couples. Rent a whole house for your next weekend or vacation."
        />

        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
