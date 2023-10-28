import { Autoplay, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from './utils/reveal';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React from 'react';

interface Iprops {
    dataGambar: Igambar[]
}

interface Igambar {
    img_id: string,
    name: string,
}

const Memories: React.FC<Iprops> = ({ dataGambar }) => {
    return (
        <div className='my-32'>
            {/** Memories Header */}
            <div className='flex flex-col items-center cursor-pointer'>
                <Reveal>
                    <h1 className='text-center lg:text-4xl text-3xl font-raleway'>
                    HMTI MEMORIES
                    </h1>
                </Reveal>
                <Reveal>
                    <h2 className='lg:text-xl text-lg font-beautiful text-center'>
                    Capture the moment and make it unforgettable
                    </h2>
                </Reveal>
            </div>
            
            {/** Memories Preview Big Screen*/}
            <div className='mx-4 mt-10 lg:h-[70vh] h-[40vh] mb-16 sm:flex hidden'>
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
            {dataGambar.map((gambar : Igambar) => (
            <SwiperSlide key={gambar.img_id}>
                <div className='h-full w-full transition-transform duration-500 hover:shadow-lg cursor-pointer'>
                    <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <Image 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={`https://drive.google.com/uc?export=view&id=${gambar.img_id}`} 
                        alt={gambar.name}
                        width={500}
                        height={500}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"/>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {gambar.name}
                            </p>
                            <Link href="/memories" className="rounded-full bg-neutral px-3.5 py-2 text-sm text-white shadow shadow-black/60">See More</Link>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            ))};
            </Swiper>
        </div>

        {/** Memories Preview Small Screen*/}
        <div className='mt-8 h-56 mb-16 flex sm:hidden'>
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
            {dataGambar.map((gambar : Igambar) => (
            <SwiperSlide key={gambar.img_id}>
                <div className='h-full w-full transition-transform duration-500 cursor-pointer'>
                    <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow">
                        <Image 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={`https://drive.google.com/uc?export=view&id=${gambar.img_id}`}
                        alt={gambar.name}
                        width={500}
                        height={500}/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"/>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {gambar.name}
                            </p>
                            <button className="rounded-lg bg-neutral px-2 py-1 font-com text-xs capitalize text-white shadow shadow-black/60"><Link href="/memories" rel="preload">See More</Link></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            ))};
            </Swiper>
        </div>
    </div>
    );
};

export default Memories;