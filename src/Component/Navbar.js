import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

function Navbar() {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 ">
                {/* left side */}
                <div className="flex items-center">
                    <div onClick={() => setNav(!nav)} className="coursor-pointer">
                        <AiOutlineMenu size={30} />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl px-2">Best<span className="font-bold">Easts</span></div>
                    <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                        <div className="bg-black text-white rounded-full p-2">Delivery</div>
                        <div className="p-2">Pickup</div>
                    </div>
                </div>

                {/* search input */}
                <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                    <AiOutlineSearch size={25} />
                    <input type="text" placeholder="Search foods" className="bg-transparent p-2 w-full focus:outline-none" />
                </div>

                {/* cart button */}
                <button className="bg-black text-white hidden md:flex items-center py-2 px-3 rounded-full ">
                    <BsFillCartFill size={20} className="mr-2" />Cart
                </button>
            </div>
            {/* Mobile Menu */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 left-0 top-0"></div> : ''}

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="absolute right-4 top-4 coursor-pointer" />
                <div className="text-2xl p-4">Best<span className="font-bold">Eats</span></div>
                <nav>
                    <ul className="flex flex-col p-3 text-gray-800">
                        <li className="text-xl py-3 flex">
                            <TbTruckDelivery size={25} className="mr-4" />Order
                        </li>
                        <li className="text-xl py-3 flex">
                            <MdFavorite size={25} className="mr-4" />Favorite
                        </li>
                        <li className="text-xl py-3 flex">
                            <FaWallet size={25} className="mr-4" />Wallet
                        </li>
                        <li className="text-xl py-3 flex">
                            <MdHelp size={25} className="mr-4" />Help
                        </li>
                        <li className="text-xl py-3 flex">
                            <AiFillTag size={25} className="mr-4" />Promotions
                        </li>
                        <li className="text-xl py-3 flex">
                            <BsFillSaveFill size={25} className="mr-4" />Best Ones
                        </li>
                        <li className="text-xl py-3 flex">
                            <FaUserFriends size={25} className="mr-4" />Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;