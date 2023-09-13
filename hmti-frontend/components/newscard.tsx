import Link from 'next/link';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineNewspaper } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { BiRightArrowAlt } from 'react-icons/bi';

export const NewsCard = ({ cards }:any) => {
    return (
        <div className='mb-36 xl:mx-36'>
            <div className='block lg:text-4xl text-3xl cursor-pointer font-raleway text-center'>
                HMTI UPDATE
                <p className='lg:text-xl text-lg font-beautiful'>
                    Check out the latest news from us!
                </p>
                </div>
            <div className='hidden mx-16 lg:flex'>
            <Swiper
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={4}
            pagination={{ clickable: true , dynamicBullets: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            >
            {cards.map((card : any) => (
                <SwiperSlide key={card.image}>
                    <article className='m-2 rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                        <div className='w-full h-36 px-4 pt-4 mb-2'>
                            <div className="relative group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125" src={card.urlToImage} alt={card.title} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2 px-4'>
                            <div className='flex justify-between justify-items-center mb-3'>
                                <div className='btn btn-xs text-primary text-xs font-medium inline-flex items-center hover:text-secondary'>
                                    <HiOutlineNewspaper/>
                                    article
                                </div>
                                <span className='text-sm opacity-50'>14 days ago</span>
                            </div>
                            <h2 className='mb-2 text-lg font-bold line-clamp-2 hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'><Link href='#'>
                                {card.title}
                            </Link></h2>
                            <p className='mb-1 font-normal text-sm line-clamp-4'>{card.description}</p>             
                            <div className='flex mt-3 items-center'>
                                <Link href='#' className='btn border-0 mb-4 text-base-100 btn-xs font-semibold btn-primary transition ease-in-out hover:scale-105 duration-300 inline-flex items-center'>
                                    Read More
                                    <BiRightArrowAlt size={20}/>
                                </Link>
                            </div>
                        </div>
                    </article> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className='flex mx-14 lg:hidden'>
            <Swiper
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true , dynamicBullets: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            >
            {cards.map((card : any) => (
                <SwiperSlide key={card.image}>
                    <article className='m-2 rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                        <div className='w-full h-48 px-4 pt-4 mb-2'>
                            <div className="group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125" src={card.urlToImage} alt={card.title} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2 px-4'>
                            <div className='flex justify-between items-center mb-3'>
                                <div className='btn btn-xs text-primary text-xs font-medium inline-flex items-center hover:text-secondary'>
                                    <svg className='mr-1 w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path></svg>
                                    article
                                </div>
                                <span className='text-sm opacity-50'>14 days ago</span>
                            </div>
                            <h2 className='mb-2 text-xl font-bold line-clamp-2 hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'><Link href='#'>
                                {card.title}
                            </Link></h2>
                            <p className='mb-1 font-normal text-base line-clamp-4'>{card.description}</p>             
                            <div className='flex mt-3 items-center'>
                                <Link href='#' className='btn border-0 mb-4 text-base-100 btn-sm font-semibold btn-primary transition ease-in-out hover:scale-105 duration-300 inline-flex items-center'>
                                    Read More
                                    <BiRightArrowAlt size={20}/>
                                </Link>
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