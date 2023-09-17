import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/hmtilogo.jpg";
import { BiMapAlt, BiSolidChevronRight } from 'react-icons/bi';
import { TbColorSwatch } from "react-icons/tb";

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
      <div className="navbar-start font-semibold">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BiMapAlt size={30}/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content ml-2 mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
            <li><Link rel="preload" href="/">Home</Link></li>
            <li>
              <Link rel="preload" href="#">About</Link>
              <ul className="p-2">
                <li><Link rel="preload" href="/organization">Organization</Link></li>
                <li><Link rel="preload" href="#">Hall of Fame</Link></li>
              </ul>
            </li>
            <li><Link href="/artery">Artery</Link></li>
            <li>
              Corner
              <ul className="p-2">
                <li><Link rel="preload" href="/update">Update</Link></li>
                <li><Link rel="preload" href="#">Memories</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost cursor-pointer lg:flex hidden"><Link rel="preload" href="/">
          <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 rounded-md"/></Link>
          <text className="text-xl font-raleway"><Link rel="preload" href="/">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
            HMTI
            </span>
            <span>
              UNSOED
            </span>
          </Link></text>
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
      
      <div className="navbar-center font-semibold hidden lg:flex">
        <ul className="menu menu-horizontal px-1 cursor-pointer">
          <li className="transition-transform duration-300 hover:scale-110 scale-100 hover:text-primary"><Link href="/">Home</Link></li>
          <li tabIndex={0} className="z-[2] transition-transform duration-300 hover:scale-110 scale-100 hover:text-primary">
            <details>
              <summary>About</summary>
                <ul className="p-2">
                  <li className="transition-transform duration-300 hover:scale-110 scale-100">
                    <Link rel="preload" href="/organization">Organization</Link>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-110 scale-100">
                    <Link rel="preload" href="">Hall of Fame</Link>
                  </li>
                </ul>
            </details>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 scale-100 hover:text-primary">
            <Link rel="preload" href="/artery">Artery</Link>
          </li>
          <li tabIndex={0} className="z-[2] transition-transform duration-300 hover:scale-110 scale-100 hover:text-primary">
            <details>
              <summary>Corner</summary>
                <ul className="p-2">
                  <li className="transition-transform duration-300 hover:scale-110 scale-100">
                    <Link rel="preload" href="/update">Update</Link>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-110 scale-100">
                    <Link rel="preload" href="#">Memories</Link>
                  </li>
                </ul>
            </details>
          </li>
        </ul>
      </div>
    
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="flex items-center p-2 cursor-pointer hover:text-primary">
            <TbColorSwatch className="ml-2" size={25}/>
          </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 h-72 overflow-auto rounded-box overflow-y h-18 w-52">
              <li>
              {themeValues.map((theme) => (
                  <div key={theme}  className="grid scale-95 mt-1 transition-transform duration-300 hover:scale-100 cursor-pointer bg-base-100 w-44 rounded-md" data-theme={theme}>
                    <button className="text-left w-20" data-set-theme={theme} data-act-class="ACTIVECLASS">
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </button>
                    <div className="flex flex-row bg-opacity-0" data-set-theme={theme} data-act-class="ACTIVECLASS" data-theme={theme}>
                    <BiSolidChevronRight className="text-primary" size={30}/>
                    <BiSolidChevronRight className="text-secondary -ml-5"size={30}/>
                    <BiSolidChevronRight className="text-accent -ml-5" size={30}/>
                    <BiSolidChevronRight className="text-neutral -ml-5" size={30}/>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}