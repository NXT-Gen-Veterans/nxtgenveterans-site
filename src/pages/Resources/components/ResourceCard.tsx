import Button from "components/Button/Button"
import { ResourceCardType } from "../data/resourceInfo"
import { ReactNode, useState } from "react"

interface FlipButtonProps {
    children: ReactNode;
    onClick: ()=>void;
}

interface ResourceCardProps extends ResourceCardType {
    bgImage: string;
}

function FlipButton({children, onClick}:FlipButtonProps) {
    return (
        <div
            className=""
            onClick={onClick}
        >
            <Button style="!px-4 !py-1 bg-btn-light text-sm">{children}</Button>
        </div>
    )
}

function ResourceCard({title, link, description, bgImage}:ResourceCardProps) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        // <div className={`${bgImage} bg-image bg-grad-blue bg-blend-overlay w-96 h-56 p-8 pe-5 text-center rounded-2xl overflow-hidden flex flex-col gap-5 relative`}>
        <div className={`${bgImage} bg-image w-full lg:w-[min(45%,35rem)] h-56 text-center rounded-2xl`}>
        <div className={`bg-grad-blue/80 backdrop-blur-[4.5px] w-full h-full p-5 text-center rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-5 relative`}>
            {/* Front of card */}
            <div className={`${isFlipped ? "hidden" : "flex flex-col w-full h-full items-center justify-center"}`}>
                <h6 className="">{title}</h6>
                <a href={link} target="_blank" rel="noopener noreferrer" className="[word-break:break-all] text-ngv-blue hover:text-ngv-hover font-bold">{link}</a>
            </div>
            {/* Back of card */}
            <div className={`${isFlipped ? "flex flex-col h-fit w-full p-5" : "hidden"} overflow-y-scroll card-scrollbar`}>
                <p className="h-fit">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-ngv-blue hover:text-ngv-hover sub-heading font-bold">Go to site</a>
            </div>
            <div className="h-fit absolute bottom-3 right-3 mt-5">
                <FlipButton
                    onClick={() => {setFlipped(state => !state)}}
                >
                    {isFlipped ? "Less info" : "More Info"}
                </FlipButton>
            </div>
        </div>
        </div>
    )
}

export default ResourceCard