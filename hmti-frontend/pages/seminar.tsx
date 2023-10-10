import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeminarHero from "@/components/seminar/seminarhero";
import SeminarSection from "@/components/seminar/seminarcontent";


const Seminar: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Seminar</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <div className="">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="sm:m-4 m-2">
        <SeminarHero/>
        </section>
        <section className="py-20">
        <SeminarSection/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Seminar;
