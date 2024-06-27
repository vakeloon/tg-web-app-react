import React, {useEffect, useState} from 'react';
import './FormWheel.css'
import {useTelegram} from "../../hooks/useTelegram";

const FormWheel = () => {
    const {tg} = useTelegram();
    const [selectedColor, setSelectedColor] = useState(null);
    const [currentAngle, setCurrentAngle] = useState(0);

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Take a prize",
        })
    }, [tg]);

    useEffect(() => {
        document.querySelectorAll('.color-button').forEach(button => {
            button.addEventListener('click', function () {
                const color = this.getAttribute('data-color');
                setSelectedColor(color);
                document.querySelectorAll('.color-button').forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        document.getElementById('spin-button').addEventListener('click', function () {
            if (!selectedColor) {
                tg.showAlert("Please select a color before spinning the wheel.");
                return;
            }

            const wheel = document.getElementById('color-wheel');
            const randomSpin = 360 * 30 + Math.floor(Math.random() * 360); // Случайный угол вращения от 0 до 360, добавляя несколько полных оборотов
            const startAngle = currentAngle;
            const endAngle = currentAngle + randomSpin;

            wheel.style.setProperty('--start-angle', `${startAngle}deg`);
            wheel.style.setProperty('--end-angle', `${endAngle}deg`);

            wheel.classList.remove('spin'); // Удалить класс, если он был добавлен ранее
            void wheel.offsetWidth; // Переместить положение DOM, чтобы перезапустить анимацию
            wheel.classList.add('spin'); // Добавить класс для запуска анимации

            setCurrentAngle(endAngle % 360); // Обновить текущий угол, сохраняя его в диапазоне 0-359 градусов

            setTimeout(() => {
                const winningColor = getWinningColor(currentAngle);
                const prizeMessage = document.getElementById('prize-message');
                const colorMessage = document.getElementById('color-message');
                let color = "#000";

                switch (winningColor) {
                    case "red":
                        color = "#c42254";
                        break;
                    case "orange":
                        color = "#d87d3f";
                        break;
                    case "yellow":
                        color = "#fcbe42";
                        break;
                    case "blue":
                        color = "#3e31ba";
                        break;
                    case "purple":
                        color = "#643ac9";
                        break;
                    case "green":
                        color = "#3ac184";
                        break;
                    default:
                        break;
                }

                document.documentElement.style.backgroundColor = color;
                document.body.style.backgroundColor = color;
                colorMessage.textContent = `${winningColor}`;
                prizeMessage.textContent = winningColor === selectedColor ? `You won a prize!` : `You lose!`;
            }, 7000); // Wait for the spin animation to complete (4 seconds)
        });

        function getWinningColor(angle) {
            const sectorSize = 60; // Assuming there are 6 sectors, each covering 60 degrees
            const sectors = ["purple", "green", "red", "orange", "yellow", "blue"];
            const adjustedAngle = (360 - angle + sectorSize / 2) % 360; // Adjust angle to match the sectors
            const sectorIndex = Math.floor(adjustedAngle / sectorSize);
            return sectors[sectorIndex];
        }
    }, [currentAngle, selectedColor]);

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
        </div>
    );
};

export default FormWheel;