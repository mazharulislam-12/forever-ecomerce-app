import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets"
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "./SearchBar";

const Navbar = () => {

    const [visable, setVisable] = useState(false);

    const { setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex  items-center justify-between py-5 font-medium '>
            <Link to='/'>
                <img className="w-36" src={assets.logo} alt="logo" />
            </Link>
            <ul className="hidden sm:flex gap-6 text-sm text-gray-700 ">

                <NavLink to='/' className='flex flex-col items-center gap-1 hover:bg-gray-600 hover:px-2 hover:py-0 hover:text-white hover:rounded-sm '>
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm " />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm'>
                    <p>COLLACTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm" />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm '>
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm" />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm'>
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden hover:bg-gray-600 hover:px-2 hover:py-1 hover:text-white hover:rounded-sm" />
                </NavLink>

            </ul>

            <div className="flex items-center gap-6 ">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />
                <div className="group relative">
                    <Link to='/login'>
                        <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="profile-icon" />
                    </Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                            <p className="cursor-pointer hover:text-black">My profile</p>
                            <Link to='/orders' className="cursor-pointer hover:text-black">Orders</Link>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5 " alt="" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]  ">{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisable(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
            </div>

            {/* sidebar menu for small screen */}
            <div className={`absolute top-0 ring-0 bottom-0 overflow-hidden bg-white transition-all ${visable ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisable(false)} className="flex items-center gap-4 p-3 cursor-pointer ">
                        <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisable(false)} to='/'>HOME</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisable(false)} to='/collection'>CALLECTION</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisable(false)} to='/about'>ABOUT</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisable(false)} to='/contact'>CONTACT</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Navbar;