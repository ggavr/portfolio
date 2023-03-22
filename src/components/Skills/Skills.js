import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>


                <div className={style.skills}>
                    <Skill icon={<p><FontAwesomeIcon icon={faJs}/></p>} title={'JS'} description={'What are the duties and responsibilities of a Front End Web Developer? A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.'}/>
                    <Skill icon={<p><FontAwesomeIcon icon={faCss3Alt}/></p>} title={'JS'} title={'CSS'} description={'I am description'}/>
                    <Skill icon={<p><FontAwesomeIcon icon={faReact}/></p>} title= {'React'} description={'I am description'}/>
                    {/*<Skill title={'React'} description={'I am description'}/>*/}
                </div>
                <a><FontAwesomeIcon style={{marginTop:20, fontSize:36, color:"coral"}} icon={faEnvelope}/></a>
            </div>
        </div>
    );
};