import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Memories from "@/components/memories";
import NewsCard from "@/components/newscard";
import Contact from "@/components/contact";
import Billboard from "@/components/billboard";
import TextSection from "@/components/text";
import { Reveal } from "@/components/utils/reveal";
import Feature from "@/components/feature";

interface Iprops {
  dataGambar: Igambar[],
  dataNews: Inews[]
}

interface Inews {
  cover: string,
  judul: string,
  kategori: string,
  shortdesc: string,
  tanggal: string,
  content: string,
  slug: string,
  author: string,
}

interface Igambar {
  img_id: string,
  name: string,
}

function Home(props: Readonly<Iprops>) {
  const { dataGambar } = props;
  const { dataNews } = props;
  return (
    <>
      <Head>
        <title>HMTI UNSOED</title>
        <meta name="description" content="Selamat datang di situs web HMTI UNSOED ( Himpunan Mahasiswa Teknik Industri Unsoed ). Kami adalah organisasi mahasiswa yang berkomitmen untuk meraih impian bersama sejak 2015. Temukan berita terbaru, acara kami, foto-foto, dan informasi kontak di sini. Bergabunglah dengan kami untuk pengalaman belajar dan berkembang yang luar biasa." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <section className="sticky top-0 w-full z-[100]">
        <Navbar />
      </section>
      <section className="sm:m-4 m-2">
        <HeroSection />
      </section>
      <section className="sm:m-4">
        <Feature />
      </section>
      <section className="sm:m-4">
        <TextSection />
      </section>
      <section>
        <Memories dataGambar={dataGambar} />
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
        <NewsCard dataNews={dataNews} />
      </section>
      <section className="sm:m-4 mt-10">
        <Billboard />
      </section>
      <section className="mt-8">
        <Contact />
      </section>
      <section className="mt-16">
        <Footer />
      </section>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(process.env.DRIVEIMAGE_API);
  const data = await res.json();
  const dataGambar = data.data.slice(0,7);

  const res2 = await fetch(process.env.NEWS_API);
  const news = await res2.json();
  const dataNews = news.sort(function (a: any, b: any) {
    let tanggalAwal = new Date(a.tanggal),
      tanggalAkhir = new Date(b.tanggal)
    if (tanggalAwal < tanggalAkhir) {
      return 1
    }
    if (tanggalAkhir < tanggalAwal) {
      return -1
    }
  }).slice(0,10);
  return {
    props: {
      dataGambar,
      dataNews
    }
  }
}