import React from 'react'
import Features from './components/features'
import Navbars from "./components/Navbars"


function App() {

  return (
    <div className="App">
        <Navbars />
        
        {/* Hero Section */}
        <section id="hero">
          {/* Flex Container */}
          <div className="container flex flex-col-reverse  md:flex-row items-center px-6 mx-auto mt-10 md:space-y-0">
            {/* Left Item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                Bring everyone together to build better products.
              </h1>
              <p className="max-w-sm font-semibold text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for osftware teams to plan day-to-day tasks while keeping the larger team goals in view.
              </p>
              <div className="flex justify-center md:justify-start">
                <a href="/" className="px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline font-semibold hover:bg-brightRedLight">Get Started</a> {/* Red button */}
              </div>
            </div>
            {/* Image Item */}
            <div className="md:w-1/2">
              <img src="/assets/illustration-intro.svg" alt="Intro" />
            </div>
          </div>
        </section>
        {/* Fetures Section */}
        <Features />

    </div>
  )
}

export default App
