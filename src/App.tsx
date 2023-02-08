import Features from "./components/features";
import Navbars from "./components/Navbars";
import Intro from './assets/illustration-intro.svg';
import Logo from './assets/logo-white.svg';
import Testimonials from "./components/Testimonials";
import {footerLinks} from './constants/index'
import {footerCol} from './constants/index'
import { TestCard } from "./constants/index";


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
              <img src={Intro} alt="Intro" />
            </div>
          </div>
        </section>
        {/* Fetures Section */}
        <Features />

        <div className="container max-w-6xl  mx-auto flex flex-col mt-32 items-center px-4 ">
    <h2 className=" text-4xl font-bold text-center">
        What's different About Manage?
    </h2>

    <div className="flex flex-col md:space-x-6 space-y-16 mt-10 md:flex-row">
      {TestCard.map((card) => (
        <div className="flex flex-col mt-16 items-center p-6 space-y-6 rounded-md bg-veryLightGray md:w-1/3">
          <img className="-mt-14 h-[64px] w-[64px]" src={card.avatar} alt="" />
          <h4 className="font-bold text-md">{card.name}</h4>
          <p className="text-center text-darkGrayishBlue text-[14px] sm:text-sm">{card.text}</p>
        </div>
      ))}
    </div>

    <a href="" className="mt-10 px-6 pt-2 p-3 text-white bg-brightRed rounded-full font-medium hover:bg-brightRedLight">Get Started</a>
  </div>
        
        {/* GetStartedBotton */}
        <div className="bg-brightRed">
          <div className="mt-14 py-24 px-6 flex-col  bg-brightRed container md:px-6 md:py-12 mx-auto flex md:flex-row justify-between">
              <h4 className='text-5xl md:text-4xl text-center md:text-left max-w-xl text-white font-bold'>Simplify how your team works today</h4>
              <div className='flex mt-12 md:mt-0 px-6 self-center p-3 bg-white text-brightRed rounded-full baseline font-medium text-center  hover:bg-veryDarkBlue'>
                <a href="" className="">Get Started</a>
              </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-veryDarkBlue" id="footer">
          <div className="container mx-auto flex flex-col gap-10 lg:flex-row items-center lg:justify-between py-16 lg:py-10 px-6 md:flex-row flex-wrap md:justify-center md:gap-x-24">
            {/* First Element */}
            <div className="flex flex-col space-y-16 items-center lg:items-start"> {/* First Element */}
              <img className="w-[194px] h-[32px]" src={Logo} alt="logo-whtie" />
              <div className="flex flex-row gap-5 lg:gap-3">
                {footerLinks.map((link) => (
                  <a href=""><img className="min-w-[33px] min-h-[32px]" src={link.pictute} alt="" /></a>
                ))}
              </div>
            </div>
            {/* Second Element */}
            <div className="columns-2 flex flex-row gap-32 lg:gap-16 ">
                  <ul className="flex flex-col space-y-3 items-center lg:items-start">
                    {footerCol.slice(0, 4).map((item) => (
                      <a href=""><li className="text-white hover:text-brightRed">{item.text}</li></a>
                    ))}
                  </ul>
                  <ul className="flex flex-col space-y-3">
                    {footerCol.slice(4).map((item) => (
                      <a href=""><li className="text-white hover:text-brightRed">{item.text}</li></a>
                    ))}
                  </ul>
            </div> 
            {/* Third Element */}
            <div className="flex flex-col space-y-16 items-center lg:mt-0 lg:items-start md:mt-16">
              <div className="flex-flex-row space-x-3">
                <input className="focus:outline-none rounded-full py-2 px-3 bg-white" placeholder="Updated in your inbox" type="text" />
                <button className="bg-brightRed rounded-full  px-6 lg:px-4 py-2 text-white hover:bg-darkGrayishBlue">Go</button>
              </div>
              <p className="font-medium text-white">Copyright © 2022, All Rights Reserved </p>
            </div>
          </div>
        </div>
        {/* Footer */}
    </div>
  )
}

export default App
