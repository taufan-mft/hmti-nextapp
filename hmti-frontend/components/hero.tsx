import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image, {StaticImageData} from "next/image";
import { Reveal } from './utils/reveal';

import heroImage1 from '@/public/heroImage1.jpg';
import heroImage2 from '@/public/heroImage2.jpg'
import heroImage3 from '@/public/heroImage3.jpg'
import heroImage4 from '@/public/heroImage4.jpg'


import { EffectFade, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { BsPlay } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


export default function HeroSection () {
    interface HeroProps {
      id: string;
      image: StaticImageData;
      alt: string;
    };
  
    const heroImg = [
      { id:'1', image: heroImage1, alt: 'heroimage 1 - wisudaan'},
      { id:'2', image: heroImage2, alt: 'heroimage 2 - industrial visibility'},
      { id:'3', image: heroImage3, alt: 'heroimage 3 - logo hmti bordir'},
      { id:'4', image: heroImage4, alt: 'heroimage 4 - diesnat'},
      ];
  
      const ImageData: React.FC<HeroProps> = ({
        id,
        image,
        alt,
      }: HeroProps) => {
        return(
          <div className='bg-black h-full' key={id}>
            <Image 
            className='object-cover h-full w-full opacity-50'
            src={image} 
            alt={alt}
            placeholder='blur'
            loading = 'lazy'
            />
          </div>
          )
        };
  return (
    <div className='relative'>
      <div className='absolute z-10 w-4/5 text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        
        {/** Typography section */}
        <div className='flex flex-col items-center'>
          <div>
          <Reveal>
            <span className='block lg:text-7xl text-5xl cursor-pointer font-raleway text-white'>
              HMTI UNSOED
            </span>
          </Reveal>
        </div>
        <Reveal>
          <p className='lg:text-xl text-lg font-beautiful text-white'>
            Since 2015, we've been supporting prabu on their journey to realize their extraordinary dreams with a burning enthusiasm.
          </p>
        </Reveal>
        </div>

        {/** Button Section */}
        <div  className='flex justify-center mt-4'>
          <Reveal><div className='flex items-center gap-2'>
            <Link rel="preload" href="/organization">
              <button className='btn border-0 btn-active btn-primary font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning'>
                Learn More
              </button>
            </Link>
            <Link rel="preload" href="https://www.youtube.com/@hmti_unsoed">
              <button className='btn btn-square'>
                <BsPlay className='relative' size={30}/>
              </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/** Image Section */}
      <Swiper className='rounded-lg container max-w-full sm:h-[85vh] h-[80vh]'
        modules={[EffectFade, Autoplay, Scrollbar, A11y]}
        spaceBetween={0}
        effect={'fade'}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {heroImg.map((prop) => (
          <SwiperSlide key={prop.id}>
            <ImageData {...prop}/>
          </SwiperSlide>
        ))};
      </Swiper>
    </div>
  );
};