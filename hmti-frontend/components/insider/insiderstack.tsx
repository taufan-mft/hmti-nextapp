import { DiNginx } from "react-icons/di";
import { FaNodeJs, FaUbuntu } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiDaisyui, SiDjango, SiGunicorn, SiNextdotjs, SiReact, SiSwiper, SiTailwindcss, SiTypescript } from "react-icons/si";
export default function InsiderStack () {
    return (
        <div>
            <div className='block lg:text-4xl text-3xl cursor-pointer font-raleway text-center'>
                HMTI TECH
            <p className='lg:text-xl text-lg font-beautiful'>
                This web is proudly built on this technology.
            </p>
            </div>
            <div className="lg:grid flex flex-col justify-items-center mx-10 my-10 mb-20">
                <div className="flex sm:gap-4 lg:gap-5 xl:gap-10 gap-2">
                <DiNginx size={150} className="hover:text-green-700 cursor-pointer"/>
                <SiNextdotjs size={150} className="hover:text-slate-950 cursor-pointer"/>
                <SiDjango size={150} className="hover:text-green-950 cursor-pointer"/>
                <FaUbuntu size={150} className="hover:text-orange-600 cursor-pointer"/>
                <SiGunicorn size={150} className="hover:text-lime-700 cursor-pointer"/>
                <FaNodeJs size={150} className="hover:text-lime-500 cursor-pointer"/>
                </div>
                <div className="flex lg:gap-5 sm:gap-4 gap-2 sm:mt-0 lg:mt-10 xl:gap-10 -mt-16">
                <SiTypescript size={150} className="hover:text-blue-700 cursor-pointer"/>
                <SiReact size={150} className="hover:text-sky-500 cursor-pointer"/>
                <SiTailwindcss size={150} className="hover:text-sky-400 cursor-pointer"/>
                <SiDaisyui size={150} className="hover:text-emerald-400 cursor-pointer"/>
                <SiSwiper size={150} className="hover:text-blue-600 cursor-pointer"/>
                <FiFramer size={150} className="hover:text-violet-600 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
  };