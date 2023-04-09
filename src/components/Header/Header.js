import React from 'react';
import style from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {BurgerNav} from "../Nav/BurgerNav/BurgerNav";

export const Header = () => {
    return (
        <header className={style.header}>
                <Nav/>
                <BurgerNav/>
        </header>
    );
};

