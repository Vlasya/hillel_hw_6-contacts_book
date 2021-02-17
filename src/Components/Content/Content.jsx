import s from './Content.module.scss'
import React from 'react';
import {About} from "./About/About";
import {Home} from "./Home/Home";
import {Contacts} from "./Contacts/Contacts";
import {Switch, Route} from 'react-router-dom'


export const Content = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Switch>

                    <Route path='/about' component={About}/>

                    <Route path='/contacts/contact_table' component={Contacts}/>
                    <Route path='/contacts/formAddContact' component={Contacts}/>

                    <Route path='/home' component={Home}/>
                </Switch>
            </div>

        </div>
    )
}