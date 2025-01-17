import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <p className="numero">
                <a href="tel:+54123321">+54 123321</a>
            </p>
            <p className="gmail">
                <a href="mailto:turismo@balcarce.gob.ar">turismo@balcarce.gob.ar</a>
            </p>
            <p className="instagram">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="twitter">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
        </div>

    )
}

export default Contact