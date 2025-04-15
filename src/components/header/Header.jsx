import React from 'react';
import { NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-36 px-4 shadow bg-[#23BE0A] text-white text-sm">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/listed-books'>Listed Books</NavLink>
                        <NavLink to='/page-to-read'>Page to Read</NavLink>
                    </ul>
                </div>
                <a className="text-xl md:text-2xl text-[#23BE0A] font-bold">Book Vive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-4 text-xl">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/listed-books'>Listed Books</NavLink>
                    <NavLink to='/page-to-read'>Page to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-1 md:gap-2 ">
                <NavLink to='login'> <a className="btn bg-[#23BE0A] text-white">Log in</a></NavLink>
                <NavLink to='signup'> <a className="btn bg-[#59C6D2] text-white">Sign Up</a></NavLink>
            </div>
        </div>

    );
};

export default Header;