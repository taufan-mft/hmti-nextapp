import { Autoplay, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Photopack = ({ pictures }:any) => {
    return (
        <div className='my-32'>
            <div className='block lg:text-4xl text-3xl cursor-pointer font-raleway text-center'>
            HMTI MEMORIES
            <p className='lg:text-xl text-lg font-beautiful'>
            Capture the moment and make it unforgettable
            </p>
            </div>
        <div className='mx-4 mt-8 lg:h-[70vh] h-[40vh] mb-16 sm:flex hidden'>
        <Swiper
        effect={'coverflow'}
        modules={[Autoplay, Pagination, A11y, EffectCoverflow]}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
        }}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
        >
        {pictures.map((picture : any) => (
            <SwiperSlide key={picture.image}>
                <article className='h-full w-full transition-transform duration-500 hover:shadow-lg cursor-pointer'>
                    <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={picture.url} alt={picture.title}/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {picture.title}
                            </p>
                            <button className="rounded-full bg-neutral px-3.5 py-2 text-sm text-white shadow shadow-black/60">Like</button>
                        </div>
                    </div>
                </article> 
            </SwiperSlide>
        ))}
        </Swiper>
        </div>

        <div className='mx-4 mt-8 lg:h-[70vh] h-[50vh] mb-16 flex sm:hidden'>
        <Swiper
        effect={'coverflow'}
        modules={[Autoplay, Pagination, A11y, EffectCoverflow]}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
        }}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
        >
        {pictures.map((picture : any) => (
            <SwiperSlide key={picture.image}>
                <article className='h-full w-full transition-transform duration-500 hover:shadow-lg cursor-pointer'>
                    <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={picture.url} alt={picture.title}/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {picture.title}
                            </p>
                            <button className="rounded-full bg-neutral px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>
                </article> 
            </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </div>
    )
}