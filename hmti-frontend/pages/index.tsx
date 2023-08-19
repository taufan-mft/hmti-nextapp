import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import { HeroSection } from "../components/hero";
import slides from "../mockup.json"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI UNSOED</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
      <section className="w-full">
      <Navbar/>

      </section>
            <section className="m-4">
        
      <HeroSection slides={slides}/>
      </section>
    </>
  );
};

export default Home;
