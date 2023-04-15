import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)
    return (
        <div className={style.burgerNav}>
            <div onClick={ onBurgerBtnClick }
                className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href={''}>Home</a>
                <Link to='skills' smooth={'true'}>Skills</Link>
                <Link to='projects' smooth={'true'}>My works</Link>
                <Link to='contacts' smooth={'true'}>Contact Me</Link>
            </div>
            <div onClick={ onBurgerBtnClick }
                className={style.burgerNavBtn}>
            </div>
        </div>
    );
};