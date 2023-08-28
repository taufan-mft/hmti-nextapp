import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import { HeroSection } from "../components/hero";
import { Photopack } from "@/components/photopack";
import slides from "../mockup.json";
import cards from "../news.json";
import { NewsCard } from "@/components/newscard";
import Contact from "@/components/contact";
import pictures from "../pic.json";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI UNSOED</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
      
      <section className="sticky top-0 w-full z-[100]">
        <Navbar/>
      </section>
      
      <section className="m-4">  
        <HeroSection slides={slides}/>
      </section>

      <section>
        <Photopack pictures={pictures}/>
      </section>

      <section>
        <NewsCard cards={cards}/>
      </section>
      
      <section className="mt-8">
        <Contact/>
      </section>

      <section className="mt-16">
        <Footer/>
      </section>
    </>
  );
};

export default Home;
