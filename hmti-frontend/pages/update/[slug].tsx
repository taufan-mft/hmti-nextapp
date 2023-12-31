import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import UpdateContent from "@/components/update/updatecontent";
import NewsCard from "@/components/newscard";

interface Iprops {
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

export async function getServerSideProps() {
  const res = await fetch(process.env.NEWS_API);
  const dataNews = await res.json();
  console.log(dataNews)

  return {
    props: {
      dataNews
    }
  }
}

function Update({ params }: any) {
  console.log(params)
  return (
    <>
      <Head>
        <title>HMTI Update - Judul Berita</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section>
          <UpdateContent />
          <div className="pt-36">
            <h2 className='block lg:text-2xl text-3xl cursor-pointer font-bold tracking-wider text-center'>
              RELATED ARTICLE {params}
            </h2>
          </div>
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Update;

