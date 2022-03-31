import * as actionTypes from './actionTypes';
import userApiCall from '../api/users';

export const getUsers = () => {
    console.log('GET_USERS_DETAILS');
    return dispatch => { 
        console.log('GET_USER_DETAILS DISPATCHE');
        dispatch({ type: actionTypes.GET_USERS_REQUESTED });
        userApiCall().then((res) => { 
            dispatch({ type: actionTypes.GET_USERS_SUCCESS, users: res });
        }).catch((error) => { 
            dispatch({ type: actionTypes.GET_USERS_FAILED, error: error.message || 'Unexpected Error' });
        })
    }
}