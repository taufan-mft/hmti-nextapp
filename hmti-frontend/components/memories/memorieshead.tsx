import { Reveal } from "../utils/reveal";

export default function MemoriesHead() {
    return (
        <div className="flex flex-col items-center mx-16 sm:mx-36 lg:mx-56">
            <div className='flex flex-col items-center sm:my-16 my-10 cursor-pointer'>
                <Reveal>
                    <h1 className='lg:text-4xl text-3xl font-raleway text-center'>
                        HMTI MEMORIES
                    </h1>
                </Reveal>
                <Reveal>
                    <h2 className='lg:text-xl text-lg font-beautiful text-center'>
                        Capture the moment and make it unforgettable
                    </h2>
                </Reveal>
            </div>
            <hr className="my-4 border-1 border-primary w-full" />
        </div>
    );
};