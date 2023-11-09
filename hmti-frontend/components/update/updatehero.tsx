import { EffectFade, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from "next/image";
import { Reveal } from '../utils/reveal';
import heroImage1 from '@/public/heroImage1.jpg';
import heroImage2 from '@/public/heroImage2.jpg'
import heroImage3 from '@/public/heroImage3.jpg'
import heroImage4 from '@/public/heroImage4.jpg'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { BiFolder, BiSolidHome } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Link from 'next/link';

export default function HeroUpdate() {
  interface HeroProps {
    id: string;
    image: StaticImageData;
    alt: string;
  }
  const heroImg = [
    { id: '1', image: heroImage1, alt: 'heroimage 1 - wisudaan' },
    { id: '2', image: heroImage2, alt: 'heroimage 2 - industrial visibility' },
    { id: '3', image: heroImage3, alt: 'heroimage 3 - logo hmti bordir' },
    { id: '4', image: heroImage4, alt: 'heroimage 4 - diesnat' },
  ];
  const ImageData: React.FC<HeroProps> = ({
    id,
    image,
    alt,
  }: HeroProps) => {
    return (
      <div className='bg-black h-full' key={id}>
        <Image
          className='object-cover h-full w-full opacity-50'
          src={image}
          alt={alt}
          placeholder='blur'
          loading='lazy'
        />
      </div>
    )
  };
  return (
    <div className='relative'>
      {/** Text Section */}
      <div className='absolute z-[2] w-4/5 flex flex-col items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Reveal>
          <span className='block lg:text-7xl text-5xl cursor-pointer font-raleway text-white'>
            UPDATES
          </span>
        </Reveal>
        <Reveal>
          <div className="flex justify-center lg:text-lg text-sm text-white breadcrumbs">
            <ul>
              <li>
                <Link rel="preload" href='/'><BiSolidHome className='mr-2' />Home</Link>
              </li>
              <li>
                <Link rel="preload" href='/updates'><BiFolder className='mr-2' />Updates</Link>
              </li>
              <li>
                <HiOutlineDocumentText className='mr-2' />Start Reading
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
      <Swiper className='rounded-lg container max-w-full sm:h-[56vh] h-[36vh]'
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
            <ImageData {...prop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};