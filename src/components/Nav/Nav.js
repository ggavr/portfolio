import React from 'react';
import style from './Nav.module.css'
export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={''}>Home</a>
            <a href={''}>Skills</a>
            <a href={''}>Works</a>
            <a href={''}>Contact</a>
        </div>
    );
};