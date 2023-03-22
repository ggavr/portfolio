import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {FooterItem} from "./FooterItem";
import {Title} from "../../common/components/Title";


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Gavriil Gimervert'}/>
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