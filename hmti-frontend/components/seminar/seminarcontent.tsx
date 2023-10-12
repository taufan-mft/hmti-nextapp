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

interface Iprops {
  dataSeminar: Iseminar[]
}

interface Iseminar {
  Tanggal: string,
  Ruangan: string,
  Waktu: string,
  Nama: string,
  NIM: string,
  Kategori: string
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
            <BiBookBookmark className={`p-1.5 rounded ${color} text-base-100`} size={30}/>
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
      <div className='flex flex-row xl:mx-36 lg:mx-28 sm:mx-2 mx-2 gap-2 lg:gap-5'>
        <div className='w-full'>
          <div tabIndex={0} className="scale-95 mb-5 w-auto cursor-pointer collapse collapse-arrow border border-base-100 bg-base-100">
            <div className="flex flex-row items-center gap-2 collapse-title text-lg font-medium">
              <MdInfoOutline /> Information
            </div>
            <div className="collapse-content">
              <p>Room for seminar <b>can be changed</b> at any time.</p>
            </div>
          </div>
          {dataSeminar.map((seminar: Iseminar) => {
            const tanggal = moment.utc(seminar.Tanggal).format('MMMM Do');
            const tanggalsm = moment.utc(seminar.Tanggal).format('MMM Do');

            let thumbnail = semPro
            let caption: string = 'Thumbnail Seminar Proposal'

            switch (seminar.Kategori) {
              case 'Seminar KP':
                thumbnail = semKp;
                caption = 'Thumbnail Seminar Kerja Praktek'
                break;
              case 'Seminar Hasil':
                thumbnail = semHas;
                caption = 'Thumbnail Seminar Hasil'
                break;
            }
            return (
              <div className='mt-2 cursor-pointer transition-transform duration-500 scale-95 hover:scale-100' key={seminar.NIM}>
                <div className='flex flex-row w-full bg-base-100 rounded-xl'>
                  <Image className="w-0 sm:w-14 lg:w-24 h-24 sm:h-28 rounded-l-xl object-cover"
                    src={thumbnail}
                    alt={caption}
                    quality={50}
                    height={100}
                    width={100}
                    loading='lazy'
                  />
                  <div className='flex flex-col justify-between m-4'>
                    <Reveal><h1 className='-mb-1 font-beautiful text-sm sm:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-focus to-secondary hover:from-secondary hover:to-warning'>
                      {seminar.Kategori}
                    </h1></Reveal>
                    <Reveal><div className='font-bold text-lg lg:text-xl line-clamp-1 mb-1'>
                      {seminar.Nama} - {seminar.NIM}
                    </div></Reveal>
                    <Reveal><div className='flex flex-row text-xs lg:text-sm'>
                      <h3 className='flex flex-row items-center mr-4 gap-1'> <MdMeetingRoom className='text-primary' size={18} /> {seminar.Ruangan}</h3>
                      <h3 className='hidden lg:flex flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary' size={17} /> {tanggal}</h3>
                      <h3 className='flex lg:hidden flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary' size={17} /> {tanggalsm}</h3>
                      <h3 className='flex flex-row items-center mr-4 gap-1'> <MdAccessTimeFilled className='text-accent' size={17} /> {seminar.Waktu}</h3>
                    </div></Reveal>
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