import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { HeroArtery } from "@/components/arteryComponents/arteryhero";
import slides from "@/mockup.json";
import HeadArtery from "@/components/arteryComponents/arteryhead";

const ArterySection = dynamic (() => import('@/components/arteryComponents/arterycontent'), {ssr: false})
const Artery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Artery of HMTI</title>
      </Head>
      <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="m-4">
          <HeroArtery slides={slides}/>
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
