import React from 'react';
import style from "./Title.module.scss";

export const Title = ({title, color}) => {
    return (
        <div style={{'color':color}} className={style.title}>
            <p>{title}</p>
        </div>
    );
};

