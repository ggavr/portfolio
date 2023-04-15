import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJs, faReact, faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faT, faR } from '@fortawesome/free-solid-svg-icons'

export const Skills = () => {
    return (
        <div id={'skills'} className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>

                <div className={style.skills}>

                    <Skill icon={<FontAwesomeIcon icon={faHtml5}/>}
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill icon={<FontAwesomeIcon icon={faCss3Alt}/>}
                           title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill icon={<FontAwesomeIcon icon={faJs}/>} title={'Java Script'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>} title= {'React'} description={'I am description'}/>
                    <Skill icon={<FontAwesomeIcon icon={faT}/>}
                        title={'Type Script'} description={'I am description'}/>

                    <Skill icon={<FontAwesomeIcon icon={faR}/>}
                        title={'Redux'} description={'I am description'}/>
                </div>
                {/*<a><FontAwesomeIcon style={{marginTop:20, fontSize:36, color:"coral"}} icon={faEnvelope}/></a>*/}
            </div>
        </div>
    );
};