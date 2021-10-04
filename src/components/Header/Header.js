import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header container my-8 flex justify-between mx-auto">
            {/* main logo  */}
            <div className="logo">
                <h2 className="text-5xl">Learn<span className="text-green-600 ">English</span></h2>
            </div>
            {/* main menu  */}
            <ul className="flex justify-end">
                <li className="mx-8">
                    <button className="text-2xl"><Link to="/home">Home</Link></button>
                </li>
                <li className="mx-8">
                    <button className="text-2xl"><Link to="/about">About</Link></button>
                </li>
                <li className="mx-8">
                    <button className="text-2xl"><Link to="/services">Services</Link></button>
                </li>
                <li className="mx-8">
                    <button className="text-2xl"><Link to="/teachers">Teachers</Link></button>
                </li>
            </ul>
        </div>
    );
};

export default Header;