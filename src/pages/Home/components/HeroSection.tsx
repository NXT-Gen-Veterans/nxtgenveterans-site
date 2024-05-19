import BookConsultation from "@/components/BookConsultation/BookConsultation";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-[url('/assets/hero.png')] bg-right-top lg:bg-center bg-cover bg-no-repeat h-fit w-full pt-[5.5rem] lg:pt-28 flex flex-col gap-4 lg:gap-8 px-4 md:px-6 lg:px-12 pb-8 lg:pb-12">
        <p className="sub-heading">Welcome to NXT Gen Veterans</p>
        <h1 className="text-3xl lg:text-6xl flex flex-col gap-4 lg:gap-6">
            <span className=" font-normal">You've served us,</span>
            now let us serve you
        </h1>
        <p className="body-btn lg:sub-heading">We assist you on your next career step. Book a one-on-one consultation with a  member of our team to get started!</p>
        <div className="flex flex-col md:flex-row gap-5">
            <Link to="/about" className="bg-ngv-blue text-white rounded-xl shadow-md px-4 py-2 body-btn w-fit">Find out more</Link>
            <BookConsultation />        
        </div>
    </div>
  )
}

export default HeroSection