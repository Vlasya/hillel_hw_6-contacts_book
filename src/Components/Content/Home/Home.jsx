import React from 'react';
import s from './Home.module.scss';



export const Home =()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <div className={s.title}>Home</div>
                </div>
                <div className={s.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, laboriosam.
                </div>
            </div>

        </div>
    )
}