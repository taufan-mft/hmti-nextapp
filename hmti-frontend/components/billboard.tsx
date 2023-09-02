import Image from "next/image";
import placeholder from "../public/ads.png";

export default function Billboard () {
  return (
    <div className='relative'>
      <div className='max-w-full h-56'>
        <div className='absolute z-[2] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <span className='block lg:text-7xl text-5xl tracking-wide font-bold cursor-pointer text-white'>
          #SALAMUNITY
          </span>
        </div>
          <Image className='object-cover rounded-lg h-full w-full' src={placeholder} alt="Jargon HMTI"/>
    </div>
    </div>
);
};