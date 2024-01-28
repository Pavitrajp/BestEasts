import React from "react";
import bgscrol from "../assets/img/bgscrol.jpg";

const Hero = () => {
    return (
        <>
            <div className="max-w-[1640px] mx-auto p-4">
                <div className="max-h-[500px] relative">
                    <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                        <div className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">The<span className="text-orange-500">Best</span></div>
                        <div className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold "><span className="text-orange-500">Foods</span>Delivery</div>
                    </div>
                    <img src={bgscrol} className="w-full max-h-[500px] object-cover" />
                </div>
            </div>
        </>
    );
};
export default Hero;