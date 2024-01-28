import React from "react";
import { categories } from "../data/Data.js";

const Category = () => {
    console.log(categories)
    return (
        <>
            <div className="max-w-[1640px] px-4 py-12">
                <div className="text-orange-600 text-4xl text-center font-bold ">Top Rated Menu Items</div>
                {/* categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                    {categories.map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center ">
                            <div className="font-bold sm:text-xl">{item.name}</div>
                            <img src={item.image} alt={item.name} className="w-20 h-16 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Category;