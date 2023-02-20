import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {FooterItem} from "./FooterItem";


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Gavriil Gimervert</h2>
                <div className={style.footerBlock}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <h4>All rights reserved</h4>
            </div>
        </div>
    );
};