import React from 'react';
import style from './Projects.module.scss'
import {Button} from "../../common/components/button/Button";
export const Project = (props) => {
    return (
            <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                {/*<div className={style.projectButton}><a href={''}>Project</a></div>*/}
                <Button text={'See more'} link={props.link}/>
            </div>
                <div className={style.projectDesc}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span>{props.description}</span>
                </div>
            </div>
    );
};