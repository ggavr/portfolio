import style from './Switch.module.scss'
import {useEffect, useState} from "react";
export const Switch = () => {
    const [theme, setTheme] = useState('dark')
    const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light')
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <div className={style.containerSwitch}>
            <span>Change Theme </span>
            <label className={style.switch}>
                <input type='checkbox'
                       onChange={handleChange}
                       checked={theme === 'dark'}/>
                <span className={style.slider}></span>
            </label>
        </div>
    )
}