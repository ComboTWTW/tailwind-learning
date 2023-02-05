import React from 'react'
import { navbarLinks } from "../constants/index";

function Navbars() {
  return (
    <nav className="relative container mx-auto p-6"> {/* Container */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="pt-2">
              <a href="/"><img src="./assets/logo.svg" alt="Logo" /></a>
            </div>


             {/* Navbar Menu */}
            <div className="hidden md:flex space-x-6">
            {
                navbarLinks.map((link) => {
                    return <a href="" className="font-semibold hover:text-darkGrayishBlue" >{link.title}</a>
                })
            }
            </div>
            
            {/* Red button */}
            <a href="" className="hidden md:block px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline font-semibold hover:bg-brightRedLight">Get Started</a> {/* Red button */}
          </div>
        </nav>
  )
}

export default Navbars