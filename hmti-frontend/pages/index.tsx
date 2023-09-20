import { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import  HeroSection  from "@/components/hero";
import { Memories } from "@/components/memories";
import cards from "@/news.json";
import { NewsCard } from "@/components/newscard";
import Contact from "@/components/contact";
import pictures from "@/pic.json";
import  Billboard  from "@/components/billboard";
import TextSection from "@/components/text";
import { Reveal } from "@/components/utils/reveal";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI UNSOED</title>
        <meta name="description" content="Selamat datang di situs web HMTI UNSOED ( Himpunan Mahasiswa Teknik Industri Unsoed ). Kami adalah organisasi mahasiswa yang berkomitmen untuk meraih impian bersama sejak 2015. Temukan berita terbaru, acara kami, foto-foto, dan informasi kontak di sini. Bergabunglah dengan kami untuk pengalaman belajar dan berkembang yang luar biasa." />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      
      <section className="sticky top-0 w-full z-[100]">
        <Navbar/>
      </section>
      
      <section className="sm:m-4 m-2">  
        <HeroSection/>
      </section>

      <section className="sm:m-4">  
        <TextSection/>
      </section>

      <section>
        <Memories pictures={pictures}/>
      </section>

      <section>
      <div className='flex flex-col items-center cursor-pointer mb-4'>
        <Reveal>
          <h1 className=' lg:text-4xl text-3xl font-raleway'>
            HMTI UPDATE
          </h1>
        </Reveal>
        <Reveal>
          <h2 className='lg:text-xl text-lg font-beautiful'>
            Check out the latest news from us!
          </h2>
        </Reveal>
      </div>
        <NewsCard cards={cards}/>
      </section>
      
      <section className="sm:m-4 mt-10">  
        <Billboard/>
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
