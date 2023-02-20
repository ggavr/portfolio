import React from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
         <div className={style.headerContainer}><Nav/></div>
        </div>
    );
};

