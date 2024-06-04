import ResourceCard from "./ResourceCard";
import { ResourceGroupType } from "../data/resourceInfo";
import filledcaret from "assets/filled-caret.svg"
import { makeKey } from "store";

function ResourceGroup({title, bgImage, cards}: ResourceGroupType) {
  return (
    <details className="bg-ngv-blue rounded-3xl lg:rounded-[3rem] lg:open:rounded-[2.25rem] [&>div]:lg:open:rounded-b-[2.25rem] outline-none [&_img]:open:rotate-180 text-white w-full md:w-[min(70%,60rem)]">
        <summary className="flex justify-between px-5 py-3 lg:px-10 lg:py-5 cursor-pointer">
            <h4 className="max-md:!sub-heading md:!text-2xl !font-bold">{title}</h4>
            <img src={filledcaret} alt="" className=" w-4 md:w-5" />
        </summary>
        <div className="border-2 border-ngv-blue rounded-b-3xl lg:rounded-b-[3rem] p-5 lg:p-10 bg-white text-black flex flex-wrap items-center justify-between gap-5 lg:gap-10">
            {cards.map(card => (
                <ResourceCard
                    key={makeKey(card.title)}
                    title={card.title}
                    link={card.link}
                    description={card.description}
                    bgImage={bgImage}
                />
            ))}
        </div>
    </details>
  )
}

export default ResourceGroup