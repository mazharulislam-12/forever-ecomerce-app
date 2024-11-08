// Navbar.js
import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, signOut, googleProvider, signInWithPopup } from "../firebase"; // Updated imports
import { assets } from "../assets/assets";
import { useAuthState } from "react-firebase-hooks/auth";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [user] = useAuthState(auth); // Firebase hook to track user state
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  useEffect(() => {
    if (user) {
      console.log("User is logged in:", user);
    }
  }, [user]);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google login successful", user);
    } catch (error) {
      console.error("Google login error", error);
      alert("Google login failed!");
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img className="w-36" src={assets.logo} alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        <NavLink to="/" className="hover:bg-gray-600 hover:text-white">HOME</NavLink>
        <NavLink to="/collection" className="hover:bg-gray-600 hover:text-white">COLLECTION</NavLink>
        <NavLink to="/about" className="hover:bg-gray-600 hover:text-white">ABOUT</NavLink>
        <NavLink to="/contact" className="hover:bg-gray-600 hover:text-white">CONTACT</NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />
        <div className="group relative">
          <Link to={user ? "/profile" : "/login"}>
            {user ? (
              <img className="w-8 h-8 rounded-full" src={user.photoURL || assets.profile_icon} alt="profile" />
            ) : (
              <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="profile-icon" />
            )}
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            {user ? (
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer">My profile</p>
                <Link to="/orders" className="cursor-pointer">Orders</Link>
                <p onClick={() => signOut(auth)} className="cursor-pointer">Logout</p>
              </div>
            ) : (
              <p>Please login to see your profile</p>
            )}
          </div>
        </div>

        {/* Google Login Button */}
        {!user && (
          <button onClick={handleGoogleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Google Login
          </button>
        )}

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
