import Image, {StaticImageData} from "next/image";
import placeholder from "@/public/ruangkonten.png";
import logoKabinet from "@/public/logoKabinet.jpg"
import { BsInstagram, BsLinkedin, BsPersonFill, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import newsData from "@/news.json"
import { BiRightArrowAlt } from "react-icons/bi";
import { Reveal } from "../utils/reveal";

export default function UpdateList () {
  interface KabinetProps {
    kabinet: string;
    logo: StaticImageData;
    customText: string;
  }

  interface NewsProps {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }
  
  const hmtiNow = [
    { kabinet: `Reparasi`, logo: logoKabinet, customText: `Since 2015, we've been supporting prabu on their journey to realize their extraordinary dreams with a burning enthusiasm.`, ads: placeholder},
    ];
    
  const AboutHeader: React.FC<KabinetProps> = ({
    kabinet,
    logo,
    customText,
  }: KabinetProps) => {
    
    return(
      <div>
        <div className="flex items-center gap-1 grow">
          <div className="line-clamp-1 text-xs font-raleway uppercase">
            Kabinet {kabinet}
          </div>
          <hr className="border-b-2 -mt-0.5 border-base-content grow opacity-50"/>
        </div>
        <div className="flex flex-col items-center">
          <Image className="rounded-full m-4 w-52 h-52" src={logo} alt="Logo Kabinet Placeholder"/>
          <div className="text-center text-sm mx-4 my-2">
          {customText}
          </div>
        </div>
      </div>
    )
  }

  const UpdateList: React.FC<NewsProps> = ({
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
  }: NewsProps) => {
    return (
      <div className='mt-4 bg-base-100 rounded-lg transition-transform duration-500 scale-95 hover:scale-100' key={url}>
        <Link href='#'>
          <div className="flex flex-row">
            <div className="w-56 h-56 basis-1/3">
              <img className="h-full w-full rounded-l-lg object-cover" 
              src={urlToImage} alt={title}
              />
            </div>
            <div className="flex flex-col ml-4 basis-2/3 pt-3 pr-10 tracking-normal sm:tracking-wider">
              <Reveal>
                <div className="text-sm opacity-50 flex items-center gap-2">
                  <BsPersonFill className="mt-0.5"/> {author}
                </div>
              </Reveal>
              <Reveal>
                <div className="sm:text-2xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-base-content hover:from-secondary hover:to-primary">
                  {title}
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-1 sm:line-clamp-3 line-clamp-2 sm:tracking-wide text-justify">
                  {description}
                </div>
              </Reveal>
              <Reveal>
                <div className="sm:text-sm text-xs mt-1 opacity-20">
                  {publishedAt}
                </div>
              </Reveal>
              <div className='flex my-3 items-center'>
                <Reveal>
                  <div className='btn border-0 text-base-100 btn-sm font-bold btn-primary transition ease-in-out hover:scale-105 duration-300 inline-flex items-center'>
                    Read More
                    <BiRightArrowAlt size={20}/>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div className="flex flex-row gap-10 mx-2 xl:mx-36">
        <div className="w-full">
          <div className="flex-col">
            <div className="flex items-center gap-1 mx-5 grow">
              <div className="line-clamp-1 text-xs font-raleway uppercase">
              latest news
              </div>
              <hr className="border-b-2 -mt-0.5 border-base-content grow opacity-50"/>
            </div>
            {newsData.map((news) => (
              <div key={news.url}>
                  <UpdateList {...news}/>
              </div>
            ))}
            
          </div>
        </div>


        <div className="hidden lg:flex flex-col w-1/3 mr-3">
          <div>
          <div className="flex items-center gap-1 grow">
          {hmtiNow.map((prop) => (
            <div key={prop.kabinet}>
              <AboutHeader {...prop} />
            </div>
          ))}
          </div>
          <div className="flex items-center gap-1 grow">
            <div className="line-clamp-1 text-xs font-raleway uppercase">
              Follow Us
            </div>
            <hr className="border-b-2 -mt-0.5 border-base-content grow opacity-50"/>
          </div>
          
          <div className="flex flex-col mt-4 w-full bg-base-100 rounded-lg">
            <Link className="flex justify-between items-center px-4 py-3" href="https://www.instagram.com/hmti.unsoed/">
              <div className="flex items-center gap-3 uppercase text-xs font-bold hover:text-primary">
                <BsInstagram size={15}/>
                INSTAGRAM
              </div>
              <div className="text-xs font-bold opacity-50 tracking-wide hover:opacity-75">FOLLOW</div>
            </Link>
            <hr className="border-1 mx-3"/>
            <Link className="flex justify-between items-center px-4 py-3" href="https://www.linkedin.com/company/himpunan-mahasiswa-teknik-industri-unsoed-hmti-unsoed/">
              <div className="flex items-center gap-3 uppercase text-xs font-bold hover:text-secondary">
                <BsLinkedin size={15}/>
                LINKEDIN
              </div>
              <div className="text-xs font-bold opacity-50 hover:opacity-75">CONNECT</div>
            </Link>
            <hr className="border-1 mx-3"/>
            <Link className="flex justify-between items-center px-4 py-3" href="https://www.youtube.com/@hmti_unsoed">
              <div className="flex items-center gap-3 uppercase text-xs font-bold hover:text-accent">
                <BsYoutube size={15}/>
                YOUTUBE
              </div>
              <div className="text-xs font-bold opacity-50 tracking-wide hover:opacity-75">SUBSCRIBE</div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };