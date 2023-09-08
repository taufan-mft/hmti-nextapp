import { EffectFade, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { BsPlay } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Link from 'next/link';

export const HeroSection = ({ slides }:any) => {
  return (
    <div className='relative'>
      <div className='absolute z-[2] w-3/5 text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='block lg:text-7xl text-5xl cursor-pointer font-raleway text-white'>
        HMTI UNSOED
        </span>
        <p className='lg:text-xl text-lg font-beautiful text-white'>
          Since 2015, we've been supporting prabu on their journey to realize their extraordinary dreams with a burning enthusiasm.
        </p>
        <div className='flex justify-center'>
          <Link href="/about"><button className='btn border-0 btn-active btn-primary mt-3 font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning'>
          Learn More
          </button></Link>
          <Link href="https://www.youtube.com/@hmti_unsoed"><button className='btn btn-square ml-2 mt-3'>
            <BsPlay className='relative' size={30}/>
          </button></Link>
        </div>
      </div>
      <Swiper className='rounded-lg container max-w-full h-[85vh]'
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
      {slides.map((slide : any) => (
        <SwiperSlide key={slide.image}>
          <img className='object-cover h-full w-full' src={slide.image} alt={slide.title}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
);
};