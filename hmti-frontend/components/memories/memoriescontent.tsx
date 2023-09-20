import Image from "next/image";
import MemPicture from "@/pic.json"

export default function MemoriesContent () {
    interface ImageProps {
        albumId: number
        id: number
        title: string
        url: string
        thumbnailUrl: string
    };

    const MemoriesData: React.FC<ImageProps> = ({
        albumId,
        id,
        title,
        url,
        thumbnailUrl,
        }: ImageProps) => {
            return (
                <div className='w-full h-auto py-1 rounded-lg' key={id}>
                    <Image className='object-cover rounded-lg h-full w-full' 
                        loading = 'lazy'
                        src={url}
                        placeholder= 'blur'
                        blurDataURL = {thumbnailUrl}
                        alt={title}
                        width={500}
                        height={500}
                        onLoadingComplete={(img) => console.log(img.naturalWidth)}
                    />
                </div>
            )
        }
    return (
        <div className="lg:columns-4 columns-2 m-2 lg:mx-36 gap-2 mb-36 sm:mt-10 mt-4">
        {MemPicture.map((prop) => (
        <div key={prop.id}>
            <MemoriesData {...prop}/>
        </div>
        ))}
        </div>
    );
  };








  