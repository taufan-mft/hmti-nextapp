import { Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

export const HeroSection = ({ slides }:any) => {
  return (
    <div className='relative'>
      <div className='absolute z-[2] w-3/5 text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='block text-7xl cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning'>
        HMTI UNSOED
        </span>
        <p className='text-xl font-semibold text-base-100'>
          Penuh semangat membara sejak 2015 dalam membersamai prabu sepanjang perjalanan panjang mereka dalam meraih impian yang luar biasa      </p>
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