import { useGlobalStore } from "store"

function StayTuned() {
    const isPageScrolled = useGlobalStore(state => state.isPageScrolled);
  return (
    <div className={`bg-ngv-blue text-white h-fit w-full pb-20 lg:py-32 ${isPageScrolled ? "pt-24" : "pt-16 lg:pt-24 border-t-[3.25rem] lg:border-t-[4.5rem] border-t-white/30"} flex flex-col items-center gap-8 px-4 md:px-6 lg:px-12`}>
        <div className="text-center">
            <h2 className="">Stay Tuned!</h2>
            <p className="body-btn lg:sub-heading !font-bold">IT Bootcamp coming soon</p>
        </div>
        <p className="text-center w-4/5 lg:w-[min(70%,65rem)]">
        Currently, we are in the process of developing content for our upcoming IT bootcamps. 
        These boot camps will offer 8 and 12-week programs covering various IT industries. 
        In the meantime, we're excited to announce that we've obtained permission from 
        professional YouTube instructors to provide access to their full programming language 
        courses. Rest assured, we will keep you updated on our progress as we prepare to launch 
        our bootcamps. It's important to note that our IT bootcamps will only be accessible and 
        provided free of charge to our veterans.
        </p>
    </div>
  )
}

export default StayTuned