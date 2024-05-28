import { useParams, Link } from "react-router-dom"
import ContactForm, { ContactFormType } from "./components/ContactForm"

function Contact() {
  let { type } = useParams();

  type = type && type.split("").map((c,i)=>i===0?c.toUpperCase():c).join("");

  const formType: ContactFormType = (type === "Volunteer" || type === "Partner") ? type : "General";

  return (
    <div className="bg-[url('/assets/contact.png')] bg-image h-fit w-full pt-24 pb-20 lg:py-32 flex flex-col items-center justify-center gap-8 px-4 md:px-6 lg:px-12">
      <h2 className=" text-center">We'd love to hear from you</h2>
      <ContactForm type={formType} />
      <div className=" text-black flex flex-col items-center justify-center text-center body-btn lg:sub-heading">
        <div className="flex lg:gap-5 flex-col lg:flex-row">
          <Link className="hover:text-ngv-hover hover:underline" to="tel:+18047188630">+1 (804) 718 8630</Link>
          <Link className="hover:text-ngv-hover hover:underline" to="mailto:nxtgenveterans@gmail.com">nxtgenveterans@gmail.com</Link>
        </div>
        <span className="">Headquarters in Leesburg, Virginia</span>
      </div>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
