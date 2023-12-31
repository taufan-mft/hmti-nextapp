'use client'

import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Reveal } from './utils/reveal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';

interface Iprops {
    dataNews: Inews[]
}

interface Inews {
    cover: string,
    judul: string,
    kategori: string,
    shortdesc: string,
    tanggal: string,
    content: string,
    slug: string,
    author: string,
}

const NewsCard: React.FC<Iprops> = ({ dataNews }) => {
    return (
        <div className='mb-36 xl:mx-36'>
            {/** News Preview Big Screen */}
            <div className='hidden lg:mx-16 lg:flex'>
                <Swiper
                    modules={[Autoplay, Pagination, A11y]}
                    slidesPerView={4}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                >
                    {dataNews.map((news: Inews) => {
                        const router = useRouter()
                        function handleClick() {
                            router.push(`/update/${news.slug}`)
                        }
                        return (
                            <SwiperSlide key={news.slug} onClick={handleClick}>
                                <article className='m-2 rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                                    <div className='w-full h-36 px-4 pt-4 mb-2'>
                                        <div className="relative group hover:bg-black rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                                            <Image
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
                                                src={news.cover}
                                                alt={news.judul}
                                                height={500}
                                                width={500}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-2 px-4'>
                                        <div className='flex justify-between mb-3'>
                                            <Reveal>
                                                <div className='btn btn-xs text-primary text-xs hover:text-secondary'>
                                                    <div className='flex flex-row items-center gap-1'>
                                                        <HiOutlineNewspaper />
                                                        <h3 className='line-clamp-1 text-left'>
                                                            {news.kategori}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Reveal>
                                            <div className='hidden lg:flex'>
                                                <Reveal>
                                                    <span className='text-sm opacity-50 line-clamp-1'>
                                                        {moment(news.tanggal).format('MMM Do')}
                                                    </span>
                                                </Reveal>
                                            </div>
                                        </div>
                                        <h2 className='mb-2 text-lg font-bold line-clamp-2 hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                                            <Reveal>
                                                <div>
                                                    {news.judul}
                                                </div>
                                            </Reveal>
                                        </h2>
                                        <Reveal>
                                            <p className='mb-1 font-normal text-sm line-clamp-4 text-justify'>
                                                {news.shortdesc}
                                            </p>
                                        </Reveal>
                                        <div className='flex mt-3 items-center'>
                                            <Reveal>
                                                <div className='btn border-0 mb-4 text-base-100 btn-xs font-semibold btn-primary transition ease-in-out hover:scale-105 duration-300 inline-flex items-center'>
                                                    Read More
                                                    <BiRightArrowAlt size={20} />
                                                </div>
                                            </Reveal>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        )
                    })};
                </Swiper>
            </div>

            {/** News Preview Small Screen */}
            <div className='flex sm:mx-10 lg:mx-14 mx-2 lg:hidden'>
                <Swiper
                    modules={[Autoplay, Pagination, A11y]}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                >
                    {dataNews.map((news: Inews) => {
                        const router = useRouter()
                        function handleClick() {
                            router.push(`/update/${news.slug}`)
                        }
                        return (
                            <SwiperSlide key={news.slug}>
                                <article className='m-2 rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                                    <div className='w-full h-48 px-4 pt-4 mb-2'>
                                        <div className="group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                                            <Image
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
                                                src={news.cover}
                                                alt={news.judul}
                                                height={500}
                                                width={500}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-2 px-4'>
                                        <div className='flex justify-between mb-3'>
                                            <Reveal>
                                                <div className='btn btn-xs text-primary text-xs hover:text-secondary'>
                                                    <div className='flex flex-row items-center gap-1'>
                                                        <HiOutlineNewspaper />
                                                        <h3 className='line-clamp-1 text-left'>
                                                            {news.kategori}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Reveal>
                                            <Reveal>
                                                <span className='line-clamp-1 text-sm opacity-50'>
                                                    {moment(news.tanggal).startOf('day').fromNow()}
                                                </span>
                                            </Reveal>
                                        </div>
                                        <Reveal>
                                            <h2 className='mb-2 text-xl font-bold line-clamp-2 hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                                                <Link rel="preload" href='#'>
                                                    {news.judul}
                                                </Link>
                                            </h2>
                                        </Reveal>
                                        <Reveal>
                                            <p className='mb-1 font-normal text-base line-clamp-4'>
                                                {news.shortdesc}
                                            </p>
                                        </Reveal>
                                        <div className='flex mt-3 items-center'>
                                            <Reveal>
                                                <Link rel="preload" href='#' className='rounded-lg px-2 pb-0.5 border-0 mb-4 text-base-100 font-semibold btn-primary transition ease-in-out hover:scale-105 duration-300 inline-flex items-center'>
                                                    Read More
                                                    <BiRightArrowAlt className='mt-0.5' size={20} />
                                                </Link>
                                            </Reveal>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        )
                    })};
                </Swiper>
            </div>
        </div>
    );
};

export default NewsCard;