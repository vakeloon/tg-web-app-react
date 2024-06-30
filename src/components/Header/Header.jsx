import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {user, onClose} = useTelegram();

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/buyStars');
    };

    return (
        <div className={'header'}>
            <span className={'username'}>
                {user?.username}
            </span>
            {/*<span className={'username'}>vakeloon</span>*/}
            <div className={'stars'}>
                Balance: 0⭐
                <Button onClick={handleButtonClick}>Buy stars</Button>
            </div>
        </div>
    );
};

export default Header;