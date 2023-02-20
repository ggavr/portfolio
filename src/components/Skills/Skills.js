import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.title}><h2>My skills</h2></div>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'What are the duties and responsibilities of a Front End Web Developer? A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.'}/>
                    <Skill title={'CSS'} description={'I am description'}/>
                    <Skill title={'React'} description={'I am description'}/>
                    <Skill title={'React'} description={'I am description'}/>
                </div>
            </div>
        </div>
    );
};