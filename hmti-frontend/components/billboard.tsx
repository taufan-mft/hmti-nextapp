import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/ruangkonten.png";

export default function Billboard () {
  return (
    <div className='relative'>
      <Link rel="preload" href="https://www.instagram.com/ruang_kontenn/">
        <div className='max-w-full h-96'>
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