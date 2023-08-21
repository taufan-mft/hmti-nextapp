import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const NewsCard = ({ cards }:any) => {
    return (
        <div className='flex mx-36 h-[77vh]'>
            <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={5}
            slidesPerView={3}
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
                    <article className='m-2 p-4 rounded-lg shadow-lg h-[67vh]'>
                        <div className='w-full h-36 mb-2'>
                            <img className='object-cover rounded-lg h-full w-full' src={card.urlToImage} alt={card.title}/>
                        </div>
                        <div className='flex flex-col h-64 mt-2'>
                            <div className='flex justify-between items-center mb-3'>
                                <span className='btn btn-xs text-primary text-xs font-medium inline-flex items-center'>
                                    <svg className='mr-1 w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path></svg>
                                    Tutorial
                                </span>
                                <span className='text-sm'>14 days ago</span>
                            </div>
                            <h2 className='mb-2 text-xl font-bold line-clamp-2'><a href='#'>
                                {card.title}
                            </a></h2>
                            <p className='mb-5 font-normal text-base line-clamp-4'>{card.description}</p>             
                            <div className='flex gap-2 items-center'>
                                <a href='#' className='inline-flex items-center font-medium hover:text-primary hover:underline'>
                                    Read More
                                    <svg className='ml-2 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                                </a>
                            </div>
                        </div>
                    </article> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div> 
    )
}