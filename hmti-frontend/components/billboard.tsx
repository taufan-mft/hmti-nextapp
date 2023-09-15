import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/backdrop.png";

export default function Billboard () {
  return (
    <div className='relative'><Link href="#">
      <div className='max-w-full h-56'>
        <div className='absolute z-[2] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <span className='block lg:text-7xl text-5xl tracking-wide font-bold cursor-pointer text-white'>
          #SALAMUNITY
          </span>
        </div>
          <Image className='object-cover rounded-lg h-full w-full' 
            loading = 'lazy'
            src={placeholder}
            placeholder = 'blur'
            alt="Jargon HMTI"
            onLoadingComplete={(img) => console.log(img.naturalWidth)}/>
      </div>
    </Link></div>
);
};