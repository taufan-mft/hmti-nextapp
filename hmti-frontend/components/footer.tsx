import Image from "next/image";
import Logo from "../public/hmtilogo.jpg";
import { BsFillBagFill, BsInstagram, BsLine, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";
import topography from "../public/topography.svg";

export default function Footer () {
    return (
        <footer>
            <Image className="absolute object-cover w-full sm:h-60 h-2/3 opacity-5" src={topography} alt="Topography"/>
        <div className="p-4 sm:p-6 w-full bg-neutral bg-opacity-25">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
            <div className="btn btn-ghost cursor-pointer lg:flex hidden">
                <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 rounded-md"/>
                <text className="text-xl font-raleway">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
                        HMTI
                    </span>
                    <span className="">
                        UNSOED
                    </span>
                </text>
            </div>
                <div className="grid grid-cols-2 gap-10 sm:gap-20 sm:mx-4 mx-auto sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            About
                        </h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">History</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Organization</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            Academic
                        </h2>
                        <ul >
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Artery</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Curiculum</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            Corner
                        </h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Hall of Fame</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Galery</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-1 border-primary sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center">
                    © 2023 HMTI UNSOED. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="#">
                        <BsInstagram className="hover:text-primary"/>
                    </a>
                    <a href="#">
                        <BsLinkedin className="hover:text-primary"/>
                    </a>
                    <a href="#">
                        <BsYoutube className="hover:text-primary"/>
                    </a>
                    <a href="#">
                        <BsTiktok className="hover:text-primary"/>
                    </a>
                    <a href="#">
                        <BsLine className="hover:text-primary"/>
                    </a>
                    <a href="#">
                        <BsFillBagFill className="hover:text-primary"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </footer>
    )
}