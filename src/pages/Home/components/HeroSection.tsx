import BookConsultation from "components/BookConsultation/BookConsultation";
import Button from "components/Button/Button";

function HeroSection() {
  return (
    <div className="bg-[url('/assets/hero.png')] bg-blue-100/30 bg-blend-lighten lg:bg-transparent lg:bg-blend-normal bg-right-top lg:bg-center bg-cover bg-no-repeat h-fit w-full pt-24 pb-20 lg:py-32 flex flex-col gap-8 px-4 md:px-6 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="sub-heading">Welcome to NXT Gen Veterans</p>
          <h2 className="!large-text">
              <span className="font-normal">You've served us,</span><br />
              <span>now let us serve you</span>
          </h2>
          <p className="body-btn font-bold lg:sub-heading">We assist you on your next career step. Book a one-on-one consultation with a  member of our team to get started!</p> 
        </div>
        <div className="flex flex-col md:flex-row gap-5">
            <Button link="/about">Find out more</Button>
            <BookConsultation style={"bg-ngv-blue hover:bg-ngv-hover text-white"} />        
        </div>
    </div>
  )
}

export default HeroSection