import { Autoplay, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Reveal } from '@/components/utils/reveal';
import { useRouter } from 'next/router';

interface Iprops {
    dataKabinet: Ikabinet[]
}

interface Ikabinet {
    nama: string,
    ketua: string,
    tahun: string,
    slug: string,
    cover: string,
    struktur: string,
    konten: string,
}

const AboutKabinet: React.FC<Iprops> = ({ dataKabinet }) => {
    return (
        <div>
            {/** Memories Header */}
            <div className='flex flex-col items-center cursor-pointer'>
                <Reveal>
                    <h1 className='text-center lg:text-4xl text-3xl font-raleway'>
                        HMTI HISTORIES
                    </h1>
                </Reveal>
                <Reveal>
                    <h2 className='lg:text-xl text-lg font-beautiful text-center'>
                    Explore the people behind organization growth.
                    </h2>
                </Reveal>
            </div>

            <div className='mx-4 mt-10 lg:h-[70vh] h-[40vh] sm:flex hidden'>
                <Swiper
                    effect={'coverflow'}
                    modules={[Autoplay, Pagination, A11y, EffectCoverflow]}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                >
                    {dataKabinet.map((kabinet: Ikabinet) => {
                        const router = useRouter()
                        function handleClick() {
                            router.push(`/organization/${kabinet.slug}`)
                        }
                        return (
                        <SwiperSlide key={kabinet.slug}>
                            <div className='h-full w-full transition-transform duration-500 cursor-pointer'>
                                <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30">
                                    <Image
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 hover:shadow-lg"
                                        src={kabinet.cover}
                                        alt={kabinet.nama}
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {kabinet.nama} merupakan kabinet periode {kabinet.tahun} yang diketuai oleh {kabinet.ketua}
                                        </p>
                                        <button onClick={handleClick} className="rounded-full bg-neutral px-3.5 py-2 text-sm text-white shadow shadow-black/60">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })};
                </Swiper>
            </div>
        </div>
    );
};

export default AboutKabinet;