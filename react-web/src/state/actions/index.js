// actions for redux
import request from "umi-request";
import {userType} from "../reducers/user";
import {errorType} from "../reducers/error";

const URL = 'http://localhost:5000/api';

export const searchUser = (value) =>
    (dispatch) => {
        request(URL + `/users/search`, {
            method: 'get',
            params: {
                name: value.Name,
                location: value.Location
            },
            timeout: 3000,
        })
            .then(response => {
                dispatch({
                    type: userType.SEARCH_USER,
                    payload: {
                        data: response.data
                    }
                });
            })
            .catch((error) =>
                dispatch({type: errorType.TIME_OUT})
            );
    }
;

export const showUser = (value) =>
    (dispatch) => {
        request(URL + `/tweets/show`, {
            method: 'get',
            params: {
                user_id: value.id_str,
                screen_name: value.screen_name
            },
            timeout: 3000,
        })
            .then(response => {
                dispatch({
                    type: userType.SHOW_USER_TWEETS,
                    payload: {
                        user: value,
                        data: response.data
                    }
                });

            })
            .catch((error) => dispatch({type: errorType.TIME_OUT}));
    };


export const cleanUser = () => ({type: userType.CLEAN_USER});

