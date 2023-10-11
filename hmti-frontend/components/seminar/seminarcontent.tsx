import { Reveal } from '../utils/reveal';
import React from 'react';
import moment from 'moment';
import { MdAccessTimeFilled, MdDateRange, MdInfoOutline, MdMeetingRoom } from 'react-icons/md';
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

const SeminarSection: React.FC<Iprops> = ({ dataSeminar }) => {
  return (
    <>
    <div tabIndex={0} className="scale-95 lg:mx-56 sm:mx-24 mx-2 mb-5 w-auto cursor-pointer collapse collapse-arrow border border-base-100 bg-base-100 bg-opacity-50">
  <div className="flex flex-row items-center gap-2 collapse-title text-lg font-medium">
    <MdInfoOutline/> Some Tips
  </div>
  <div className="collapse-content"> 
    <p>You can add the event to your calendar <b>by clicking on it</b></p>
  </div>
</div>
      {dataSeminar.map((seminar: Iseminar) => {
        const tanggal = moment.utc(seminar.Tanggal).format('MMMM Do'); 
        const tanggalsm = moment.utc(seminar.Tanggal).format('MMM Do');
        
        let bgcolor: string ='bg-primary'
        
        switch (seminar.Kategori) {
          case 'Seminar KP' : 
          bgcolor = 'bg-secondary';
          break;
          case 'Seminar Hasil' : 
          bgcolor = 'bg-accent';
          break;
        }
        return (
          <div className='mt-2 lg:mx-56 sm:mx-24 mx-2 cursor-pointer transition-transform duration-500 scale-95 hover:scale-100' key={seminar.NIM}>
            <div className='flex flex-row w-full bg-base-100 rounded-xl'>
              <div className={`w-2 sm:w-14 lg:w-24 h-24 sm:h-28 ${bgcolor} rounded-l-xl`}/>
              <div className='flex flex-col justify-between m-4'>
                <Reveal><h1 className='-mb-1 font-beautiful text-sm sm:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-focus to-secondary hover:from-secondary hover:to-warning'>
                  {seminar.Kategori}
                </h1></Reveal>
                <Reveal><div className='font-bold text-lg lg:text-xl line-clamp-1 mb-1'>
                  {seminar.Nama} - {seminar.NIM}
                </div></Reveal>
                <Reveal><div className='flex flex-row text-xs lg:text-sm'>
                  <h3 className='flex flex-row items-center mr-4 gap-1'> <MdMeetingRoom className='text-primary' size={18}/> {seminar.Ruangan}</h3> 
                  <h3 className='hidden lg:flex flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary'size={17}/> {tanggal}</h3> 
                  <h3 className='flex lg:hidden flex-row items-center mr-4 gap-1'> <MdDateRange className='text-secondary'size={17}/> {tanggalsm}</h3> 
                  <h3 className='flex flex-row items-center mr-4 gap-1'> <MdAccessTimeFilled className='text-accent'size={17}/> {seminar.Waktu}</h3> 
                </div></Reveal>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default SeminarSection;