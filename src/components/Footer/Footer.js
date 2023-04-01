import React from 'react';
import style from './Footer.module.scss'
import {FooterItem} from "./FooterItem";
import {Title} from "../../common/components/Title";
import logo from "../../assets/images/pexels-cottonbro-studio-5473950.jpg";

export const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <Title title={'Gavriil Gimervert'}/>
                <div className={style.footerBlock}>
                    <FooterItem src={logo}/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <span className={style.copyright}>2023 All rights reserved</span>
            </div>
        </div>
    );
};