import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { formDataReducer}  from './FormData';
import { usersListReducer } from "./UserList";
import thunk from 'redux-thunk'

export const rootReducer=combineReducers({
    formData:formDataReducer,
    usersList:usersListReducer
})

export const store =createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))