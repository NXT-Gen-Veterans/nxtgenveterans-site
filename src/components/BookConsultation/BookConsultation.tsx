import { useRef, useState } from "react";
import { InlineWidget } from "react-calendly";

type BookConsultationProps = {
    handleToggleOpen?: ()=>void;
    isNav?: boolean;
    isNavOpen?: boolean;
}

function BookConsultation(props: BookConsultationProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isDialogOpen, setDialogOpen] = useState(false);

    function openConsultationModal() {
        props.handleToggleOpen && props.handleToggleOpen();
        dialogRef.current?.showModal();
        setDialogOpen(true);
        document.body.style.overflow = "hidden";
    }
    
    function closeConsultationModal() {
        dialogRef.current?.close();
        setDialogOpen(false);
        document.body.style.overflow = "unset";
    }
    
    return (
        <>
            <dialog className="absolute top-0 left-0 open:w-full open:h-full lg:open:w-[min(95dvw,85rem)] lg:open:h-[90%] lg:open:max-h-[90%] open:rounded-xl [user-select:none] pointer-events-auto" ref={dialogRef}>
                <div 
                    className="pr-7 pt-4 absolute right-0 top-0"
                    onClick={closeConsultationModal}
                >
                    <p className="p-1 pb-2 bg-white rounded-full flex justify-center items-center cursor-pointer text-4xl [line-height:1rem] rotate-45">+</p>
                    <p className="sr-only">Close modal</p>
                </div>
                <InlineWidget
                    url="https://calendly.com/nxtgenveterans/veteran-consultation?primary_color=020281"
                    styles={{
                        height: "100%",
                        width: "100%",
                    }}
                />
                
            </dialog>

            <button
                className={`bg-white text-black px-4 py-2 rounded-xl body-btn w-fit shadow-md ${props.isNav && ((props.isNavOpen && !isDialogOpen) ? "opacity-100 w-fit h-fit pointer-events-auto" : (!props.isNavOpen && !isDialogOpen) ? "hidden lg:block" : "opacity-0 w-0 h-0 pointer-events-none")}`}
                onClick={openConsultationModal}
            >Book Consultation</button>
        </>
    )
}

export default BookConsultation