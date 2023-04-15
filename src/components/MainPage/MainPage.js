import React, {useCallback} from 'react';
import style from './MainPage.module.scss'
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export const MainPage = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className={style.mainPage}>
            {/*<Particles*/}
            {/*    className={style.particles}*/}
            {/*    id="tsparticles"*/}
            {/*    init={particlesInit}*/}
            {/*    loaded={particlesLoaded}*/}
            {/*    options={{*/}
            {/*        background: {*/}
            {/*            color: {*/}
            {/*                value: 'grey',*/}
            {/*            },*/}
            {/*        },*/}
            {/*        fpsLimit: 120,*/}
            {/*        interactivity: {*/}
            {/*            events: {*/}
            {/*                onClick: {*/}
            {/*                    enable: true,*/}
            {/*                    mode: "push",*/}
            {/*                },*/}
            {/*                onHover: {*/}
            {/*                    enable: true,*/}
            {/*                    mode: "repulse",*/}
            {/*                },*/}
            {/*                resize: true,*/}
            {/*            },*/}
            {/*            modes: {*/}
            {/*                push: {*/}
            {/*                    quantity: 4,*/}
            {/*                },*/}
            {/*                repulse: {*/}
            {/*                    distance: 200,*/}
            {/*                    duration: 0.4,*/}
            {/*                },*/}
            {/*            },*/}
            {/*        },*/}
            {/*        particles: {*/}
            {/*            color: {*/}
            {/*                value: "#ffffff",*/}
            {/*            },*/}
            {/*            links: {*/}
            {/*                color: "#ffffff",*/}
            {/*                distance: 150,*/}
            {/*                enable: true,*/}
            {/*                opacity: 0.5,*/}
            {/*                width: 1,*/}
            {/*            },*/}
            {/*            collisions: {*/}
            {/*                enable: true,*/}
            {/*            },*/}
            {/*            move: {*/}
            {/*                direction: "none",*/}
            {/*                enable: true,*/}
            {/*                outModes: {*/}
            {/*                    default: "bounce",*/}
            {/*                },*/}
            {/*                random: false,*/}
            {/*                speed: 6,*/}
            {/*                straight: false,*/}
            {/*            },*/}
            {/*            number: {*/}
            {/*                density: {*/}
            {/*                    enable: true,*/}
            {/*                    area: 800,*/}
            {/*                },*/}
            {/*                value: 80,*/}
            {/*            },*/}
            {/*            opacity: {*/}
            {/*                value: 0.5,*/}
            {/*            },*/}
            {/*            shape: {*/}
            {/*                type: "circle",*/}
            {/*            },*/}
            {/*            size: {*/}
            {/*                value: { min: 1, max: 5 },*/}
            {/*            },*/}
            {/*        },*/}
            {/*        detectRetina: true,*/}
            {/*    }}*/}
            {/*/>*/}
            <div className={style.mainPageContainer}>

                <div className={style.text}>
                    <span>Hi there</span>
                    <span>I am Gavriil <span>Gimervert</span></span>
                    {/*<h1>Frontend Developer</h1>*/}
                    <ReactTypingEffect text={'Frontend Developer'}/>
                </div>
                <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
                </Tilt>
            </div>
        </div>
    );
};
