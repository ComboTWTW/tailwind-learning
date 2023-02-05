import React from 'react'
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
              <img src="../img/illustration-intro.svg" alt="Intro" />
            </div>
          </div>
        </section>
        {/* Fetures Section */}
        <section id="features">
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* What's different item*/}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
              </h2>
              <p className="max-w-sm font-semibold text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our software is tilormade for modern digital product teams.
              </p>
            </div>
            {/* Numbered List */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* List item 1 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Header */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full font-bold bg-brightRed md:py-1">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">Track company-wide progress</h3>
                  </div>
                </div>
                <div className="">
                  <h3 className="hidden mb-4 font-bold text-lg md:block">Track company-wide progress</h3>
                  <p className="text-darkGrayishBlue font-semibold">
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way down to the
                  smallest of details. Never lose sight of the bigger picture
                  again.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Header */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full font-bold bg-brightRed md:py-1">
                      02
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">Advanced built-in reports</h3>
                  </div>
                </div>
                <div className="">
                  <h3 className="hidden mb-4 font-bold text-lg md:block">Advanced built-in reports</h3>
                  <p className="text-darkGrayishBlue font-semibold">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                  again.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Header */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full font-bold bg-brightRed md:py-1">
                      03
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">Everything you need in one place</h3>
                  </div>
                </div>
                <div className="">
                  <h3 className="hidden mb-4 font-bold text-lg md:block">Everything you need in one place</h3>
                  <p className="text-darkGrayishBlue font-semibold">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default App
