import logoWhite from "assets/Logo/White.png";
import BookConsultation from "../BookConsultation/BookConsultation";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20 px-12 pt-12 justify-center items-center bg-ngv-blue text-white">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start gap-14">
            {/* Company ID */}
            <div className="flex flex-col gap-5">
                <img src={logoWhite} alt="" className="w-14" />
                <div>
                    <p>Proudly serving our heroes</p>
                    <p>We are a Virginia 501(c)3 nonprofit</p>
                </div>
                <BookConsultation />
            </div>
            {/* Info Blocks */}
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:w-full gap-7">
                {/* Services Block */}
                <div className="flex flex-col gap-2">
                    <h6>Services</h6>
                    <div className="flex flex-col body-btn">
                        <Link to="/bootcamp">IT Bootcamp</Link>
                        <Link to="/resources">Resources</Link>
                    </div>
                </div>
                {/* Organization Block */}
                <div className="flex flex-col gap-2">
                    <h6>Organization</h6>
                    <div className="flex flex-col body-btn">
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Partner with Us</Link>
                    </div>
                </div>
                {/* Legal Block */}
                <div className="flex flex-col gap-2">
                    <h6>Legal</h6>
                    <div className="flex flex-col body-btn">
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
                {/* Contact Block */}
                <div className="flex flex-col gap-2">
                    <h6>Contact</h6>
                    <div className="flex flex-col body-btn">
                        <Link to="tel:+18047188630">+1 (804) 718 8630</Link>
                        <Link to="mailto:nxtgenveterans@gmail.com">nxtgenveterans@gmail.com</Link>
                        <Link to="/contact" className="bg-white text-black px-4 py-1 my-2 w-fit rounded-lg">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Copyright */}
        <div className="w-full h-fit flex flex-col justify-center items-center">
            <hr className="w-full text-white" />
            <p className="text-center p-5">Copyright © 2024 NXT Gen Veterans</p>
        </div>
    </div>
  )
}

export default Footer