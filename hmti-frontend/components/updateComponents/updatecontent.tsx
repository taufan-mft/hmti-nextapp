import Image, {StaticImageData} from "next/image";
import placeholder from "@/public/ads.png";
import logoKabinet from "@/public/logoKabinet.png"
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function ContentUpdate () {
  interface KabinetProps {
    kabinet: string;
    logo: StaticImageData;
    customText: string;
    ads: StaticImageData;
  }
  
  const hmtiNow = [
    { kabinet: `Andromeda`, logo: logoKabinet, customText: `Since 2015, we've been supporting prabu on their journey to realize their extraordinary dreams with a burning enthusiasm.`, ads: placeholder},
    ];

  const AboutHeader: React.FC<KabinetProps> = ({
    kabinet,
    logo,
    customText,
    ads
  }: KabinetProps) => {
    return(
      <div className="flex flex-row gap-10 mx-4">
      <div className="w-3/4 border">
        <div className="relative">
          <div className="absolute text-xl w-full text-center z-[2] top-1/2 transform -translate-y-1/2">
              Tempat buat masang iklan stradust
          </div>
          <Image className="h-full" src={ads} alt="Ads Placeholder"/>
        </div>
      </div>

      <div className="w-1/4">
        <div className="flex items-center gap-1 grow">
          <div className="line-clamp-1 text-xs font-raleway uppercase">
            {kabinet}
          </div>
          <hr className="border-b-2 -mt-0.5 border-base-content grow"/>
        </div>
        <div className="flex flex-col items-center">
          <Image className="rounded-full m-4 w-2/3" src={logo} alt="Logo Kabinet Placeholder"/>
          <div className="text-center text-sm m-4">
          {customText}
          </div>
        </div>
        <div className="flex items-center gap-1 grow">
          <div className="line-clamp-1 text-xs font-raleway uppercase">
            Follow Us
          </div>
          <hr className="border-b-2 -mt-0.5 border-base-content grow "/>
        </div>
        <div className="flex flex-col mt-4 w-full bg-base-100 rounded-lg">
          <button className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-4 uppercase text-xs font-bold">
              <BsInstagram className="hover:text-primary" size={15}/>
              INSTAGRAM
            </div>
            <div className="text-xs font-bold opacity-50">FOLLOW</div>
          </button>
          <button className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-4 uppercase text-xs font-bold">
              <BsLinkedin className="hover:text-primary" size={15}/>
              LINKEDIN
            </div>
            <div className="text-xs font-bold opacity-50">CONNECT</div>
          </button>
          <button className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-4 uppercase text-xs font-bold">
              <BsYoutube className="hover:text-primary" size={15}/>
              YOUTUBE
            </div>
            <div className="text-xs font-bold opacity-50">SUBSCRIBE</div>
          </button>
        </div>
      </div>
      </div>
    )
  }
  return (
    <div>
    {hmtiNow.map((prop) => (
      <div key={prop.kabinet}>
        <AboutHeader {...prop} />
      </div>
    ))}
    </div>
  );
};