import { Reveal } from '../utils/reveal';
import React from 'react';
import moment from 'moment';
import { MdAccessTimeFilled, MdDateRange, MdInfoOutline, MdMeetingRoom } from 'react-icons/md';
import Image from 'next/image';
import CalendarSeminar from './calendar';
import semKp from '@/public/artery  (1).jpg'
import semPro from '@/public/artery  (7).jpg'
import semHas from '@/public/artery  (8).jpg'
import Link from 'next/link';
import { BiBookBookmark } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';

interface Iprops {
  dataSeminar: Iseminar[]
}

interface Iseminar {
  Nama: string,
  NIM: string,
  Kategori: string,
  Topik: string
  Tanggal: string,
  Waktu: string,
  Ruangan: string,
}

interface Ilink {
  number: string,
  title: string,
  subtitle: string,
  link: string,
  color: string
}
const SeminarSection: React.FC<Iprops> = ({ dataSeminar }) => {

  const ImportantLinks: React.FC<Ilink> = ({
    number,
    title,
    subtitle,
    link,
    color,
  }: Ilink) => {
    return (
      <Link href={link} rel='preload' key={number}>
        <div className='flex bg-base-100 mt-4 rounded-lg p-3 gap-2 w-64 xl:w-80 cursor-pointer transition-transform duration-500 hover:scale-105'>
          <div className=''>
            <BiBookBookmark className={`p-1.5 rounded ${color} text-base-100`} size={30} />
          </div>
          <div className='flex flex-col -mt-1.5'>
            <Reveal><h3 className='font-bold'>{title}</h3></Reveal>
            <Reveal><h4 className='text-xs opacity-60'>{subtitle}</h4></Reveal>
          </div>
        </div>
      </Link>
    );
  };

  const linkData = [
    { number: '01', title: 'SIA UNSOED', subtitle: 'Sistem Informasi Akademik', link: 'https://sia.akademik.unsoed.ac.id/auth/login', color: 'bg-primary' },
    { number: '02', title: 'SIKAP UNSOED', subtitle: ' Sistem Pengelolaan Informasi KP', link: 'http://sikap.dev.ft.unsoed.ac.id/', color: 'bg-secondary' },
    { number: '03', title: 'SIPEDA UNSOED', subtitle: 'Sistem Pengelolaan Studi Akhir', link: 'http://sipeda.dev.ft.unsoed.ac.id/', color: 'bg-accent' },
  ];

  return (
    <>
      <div className='flex flex-row xl:mx-36 lg:mx-28 sm:mx-2 gap-2 lg:gap-5'>
        <div className='w-full ml-2 sm:mx-3'>
          <div tabIndex={0} className="sm:scale-95 mb-5 w-auto cursor-pointer collapse collapse-arrow border border-base-100 bg-base-100">
            <div className="flex flex-row items-center gap-2 collapse-title text-lg font-medium">
              <MdInfoOutline /> Information
            </div>
            <div className="collapse-content">
              <p>Room for seminar <b>can be changed</b> at any time.</p>
            </div>
          </div>

          <div className='flex gap-3 sm:scale-95'>
            <Link
              href='/seminar/add'
              rel='preload'
              className="btn btn-outline btn-sm btn-warning"
            >
              <div className='-mt-0.5 flex flex-row items-center gap-2'>
                <FaPlus /> Add Seminar Event
              </div>
            </Link>
            <hr className='border h-6 mt-1 border-base-content hidden lg:flex'/>
            <div className="btn btn-outline btn-sm btn-primary hidden lg:flex">
              <div className='-mt-0.5'> SemKP </div>
            </div>
            <div className="btn btn-outline btn-sm btn-secondary hidden lg:flex">
              <div className='-mt-0.5'> SemPro </div>
            </div>
            <div className="btn btn-outline btn-sm btn-accent hidden lg:flex">
              <div className='-mt-0.5'> Semhas </div>
            </div>
          </div>
          {dataSeminar.map((seminar: Iseminar) => {
            const tanggal = moment(seminar.Tanggal).format('MMMM Do');
            const tanggalsm = moment(seminar.Tanggal).format('MMM Do');
            const waktu = moment(seminar.Waktu).subtract(25, 'minutes').format('LT')

            let thumbnail = semPro
            let caption: string = 'Thumbnail Seminar Proposal'

            switch (seminar.Kategori) {
              case 'Seminar Kerja Praktik':
                thumbnail = semKp;
                caption = 'Thumbnail Seminar Kerja Praktek'
                break;
              case 'Seminar Hasil Tugas Akhir':
                thumbnail = semHas;
                caption = 'Thumbnail Seminar Hasil'
                break;
            }
            return (
              <div
                className='mt-2 cursor-pointer transition-transform duration-500 sm:scale-95 hover:scale-100'
                key={seminar.NIM}>
                <div className="h-full w-full rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className='flex flex-row w-full bg-base-100 rounded-xl'>
                    <Image className="w-0 sm:w-14 lg:w-24 h-24 sm:h-28 rounded-l-xl object-cover"
                      src={thumbnail}
                      alt={caption}
                      quality={50}
                      height={100}
                      width={100}
                      loading='lazy'
                    />
                    <div className='flex flex-col justify-between m-2 sm:m-4'>
                      <Reveal><h1 className='font-beautiful lg:-mt-1 text-sm lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-focus to-secondary hover:from-secondary hover:to-warning'>
                        {seminar.Kategori}
                      </h1></Reveal>
                      <Reveal><div className='font-bold text-lg lg:text-xl line-clamp-1 mb-1 uppercase'>
                        {seminar.Nama} - {seminar.NIM}
                      </div></Reveal>
                      <Reveal><div className='flex flex-row text-xs lg:text-sm'>
                        <h3 className='flex flex-row items-center mr-4 gap-1'> <MdMeetingRoom className='text-primary' size={18} /> {seminar.Ruangan}</h3>
                        <h3 className='hidden lg:flex flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary' size={17} /> {tanggal}</h3>
                        <h3 className='flex lg:hidden flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary' size={17} /> {tanggalsm}</h3>
                        <h3 className='flex flex-row items-center mr-4 gap-1'> <MdAccessTimeFilled className='text-accent' size={18} /> {waktu}</h3>
                      </div></Reveal>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-primary-focus/100 group-hover:via-primary/90 group-hover:to-primary/100" />
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Topik : "{seminar.Topik}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <div className='mr-2 hidden sm:flex'>
            <CalendarSeminar />
          </div>
          <div className='hidden sm:flex flex-col'>
            <Reveal>
              <h2 className='font-bold text-primary-focus text-lg'>
                Important Links
              </h2>
            </Reveal>
            {linkData.map((link) => (
              <div className='mr-2' key={link.number}>
                <ImportantLinks {...link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SeminarSection;