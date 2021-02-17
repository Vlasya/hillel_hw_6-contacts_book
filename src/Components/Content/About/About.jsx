import s from './About.module.scss'
import React from 'react'

export const About=()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <div className={s.title}>About</div>
                </div>
                <div className={s.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, laboriosam.
                </div>
            </div>
        </div>
    )
}