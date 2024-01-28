import React from "react";
import order1 from "../assets/img/order1.jpg";
import order2 from "../assets/img/order2.jpg";
import order3 from "../assets/img/order3.jpg";

const HeadlineCard = () => {
    return (
        <>
            <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
                <div className="rounded-xl relative">
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <div className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's<br /> Out</div>
                        <div className="px-2">Through 8/26</div>
                        <button className="border-white bg-white text-black rounded-full mx-2 absolute bottom-4 px-2">Order Now</button>
                    </div>
                    <img src={order1} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" />
                </div>

                <div className="rounded-xl relative">
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <div className="font-bold text-2xl px-2 pt-4">New Restaurants</div>
                        <div className="px-2">Added Daily</div>
                        <button className="border-white bg-white text-black rounded-full mx-2 absolute bottom-4 px-2">Order Now</button>
                    </div>
                    <img src={order2} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" />
                </div>

                <div className="rounded-xl relative">
                    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                        <div className="font-bold text-2xl px-2 pt-4">We Delivery Desserts <br /> Too</div>
                        <div className="px-2">Tasty Treats</div>
                        <button className="border-white bg-white text-black rounded-full mx-2 absolute bottom-4 px-2">Order Now</button>
                    </div>
                    <img src={order3} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" />
                </div>
            </div>
        </>
    );
};
export default HeadlineCard;