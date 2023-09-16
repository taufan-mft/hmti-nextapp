import  HeroAbout  from "@/components/about/abouthero";

import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Disclaimer from "@/components/about/aboutdisclaimer";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About HMTI</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
       <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="m-4">
          <HeroAbout/>
        </section>
        <section className="py-5"> 
        <Disclaimer/>
         </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default About;