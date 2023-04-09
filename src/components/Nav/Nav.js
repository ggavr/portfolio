import React from 'react';
import style from './Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll"
export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={''}>Home</a>
            <Link to='skills' smooth={'true'}>Skills</Link>
            <a href={'#projects'}>Works</a>
            <Link to='contacts' smooth={'true'}>Contacts</Link>
        </div>
    );
};