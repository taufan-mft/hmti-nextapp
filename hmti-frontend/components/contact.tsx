import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Reveal } from "./utils/reveal";

export default function Contact () {
    return (
        <div className="sm:px-4 my-36 mx-auto max-w-screen-lg">
            {/** Memories Header */}
            <div className='flex flex-col items-center cursor-pointer'>
                <Reveal>
                    <h1 className='lg:text-4xl text-3xl font-raleway text-center'>
                    HMTI CENTER
                    </h1>
                </Reveal>
                <Reveal>
                    <h2 className='lg:text-xl text-lg font-beautiful text-center'>
                    Want to send any feedback? Let us know.
                    </h2>
                </Reveal>
            </div>
            <div className="flex justify-center p-2 sm:flex-row flex-col">
                {/** Left Side */}
                <div className="sm:w-1/2 w-full sm:mx-5 mx-auto lg:p-5 sm:p-4 p-4">
                    <div className="flex-col">
                        <Reveal>
                            <h3 className="font-bold text-2xl sm:text-base-content text-base-100 mb-4 mt-1">
                                Get in touch
                            </h3>
                        </Reveal>
                        <Reveal>    
                            <p className="text-sm text-justify">
                                Use our contact form for all information requests or contact us directly using the contact information below.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="text-sm mt-2">
                                Feel free to get in touch with us via email or our social media
                            </p>
                        </Reveal>
                        <hr className="my-4 border-1 border-primary sm:mx-auto lg:my-8" />
                    </div>
                    <div className="grid lg:grid-cols-8 grid-cols-6">
                        <Reveal><HiOutlineLocationMarker size={40} className="mt-1"/></Reveal>
                        <div className="flex-col lg:col-span-7 col-span-5">
                            <Reveal><h3 className="font-bold text-lg">Our Location</h3></Reveal>
                            <Reveal>
                                <p className="text-sm text-justify">
                                Fakultas Teknik Unsoed, Jl. Raya Mayjen Sungkono KM 5, Dusun 2, Blater, Kec. Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371
                                </p>
                            </Reveal>
                        </div>
                    </div>
                    <div className="lg:mt-9 mt-4 grid lg:grid-cols-8 grid-cols-6">
                        <Reveal><MdOutlineAlternateEmail size={40} className="mt-1"/></Reveal>
                        <div className="flex-col lg:col-span-7 col-span-5">
                            <Reveal><h3 className="font-bold text-lg">Email Address</h3></Reveal>
                            <Reveal>
                                <p className="text-sm text-justify">
                                hmti@htmi-unsoed.org
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/** Right Side */}
                <form action="#" className="flex flex-col sm:w-1/2 w-full sm:mr-4 px-4">
                    <div className="flex flex-row mt-4">
                        <div className="form-control basis-1/2 max-w-xs">
                            <label className="label">Email</label>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control basis-1/2 ml-2 max-w-xs">
                            <label className="label">Name</label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"/>
                        </div>                    
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Subject</label>
                        <input type="text" placeholder="Enter your subject" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control">
                        <label className="label">Message</label>
                        <textarea className="textarea textarea-bordered h-28" placeholder="What's on your mind?"></textarea>
                    </div> 
                    <div>
                    <button className="btn w-full mt-4 btn-primary border-0 mt-3 font-bold bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-warning">
                        Submit
                    </button>
                    </div>              
                </form> 
            </div>
        </div> 
    )
}