import React from 'react';
import style from './MainPage.module.scss'
import ReactTypingEffect from 'react-typing-effect';
export const MainPage = () => {
    // const particlesOpt = {
    //     'particles': {
    //         'number': {
    //             'value': 150,
    //             'density': {
    //                 'enable': true,
    //                 'value_area': 800
    //             }
    //         }
    //     }
    // }
    return (
        <div className={style.mainPage}>
            {/*<Particles className={style.particles} params={particlesOpt}/>*/}
            <div className={style.mainPageContainer}>

                <div className={style.text}>
                    <span>Hi there</span>
                    <span>I am Gavriil<span>Gimervert</span></span>
                    {/*<h1>Frontend Developer</h1>*/}
                    <ReactTypingEffect text={'Frontend Developer'}/>
                </div>

                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>
            </div>
        </div>
    );
};
