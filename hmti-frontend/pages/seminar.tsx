import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeminarHero from "@/components/seminar/seminarhero";
import SeminarSection from "@/components/seminar/seminarcontent";

interface Iprops {
  dataSeminar: Iseminar[]
}

interface Iseminar {
  Tanggal: string,
  Ruangan: string,
  Waktu: string,
  Nama: string,
  NIM: string,
  Kategori: string
}

function Seminar(props: Iprops) {
  const { dataSeminar } = props;
  return (
    <>
      <Head>
        <title>HMTI Seminar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar />
        </section>
        <section className="sm:m-4 m-2">
          <SeminarHero />
        </section>
        <section className="pt-16 pb-20">
          <SeminarSection dataSeminar={dataSeminar} />
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Seminar;

export async function getServerSideProps() {
  const res = await fetch(process.env.SEMINAR_API);
  const sheet = await res.json();
  const dataSeminar = sheet.data
  return {
    props: {
      dataSeminar
    }
  }
}