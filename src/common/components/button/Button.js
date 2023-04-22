import React from 'react'
import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <a href={props.link} target='_blank' className={style.btn}>{props.text}</a>
    )
}