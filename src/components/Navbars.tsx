import { useState } from 'react'
import { navbarLinks } from "../constants/index";
import Logo from '../assets/logo.svg'

function Navbars() {
  
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="relative container mx-auto p-6"> {/* Container */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="pt-2">
              <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>

            <div className={!toggle ? "rounded-full bg-brightRed p-4  md:hidden z-10" : "rounded-full p-4 bg-green-600 md:hidden z-10"} onClick={
              () => setToggle(!toggle)
            }></div>
             {/* Navbar Menu */}
            <div className="hidden md:flex space-x-6">
            {navbarLinks.map((link) => (
              <a href="" className="font-semibold hover:text-darkGrayishBlue" >{link.title}</a>
            ))}
            </div>

            {
              toggle && 
              <div className="md:hidden absolute bg-veryDarkBlue flex flex-col space-y-5 px-5 py-5 container top-3 mx-auto right-0 left-0 max-w-[95%] text-center rounded-[10px]">
                {navbarLinks.map((link) => (
              <a href="" className="font-semibold hover:text-darkGrayishBlue text-white" >{link.title}</a>
              ))}  
              </div>
            }
            
            {/* Red button */}
            <a href="" className="hidden md:block px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline font-semibold hover:bg-brightRedLight">Get Started</a> {/* Red button */}
          </div>
        </nav>
  )
}

export default Navbars