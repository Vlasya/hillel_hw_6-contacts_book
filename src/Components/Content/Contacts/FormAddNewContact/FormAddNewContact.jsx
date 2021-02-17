import React from "react";
import s from './FormAddNewContact.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {userAddFetch, userAddFetchFailed, userAddFetchSuccess} from "../../../../store/FormData/actions";
import {ModalWindow} from "./ModalWindow/ModalWindow";


export class _FormAddNewContact extends React.Component {
    constructor(props) {
        super(props);
        this.handlerOnChange = this.handlerOnChange.bind(this);
        console.log(this.props)
    }

    state = {
        user: {
            name: '',
            surname: '',
            phone: ''
        },
        check: {
            name: false,
            surname: false,
            phone: false
        },
        formValid: false
    }


    //Validation
    handlerOnChange(name) {
        return event => {
            this.setState({
                user: {
                    ...this.state.user,
                    [name]: event.target.value
                }
            })
            if (event.target.value.length > 0) {
                this.setState({
                    check: {
                        ...this.state.check,
                        [name]: true
                    }
                })
            } else {
                this.setState({
                    check: {
                        ...this.state.check,
                        [name]: false
                    }
                })
            }
    this.state.check.name && this.state.check.surname && this.state.check.phone
        ? this.setState({formValid:true})
        :this.setState({formValid:false})
        }
    }

    handlePrevent(e) {
        e.preventDefault()
    }

    setUser() {
        this.setState({
            user: {
                name: '',
                surname: '',
                phone: ''
            },
            check: {
                name: false,
                surname: false,
                phone: false
            }
        })
    }


    render() {
        const {userAdded, failedAdded} = this.props.addStatus
        const userAddFetchSuccess = this.props.userAddFetchSuccess;
        const userAddFetchFailed = this.props.userAddFetchFailed
        const {check, user} = this.state
        return (
            <div className={s.wrapper}>

                <div className={s.modalWindow}>
                    {userAdded ? <ModalWindow text='User added !' closeWindow={userAddFetchSuccess}/> : null}
                    {failedAdded ? <ModalWindow text='User has not added' closeWindow={userAddFetchFailed}/> : null}
                </div>

                <form action="submit" onSubmit={this.handlePrevent} >
                    <div className={s.inputs}>

                        <input type="text"
                               placeholder='Enter name...'
                               className={!check.name ? s.empty : null}
                               value={user.name}
                               onChange={this.handlerOnChange('name')}
                        />
                        <input type="text"
                               placeholder='Enter Surname...'
                               className={!check.surname ? s.empty : null}
                               value={user.surname}
                               onChange={this.handlerOnChange('surname')}
                        />
                        <input type="text"
                               placeholder='Enter phone...'
                               className={!check.phone ? s.empty : null}
                               value={user.phone}
                               onChange={this.handlerOnChange('phone')}
                        />
                    </div>
                    <div className={s.buttons}>
                        <button
                            disabled={!this.state.formValid}
                            className={s.btn}
                            onClick={() => {
                                this.props.addContact(user)
                                this.setUser()
                            }}>Add
                        </button>
                        <NavLink
                            className={s.link} to='/contacts/contact_table'>Cancel
                        </NavLink>
                    </div>
                </form>
            </div>
        )
    }

}

function MapStateToProps(state) {
    return {
        addStatus: state.formData
    }
}

export const FormAddNewContact = connect(MapStateToProps, {
    userAddFetchSuccess: userAddFetchSuccess,
    userAddFetchFailed: userAddFetchFailed,
    addContact: userAddFetch
})(_FormAddNewContact)

