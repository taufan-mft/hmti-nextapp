import { HeroUpdate } from "@/components/updateComponents/updatehero";
import { NextPage } from "next";
import { fetcher } from "@/lib/api"
import  UpdatesList from "@/components/updateComponents/updatecontent";
import Head from "next/head";
import slides from "@/mockup.json";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Update: NextPage = () => {
  return (
    <>
      <Head>
        <title>HMTI Update</title>
        <meta name="description" content="Bersama prabu meraih impian sejak 2015" />
      </Head>
       <div className="bg-primary bg-opacity-5">
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section className="m-4">
          <HeroUpdate slides={slides}/>
        </section>
        <section className="py-20"> 
        <ContentList/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Update;

export const ContentList = ({ articles }:any) => {
  return (
    <div>
    <h1 className="text-3xl font-bold text-center"> DAFTAR ARTIKEL</h1>
    <UpdatesList articles={articles}/>
    </div> 
  );
};

export async function getStaticProps() {
  const articleResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/artikels`
  )
  console.log(articleResponse.data)
  return{
    props: {
      articles: articleResponse
    }
}
}