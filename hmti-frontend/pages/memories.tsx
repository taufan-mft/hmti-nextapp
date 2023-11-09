import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MemoriesContent from "@/components/memories/memoriescontent";
import MemoriesHead from "@/components/memories/memorieshead";

interface Iprops {
  dataGambar:Igambar[]
}

interface Igambar {
  img_id: string,
  name: string,
}

function Memories(props: Readonly<Iprops>) {
  const { dataGambar } = props;
  return (
    <>
      <Head>
        <title>HMTI Memories</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
       <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section>
          <MemoriesHead/>
        </section>
        <section>
          <MemoriesContent dataGambar={dataGambar}/>
        </section>
        <section>
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Memories;

export async function getServerSideProps() {
  const res = await fetch(process.env.DRIVEIMAGE_API);
  const data = await res.json();
  const dataGambar = data.data

  return {
    props: {
      dataGambar
    }
  }
}