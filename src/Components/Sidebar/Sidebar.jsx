import s from './Sidebar.module.scss'
import React from 'react'
import {NavLink} from "react-router-dom";


export const Sidebar=()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div>
                    <NavLink className={s.link} to='/home' activeClassName={s.active} >Home </NavLink>
                </div>
                <div>
                    <NavLink className={s.link} to='/contacts/contact_table' activeClassName={s.active}> Contacts </NavLink>
                </div>
                <div>
                    <NavLink className={s.link} to='/about' activeClassName={s.active}> About</NavLink>
                </div>

            </div>

        </div>
    )
}