import React from 'react';
import style from './MainPage.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
export const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <div className={ `${styleContainer.container} ${style.mainPageContainer}` }>

                <div className={style.text}>

                    <span>Hi there</span>
                    <h1>I am Gavriil Gimervert </h1>
                    <p>Frontend Developer</p>

                </div>

                <div className={style.photo}></div>

            </div>
        </div>
    );
};
