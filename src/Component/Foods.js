import React, { useState } from "react";
import { data } from "../data/Data.js";

const Foods = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)

    // filter type burger/Pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // filter type price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <>
            <div className="max-w-[1640px] mx-auto px-4 py-12">
                <div className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</div>
                {/* filter row */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* filter type */}
                    <div>
                        <div className="font-bold text-gray-700 mt-2">Filter Type</div>
                        <div className="flex justify-between flex-wrap">
                            <button onClick={() => setFoods(data)} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">All</button>
                            <button onClick={() => filterType('burger')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">Burger</button>
                            <button onClick={() => filterType('pizza')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">Pizza</button>
                            <button onClick={() => filterType('salad')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">Salads</button>
                            <button onClick={() => filterType('chicken')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">Chicken</button>
                        </div>
                    </div>
                    {/* filter price */}
                    <div>
                        <div className="font-bold text-gray-700">Filter Price</div>
                        <div className="flex justify-between max-w-[200px] w-full mr-[16px]">
                            <button onClick={() => filterPrice('$')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">$</button>
                            <button onClick={() => filterPrice('$$')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">$$</button>
                            <button onClick={() => filterPrice('$$$')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">$$$</button>
                            <button onClick={() => filterPrice('$$$$')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 py-1 rounded-full lg:mx-2 my-2">$$$$</button>
                        </div>
                    </div>
                </div>
                {/* display foods */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {foods.map((item, index) => (
                        <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <p>
                                    <span className="bg-orange-500 text-white p-1 rounded-full ">{item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Foods;



