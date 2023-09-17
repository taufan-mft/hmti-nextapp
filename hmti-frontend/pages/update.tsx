import  HeroUpdate  from "@/components/update/updatehero";
import UpdateList from "@/components/update/updatelist";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Update: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Update</title>
        <meta name="description" content="Dapatkan informasi terbaru yang berguna bagi mahasiswa Teknik Industri di halaman HMTI Update. Temukan berita terkini, acara-acara Himpunan, dan berbagai informasi penting yang relevan untuk perkembangan Anda sebagai mahasiswa Teknik Industri."/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
       <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="m-4">
          <HeroUpdate/>
        </section>
        <section className="py-10"> 
        <UpdateList/>
         </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Update;

