import { useEffect, useState } from "react";

import Button from "components/Button/Button";
import caretIcon from "assets/caret.svg";

export type ContactFormType = "Volunteer" | "Partner" | "General";

interface ContactFormProps {
    type: ContactFormType;
}

interface FormDetailsType {
    title: string;
    isPartner?: boolean;
}

function ContactForm({type}: ContactFormProps) {
    const [formDetails, setFormDetails] = useState<FormDetailsType>({
        title: "",
        isPartner: false,
    });

    const [dropDownOpen, toggleDropDownOpen] = useState<boolean>(false);

    const types:ContactFormType[] = ["Volunteer", "Partner", "General"]

    function toggleType(newType: ContactFormType) {
        setFormDetails({
            title: newType,
            isPartner: newType === "Partner",
        });
        toggleDropdown();
    }

    function toggleDropdown() {
        toggleDropDownOpen(!dropDownOpen);
    }

    useEffect(() => {
        setFormDetails({
            title: type,
            isPartner: type === "Partner",
        });
    }, [type])

    return (
        <div className="bg-white/50 rounded-xl lg:rounded-3xl p-12 md:w-[min(70%,50rem)]">
            <h6 className={`relative rounded-full border-2 border-black w-fit px-5 py-1 cursor-pointer ${dropDownOpen ? "mb-32" : "mb-10"}`} onClick={toggleDropdown}>
                {formDetails.title}
                <img src={caretIcon} alt="" className={`inline ${dropDownOpen ? "rotate-180 pr-3" : "pl-3"}`} />
                <div className={`${dropDownOpen ? "flex" : "hidden"} flex-col gap-3 absolute -bottom-[6.5rem] lg:-bottom-[5.675rem] left-0 bg-white/50 shadow-md w-full py-2 ps-5 rounded-lg`}>
                    {types.map(title => (
                        title !== formDetails.title ?
                        <span className="body-btn lg:sub-heading" onClick={()=>toggleType(title)}>{title}</span>
                        : ""
                    ))}
                </div>
            </h6>

            <form className="w-full flex flex-col lg:items-center [&_*]:body-btn [&_*]:lg:sub-heading">
                <div className="lg:flex lg:justify-between w-full">
                    <div className="mb-5 lg:w-[min(45%,20rem)]">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-900/30 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Full Name" required />
                    </div>
                    <div className="mb-5 lg:w-[min(45%,20rem)]">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-900/30 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email Address" required />
                    </div>
                </div>
                <div className={`lg:flex w-full ${formDetails.isPartner ? "flex-wrap lg:justify-between" : "lg:justify-between"}`}>
                    <div className="mb-5 lg:w-[min(45%,20rem)]">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-900/30 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Phone Number" required />
                    </div>
                    {formDetails.isPartner ? (
                        <div className="mb-5 lg:w-[min(45%,20rem)]">
                            <label htmlFor="org" className="block mb-2 text-sm font-medium text-gray-900">Organization</label>
                            <input type="text" id="org" className="bg-gray-50 border border-gray-900/30 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Organization" required />
                        </div>
                    ) : ""}
                    <div className={`mb-5 ${formDetails.isPartner ? "lg:w-full" : "lg:w-[min(45%,20rem)]"}`}>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-900/30" placeholder="Leave us a message..."></textarea>
                    </div>
                </div>

                <div className="w-full flex justify-end pt-3">
                    <Button style="bg-btn-dark w-full lg:w-fit justify-self-start">Submit</Button>
                </div>
            </form>

        </div>
    )
}

export default ContactForm