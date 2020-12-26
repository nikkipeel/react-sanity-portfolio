import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
         <footer className="bg-brown flex flex-col align-center text-center my-8 mx-auto w-100 h-auto pb-16 text-white">
             <div id="to-top">
                <a href="#top" className="cursor-pointer hover:underline"><FontAwesomeIcon icon={ faChevronUp  }></FontAwesomeIcon><br/>Back To Top</a>
            </div>
            <div className="mt-16">
                <p className="text-sm mt-8 mb-4 leading-loose">Thank you for visiting my blog!</p>
                <a href="mailto:nikkipeel.dev@gmail.com" className="cursor-pointer font-bold hover:underline hover:text-pink">Contact Me</a>
            </div>
        </footer>
    )};