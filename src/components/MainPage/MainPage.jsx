import React from 'react';
import './MainPage.css';
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";


const MainPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/wheel');
    };

    return (
        <div className={'box'}>
            <h1>Games</h1>
            <div className={'games'}>
                <div className={'game'}>
                    <h4>Wheel</h4>
                    <img className={'img-game'} src="/images/color-wheel.png" alt="Color Wheel"/>
                    <button className={'play-button'} onClick={handleButtonClick}>Play</button>
                </div>
                <div className={'game'}>
                    <h4>Hui</h4>
                    <img className={'img-game'} src="/images/color-wheel.png" alt="Color Wheel"/>
                    <button className={'play-button'}>Soon</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;