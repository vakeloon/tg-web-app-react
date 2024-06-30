import React from 'react';
import './BuyStars.css';
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";


const BuyStars = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };

    const {user} = useTelegram();

    const handleBuyButtonClick = async () => {
        try {
            const response = await fetch('/create-invoice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatId: `${user?.id}`, // Замените на актуальный chatId пользователя
                    amount: 100, // сумма в минимальных единицах валюты (например, 1.00 = 100)
                    label: 'Deposit 100 star',
                }),
            });

            const result = await response.json();
            if (response.ok) {
                console.log(result.message);
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={'box'}>
            <h1>Buy Stars</h1>
            <div className={'buy-block'}>
                <div className={'buy-item'}>
                    <h3>Buy 1⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 5⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 10⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 20⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 50⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 100⭐ package</h3>
                    <button className={'buy-button'} onClick={handleBuyButtonClick}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 200⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
                <div className={'buy-item'}>
                    <h3>Buy 500⭐ package</h3>
                    <button className={'buy-button'}>Buy</button>
                </div>
            </div>
            <button className={'back-button'} onClick={handleButtonClick}>Back To Games</button>
        </div>
    );
};

export default BuyStars;