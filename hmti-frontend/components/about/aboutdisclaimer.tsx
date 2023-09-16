import { Reveal } from "../utils/reveal";

export default function Disclaimer () {
  return (
    <div className="flex justify-center">
      <Reveal>
        <span className='text-xs tracking-wider font-light cursor-pointer text-center'>
          to avoid any <b>misunderstandings</b>, some text will written in <b>bahasa</b>
        </span>
      </Reveal>
    </div>    
  );
};