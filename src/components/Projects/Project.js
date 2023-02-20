import React from 'react';
import style from './Projects.module.css'
export const Project = (props) => {
    return (
            <div className={style.project}>
            <div className={style.projectImg}>
                <div className={style.projectButton}><a href={''}>Project</a></div>
            </div>
                <div className={style.projectDesc}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
                </div>
            </div>
    );
};