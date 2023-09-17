import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/backdrop.png";
import { Reveal } from "./utils/reveal";

export default function Billboard () {
  return (
    <div className='relative'>
      <Link rel="preload" href="https://www.instagram.com/ruang_kontenn/">
        <div className='max-w-full h-56'>
          <div className='absolute z-[2] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Reveal>
              <h1 className='block sm:text-5xl lg:text-7xl text-4xl tracking-wide font-bold cursor-pointer text-white'>
              #SALAMUNITY
              </h1>
            </Reveal>
          </div>
          <Image className='object-cover sm:rounded-lg h-full w-full' 
            loading = 'lazy'
            src={placeholder}
            placeholder = 'blur'
            alt="Jargon HMTI"
            onLoadingComplete={(img) => console.log(img.naturalWidth)}
          />
        </div>
      </Link>
    </div>
  );
};