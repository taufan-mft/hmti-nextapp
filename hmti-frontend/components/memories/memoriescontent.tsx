import Image from "next/image";
import Link from "next/link";

interface Iprops {
    dataGambar: Igambar[]
}

interface Igambar {
    img_id: string,
    name: string,
}

const MemoriesContent: React.FC<Iprops> = ({ dataGambar }) => {
    console.log(dataGambar)
    return (
        <div className="lg:columns-4 columns-2 m-2 lg:mx-36 gap-2 mb-36 sm:mt-10 mt-4">
            {dataGambar.map((gambar: Igambar) => (
                <div
                    key={gambar.img_id}
                    className="my-1 h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow">
                    <Image
                        className='object-cover rounded-lg h-full w-full'
                        src={`https://drive.google.com/uc?export=view&id=${gambar.img_id}`}
                        alt={gambar.name}
                        priority={true}
                        quality={70}
                        width={500}
                        height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {gambar.name}
                        </p>
                        <button className="rounded-full bg-primary-focus px-3 py-2 font-com text-xs capitalize text-white shadow shadow-black/60">
                            <Link
                                href={`https://drive.google.com/uc?export=view&id=${gambar.img_id}`}
                                rel="preload">
                                Download
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MemoriesContent;