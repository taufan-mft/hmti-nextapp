import Image from "next/image";

interface Kabinet {
    nama: string,
    struktur: string,
}

const AboutDetail = ({ nama, struktur }: Kabinet) => {
    return (
        <div>
            <div className="absolute -z-10 text-center w-full mt-56">Sedang Memuat Gambar Resolusi Tinggi...</div>
            <Image className='object-cover w-full h-full'
                loading='lazy'
                src={struktur}
                alt={nama}
                width={2000}
                height={4000}
            />
        </div>
    );
};

export default AboutDetail;