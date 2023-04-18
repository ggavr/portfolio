import React, { useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import burgerIcon from '../../../assets/images/burger.svg'
import closeOutlineIcon from '../../../assets/images/closeOutline.svg'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <div className={style.burgerNav}>
            <div onClick={ onBurgerBtnClick }
                 className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href={''}>Home</a>
                <Link to='skills' smooth={'true'} onClick={ onBurgerBtnClick }>Skills</Link>
                <Link to='projects' smooth={'true'} onClick={ onBurgerBtnClick }>My works</Link>
                <Link to='contacts' smooth={'true'} onClick={ onBurgerBtnClick }>Contact Me</Link>
            </div>

            <div className={style.burgerNavBtn}>
                <img
                    src={menuIsOpen ? closeOutlineIcon : burgerIcon}
                    id={'hw5-burger-menu'}
                    onClick={onBurgerBtnClick}
                    alt={'open menu'}
                />
            </div>
        </div>
    );
};