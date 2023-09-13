import  HeroUpdate  from "@/components/updateComponents/updatehero";
import ContentUpdate from "@/components/updateComponents/updatecontent";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Update: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Update</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
       <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="m-4">
          <HeroUpdate/>
        </section>
        <section className="py-10"> 
        <ContentUpdate/>
         </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Update;

