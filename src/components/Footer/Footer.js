import React from 'react';
import style from './Footer.module.scss'
import {FooterItem} from "./FooterItem";
import {Title} from "../../common/components/Title";
import gitHubLgo from "../../assets/images/github-svgrepo-com.svg";
import linkedInLogo from "../../assets/images/linkedin-svgrepo-com.svg";
import telegramLogo from "../../assets/images/telegram-svgrepo-com.svg";
import twitterLogo from "../../assets/images/twitter-svgrepo-com.svg";

export const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <Title title={'Gavriil Gimervert'}/>
                <div className={style.footerBlock}>
                    <FooterItem link={'https://github.com/ggavr'} src={gitHubLgo}/>
                    <FooterItem link={'https://www.linkedin.com/in/ggavr/'} src={linkedInLogo}/>
                    <FooterItem link={'https://www.linkedin.com/'} src={telegramLogo}/>
                    <FooterItem link={'https://www.twitter.com/'} src={twitterLogo}/>
                </div>
                <span className={style.copyright}>2023 All rights reserved</span>
            </div>
        </div>
    );
};