import Features from './components/Features';
import Navbars from "./components/Navbars";
import Intro from './assets/illustration-intro.svg';
import Testimonials from './components/testimonials';
import GetStartedBotton from './components/getStartedBotton'


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

        <Testimonials />
        {/* GetStartedBotton */}
        <div className="bg-brightRed">
          <div className="mt-14 py-24 px-6 flex-col  bg-brightRed container md:px-6 md:py-12 mx-auto flex md:flex-row justify-between">
              <h4 className='text-5xl md:text-4xl text-center md:text-left max-w-xl text-white font-bold'>Simplify how your team works today</h4>
              <div className='flex mt-12 md:mt-0 px-6 self-center pt-2 p-3 bg-white text-brightRed rounded-full baseline font-medium text-center  hover:bg-brightRedLight'>
                <a href="" className="">Get Started</a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default App
