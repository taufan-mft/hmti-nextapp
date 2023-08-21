import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import { HeroSection } from "../components/hero";
import slides from "../mockup.json";
import cards from "../news.json";
import { NewsCard } from "@/components/newscard";

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

      <section>
        <NewsCard cards={cards}/>
      </section>
      
      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Home;
