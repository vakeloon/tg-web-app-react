import React from 'react';
import "./Footer.css"
import Button from "../Button/Button";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div id="result-message">
                <div id="color-message"></div>
                <div id="prize-message"></div>
            </div>
        </div>
    );
};

export default Footer;