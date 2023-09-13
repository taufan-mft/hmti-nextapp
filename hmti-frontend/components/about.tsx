import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import Image from 'next/image';;
import hmtilogo from '@/public/hmtilogo-transparent.png';
import Link from 'next/link';

export default function AboutSection () {
  return (
    <div className='relative border border-base-100 xl:mx-36'>
      <Image className='absolute opacity-10 mt-14 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={hmtilogo} alt='HMTI Logo'/>
      <div className='mx-12 lg:mx-24 mt-36 mb-16'>
      <div className='w-full grid justify-items-start'>
        <BiSolidQuoteLeft size={30}/>
      </div>
      <p className='lg:text-xl text-base text-center tracking-wide mx-5'>
        Industrial engineering is concerned with the 
        <b className='hover:text-secondary'>
        &nbsp;design, improvement, and installation of integrated systems of people, material, information, equipment, and energy.
        </b> 
        &nbsp;It draws upon specialized knowledge and skill in the 
        <b className='hover:text-secondary'>
        &nbsp;mathematical, physical, and social sciences
        </b> 
        &nbsp;together with the 
        <b className='hover:text-secondary'>
        &nbsp;principles and methods of engineering analysis and design
        </b> 
        &nbsp;to specify, predict, and evaluate the results to be obtained from such system.
      </p>
      <div className='w-full grid justify-items-end'>
        <BiSolidQuoteRight size={30}/>
      </div>
      <div className='text-center lg:text-lg mt-6 text-sm mx-4 font-bold'>
        <hr className="order-1 border-secondary mx-15 lg:mx-60" />
        <Link href='https://www.iise.org/' className='hover:text-secondary tracking-wide'>Institute of Industrial & System Engineering</Link>
      </div>
    </div>
    </div>
  );
};