import Image from "next/image";
import placeholder from "@/public/spiderman-unchsoed.jpg";
import backdrop from "@/public/backdrop.png"; 
import { BiBulb, BiCalendarEvent, BiSolidNews } from "react-icons/bi";
import {FaUserAlt} from "react-icons/fa"
import { Reveal } from "../utils/reveal";

export default function UpdateContent () {
  return (
    <div className="flex flex-col items-center -space-y-20">
        <div className='relative h-56 bg-primary-focus w-full bg-opacity-70'>
            <Image className='absolute object-cover w-full h-56 -z-10' 
                loading = 'lazy'
                src={backdrop}
                placeholder = 'blur'
                alt="news"
                />
            <div className="absolute brightness-100 text-base-100 mt-4 left-1/2 transform -translate-x-1/2  w-2/3 flex flex-row justify-between">
                <div className="lg:w-2/3 mt-7 w-full">
                    <Reveal>
                        <div className="font-beautiful tracking-wider">Press Release</div>
                    </Reveal>
                    <Reveal>
                        <h1 className="font-bold text-3xl hover:opacity-100 uppercase">INDUSTRI WISUDAAN PERIODE KE-148</h1>
                    </Reveal>
                </div>
                <div className="lg:flex hidden flex-col w-1/3">
                    <div className="text-base-100 flex flex-row mt-5 gap-2 mr-3 justify-end">
                        <BiSolidNews className="rounded-full bg-accent px-1" size={40}/>
                        <BiCalendarEvent className="rounded-full bg-secondary px-1" size={40}/>
                        <BiBulb className="rounded-full bg-primary px-1" size={40}/>
                    </div>
                    <div className="mt-5 mr-3 flex flex-row items-center justify-end">
                        <FaUserAlt className="mt-1" size={30}/>
                        <div className="flex flex-col ml-2">
                            <Reveal>
                                <div className="uppercase tracking-wide text-sm font-bold">author name</div>
                            </Reveal>
                            <Reveal>
                                <div className="text-xs">Rabu, 12 Juli 2023</div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="w-2/3 brightness-100">
            <Image className='mt-4 object-cover rounded-lg w-full sm:h-96 h-60' 
                loading = 'lazy'
                src={placeholder}
                placeholder = 'blur'
                alt="news"
                />
            <div className="mt-6">
                <Reveal>
                    <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit omnis iusto ut. Aperiam maxime veniam dicta, saepe, eius quam corporis nam recusandae labore tempora, tenetur molestiae quae. Impedit facere delectus dolore ab dolor eum alias ad, voluptas repudiandae tempore quisquam quod accusamus quis totam optio temporibus voluptatum, facilis dolorum cupiditate. Labore sint in alias sit corrupti atque aliquid odio cum minima. Ducimus voluptatem magni quae neque velit molestias sunt quisquam doloribus officia modi, ea quidem! Itaque odit dolorem obcaecati nemo velit dolorum possimus maxime, corrupti atque, qui sint quia autem necessitatibus voluptate at. Ad, sed molestias? Ducimus, quas nam.
                    </p>
                </Reveal>
            </div>
        </div>
    </div>
    );
};