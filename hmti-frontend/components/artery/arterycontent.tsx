import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { PiDotsThreeOutline, PiDownloadSimpleBold, PiHeartBold, PiHeartFill, PiShareFatFill } from 'react-icons/pi'

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
import { Reveal } from '../utils/reveal';



export default function ArterySection () {
    interface SlideProps {
    number: string;
    title: string;
    subtitle: string;
    imageSrc: StaticImageData;
    caption: string;
    slugDrive: string;
  }
  
  const SlideContent: React.FC<SlideProps> = ({
    number,
    title,
    subtitle,
    imageSrc,
    caption,
    slugDrive,
  }: SlideProps) => {
    return(
      <div>
        <a href="https://hmti-unsoed.org/artery">
          <div className='w-auto rounded-lg pb-3 shadow-md bg-base-100 transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
            <div className='flex flex-col pt-6 px-4'>
              <Reveal>
                <h2 className='mb-2 text-6xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                  {number}
                </h2>
              </Reveal>
              <hr className="ml-0.5 mb-16 mt-2 border-4 border-primary w-8"/>             
              <Reveal>
                <p className='font-bold text-2xl ml-1 tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                  {title}
                </p>
              </Reveal>
              <Reveal>
                <p className='ml-1 opacity-50 font-beautiful hover:opacity-100'>
                  {subtitle}  
                </p>
              </Reveal>
            </div>
            <div className='w-full h-56 px-4 py-4'>
              <div className="relative shadow-lg group hover:bg-black relative rounded-lg h-full w-full cursor-pointer object-cover overflow-hidden">
                <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
                src={imageSrc}
                alt={caption}
                quality={50}
                loading = 'lazy'
                placeholder = 'blur'
                />
              </div>
            </div>
            <Reveal>
              <div className='px-4 flex flex-row gap-4'>
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
                <div className="tooltip" data-tip="Share">
                  <PiShareFatFill size={20}/>
                </div>
                <PiDotsThreeOutline size={20}/>
              </div>
            </Reveal>
          </div> 
        </a>
      </div>
    );
  };
  
  const SlideContentSm: React.FC<SlideProps> = ({
    number,
    title,
    subtitle,
    imageSrc,
    caption,
    slugDrive,
  }: SlideProps) => {
    return (
      <div className='mt-4'>
        <Link href="https://hmti-unsoed.org/artery">
          <div className='justify-center rounded-lg shadow-md bg-base-100 transition-transform duration-500 hover:scale-110 hover:shadow-lg scale-100 cursor-pointer'>
            <div className='flex flex-row py-4 px-4'>
              <div className='w-14'>
                <Reveal>
                  <h2 className='text-6xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                    {number}
                  </h2>
                </Reveal>
              </div>
              <hr className="ml-4 mt-3 border-4 border-primary h-8"/>             
              <div className='flex flex-col w-4/5 font-bold text-2xl m-1 ml-4 tracking-tight'>
                <Reveal>
                  <h3 className='hover:text-transparent line-clamp-1 hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                    {title}
                  </h3>
                </Reveal>
                <Reveal>
                  <p className='font-beautiful font-light text-base ml-1 opacity-75'>
                    {subtitle}
                  </p>
                </Reveal>
              </div>
              <div className='w-full h-24 pl-8'>
                <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
                  src={imageSrc}
                  alt={caption}
                  quality={50}
                  loading = 'lazy'
                  placeholder = 'blur'/>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  

  const slidesData = [
    { number: '01', title: 'Semester 1', subtitle: 'Beginning', imageSrc: artery1, caption:'Pict 1 by Micheile Henderson', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVcjVreVkwYzFFVTg?resourcekey=0-iH93aE2njdiRMMpAlWgIpg'},
    { number: '02', title: 'Semester 2', subtitle: 'Adaptation', imageSrc: artery2, caption:'Pict 2 by Jason Rost', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVbVRPZlVpS2Z5SHc?resourcekey=0-48tSwtH9R0neOZJV-FH3BQ'},
    { number: '03', title: 'Semester 3', subtitle: 'Discovery', imageSrc: artery3, caption:'Pict 3 by Aron Yigin', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVd09ycFVRR3ZIQW8?resourcekey=0-_k4LZ3BdDNMIkcotf-PSPw'},
    { number: '04', title: 'Semester 4', subtitle: 'Progression', imageSrc: artery4, caption:'Pict 4 by Simone Hutsch', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVUkhBTHFJbDFfX0E?resourcekey=0-dNY88QE0junu81m0NjOR8Q'},
    { number: '05', title: 'Semester 5', subtitle: 'Focus', imageSrc: artery5, caption:'Pict 5 by Simone Hutsch', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVWnNiREZsNDBSTE0?resourcekey=0-fuduwOdTSpsX74QwdJdOEw'},
    { number: '06', title: 'Semester 6', subtitle: 'Intensity', imageSrc: artery6, caption:'Pict 6 by Kyrillos Samaan', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVdkpzeDhYYWZVSm8?resourcekey=0-zozPl7Oy9uFbjpOefjblgA'},
    { number: '07', title: 'Semester 7', subtitle: 'Reflection', imageSrc: artery7, caption:'Pict 7 by Simone Hutsch', slugDrive: 'https://drive.google.com/drive/u/0/folders/0B95aLWQUqQNVMDU4MDF4Mmk0b0U?resourcekey=0--7Hpsunmn8-iCruhewzv1w'},
    { number: '08', title: 'Report Example', subtitle: 'Culmination', imageSrc: artery8, caption:'Pict 8 by Pierre Châtel-Innocenti', slugDrive: 'https://drive.google.com/drive/u/0/folders/13gJXRu86YngD6bSGdGnt4qmun2H9Lg_a'},
  ];
    return (
    <div className='pb-10'>
      <div className="w-full hidden lg:flex">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={4}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {slidesData.map((slide) => (
          <SwiperSlide key={slide.number}>
            <SlideContent {...slide} />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='lg:hidden mx-4'>
        {slidesData.map((slide) => (
          <div key={slide.number}>
            <SlideContentSm {...slide} />
          </div>
          ))}
      </div>
    </div>
    
  )
}