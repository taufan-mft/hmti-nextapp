import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeminarForm from "@/components/seminar/seminaradd";

const addSeminar: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Seminar - Add Seminar</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
       <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section>
          <SeminarForm/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default addSeminar;

