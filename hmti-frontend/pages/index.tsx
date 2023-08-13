import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>hmti-nextgen</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Index;
