import React from 'react';
import style from './Skill.module.scss'
// import styleContainer from "../../../common/styles/Container.module.css";
export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>

            <div className={style.icon}>
              <div className={style.iconLogo}>{props.icon}</div>
            </div>

            <span className={style.title}>{props.title}</span>

            <span className={style.description}>{props.description}</span>

        </div>
    );
};