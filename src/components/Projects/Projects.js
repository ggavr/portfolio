import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project";
import {Title} from "../../common/components/Title";
import firstImg from "../../assets/images/projectOne.webp"
import secondImg from "../../assets/images/secondImg.webp"
import thirdImg from "../../assets/images/pexels-christina-morillo-1181271.jpg"
export const Projects = () => {
    const divStyleFirst={backgroundImage: `url(${firstImg})`}
    const divStyleSec={backgroundImage: `url(${secondImg})`}
    const divStyleThird={backgroundImage: `url(${thirdImg})`}

    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projectBlock}>
                    <Project style={divStyleFirst} title={'ToDo List'} description={'What is an app description? The text on an app store listing that explains what the app does and why people should download it.'}/>
                    <Project style={divStyleSec} title={'Counter'} description={'description'}/>
                    <Project style={divStyleFirst} title={'Pizza'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};