import React from 'react';
import s from './Contacts.module.scss'
import {ContactsTable} from "./ContactsTable/ContactsTable";
import {Btn_AddNewContact} from "./Btn_AddNewContact/Btn_AddNewContact";
import {Route,Switch} from 'react-router-dom'
import { FormAddNewContact } from "./FormAddNewContact/FormAddNewContact";

export class Contacts extends React.Component{

    render(){

        return(
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.header}>
                        <div className={s.title}>Contacts</div>
                    </div>
                    <div className={s.content}>
                        <Switch>
                            <Route path='/contacts/contact_table'>
                                <ContactsTable />
                                <Btn_AddNewContact />
                            </Route>
                            <Route path='/contacts/formAddContact'>
                                <FormAddNewContact />
                            </Route>
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }

}


