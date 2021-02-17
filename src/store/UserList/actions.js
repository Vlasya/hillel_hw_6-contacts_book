import {getUserList} from "../../api/api";

export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCH_START = 'USERS_FETCH_START';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';


export const userFetch = () => dispatch => {
    dispatch(userFetchStart());
    getUserList()
        .then(response => {
            dispatch(userFetchSuccess(response.data))
        })
        .catch(() => dispatch(userFetchFailed()))
};
export const userFetchStart = () => ({type: USERS_FETCH_START});
export const userFetchSuccess = (users) => ({type: USERS_FETCH_SUCCESS, payload: users});
export const userFetchFailed = () => ({type: USERS_FETCH_FAILED})