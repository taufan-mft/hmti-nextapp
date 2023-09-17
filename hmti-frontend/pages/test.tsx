import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import UpdateContent from "@/components/update/updatecontent";
import { NewsCard } from "@/components/newscard";
import cards from "@/news.json";

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Update - Judul Berita</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
       <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section>
          <UpdateContent/>
        </section>
        <section className="pt-36">
        <h2 className='block lg:text-2xl text-3xl cursor-pointer font-bold tracking-wider text-center'>
          RELATED ARTICLE
        </h2>
            <NewsCard cards={cards}/>
         </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Test;

