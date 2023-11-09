import { Reveal } from "../utils/reveal";
import Image from "next/image";
import Logo from "@/public/hmtilogo.jpg";
import atribut from "@/public/atribut-jurusan.png";

export default function AboutGoals() {
    return (
        <div className="bg-gradient-to-r from-base-300 to-base-200 bg-opacity-80 rounded-lg sm:mx-10 lg:mx-20 mx-4 sm:pt-20 pt-10 sm:pb-10 pb-5">
            <div className="flex flex-col items-center">
                <Reveal>
                    <h1 className="lg:text-5xl text-4xl font-raleway pb-2 tracking-tight cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary-focus hover:to-primary">
                        OUR VISION
                    </h1>
                </Reveal>
                <Reveal>
                    <h3 className="font-beautiful text-xl text-center opacity-70 hover:opacity-100">
                        We believe there are five key ingredients for success.
                    </h3>
                </Reveal>
                <div className="sm:pb-16 pb-8 " />
                <div className="grid place sm:grid-cols-6 grid-cols-2 gap-x-5 gap-y-10 items-start lg:px-20 px-5">
                    <div className="col-span-2">
                        <button className="btn btn-primary w-full font-bold">
                            <Reveal><div>enhancement</div></Reveal>
                        </button>
                        <Reveal>
                            <p className="text-sm text-center tracking-wide pt-2 px-1 opacity-70 hover:opacity-100">
                                Enhancing students capabilities in both academic and non-academic fields by striving to realize the aspirations of the Industrial Engineering Department students at Jenderal Soedirman University
                            </p>
                        </Reveal>
                    </div>
                    <div className="col-span-2 grid content-start">
                        <button className="btn w-full font-bold btn-secondary">
                            <Reveal><div>active</div></Reveal>
                        </button>
                        <Reveal>
                            <p className="text-sm text-center tracking-wide pt-2 px-1 opacity-70 hover:opacity-100">
                                Actively contributing to the development and advancement of HMTI UNSOED in the nation-building process
                            </p>
                        </Reveal>
                    </div>
                    <div className="col-span-2">
                        <button className="btn w-full font-bold btn-accent">
                            <Reveal><div>responsibility</div></Reveal>
                        </button>
                        <Reveal>
                            <p className="text-sm text-center tracking-wide pt-2 px-1 opacity-70 hover:opacity-100">
                                Encourage a responsible scientific culture in which an improved environment prioritizes ethics, accountability, and rigorous inquiry to ensure that knowledge is used for the good of society
                            </p>
                        </Reveal>
                    </div>
                    <div className="hidden sm:flex" />
                    <div className="col-span-2">
                        <button className="btn w-full font-bold">
                            <Reveal><div>brotherhood</div></Reveal>
                        </button>
                        <Reveal>
                            <p className="text-sm text-center tracking-wide pt-2 px-1 opacity-70 hover:opacity-100">
                                Strengthening the bonds of brotherhood among Industrial Engineering students at Jenderal Soedirman University through the Industrial Engineering Student Association (HMTI)
                            </p>
                        </Reveal>
                    </div>
                    <div className="col-span-2">
                        <button className="btn w-full font-bold btn-neutral">
                            <Reveal><div>knowledge</div></Reveal>
                        </button>
                        <Reveal>
                            <p className="text-sm text-center tracking-wide pt-2 px-1 opacity-70 hover:opacity-100">
                                Improving the learning atmosphere at Jenderal Soedirman University by keeping up with scientific and technological developments in order to advance the knowledge of Industrial Engineering
                            </p>
                        </Reveal>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:pt-32 pt-20">
                    <Reveal>
                        <h1 className="lg:text-5xl text-4xl font-raleway pb-2 tracking-tight cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary-focus hover:to-primary">
                            OUR MISSION
                        </h1>
                    </Reveal>
                    <h3 className="text-center rounded-lg lg:mx-24 sm:mx-16 mx-8 p-4">
                        <div className="mockup-window border bg-base-200">
                            <div className="flex justify-center p-6 sm:p-8 bg-base-100">
                                <Reveal><p className="opacity-70 hover:opacity-100">
                                    To establish Industrial Engineering Jenderal Soedirman University. Students who excel in the development of science and technology with a focus on rural resources and local wisdom in order to play an active role in nation building with character, responsibility, critical thinking, broad-mindedness, and devotion to God the Creator.
                                </p></Reveal>
                            </div>
                        </div>
                    </h3>
                    <div className="flex flex-col items-center mt-36">
                        <Reveal>
                            <h1 className="lg:text-4xl text-3xl font-raleway pb-2 tracking-tight cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary-focus hover:to-primary">
                                ATRIBUT JURUSAN
                            </h1>
                        </Reveal>
                        <Reveal>
                            <h3 className="font-beautiful text-xl text-center opacity-70 hover:opacity-100">
                                Noi Siamo La Industri
                            </h3>
                        </Reveal>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-8 mt-10">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-2xl text-xl text-center font-raleway pb-2 tracking-tight cursor-pointer opacity-70">
                                <Reveal><p>LOGO HIMPUNAN</p></Reveal>
                            </h1>
                            <Image
                                src={Logo}
                                alt="Logo HMTI"
                                className="h-56 w-56 rounded-3xl" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-2xl text-center text-xl font-raleway pb-2 tracking-tight cursor-pointer opacity-70">
                                <Reveal><p>JAKET HIMPUNAN</p></Reveal>
                            </h1>
                            <Image
                                src={atribut}
                                alt="Logo HMTI"
                                className="h-56 w-56 rounded-3xl" />
                        </div>
                    </div>
                    <h3 className="mt-10 sm:pb-10 pb-8 text-center lg:px-24 sm:px-16 px-8 opacity-70 hover:opacity-100">
                        <Reveal>
                            <p>
                                A logo is a visual symbol that represents an organization's identity, whereas a Himpunan jacket is a logo-bearing garment that members of the organization wear as part of their identity and support for the group.
                            </p>
                        </Reveal>
                    </h3>
                </div>
            </div>
        </div>
    );
};