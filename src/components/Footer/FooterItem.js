import React from 'react';
import style from './Footer.module.scss'
// import styleContainer from "../../common/styles/Container.module.css";


export const FooterItem = ({link, src}) => {
    return (
        <div className={style.footerItem}>
            <a href={link} target={"_blank"}>
                <img alt={'icon'} src={src}/>
            </a>
        </div>
    );
};