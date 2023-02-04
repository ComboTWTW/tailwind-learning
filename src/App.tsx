
function App() {

  return (
    <div className="App">
        <nav className="relative container mx-auto p-6"> {/* Container */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="pt-2">
              <a href="/"><img src="../img/logo.svg" alt="Logo" /></a>
            </div>

             {/* Navbar Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="" className="font-semibold hover:text-darkGrayishBlue">Pricing</a>
              <a href="" className="font-semibold hover:text-darkGrayishBlue">Product</a>
              <a href="" className="font-semibold hover:text-darkGrayishBlue">About us</a>
              <a href="" className="font-semibold hover:text-darkGrayishBlue">Careers</a>
              <a href="" className="font-semibold hover:text-darkGrayishBlue">Community</a>
            </div>
            
            {/* Red button */}
            <a href="" className="hidden md:block px-6 pt-2 p-3 text-white bg-brightRed rounded-full baseline font-semibold hover:bg-brightRedLight">Get Started</a> {/* Red button */}
          </div>
        </nav>
        
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
            <div className="container flex flex-col space-y-8 md:max-w-1/2">
              {/* List item 1 */}
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default App
