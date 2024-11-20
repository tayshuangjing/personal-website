import React from 'react';
import './NavBar.css';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export const NavBar = () => {
    return (
        <header className="header">
            <a href="/" className="logo">Logo</a>

            <nav className="navbar">
                <div className='navText'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Experience</a>
                    <a href="/">Contact</a>
                </div>
                <div className='navIcon'>
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </nav>
        </header>
    )
}