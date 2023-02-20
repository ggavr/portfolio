import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project";
export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projectBlock}>
                    <Project title={'ToDo List'} description={'What is an app description? The text on an app store listing that explains what the app does and why people should download it.'}/>
                    <Project title={'Counter'} description={'description'}/>
                    <Project title={'Pizza'} description={'description'}/>

                </div>
            </div>



        </div>
    );
};