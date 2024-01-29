import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import UpdateContent from "@/components/update/updatecontent";


export async function getServerSideProps({params}:any) {
  const apiUrl = `${process.env.NEWS_API}${params.slug}`

  const res = await fetch(apiUrl);
  const dataNews = await res.json();
  console.log(apiUrl)
  return {
    props: {
      dataNews
    }
  }
}

interface Iprops {
  dataNews: Inews
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


function UpdateDetail({dataNews}: Readonly<Iprops>) {
  return (
    <>
      <Head>
        <title>HMTI Update </title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section>
          <UpdateContent {...dataNews}/>
        </section>
        <section className="mt-36">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default UpdateDetail;

