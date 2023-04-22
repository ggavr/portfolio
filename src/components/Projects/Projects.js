import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project";
import {Title} from "../../common/components/Title";

export const Projects = ({slides}) => {


    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projectBlock}>
                    { slides.map( slide => {
                        const { id, title, description, style, link } = slide
                            return (
                                <Project key={id}
                                         style={style}
                                         link={link}
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