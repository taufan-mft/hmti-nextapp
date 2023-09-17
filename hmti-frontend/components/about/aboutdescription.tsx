import { Reveal } from "../utils/reveal";

export default function AboutDescription () {
  return (
    <div className="flex sm:flex-row flex-col sm:mx-10 lg:mx-20 mx-4 my-10">
        <div className="basis-2/5">
            <Reveal>
                <h3 className="font-beautiful px-1 pt-1 lg:text-lg text-xs opacity-50 hover:opacity-80 cursor-pointer">Perancang Muda Penuh Karya untuk Indonesia</h3>
            </Reveal>
            <Reveal>
                <h2 className="lg:text-5xl text-4xl font-bold tracking-tight pb-5 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r bg-base-content hover:from-secondary hover:to-primary">
                    How it started?
                </h2>
            </Reveal>
        </div>
        <div className="basis-3/5">
        <Reveal>
        <div className="text-justify lg:text-xl sm:text-lg text-sm tracking-wide font-semibold opacity-40 hover:opacity-80 cursor-pointer">
            The Industrial Engineering Student Association, abbreviated as HMTI, is one of the student organizations at Jenderal Soedirman University's Faculty of Engineering. 
            HMTI Unsoed was formally established on <b className="font-bold">Saturday, March 4, 2017, at 10:00 A.M</b>. The Officers of the Industrial Engineering Student Association (HMTI) Unsoed 
            were inaugurated in <b className="font-bold">Room 101 of Building B at the Jenderal Soedirman University's Faculty of Engineering</b>. The Deputy Dean 3, Head of the Industrial Engineering Department, 
            Industrial Engineering Faculty lecturers, representatives from HIMA and UKM of the Faculty of Engineering, Unsoed, as well as officers and members of HMTI Unsoed, 
            all participated in this event.
        </div>
        </Reveal>
        </div>
    </div>    
  );
};