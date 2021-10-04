import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer mt-16 py-8 bg-green-600">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    {/* footer menu  */}
                    <ul className="flex justify-end">
                        <li className="mx-8">
                            <button className="text-white text-2xl"><Link to="/home">Home</Link></button>
                        </li>
                        <li className="mx-8">
                            <button className="text-white text-2xl"><Link to="/about">About</Link></button>
                        </li>
                        <li className="mx-8">
                            <button className="text-white text-2xl"><Link to="/services">Services</Link></button>
                        </li>
                        <li className="mx-8">
                            <button className="text-white text-2xl"><Link to="/teachers">Teachers</Link></button>
                        </li>
                    </ul>
                    {/* footer social icon  */}
                    <div className="social-icon">
                        <a href="#"><i className="fab fa-facebook py-2 px-4 rounded-full mx-4 bg-white text-green-600 text-2xl"></i></a>
                        <a href="#"><i className="fab fa-twitter py-2 px-4 rounded-full mx-4 bg-white text-green-600 text-2xl"></i></a>
                        <a href="#"><i className="fab fa-youtube py-2 px-4 rounded-full mx-4 bg-white text-green-600 text-2xl"></i></a>
                    </div>
                </div>
                {/* copyright text  */}
                <div>
                    <p className="text-center text-white mt-8">© 2021 Created by Nazmus Sakib</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;