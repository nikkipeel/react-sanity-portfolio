import React from 'react';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faQuoteRight, faUser, faTools, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return (
        <header className="bg-brown px-12">
            <div className="container md:flex md:justify-between">
                <nav className="md:flex justify-center items-center" id="top">
                    <NavLink to="/" exact activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6  text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink  text-base font-bold mono tracking-widest">
                        <FontAwesomeIcon icon={faHome} className="md:mr-4"></FontAwesomeIcon>  <p className="hidden md:block ">Home</p>
                    </NavLink>
                    <NavLink to="/post/" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faQuoteRight} className="md:mr-4"></FontAwesomeIcon> <p className="hidden md:block ">Blog</p>
                    </NavLink>
                    <NavLink to="/project" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faFolder} className="md:mr-4"></FontAwesomeIcon>  <p className="hidden md:block ">Projects</p>
                    </NavLink>
                    <NavLink to="/about" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faUser} className="md:mr-4"></FontAwesomeIcon>  <p className="hidden md:block ">About</p>
                    </NavLink>
                    <NavLink to="/tools" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faTools} className="md:mr-4"></FontAwesomeIcon> <p className="hidden md:block ">Tools</p>
                    </NavLink>
                </nav>
                <div className="hidden md:inline-flex items-center py-3 px-3">
                    <a href="mailto:nikkipeel.dev@gmail.com" className="mr-8 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://www.github.com/nikkipeel" className="mr-8 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.codepen.io/nikki-peel" className="mr-8 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faCodepen} /></a>
                    <a href="https://www.linkedin.com/in/nikkipeel" className="mr-8 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
                
                </div>
            </div>
        </header>
    )
}