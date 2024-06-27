import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            {/*<span className={'username'}>*/}
            {/*    {user?.username}*/}
            {/*</span>*/}
            <span className={'username'}>vakeloon</span>
            <Button onClick={onClose}>Close</Button>
        </div>
    );
};

export default Header;