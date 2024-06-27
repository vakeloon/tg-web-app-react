import React, {useEffect} from 'react';
import './FormWheel.css'
import {useTelegram} from "../../hooks/useTelegram";

const FormWheel = () => {

    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Take a prize",
        })
    }, [])

    return (
        <div className={"formWheel"}>
            <div className={"colors"}>
                <h1>Guess the color</h1>
                <button className={"color-button red"} data-color="red"></button>
                <button className={"color-button orange"} data-color="orange"></button>
                <button className={"color-button yellow"} data-color="yellow"></button>
                <button className={"color-button blue"} data-color="blue"></button>
                <button className={"color-button purple"} data-color="purple"></button>
                <button className={"color-button green"} data-color="green"></button>
            </div>
            <div className="wheel-container">
                <img id="color-wheel" src="/images/color-wheel.png" alt="Color Wheel"/>
                <img className={"arrow"} src="/images/right-arrow.png" alt="Arrow"/>
            </div>
            <button id="spin-button">Spin the wheel</button>
            <div id="result-message">
                <div id="color-message"></div>
                <div id="prize-message"></div>
            </div>
        </div>
    );
};

export default FormWheel;