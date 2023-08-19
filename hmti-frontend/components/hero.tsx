import { Scrollbar, A11y } from 'swiper/modules';
import { BsPlay } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

export const HeroSection = ({ slides }:any) => {
  return (
    <div className='relative'>
      <div className='absolute z-[2] w-3/5 text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='block text-7xl cursor-pointer font-raleway text-white'>
        HMTI UNSOED
        </span>
        <p className='text-xl font-beautiful text-white'>
          Penuh semangat membara sejak 2015 dalam membersamai prabu sepanjang perjalanan mereka dalam meraih impian yang luar biasa
        </p>
        <div className='flex justify-center'>
          <button className='btn btn-active btn-primary mt-3 font-bold border-0 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning'>
          Learn More
          </button>
          <button className='btn btn-square ml-2 mt-3'>
            <BsPlay className='relative' size={30}/>
          </button>
        </div>
      </div>
      <Swiper className='rounded-lg container max-w-full h-[85vh]'
      modules={[Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
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