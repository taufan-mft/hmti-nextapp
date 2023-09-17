import { Reveal } from "../utils/reveal";

export default function Disclaimer () {
  return (
    <div className="flex justify-center text-center mx-2">
      <Reveal>
        <span className='text-xs tracking-wider font-light cursor-pointer'>
          to avoid any <b>misunderstandings</b>, some text will written in <b>bahasa</b>
        </span>
      </Reveal>
    </div>    
  );
};