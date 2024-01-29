import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutDetail from "@/components/about/aboutdetail"


export async function getServerSideProps({params}:any) {
  const apiUrl = `${process.env.KABINET_API}${params.slug}`

  const res = await fetch(apiUrl);
  const dataKabinet = await res.json();
  console.log(apiUrl)
  return {
    props: {
      dataKabinet
    }
  }
}

interface Iprops {
    dataKabinet: Ikabinet[]
}

interface Ikabinet {
    nama: string,
    ketua: string,
    tahun: string,
    slug: string,
    cover: string,
    struktur: string,
    konten: string,
}


function KabinetDetail({dataKabinet}: Readonly<Iprops>) {
  return (
    <>
      <Head>
        <title>HMTI Histories </title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section>
          <AboutDetail nama={""} struktur={""} {...dataKabinet}/>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default KabinetDetail;