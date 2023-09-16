import Image from 'next/image';
import Link from 'next/link';

import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import hmtilogo from '@/public/hmtilogo-transparent.png';
import { Reveal } from './utils/reveal';

export default function TextSection () {
  return (
    <div className='relative border border-base-100 xl:mx-36'>
      <Image className='absolute opacity-10 mt-14 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' src={hmtilogo} alt='HMTI Logo'/>
      <div className='mx-12 lg:mx-24 mt-36 mb-16'>
        <div className='w-full grid justify-items-start'>
          <Reveal>
            <BiSolidQuoteLeft size={30}/>
          </Reveal>
        </div>

        {/** Text Section */}
        <Reveal><div>
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
        </div></Reveal> 
        
        <div className='w-full grid justify-items-end'>
          <Reveal>
            <BiSolidQuoteRight size={30}/>
          </Reveal>
        </div>
      
        <div className='lg:text-lg mt-6 text-sm mx-4 font-bold'>
          <hr className="order-1 border-secondary mx-15 lg:mx-60" />
          <div className='w-full flex justify-center'>
            <Reveal>
              <Link href='https://www.iise.org/' className='hover:text-secondary tracking-wide'>
                Institute of Industrial & System Engineering
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};