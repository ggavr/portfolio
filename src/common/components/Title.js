import React from 'react';
import style from "./Title.module.scss";
import Fade from 'react-reveal/Fade';

export const Title = ({title, color}) => {
    return (
        <Fade bottom><div style={{'color':color}} className={style.title}>
            <p>{title}</p>
        </div>
        </Fade>
    );
};

