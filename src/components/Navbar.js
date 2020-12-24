import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faQuoteRight, faUser, faTools, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return (
        <header className="bg-brown px-12">
            <div className="container flex justify-between">
                <nav className="flex justify-center" id="top">
                    <NavLink to="/" exact activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6  text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink  text-base font-bold mono tracking-widest leading-loose">
                        <FontAwesomeIcon icon={faHome} className="mr-4"></FontAwesomeIcon> Home
                    </NavLink>
                    <NavLink to="post" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faQuoteRight} className="mr-4"></FontAwesomeIcon> Blog
                    </NavLink>
                    <NavLink to="project" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faFolder} className="mr-4"></FontAwesomeIcon> Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faUser} className="mr-4"></FontAwesomeIcon> About
                    </NavLink>
                    <NavLink to="/tools" activeClassName="border-b-4 border-pink border-opacity-100 text-pink" className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-pink border-b-4 border-opacity-0 hover:border-b-4 border-pink text-base font-bold mono tracking:widest">
                        <FontAwesomeIcon icon={faTools} className="mr-4"></FontAwesomeIcon> Tools
                    </NavLink>
                </nav>
                <div className="inline-flex items-center py-3 px-3">
                    <FontAwesomeIcon icon={faEnvelope} url="mailto:nikkipeel.dev@gmail.com" className="mr-6 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" />
                    <FontAwesomeIcon icon={faGithub} url="https://www.codepen.io/nikki-peel" className=" mr-6 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" />
                    <FontAwesomeIcon icon={faCodepen} url="https://www.github.com/nikkipeel" className="mr-6 text-2xl text-white hover:text-pink cursor-pointer" target="_blank"/>
                    <FontAwesomeIcon icon={faLinkedin} url="https://www.linkedin.com/in/nikkipeel" className=" mr-6 text-2xl text-white hover:text-pink cursor-pointer" target="_blank" />
                </div>
            </div>
        </header>
    )
}