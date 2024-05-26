/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [count, setCount] = useState(1);
    const [mouseIn, setMouseIn] = useState(false);

    useEffect(() => {
        const timeouts = [];

        timeouts.push(setTimeout(demo, 500));
        timeouts.push(setTimeout(demo, 700));
        timeouts.push(setTimeout(demo, 900));
        timeouts.push(setTimeout(reset, 2000));
        timeouts.push(setTimeout(demo, 2500));
        timeouts.push(setTimeout(demo, 2750));
        timeouts.push(setTimeout(demo, 3050));

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, []);

    const demo = () => {
        if (mouseIn) return;
        setCount(prevCount => prevCount + 1);
        document.getElementById('demo' + count)?.classList.toggle('hover');
    };

    const reset = () => {
        setCount(1);
        const hovers = document.querySelectorAll('.hover');
        hovers.forEach(hover => hover.classList.remove('hover'));
    };

    const handleMouseOver = () => {
        setMouseIn(true);
        reset();
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="navbar-logo">
                    <Link to="/"><img src="/images/logo.jpeg" alt="Logo" /></Link>
                </div>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {/* Navigation Links */}

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* start dropdown menu  */}
                    <li class="dropdown fw-bold">
                        <button class="dropbtn">Courses<IoIosArrowDown size={18} className='mt-1 IoIosArrowDown' />
                        </button>
                        <div class="dropdown-content">
                            <Link to="/courses">all courses</Link>
                            <Link to="/coursesDetails">web development</Link>
                            <Link to="/coursesDetails">mobile development</Link>
                            <Link to="/coursesDetails">graphics</Link>
                            <Link to="/coursesDetails">IT & Software</Link>
                            <Link to="/coursesDetails">Data Science</Link>
                            <Link to="/coursesDetails">Artificial Intelligence</Link>
                            <Link to="/coursesDetails">Photoshop Course</Link>
                            <Link to="/coursesDetails">Illustrator Course</Link>
                        </div>
                    </li>

                    <li className='mr-3'>
                        <Link to="/instructors" className='mr-0'>instructors</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">about us</Link>
                    </li>
                    {/* User Registration */}
                    <div className="user-options uo-hidden">
                        <Link to='/signup' className="signup px-3 py-1 mr-2 mb-2">Sign Up</Link>
                        <Link to='/login' className="signup px-3 py-1 mb-2">Log In</Link>
                        {/* <Link to='/profile'><FaRegUser size={28} className="mr-3 mb-2 fauser" /></Link> */}
                    </div>

                </div>
                {/* User Registration */}
                <div className="user-options uo-show">
                    <Link to='/signup' className="signup px-2 py-1 mr-1 mb-2">Sign Up</Link>
                    <Link to='/login' className="signup px-2 py-1 mb-2">Log In</Link>
                    {/* <Link to='/profile'><FaRegUser size={28} className="mr-3 mb-2 fauser" /></Link> */}
                </div>
                {/* Mobile Menu Overlay */}
                {isOpen && <div className="overlay" onClick={toggleNavbar} />}

                {/* Hamburger Menu Icon */}
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

