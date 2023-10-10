import Link from 'next/link';
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
import { Reveal } from '../utils/reveal';



export default function SeminarSection () {
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
  }: SlideProps) => {
    return (
      <div className='mt-4'>
        <Link rel="preload" href="https://hmti-unsoed.org/artery">
          <div className='justify-center rounded-lg shadow-md bg-base-100 transition-transform duration-500 hover:scale-105 hover:shadow-lg scale-100 cursor-pointer'>
            <div className='flex flex-row justify-start py-3 px-3'>
              <div className='w-14'>
                <Reveal>
                  <h2 className='text-5xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                    {number}
                  </h2>
                </Reveal>
              </div>
              <hr className="ml-2 mt-2 border-4 border-primary h-8"/>             
              <div className='flex flex-col w-4/5 font-bold m-1 ml-2 tracking-tight'>
                <Reveal>
                  <h3 className='hover:text-transparent line-clamp-1 hover:bg-clip-text bg-gradient-to-r hover:from-secondary hover:to-primary'>
                    {title}
                  </h3>
                </Reveal>
                <Reveal>
                  <p className='font-beautiful font-light text-sm ml-1 opacity-75'>
                    {subtitle}
                  </p>
                </Reveal>
              </div>
              <div className='w-full h-24 pl-8'>
                <Image className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:opacity-50 group-hover:scale-125"
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
    <div className='pb-10 lg:mx-56 sm:mx-36 mx-2'>
      <div className=''>
        {slidesData.map((slide) => (
          <div key={slide.number}>
            <SlideContent {...slide} />
          </div>
          ))}
      </div>
    </div>
  )
}