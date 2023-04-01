import React from 'react';
import style from './Footer.module.scss'
// import styleContainer from "../../common/styles/Container.module.css";


export const FooterItem = (props) => {
    return (
        <div className={style.footerItem}>
            <a href={''}>
                <img alt={''} src={props.src}/>
            </a>
        </div>
    );
};