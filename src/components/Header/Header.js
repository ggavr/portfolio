import React from 'react';
import style from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {BurgerNav} from "../Nav/BurgerNav/BurgerNav";
import {Switch} from "../../common/components/darkMode/Switch";

export const Header = () => {
    return (
        <div className={style.header}>
            <Switch/>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

