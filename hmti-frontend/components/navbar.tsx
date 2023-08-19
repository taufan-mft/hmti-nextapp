import Image from "next/image";
import Logo from "../public/hmtilogo.jpg";
import { BiMapAlt } from 'react-icons/bi';

export default function Navbar() {
  const themeValues = [
    "default",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BiMapAlt size={30}/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content ml-2 mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
            <li><a>Home</a></li>
            <li>
              <a>About</a>
              <ul className="p-2">
                <li><a>History</a></li>
                <li><a>Organization</a></li>
              </ul>
            </li>
            <li><a>Event</a></li>
            <li>
              <a>Academic</a>
              <ul className="p-2">
                <li><a>Artery</a></li>
                <li><a>Curiculum</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost cursor-pointer lg:flex hidden">
          <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 rounded-md"/>
          <text className="text-xl font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
            HMTI
            </span>
            <span className="">
              UNSOED
            </span>
          </text>
        </div>
      </div>

      <div className="navbar-center cursor-pointer flex lg:hidden">
        <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 mr-1 rounded-sm"/>
        <text className="text-xl font-raleway sm:flex hidden">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
            HMTI
          </span>
          <span className="ml-1">
            UNSOED
          </span>
        </text>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 cursor-pointer">
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
          <li><a>Event</a></li>
          <li tabIndex={0} className="z-[2]">
            <details>
              <summary>Academic</summary>
                <ul className="p-2">
                  <li><a>Artery</a></li>
                  <li><a>Curiculum</a></li>
                </ul>
            </details>
          </li>
        </ul>
      </div>
    
      <div className="navbar-end">
      <select className="select select-sm primary text-primary sm:flex hidden" data-choose-theme>
          <option className="text-primary" value="">Themes</option>
          {themeValues.map((value) => (
            <option className="text-primary" key={value.toLowerCase()}
            value={value.toLowerCase()}>{value.charAt(0).toUpperCase() + value.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}