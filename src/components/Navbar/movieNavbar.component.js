import React from "react";
import { BiChevronDown, BiChevronRight,BiMenu, BiSearch, BiChevronLeft, BiShareAlt} from "react-icons/bi";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
            
            </div>
            <div className="w-8 h-8">
            <BiShareAlt className="w-full h-full" />
            </div>
        </div>
        </>

    )
};

const NavLg = () => {
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2">
                 <div className="h-12 w-12">
                 <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" 
                   alt="logo" className="w-full h-full" />
                 </div>
                <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                  <BiSearch />
                  <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                </div>     
            </div>
            <div className="flex items-center gap-3">
            <span className="text-grey-300 text-xs flex items-center hover:text-white cursor-pointer">Pune <BiChevronDown />
            </span>
            <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
              Sign In
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full" />
            </div>
            </div>

        </div>
        </>
    )
};

const MovieNavbar = () => {
    return (
        <>
        <nav className="absolute inset-x-0 z-25 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-700 px-4 py-2">
       <div className="md:hidden">{
           /*Mobile Screen */
           <NavSm />
       }</div>
       <div className="hidden lg:hidden md:block">{
           <NavSm />
       }</div>
       <div className="hidden lg:flex">{
           <NavLg />
       }</div>
        </nav>
        </>
    );
};

export default MovieNavbar;
