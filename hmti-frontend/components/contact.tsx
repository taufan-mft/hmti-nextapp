import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";


export default function Contact () {
    return (
        <div className=" px-4 my-16 mx-auto max-w-screen-lg">
            <div className='block lg:text-4xl text-3xl cursor-pointer font-raleway text-center'>
                HMTI CENTER
                <p className='mb-4 lg:text-xl text-lg font-beautiful'>
                Want to send any feedback? Let us know.
                </p>
            </div>
            <div className="flex justify-center p-2 sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full sm:mx-5 mx-auto p-5">
                    <div className="flex-col">
                        <h3 className="font-bold text-2xl sm:text-base-content text-base-100">Get in touch</h3>
                        <p className="text-sm mt-4 text-justify">
                            Use our contact form for all information requests or contact us directly using the contact information below.
                        </p>
                        <p className="text-sm mt-3">
                            Feel free to get in touch with us via email or our social media
                        </p>
                        <hr className="my-4 border-1 border-primary sm:mx-auto lg:my-8" />
                    </div>
                    <div className="my-4 grid lg:grid-cols-8 grid-cols-6">
                        <HiOutlineLocationMarker size={40} className="mt-1"/>
                        <div className="flex-col lg:col-span-7 col-span-5">
                            <h3 className="font-bold text-lg">Our Location</h3>
                            <p className="text-sm text-justify">
                            Fakultas Teknik Unsoed, Jl. Raya Mayjen Sungkono KM 5, Dusun 2, Blater, Kec. Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371
                            </p>
                        </div>
                    </div>
                    <div className="lg:mt-9 mt-4 grid lg:grid-cols-8 grid-cols-6">
                        <MdOutlineAlternateEmail size={40} className="mt-1"/>
                        <div className="flex-col lg:col-span-7 col-span-5">
                            <h3 className="font-bold text-lg">Email Address</h3>
                            <p className="text-sm text-justify">
                            hmti@htmi-unsoed.org
                            </p>
                        </div>
                    </div>
                </div>
                <form action="#" className="flex flex-col sm:w-1/2 w-full mx-auto">
                    <div className="flex flex-row">
                        <div className="form-control w-full max-w-xs mt-4">
                            <label className="label">Email</label>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full ml-2 max-w-xs mt-4">
                            <label className="label">Name</label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"/>
                        </div>                    
                    </div>
                    <div className="form-control w-full">
                            <label className="label">Subject</label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control">
                        <label className="label">Message</label>
                        <textarea className="textarea textarea-bordered h-28" placeholder="Enter your massage"></textarea>
                    </div> 
                    <div>
                    <button className="btn w-full mt-4 btn-primary border-0 mt-3 font-bold bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-warning">
                        Submit</button>
                        </div>               
                </form>
            </div>
        </div>
    )
}