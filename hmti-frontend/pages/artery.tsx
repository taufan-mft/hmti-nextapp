import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroArtery  from "@/components/artery/arteryhero";
import HeadArtery from "@/components/artery/arteryhead";
import ArterySection from "@/components/artery/arterycontent";

const Artery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Artery of HMTI</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="sm:m-4 m-2">
          <HeroArtery/>
        </section>
        <section className="py-20">
          <HeadArtery/>  
          <ArterySection/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Artery;
