import Image from "next/image";
import Logo from "../public/hmtilogo.jpg";
import { BsFillBagFill, BsInstagram, BsLine, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";

export default function Footer () {
    return (
        <footer className="p-4 sm:p-6 bg-base-100">
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
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                        <ul>
                            <li className="mb-4">
                                <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                        <ul >
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-1 border-primary sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center">
                    © 2023  
                    <a className="hover:underline">
                        HMTI UNSOED
                    </a>. All Rights Reserved.
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
    </footer>
    )
}