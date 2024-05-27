import Button from "components/Button/Button"
import { makeKey } from "store";

type Position = "tl" | "tr" | "bl" | "br";

type DecorativeDivProps = {
    withImage?: boolean;
    imageAlt?: string;
    position: Position;
}

function DecorativeDiv({withImage, imageAlt, position}: DecorativeDivProps) {
    const sizeAndBorderStyle = position === "tl"
        ? "bg-grad-blue rounded-tl-[6.25rem] rounded-br-[1.25rem] w-[11.25rem] h-[11.25rem]"
        : position === "tr"
        ? "bg-grad-blue p-1 rounded-tr-[6.25rem] rounded-bl-[1.25rem] w-[14.375rem] h-[14.375rem]"
        : position === "bl"
        ? "bg-ngv-blue p-1 rounded-bl-[6.25rem] rounded-tr-[1.25rem] w-[13.75rem] h-[13.75rem]"
        : position === "br"
        ? "bg-ngv-blue rounded-br-[6.25rem] rounded-tl-[1.25rem] w-[12.5rem] h-[12.5rem]"
        : "";

    return (
        <div className={`${sizeAndBorderStyle}`}>
            {withImage ? (
                <img
                    src={`/assets/nxtstep-${position}.png`}
                    alt={imageAlt}
                    className={`[border-radius:inherit] w-full h-full`}
                />
            ) : ("")}
        </div>
    )
}

function OfferSection() {
    const positions: Position[] = ["tl", "tr", "bl", "br"];

    function handleRenderDecorativeDivs(position:Position) {
        return (
            <DecorativeDiv
                key={makeKey(position)}
                withImage={position === "tr" || position === "bl"}
                position={position}
            />
        )
    }

    return (
        <div className="bg-white/40 bg-gradient-to-bl lg:bg-gradient-to-b from-ngv-blue to-grad-blue bg-blend-overlay flex justify-center items-center px-10 py-14 xl:p-24 lg:gap-12 xl:gap-20 select-none">
            <div className="w-[34.375rem] px-10 hidden lg:flex flex-col gap-5 justify-center items-center">
                <div className="flex gap-5 w-full justify-end items-end">
                { positions.slice(0,2).map(handleRenderDecorativeDivs) }
                </div>
                <div className="flex gap-5 w-full justify-start items-start">
                { positions.slice(2).map(handleRenderDecorativeDivs) }
                </div>
            </div>
            <div className="md:w-4/5 lg:w-[min(40%,31rem)] flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
                <h2 className="">Let us be your next step</h2>
                <p className="">
                    We are dedicated to providing the most up-to-date educational tools 
                    and resources for the men and women who have served our country, 
                    helping them transition into the civilian workforce with ease and at no cost. 
                    We aim to make our resources easily accessible and free of charge, 
                    as a tribute and gesture of gratitude for their sacrifices. 
                    We are truly grateful and thankful for their service.
                </p>
                <Button link="/contact" style="bg-btn-dark">Get in touch</Button>
            </div>
        </div>
    )
}

export default OfferSection