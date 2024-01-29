import Image from "next/image";
import placeholder from "@/public/spiderman-unchsoed.jpg";
import backdrop from "@/public/backdrop.png";
import { BiBulb, BiCalendarEvent, BiSolidNews } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa"
import { Reveal } from "../utils/reveal";
import moment from 'moment';
interface News {
    cover: string,
    judul: string,
    kategori: string,
    tanggal: string,
    content: string,
    author: string,
}

const UpdateContent = ({ cover, judul, kategori, tanggal, content, author }: News) => {
    function removeHTMLTags(html: string): string {
        const temporaryElement = document.createElement("div");
        temporaryElement.innerHTML = html;
        
        temporaryElement.querySelectorAll("*").forEach(node => {
            if (node.textContent !== "\u00A0") {
                node.parentNode?.replaceChild(document.createTextNode(node.textContent ?? ""), node);
            }
        });
    
        return temporaryElement.innerHTML;
    }
    
    const cleanedText = removeHTMLTags(content);
    console.log(cleanedText);
    return (
        <div>
                <div className="flex flex-col items-center -space-y-20">
                    <div className='relative h-56 bg-primary-focus w-full bg-opacity-70'>
                        <Image className='absolute object-cover w-full h-56 -z-10'
                            loading='lazy'
                            src={backdrop}
                            placeholder='blur'
                            alt="news"
                        />
                        <div className="absolute brightness-100 text-base-100 mt-4 left-1/2 transform -translate-x-1/2  w-2/3 flex flex-row justify-between">
                            <div className="lg:w-2/3 mt-7 w-full">
                                <Reveal>
                                    <div className="font-beautiful lowercase tracking-wider pl-1">
                                        {kategori}
                                        </div>
                                </Reveal>
                                <Reveal>
                                    <h1 className="font-bold text-3xl hover:opacity-100 uppercase">
                                        {judul}
                                    </h1>
                                </Reveal>
                            </div>
                            <div className="lg:flex hidden flex-col w-1/3">
                                <div className="text-base-100 flex flex-row mt-5 gap-2 mr-3 justify-end">
                                    <BiSolidNews className="rounded-full bg-accent px-1" size={40} />
                                    <BiCalendarEvent className="rounded-full bg-secondary px-1" size={40} />
                                    <BiBulb className="rounded-full bg-primary px-1" size={40} />
                                </div>
                                <div className="mt-5 mr-3 flex flex-row items-center justify-end">
                                    <FaUserAlt className="mt-1" size={30} />
                                    <div className="flex flex-col ml-2">
                                        <Reveal>
                                            <div className="uppercase tracking-wide text-sm font-bold">
                                                {author}
                                                </div>
                                        </Reveal>
                                        <Reveal>
                                            <div className="text-xs">
                                            {moment(tanggal).format('MMMM Do YYYY')}
                                            </div>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 brightness-100">
                        <Image className='mt-4 object-cover rounded-lg w-full sm:h-96 h-60'
                            loading='lazy'
                            src={cover}
                            height={800}
                            width={800}
                            alt={judul}
                        />
                        <div dangerouslySetInnerHTML={{__html: cleanedText}} className="mt-6 text-justify"/>
                    </div>
                </div>
        </div>
    );
};

export default UpdateContent;