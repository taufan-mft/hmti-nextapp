import Image from "next/image";
import placeholder from "@/public/backdrop.png";

export default function InsiderHead () {
  return (
    <div className="flex flex-col items-center">
        <div className='relative h-56 bg-primary-focus w-full'>
        <Image className='absolute object-cover h-56 w-full opacity-50' 
            loading = 'lazy'
            src={placeholder}
            placeholder = 'blur'
            alt="Jargon HMTI"
            onLoadingComplete={(img) => console.log(img.naturalWidth)}/>
            <div className="absolute brightness-100 text-base-100 mt-4 left-1/2 transform -translate-x-1/2  w-2/3 flex flex-row justify-between">
                <div className="w-full">
                    <h3 className="mt-5 font-beautiful text-xl tracking-wider">
                        The Insider
                    </h3>
                    <h1 className="font-bold line-clamp-2 lg:text-6xl text-5xl hover:opacity-100 uppercase w-82">
                        Behind of Website HMTI 
                    </h1>
                </div>
            </div>
        </div>    
    </div>
    );
};