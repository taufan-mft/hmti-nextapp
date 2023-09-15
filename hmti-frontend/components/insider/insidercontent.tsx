import Image from "next/image";
import placeholder from "@/public/spiderman-unchsoed.jpg";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function InsiderContent () {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row h-full my-10">
            <div className="flex lg:justify-end justify-center items-center lg:w-2/5 w-full z-10">
                <div className="lg:-mt-20 mb-20 lg:mb-0 lg:-mr-20">
                <div className="grid grid-cols-2">
                    <div className='h-72 w-56'>
                        <div className="lg:h-full lg:w-full h-4/5 w-4/5 rounded-lg ml-10 lg:ml-0 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110' 
                        loading = 'lazy'
                        src={placeholder}
                        placeholder = 'blur'
                        alt="Developer1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Link href="https://www.instagram.com/">
                                    <BsInstagram className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                <Link href="https://www.linkedin.com/">
                                    <BsLinkedin className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                    <Link href="https://www.github.com/">
                                <BsGithub className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 text-right ml-16 -mr-10">
                        <div className="flex flex-row items-start gap-2">
                            <div>
                                <h1 className="font-bold tracking-wide opacity-95">Wellyaz Syd</h1>
                                <h2 className="tracking-widest opacity-50 text-sm">Frontend Developer</h2>
                            </div>
                            <hr className="border-b-2 mt-3 border-primary grow opacity-50 z-[10]"/>
                        </div>
                    </div>
                    </div> 
                </div>
                <div>
                    <div className='h-72 w-56 -mt-72 ml-60'>
                    <div className="my-10 -ml-10 mr-16">
                    <div className="flex flex-row items-start gap-2">
                        <hr className="border-b-2 mt-3 border-primary grow opacity-50 z-[10]"/>
                            <div>
                                <h1 className="font-bold tracking-wide opacity-95">Taufan Mft</h1>
                                <h2 className="tracking-widest opacity-50 text-sm">Backend Developer</h2>
                            </div>
                        </div>
                    </div>
                        <div className="lg:h-full lg:w-full h-4/5 w-4/5  rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110' 
                        loading = 'lazy'
                        src={placeholder}
                        placeholder = 'blur'
                        alt="Developer2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Link href="https://www.instagram.com/">
                                    <BsInstagram className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                <Link href="https://www.linkedin.com/">
                                    <BsLinkedin className="m-7 hover:text-primary" size={30}/>
                                </Link>
                                    <Link href="https://www.github.com/">
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
                    <h1 className="font-black text-4xl tracking-wide hover:text-secondary-focus">
                        Love Letter
                    </h1>
                    <h1 className="font-beautiful ml-20 -mt-4 text-base-100 text-2xl">
                        From Developer
                    </h1>
                    <div className="mt-5 text-justify tracking-wide">
                        <p>
                        HMTI UNSOED it's not just website, we believe in creating websites <b className="hover:text-primary-focus">with heart</b>. 
                        We don't just write code; we design digital experiences that we genuinely enjoy.
                        </p>
                        <p className="mt-3">
                        We have loved every detail of this website since the beginning. 
                        We want HMTI website to <b className="hover:text-primary-focus">not only function flawlessly</b>, but also to look great 
                        and be simple to use. We understand that HMTI website is frequently the first thing people see,
                        so we want it to <b className="hover:text-primary-focus">make a good first impression</b>.
                        </p>
                        <p className="mt-3">
                        Our affection does not end when we launch this website. We're committed to keeping it current and relevant. 
                        We keep up with the latest trends and technology to ensure that HMTI website is always at its best. 
                        We're here to make sure HMTI website stands out online, <b className="hover:text-primary-focus">and we do it with passion</b>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};