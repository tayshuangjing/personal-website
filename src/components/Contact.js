import React from 'react';
import '../css/Contact.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";

export const Contact = () => {

    return (
        <div className='contact' id='contact'>
            <h1 className='contact-title'>Get In Touch!</h1>
            <p className='contact-description'>Please feel free to contact me through any provided contact methods.</p>
            <div className='contact-email-container'>
                <MdOutlineAlternateEmail className='contact-email-icon' />
                <div className='contact-email'>hello@gmail.com</div>
            </div>
            <div className='contact-phone-container'>
                <MdWhatsapp className='contact-phone-icon' />
                <div className='contact-phone'>+6012-3456789</div>
            </div>
        </div>
    )
}