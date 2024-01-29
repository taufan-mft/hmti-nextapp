import Link from 'next/link';
import { Reveal } from './utils/reveal';
import { FaGraduationCap, FaPeopleGroup } from "react-icons/fa6";
import { MdCoPresent } from 'react-icons/md';
import { LuNewspaper } from 'react-icons/lu';

export default function Feature() {
    return (
        <div className='flex justify-center'>
            <Link 
            href="/artery"
            className='flex w-60 my-2 items-center rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                <div className='ml-2 my-2 p-2 rounded-lg text-info bg-info bg-opacity-30'>
                    <FaGraduationCap size={50} />
                </div>
                <div className='flex flex-col px-4'>
                    <h2 className='text-lg font-bold'>
                        <Reveal>
                            <div>
                                Artery
                            </div>
                        </Reveal>
                    </h2>
                    <Reveal>
                        <p className='font-normal text-sm line-clamp-4'>
                            Learning materials to help you
                        </p>
                    </Reveal>
                </div>
            </Link>
            <Link 
            href="/update"
            className='hidden lg:flex my-2 w-60 items-center rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                <div className='ml-2 my-2 p-2 rounded-lg text-primary bg-primary bg-opacity-30'>
                    <LuNewspaper size={50} />
                </div>
                <div className='flex flex-col px-4'>
                    <h2 className='text-lg font-bold'>
                        <Reveal>
                            <div>
                                Update
                            </div>
                        </Reveal>
                    </h2>
                    <Reveal>
                        <p className='font-normal text-sm line-clamp-4'>
                        Latest news just for you
                        </p>
                    </Reveal>
                </div>
            </Link>
            <Link 
            href="/seminar"
            className='hidden sm:flex my-2 w-60 items-center rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                <div className='ml-2 my-2 p-2 rounded-lg text-secondary bg-secondary bg-opacity-30'>
                    <MdCoPresent size={50} />
                </div>
                <div className='flex flex-col px-4'>
                    <h2 className='text-lg font-bold'>
                        <Reveal>
                            <div>
                                Seminar
                            </div>
                        </Reveal>
                    </h2>
                    <Reveal>
                        <p className='font-normal text-sm line-clamp-4'>
                        Your friend's seminar schedule
                        </p>
                    </Reveal>
                </div>
            </Link>
            <Link 
            href="https://hmti-unsoed.org/artery/"
            className='my-2 w-60 flex items-center rounded-lg shadow-md transition-transform duration-500 hover:scale-100 hover:shadow-lg scale-95 cursor-pointer'>
                <div className='ml-2 my-2 p-2 rounded-lg text-accent bg-accent bg-opacity-30'>
                    <FaPeopleGroup size={50} />
                </div>
                <div className='flex flex-col px-4'>
                    <h2 className='text-lg font-bold'>
                        <Reveal>
                            <div className='line-clamp-1'>
                                Kahim Election
                            </div>
                        </Reveal>
                    </h2>
                    <Reveal>
                        <p className='font-normal text-sm line-clamp-4'>
                        Choose your best Ketua Himpunan
                        </p>
                    </Reveal>
                </div>
            </Link>
        </div>
    );
};