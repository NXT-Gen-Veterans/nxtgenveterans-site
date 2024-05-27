import { useState, useEffect } from "react";
import OdometerComponent from "components/Odometer/Odometer";

function BannerSection() {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
        setValue(200);
        }, 3000);

        return () => clearInterval(interval);
    });

  return (
    <div className="flex flex-col md:flex-row-reverse justify-around xl:justify-center px-10 py-14 gap-12 lg:gap-32">
        <div className="flex flex-col justify-center items-center min-w-fit">
            <OdometerComponent value={value} />
            <h4 className="text-ngv-blue lg:text-black lg:sub-heading">in resource material</h4>
        </div>
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left md:w-[min(60%,35rem)]">
            <h2 className="">Learn a new tech skill with ease</h2>
            <p className="">
                We offer dozens of resources and tutorials
                plus a curriculum tailored to meet you where you are
            </p>
        </div>
    </div>
  )
}

export default BannerSection