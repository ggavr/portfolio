import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skills = ({slides}) => {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={ style.skillsContainer}>
                <Title title={'Skills'}/>
                <div  className={style.skills}>
                    {slides.map((slide)=>{
                    const { id, title, description, icon } = slide;
                        return (
                                <Skill key={id}
                                    icon={<FontAwesomeIcon icon={icon} />}
                                    title={title}
                                    description={description}
                                />

                    )})
                }
                </div>
            </div>
        </div>
    );
};