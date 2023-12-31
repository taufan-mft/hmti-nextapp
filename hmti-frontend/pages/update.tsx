import Head from "next/head";
import HeroUpdate from "@/components/update/updatehero";
import UpdateList from "@/components/update/updatelist";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export async function getServerSideProps() {
  const res = await fetch(process.env.NEWS_API);
  const data = await res.json();

  const dataNews = data.sort(function (a: any, b: any) {
    let tanggalAwal = new Date(a.tanggal),
      tanggalAkhir = new Date(b.tanggal)
    if (tanggalAwal > tanggalAkhir) {
      return
    }
    if (tanggalAkhir > tanggalAwal) {
      return
    }
  })
  console.log(dataNews)

  return {
    props: {
      dataNews
    }
  }
}

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

function Update(props: Readonly<Iprops>) {
  const { dataNews } = props;
  return (
    <>
      <Head>
        <title>HMTI Update</title>
        <meta name="description" content="Dapatkan informasi terbaru yang berguna bagi mahasiswa Teknik Industri di halaman HMTI Update. Temukan berita terkini, acara-acara Himpunan, dan berbagai informasi penting yang relevan untuk perkembangan Anda sebagai mahasiswa Teknik Industri." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section className="m-4">
          <HeroUpdate />
        </section>
        <section className="py-10">
          <UpdateList dataNews={dataNews}/>
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Update;

