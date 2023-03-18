import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project";
import {Title} from "../../common/components/Title";
export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projectBlock}>
                    <Project title={'ToDo List'} description={'What is an app description? The text on an app store listing that explains what the app does and why people should download it.'}/>
                    <Project title={'Counter'} description={'description'}/>
                    <Project title={'Pizza'} description={'description'}/>

                </div>
            </div>



        </div>
    );
};