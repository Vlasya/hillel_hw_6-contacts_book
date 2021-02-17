import {addNewUser} from "../../api/api";


export const USER_ADD_FETCH_SUCCESS = 'USER_ADD_FETCH_SUCCESS';
export const USER_ADD_FETCH_FAIlED = 'USER_ADD_FETCH_FAIlED';


export const userAddFetch = (user) => (dispatch) => {

    addNewUser(user)
        .then(response => dispatch(userAddFetchSuccess()))
        .catch(err => dispatch(userAddFetchFailed()))
}

export const userAddFetchSuccess = () => ({type: USER_ADD_FETCH_SUCCESS});
export const userAddFetchFailed = () => ({type: USER_ADD_FETCH_FAIlED});
