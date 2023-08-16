import Image from "next/image";
import Logo from "../public/hmtilogo.jpg";
import { BiMapAlt } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BiMapAlt size={30}/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content ml-2 mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>About</a>
              <ul className="p-2">
                <li><a>History</a></li>
                <li><a>Organization</a></li>
              </ul>
            </li>
            <li>
              <a>Academic</a>
              <ul className="p-2">
                <li><a>Artery</a></li>
                <li><a>Curiculum</a></li>
              </ul>
            </li>
            <li><a>Event</a></li>
          </ul>
        </div>
        <div className="btn btn-ghost cursor-pointer lg:flex hidden">
          <Image src={Logo} alt="Logo HMTI" className="h-8 w-8"/>
          <text className="text-xl text-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
            HMTI 
            <a className="text-neutral font-semibold">
              UNSOED
            </a>
          </text>
        </div>
      </div>

      <div className="navbar-center cursor-pointer flex lg:hidden">
        <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 mr-1"/>
        <text className="text-xl text-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning sm:flex hidden">
          HMTI
          <a className="ml-1 text-neutral font-bold">
            UNSOED
          </a>
        </text>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li tabIndex={0} className="z-[2]">
            <details>
              <summary>About</summary>
                <ul className="p-2">
                  <li><a>History</a></li>
                  <li><a>Oranization</a></li>
                </ul>
            </details>
          </li>
          <li tabIndex={0} className="z-[2]">
            <details>
              <summary>Academic</summary>
                <ul className="p-2">
                  <li><a>Artery</a></li>
                  <li><a>Curiculum</a></li>
                </ul>
            </details>
          </li>
          <li><a>Event</a></li>
        </ul>
      </div>
    
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}