import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>
                {user?.username}
            </span>
            {/*<span className={'username'}>vakeloon</span>*/}
            <div className={'stars'}>
                Balance: 0⭐
                <Button onClick={onClose}>Buy stars</Button>
            </div>
        </div>
    );
};

export default Header;