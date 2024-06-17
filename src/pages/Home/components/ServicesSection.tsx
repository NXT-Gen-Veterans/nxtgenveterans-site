import BookConsultation from "@/components/BookConsultation/BookConsultation";
import Button from "components/Button/Button";
import { makeKey } from "store";

type Service = {
    title: string;
    imgAlt: string;
    btnUrl?: string;
    btnText?: string;
}

type ServiceCardProps = {
    service: Service;
    index: number;
}

function ServiceCard({service, index}: ServiceCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-fit gap-5">
            <div className={`flex items-center justify-center p-0.5 w-fit h-fit ${index === 1 ? "lg:rounded-[2rem]" : ""} rounded-3xl bg-gradient-to-br from-grad-blue to-ngv-blue`}>
                <img
                    className={` w-40 lg:w-52 ${index === 1 ? "lg:w-64 lg:rounded-[2rem]" : ""} rounded-3xl`}
                    src={`/assets/services${index+1}.png`}
                    alt={service.imgAlt}
                />
            </div>
            <p className="font-bold lg:body-btn">{service.title}</p>
            { 
                service.btnUrl && service.btnText ? (
                    <Button link={service.btnUrl}>
                        {service.btnText}
                    </Button>
                ) : (
                    <BookConsultation />
                )
            }
        </div>
    )
}

function ServicesSection() {
    const services: Service[] = [
        {
            title: "IT Bootcamp",
            imgAlt: "",
            btnUrl: "/bootcamp",
            btnText: "Learn More",
        },
        {
            title: "One-on-One Consultation",
            imgAlt: "",
        },
        {
            title: "Dozens of Online Resources",
            imgAlt: "",
            btnUrl: "/resources",
            btnText: "Browse Now",
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center gap-12 px-10 py-16">
            <h2 className="text-center">We meet you where you are</h2>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
            {
                services.map((service, index) => (
                    <ServiceCard
                        key={makeKey(service.title)}
                        service={service}
                        index={index}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default ServicesSection