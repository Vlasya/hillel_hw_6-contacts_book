import {USERS_FETCH_FAILED, USERS_FETCH_START, USERS_FETCH_SUCCESS} from './actions';

const defaultState = {
    users: [],
    isFetching: false
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case USERS_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching:false,
                users:action.payload
            }
        case USERS_FETCH_FAILED:
            return {
                ...state,
                isFetching:false
            };
        default:
            return state
    }
}

