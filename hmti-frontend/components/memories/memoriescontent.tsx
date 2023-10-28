import Image from "next/image";

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
        <>
        <div className="grid grid-cols-2 sm:grid-cols-4 mx-4 sm:mx-36 mb-20">
            {dataGambar.map((gambar: Igambar) => (
                <div className='py-1 px-1 rounded-lg' key={gambar.img_id}>
                    <Image
                        className='object-cover rounded-lg h-full w-full'
                        src={`https://drive.google.com/uc?export=view&id=${gambar.img_id}`}
                        alt={gambar.name}
                        priority={true}
                        quality={70}
                        width={500}
                        height={500}
                    />
                </div>
            ))}
        </div>
        </>
    )
}

export default MemoriesContent;