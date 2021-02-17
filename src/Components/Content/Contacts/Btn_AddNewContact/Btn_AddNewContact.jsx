import s from './Btn_AddNewContact.module.scss'
import {NavLink} from "react-router-dom";


export const Btn_AddNewContact=()=>{
    return(
        <div className={s.wrapper}>
            <div>
                <NavLink className={s.link} to='/contacts/formAddContact'> Add contact</NavLink>
            </div>

        </div>
    )
}