import Head from "next/head";
import moment from 'moment';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeminarHero from "@/components/seminar/seminarhero";
import SeminarSection from "@/components/seminar/seminarcontent";

export async function getServerSideProps() {
  const res = await fetch(process.env.SEMINAR_API);
  const sheet = await res.json();
  const data = sheet.data
  const dataSeminar = data.filter(function (seminar: any) {
    let tanggalSekarang = new Date(moment().subtract(1, 'days').format());
    let tanggalSeminar = new Date(seminar.Tanggal);
    return tanggalSeminar >= tanggalSekarang;
  });

  dataSeminar.sort(function (a: any, b: any) {
    let tanggalAwal = new Date(a.Tanggal),
      tanggalAkhir = new Date(b.Tanggal)
    if (tanggalAwal > tanggalAkhir) {
      return
    }
    if (tanggalAkhir > tanggalAwal) {
      return
    }
  })
  console.log(dataSeminar)
  return {
    props: {
      dataSeminar
    }
  }
}

interface Iprops {
  dataSeminar: Iseminar[]
}

interface Iseminar {
  Nama: string,
  NIM: string,
  Kategori: string,
  Topik: string
  Tanggal: string,
  Waktu: string,
  Ruangan: string,
}

function Seminar(props: Readonly<Iprops>) {
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
