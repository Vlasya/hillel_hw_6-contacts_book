import {USER_ADD_FETCH_FAIlED, USER_ADD_FETCH_SUCCESS} from "./actions";


const defaultState = {
    userAdded: false,
    failedAdded: false
}

export function reducer(state = defaultState, action) {
    switch (action.type) {

        case USER_ADD_FETCH_FAIlED:
            const fail=state.failedAdded
            return {
                ...state,
                failedAdded:!fail
            }
        case USER_ADD_FETCH_SUCCESS:
            const add=state.userAdded
            return {
                ...state,
                userAdded: !add
            }
        default:
            return state
    }
}