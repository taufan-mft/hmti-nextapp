import Image from "next/image";
import developer1 from "@/public/iron-man.jpg";
import developer2 from "@/public/spiderman-unchsoed.jpg";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Reveal } from "../utils/reveal";
export default function InsiderContent () {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row h-full my-10">
            <div className="flex lg:justify-end justify-center items-center lg:w-2/5 w-full z-10">
                <div className="lg:-mt-20 lg:mb-10 lg:-mr-20 mb-20">
                <div className="grid grid-cols-2">
                    <div className='sm:h-72 sm:w-56 h-56 w-44'>
                        <div className="h-full w-full rounded-lg lg:ml-0 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110' 
                        loading = 'lazy'
                        src={developer1}
                        placeholder = 'blur'
                        alt="Developer1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Link rel="preload" href="https://instagram.com/taufan_mft">
                                    <BsInstagram className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                <Link rel="preload" href="https://www.linkedin.com/in/taufanmft/">
                                    <BsLinkedin className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                    <Link rel="preload" href="https://github.com/taufan-mft">
                                <BsGithub className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 text-right ml-5 sm:-mr-0 -mr-8">
                        <div className="flex flex-row items-start gap-2">
                            <div className="z-10">
                                <h1 className="font-bold tracking-wide opacity-95">Wellyaz Syd</h1>
                                <h2 className="tracking-widest opacity-50 text-sm">Frontend Developer</h2>
                            </div>
                            <hr className="border-b-2 mt-3 border-primary grow opacity-50 z-[10]"/>
                        </div>
                    </div>
                    </div> 
                </div>
                <div>
                    <div className='sm:h-72 sm:w-56 h-56 w-44 sm:-mt-72 -mt-60 lg:ml-60 ml-48'>
                    <div className="my-10 lg:-ml-10 lg:mr-12 sm:-ml-0 -ml-8 mr-5 text-left">
                    <div className="flex flex-row items-start gap-2">
                        <hr className="border-b-2 mt-3 border-primary grow opacity-50 z-[10]"/>
                            <div>
                                <h1 className="font-bold tracking-wide opacity-95">Taufan Mft</h1>
                                <h2 className="tracking-widest opacity-50 text-sm">Backend Developer</h2>
                            </div>
                        </div>
                    </div>
                        <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110' 
                        loading = 'lazy'
                        src={developer2}
                        placeholder = 'blur'
                        alt="Developer2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Link rel="preload" href="https://www.instagram.com/wellyazzsa/">
                                    <BsInstagram className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                <Link rel="preload" href="https://www.linkedin.com/in/wellyazzsa/">
                                    <BsLinkedin className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                    <Link rel="preload" href="https://github.com/wellyazzsa">
                                <BsGithub className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-3/5 bg-primary bg-opacity-25 rounded-l-lg h-[92vh] lg:h-auto lg:flex flex-col hidden">
                <div className="ml-10 p-24 pb-32 xl:pr-56">
                    <Reveal>
                        <div>
                            <h1 className="font-black text-4xl tracking-wide hover:text-secondary-focus">
                                Love Letter
                            </h1>
                            <h1 className="font-beautiful ml-20 -mt-4 text-base-100 text-2xl">
                                From Developer
                            </h1>
                        </div>
                    </Reveal>
                    <div className="flex flex-col mt-5 gap-2 text-justify tracking-wide">
                        <Reveal><p>
                        HMTI UNSOED it's not just website, we believe in creating websites <b className="hover:text-primary-focus">with heart</b>. 
                        We don't just write code; we design digital experiences that we genuinely enjoy.
                        </p></Reveal>
                        <Reveal><p>
                        We have loved every detail of this website since the beginning. 
                        We want HMTI website to <b className="hover:text-primary-focus">not only function flawlessly</b>, but also to look great 
                        and be simple to use. We understand that HMTI website is frequently the first thing people see,
                        so we want it to <b className="hover:text-primary-focus">make a good first impression</b>.
                        </p></Reveal>
                        <Reveal><p>
                        Our affection does not end when we launch this website. We're committed to keeping it current and relevant. 
                        We keep up with the latest trends and technology to ensure that HMTI website is always at its best. 
                        We're here to make sure HMTI website stands out online, <b className="hover:text-primary-focus">and we do it with passion</b>.
                        </p></Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};