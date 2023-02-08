import { TestCard } from "../constants/index";

const Testimonials = () => (
  <div className="container max-w-6xl  mx-auto flex flex-col mt-32 items-center px-4 ">
    <h2 className=" text-4xl font-bold text-center">
        What's different About Manage?
    </h2>

    <div className="flex flex-col  space-y-16 mt-10 md:flex-row">
      {TestCard.map((card) => (
        <div className="flex flex-col mt-16 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <img className="-mt-14 h-[64px] w-[64px]" src={card.avatar} alt="" />
          <h4 className="font-bold text-lg">{card.name}</h4>
          <p className="text-center text-darkGrayishBlue text-[14px] sm:text-sm">{card.text}</p>
        </div>
      ))}
    </div>

    <a href="" className="mt-10 px-6 pt-2 p-3 text-white bg-brightRed rounded-full font-medium hover:bg-brightRedLight">Get Started</a>
  </div>
)

export default Testimonials