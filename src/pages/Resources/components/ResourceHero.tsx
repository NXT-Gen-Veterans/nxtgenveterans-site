import { useGlobalStore } from "store"

function ResourceHero() {
    const isPageScrolled = useGlobalStore(state => state.isPageScrolled);
  return (
    <>
    <div className={`${isPageScrolled ? "hidden" : "h-[3.25rem] lg:h-[4.35rem] bg-ngv-blue/50"} w-full`}></div>
    <div className={`bg-image !bg-top bg-[url('/assets/rsrc-hero.png')] bg-ngv-blue/90 bg-blend-darken text-white h-fit w-full py-20 flex flex-col items-center gap-8 px-4 md:px-6 lg:px-12`}>
    {/* <div className={`bg-image !bg-top bg-[url('/assets/rsrc-hero.png')] bg-ngv-blue/85 bg-blend-darken text-white h-fit w-full pb-20 lg:py-32 ${isPageScrolled ? "pt-24" : "pt-16 lg:pt-24 border-t-[3.25rem] lg:border-t-[4.5rem] border-t-white/50"} flex flex-col items-center gap-8 px-4 md:px-6 lg:px-12`}> */}
        <h2 className="">Resources</h2>
        <p className="text-center w-4/5 lg:w-[min(70%,65rem)]">
        Explore our resource links to access valuable information, tools, and 
        resources tailored to support military veterans in their transition to 
        civilian life. From career guidance and educational opportunities to 
        financial assistance and mental health resources, our carefully curated 
        collection offers a wealth of support to help you thrive post-service. 
        Whether you're just starting your transition journey or seeking additional 
        support along the way, our resource links are your gateway to valuable information 
        and support. Click here to discover the resources available to you and take control 
        of your transition today.
        </p>
    </div>
    </>
  )
}

export default ResourceHero