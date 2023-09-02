import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image, { StaticImageData } from 'next/image';
import artery1 from '@/public/artery  (1).jpg'
import artery2 from '@/public/artery  (2).jpg'
import artery3 from '@/public/artery  (3).jpg'
import artery4 from '@/public/artery  (4).jpg'
import artery5 from '@/public/artery  (5).jpg'
import artery6 from '@/public/artery  (6).jpg'
import artery7 from '@/public/artery  (7).jpg'
import artery8 from '@/public/artery  (8).jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { PiDotsThreeOutline, PiDownloadSimpleBold, PiHeartBold, PiHeartFill, PiShareFatFill } from 'react-icons/pi'

export default function ArterySection () {
  const SlideContent = ({number, title, subtitle, imageSrc, caption, slugUnsplash, slugDrive}: {
    number : string;
    title : string;
    subtitle : string;
    imageSrc : StaticImageData;
    caption : string;
    slugUnsplash : string;
    slugDrive : string;
  }) => (
    <div>
    <a href={slugDrive}>
          <div className='w-64 rounded-lg shadow-md bg-base-100 transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
            <div className='flex flex-col pt-6 px-4'>
              <h2 className='mb-2 text-6xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                {number}
              </h2>
              <hr className="ml-0.5 mt-2 border-4 border-primary w-8"/>             
              <p className='mt-16 font-bold text-2xl ml-1 tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                {title}
              </p>
              <p className='ml-1 opacity-50 font-beautiful hover:opacity-100'>
                {subtitle}  
              </p>
            </div>
            <div className='w-full h-56 px-4 py-4'>
              <div className="relative shadow-lg group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
                src={imageSrc}
                alt={caption}/>
              </div>
            </div>
            <div className='px-4 pb-4 flex flex-row gap-4'>
            <div className="tooltip" data-tip="Download">
              <PiDownloadSimpleBold size={20}/>
            </div>
            <div className="tooltip" data-tip="Like">
              <label className="swap">
                <input type="checkbox" />
                <PiHeartFill className="swap-on" size={20}/>
                <PiHeartBold className="swap-off" size={20}/>
              </label>
            </div>
            <div className="tooltip" data-tip="Source">
              <a href={slugUnsplash}><PiShareFatFill size={20}/></a>
            </div>
              <PiDotsThreeOutline size={20}/>
              </div>
          </div> 
          </a>
      </div>
  )

  const SlideContentSm = ({number, title, subtitle, imageSrc, caption, slugDrive}: {
    number : string;
    title : string;
    subtitle : string;
    imageSrc : StaticImageData;
    caption : string;
    slugUnsplash : string;
    slugDrive : string;
  }) => (
    <div className='mt-4'>
      <a href={slugDrive}>
        <div className='justify-center rounded-lg shadow-md bg-base-100 transition-transform duration-500 hover:scale-110 hover:shadow-lg scale-100 cursor-pointer'>
          <div className='flex flex-row py-4 px-4'>
            <h2 className='mb-2 text-6xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
              {number}
            </h2>
            <hr className="ml-4 mt-3 border-4 border-primary h-6"/>             
            <div className='flex flex-col w-4/5 font-bold text-2xl m-1 ml-4 tracking-tight'>
              <h3 className='hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                {title}
              </h3>
              <p className='font-semibold text-sm ml-1 opacity-75'>{subtitle}</p>
            </div>
          <div className='w-full h-24 pl-8'>
            <div className="relative shadow-lg group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
              <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
              src={imageSrc}
              alt={caption} />
            </div>
          </div>
          </div>
        </div> 
        </a>
    </div>
  )

  const slidesData = [
    { number: '01', title: 'Semester 1', subtitle: 'Beginning', imageSrc: artery1, caption:'Pict 1 by Micheile Henderson', slugUnsplash:'https://unsplash.com/@micheile', slugDrive: '/'},
    { number: '02', title: 'Semester 2', subtitle: 'Adaptation', imageSrc: artery2, caption:'Pict 2 by Jason Rost', slugUnsplash:'https://unsplash.com/@inertkrypton', slugDrive: '/'},
    { number: '03', title: 'Semester 3', subtitle: 'Discovery', imageSrc: artery3, caption:'Pict 3 by Aron Yigin', slugUnsplash:'https://unsplash.com/@aronyigin', slugDrive: '/'},
    { number: '04', title: 'Semester 4', subtitle: 'Progression', imageSrc: artery4, caption:'Pict 4 by Simone Hutsch', slugUnsplash:'https://unsplash.com/@heysupersimi', slugDrive: '/'},
    { number: '05', title: 'Semester 5', subtitle: 'Focus', imageSrc: artery5, caption:'Pict 5 by Simone Hutsch', slugUnsplash:'https://unsplash.com/@heysupersimi', slugDrive: '/'},
    { number: '06', title: 'Semester 6', subtitle: 'Intensity', imageSrc: artery6, caption:'Pict 6 by Kyrillos Samaan', slugUnsplash:'https://unsplash.com/@kyrillossamaan', slugDrive: '/'},
    { number: '07', title: 'Semester 7', subtitle: 'Reflection', imageSrc: artery7, caption:'Pict 7 by Simone Hutsch', slugUnsplash:'https://unsplash.com/@heysupersimi', slugDrive: '/'},
    { number: '08', title: 'Report Example', subtitle: 'Culmination', imageSrc: artery8, caption:'Pict 8 by Pierre Châtel-Innocenti', slugUnsplash:'https://unsplash.com/@chatelp', slugDrive: '/'},
  ];
    return (
    <div className='pb-10'>
      <div className="w-full hidden lg:flex">
        <Swiper
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={4}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent {...slide} />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='lg:hidden mx-4'>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <SlideContentSm {...slide} />
          </div>
          ))}
      </div>
    </div>
    
  )
}