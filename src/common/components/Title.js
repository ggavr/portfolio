import React from 'react';
import style from "./Title.module.css";

export const Title = ({title}) => {
    return (
        <div className={style.title}><p>{title}</p></div>
    );
};

